import React from 'react';
import ThreadsCanvas from '../features/ThreadsCanvas';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getContent, getContentfulLocale } from '../../api/contentful';
import type { ContentItem } from '../../api/contentful';
import { Image, Spinner } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";
import Footer from "../layout/Footer";
import NavComponent from '../layout/NavComponent';
import { useLanguage } from '../../context/LanguageContext';

interface TeamItem extends ContentItem {
  fields: {
    teamMemberName?: string;
    teamMemberImage?: string;
    teamMemberTitle?: string;
    teamCategory?: string;
    order?: number;
    teamOrder?: number | string;
    teamSubOrder?: number | string;
  };
}

const TeamPage: React.FC = () => {
    const { language, t } = useLanguage();
    const [data, setData] = useState<ContentItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      setIsLoading(true);
      setError(null);
      const locale = getContentfulLocale(language);
      getContent(undefined, locale)
        .then((data_resp: ContentItem[]) => {
          setData(data_resp);
          console.log("Data response:", data_resp);
        })
        .catch((error) => {
          console.error("Error fetching team data:", error);
          setError("Failed to load team data. Please try again later.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [language]);

    const normalizeCategory = (category: string): string =>
      category
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();

    const normalizeText = (value?: string): string =>
      (value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();

    const getNumericOrder = (value?: number | string): number => {
      if (typeof value === 'number') return value;
      if (typeof value === 'string') {
        const parsed = Number(value);
        return Number.isFinite(parsed) ? parsed : Number.POSITIVE_INFINITY;
      }
      return Number.POSITIVE_INFINITY;
    };

    const matchesAny = (value: string, patterns: string[]): boolean =>
      patterns.some((pattern) => value.includes(pattern));

    const presidencyCategories = ['presidence', 'présidence', 'presidency', 'comite', 'comité', 'committee'];
    const impactStrategyCategories = [
      'communication',
      'communications',
      'comm',
      'sponsors',
      'sponsoring',
      'sponsor relations',
      'durability',
      'durabilite',
      'durabilité',
      'sustainability',
    ];
    const standaloneCategories = ['wiki', 'website', 'alumni', 'alumnis'];

    const isTeamLeader = (team: TeamItem): boolean => {
      const normalizedTitle = normalizeText(team.fields.teamMemberTitle);

      return [
        'team leader',
        'team lead',
        'lead',
        'leader',
        'head',
        'responsable',
        'chef',
        'leitung',
      ].some((keyword) => normalizedTitle.includes(keyword));
    };

    const getCommitteePriority = (team: TeamItem): number => {
      const normalizedTitle = normalizeText(team.fields.teamMemberTitle);

      if (matchesAny(normalizedTitle, [
        'co-president',
        'co president',
        'co presidents',
        'copresident',
        'co-presidents',
      ])) {
        return 0;
      }
      if (matchesAny(normalizedTitle, [
        'vice president',
        'vice-president',
        'vice presidents',
        'vice-presidente',
        'vice presidente',
        'vice-presidents',
      ])) {
        return 1;
      }
      if (matchesAny(normalizedTitle, [
        'tresorier',
        'treasurer',
        'treasury',
      ])) {
        return 2;
      }
      if (matchesAny(normalizedTitle, [
        'ressources internes',
        'internal resources',
        'internal resource',
        'internal',
      ])) {
        return 3;
      }
      if (matchesAny(normalizedTitle, [
        'logistics',
        'logistic',
        'logistique',
        'logs',
      ])) {
        return 4;
      }
      if (matchesAny(normalizedTitle, [
        'communication',
        'communications',
        'comm',
      ])) {
        return 5;
      }
      if (matchesAny(normalizedTitle, [
        'academic coordinator',
        'academic',
        'coordinateur academique',
      ])) {
        return 6;
      }

      return Number.POSITIVE_INFINITY;
    };

    const groupTeamsByCategory = (data: ContentItem[]): Record<string, TeamItem[]> => {
        console.log("Grouping teams from data:", data);
        if (!Array.isArray(data)) return {};

        // Filter only teams
        const teams = data.filter((item): item is TeamItem => item.contentType === "teams");

        // Group by teamCategory
        const grouped = teams.reduce((acc: Record<string, TeamItem[]>, team: TeamItem) => {
            const category = team.fields.teamCategory || "Uncategorized";
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(team);
            return acc;
        }, {});

        for (const category in grouped) {
            grouped[category].sort((a, b) => {
              const normalizedCategory = normalizeCategory(category);
              const isCommitteeCategory = presidencyCategories.includes(normalizedCategory);

              if (isCommitteeCategory) {
                const committeePriorityDifference = getCommitteePriority(a) - getCommitteePriority(b);
                if (committeePriorityDifference !== 0) {
                  return committeePriorityDifference;
                }

                const teamOrderDifference = getNumericOrder(a.fields.teamOrder) - getNumericOrder(b.fields.teamOrder);
                if (teamOrderDifference !== 0) {
                  return teamOrderDifference;
                }

                const subOrderDifference = getNumericOrder(a.fields.teamSubOrder) - getNumericOrder(b.fields.teamSubOrder);
                if (subOrderDifference !== 0) {
                  return subOrderDifference;
                }

                const explicitOrderDifference = getNumericOrder(a.fields.order) - getNumericOrder(b.fields.order);
                if (explicitOrderDifference !== 0) {
                  return explicitOrderDifference;
                }

                return (a.fields.teamMemberName || '').localeCompare(
                  b.fields.teamMemberName || '',
                  'fr',
                  { sensitivity: 'base' }
                );
              }

              const leaderDifference = Number(isTeamLeader(b)) - Number(isTeamLeader(a));
              if (leaderDifference !== 0) {
                return leaderDifference;
              }

              const teamOrderDifference = getNumericOrder(a.fields.teamOrder) - getNumericOrder(b.fields.teamOrder);
              if (teamOrderDifference !== 0) {
                return teamOrderDifference;
              }

              const subOrderDifference = getNumericOrder(a.fields.teamSubOrder) - getNumericOrder(b.fields.teamSubOrder);
              if (subOrderDifference !== 0) {
                return subOrderDifference;
              }

              const explicitOrderDifference = getNumericOrder(a.fields.order) - getNumericOrder(b.fields.order);
              if (explicitOrderDifference !== 0) {
                return explicitOrderDifference;
              }

              return (a.fields.teamMemberName || '').localeCompare(
                b.fields.teamMemberName || '',
                'fr',
                { sensitivity: 'base' }
              );
            });
        }
        console.log("Grouped teams:", grouped);
        return grouped;
    };

    const groupedTeams = groupTeamsByCategory(data);
    const sortCategoryEntries = (entries: [string, TeamItem[]][]) =>
      [...entries].sort(([categoryA], [categoryB]) =>
        categoryA.localeCompare(categoryB, 'fr', { sensitivity: 'base' })
      );

    const categoryEntries = Object.entries(groupedTeams);

    const presidencyEntries = sortCategoryEntries(
      categoryEntries.filter(([category]) =>
        presidencyCategories.includes(normalizeCategory(category))
      )
    );

    const impactStrategyEntries = sortCategoryEntries(
      categoryEntries.filter(([category]) =>
        impactStrategyCategories.includes(normalizeCategory(category))
      )
    );

    const standaloneEntries = sortCategoryEntries(
      categoryEntries.filter(([category]) =>
        standaloneCategories.includes(normalizeCategory(category))
      )
    );

    const technicalEntries = sortCategoryEntries(
      categoryEntries.filter(([category]) => {
        const normalized = normalizeCategory(category);
        return (
          !presidencyCategories.includes(normalized) &&
          !impactStrategyCategories.includes(normalized) &&
          !standaloneCategories.includes(normalized)
        );
      })
    );

    const orderedCategorySections = [
      { title: null, entries: presidencyEntries },
      { title: t('teamPage.impactStrategy'), entries: impactStrategyEntries },
      { title: t('teamPage.technicalTeams'), entries: technicalEntries },
      { title: null, entries: standaloneEntries },
    ].filter((section) => section.entries.length > 0);

    if (isLoading) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Spinner animation="border" role="status" style={{ color: 'white', width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">{t('common.loading')}</span>
          </Spinner>
        </div>
      );
    }

    if (error) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <p style={{ color: 'white' }}>{error}</p>
        </div>
      );
    }

  return (<div>
    <div style={{ height: '300px', position: 'relative' }}>
                <ThreadsCanvas />
            </div>
  
    <Container fluid>
      <Row>
        <Col sm={1}></Col>
        <Col sm={10}>
          <NavComponent/>
        </Col>
      </Row>
      <Row>
        <Col sm={6}></Col>
        <Col sm={6}>
           <h1 className='text-section-heading'>{t('teamPage.title')}</h1>
        </Col>
      </Row>
</Container>

        {orderedCategorySections.map((section) => (
          <React.Fragment key={section.title ?? 'presidency'}>
            {section.title && (
              <Container fluid className="team-section-divider">
                <Row>
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <h2 className="team-section-label">{section.title}</h2>
                  </Col>
                </Row>
              </Container>
            )}

            {section.entries.map(([category, teams]: [string, TeamItem[]]) => {
              const normalizedCategory = normalizeCategory(category);
              const categoryContainerClassName = `partners-section mb-5 ${
                normalizedCategory === 'alumni' || normalizedCategory === 'alumnis'
                  ? 'team-category-divider'
                  : ''
              }`.trim();

              return (
              <Container key={category} fluid className={categoryContainerClassName}>
                <Row>
                  <Col sm={1}></Col>
                  <Col sm={3}>
                    <h1 className="text-section-heading-sub">{category}</h1>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col sm={1}></Col>
                  <Col sm={10}>
                    <Row className="gy-4">
                      {teams.map((team) => (
                        <Col key={team.id} sm={4} className="text-center">
                          <Image
                            className="image-partner"
                            src={team.fields.teamMemberImage}
                            alt={team.fields.teamMemberName}
                            fluid
                          />
                          <p className="text-mono-body mt-2">{team.fields.teamMemberName}</p>
                          <span className="text-mono-body mt-2"><ReactMarkdown>{team.fields.teamMemberTitle}</ReactMarkdown></span>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
            )})}
          </React.Fragment>
        ))}

    <Footer/>
    </div>
  );
};

export default TeamPage;
