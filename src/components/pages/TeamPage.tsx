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
    order?: number | string;
    teamOrder?: number | string;
    teamSubOrder?: number | string;
  };
}

const TeamPage: React.FC = () => {
    const [data, setData] = useState<ContentItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      setIsLoading(true);
      setError(null);
      getContent()
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
    }, []);

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

        // Sort teams within each category by order
        const toNumber = (value?: number | string | null) => {
          const parsed = Number(value);
          return Number.isFinite(parsed) ? parsed : Number.MAX_SAFE_INTEGER;
        };

        for (const category in grouped) {
            grouped[category].sort((a, b) => {
              const primaryA = toNumber(a.fields.teamOrder ?? a.fields.order);
              const primaryB = toNumber(b.fields.teamOrder ?? b.fields.order);
              if (primaryA !== primaryB) {
                return primaryA - primaryB;
              }
              const secondaryA = toNumber(a.fields.teamSubOrder);
              const secondaryB = toNumber(b.fields.teamSubOrder);
              return secondaryA - secondaryB;
            });
        }
        console.log("Grouped teams:", grouped);
        return grouped;
    };

    if (isLoading) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Spinner animation="border" role="status" style={{ color: 'white', width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
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
           <h1 className='text-section-heading'>The Æther Swiss Kite team </h1>
        </Col>
      </Row>
</Container>

        {data && Object.entries(groupTeamsByCategory(data)).map(([category, teams]: [string, TeamItem[]]) => (
                        <Container key={category} fluid className="partners-section mb-5">
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
                        
                        ))}

    <Footer/>
    </div>
  );
};

export default TeamPage;
