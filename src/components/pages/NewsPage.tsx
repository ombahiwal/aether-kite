import React, { useEffect, useMemo, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavComponent from '../layout/NavComponent';
import Footer from '../layout/Footer';
import { useLanguage } from '../../context/LanguageContext';
import { getContent, getContentfulLocale, type ContentItem } from '../../api/contentful';
import { normalizeNewsItem, type NormalizedNewsItem } from '../../utils/news';
import InstagramEmbed from '../features/InstagramEmbed';
import ThreadsCanvas from '../features/ThreadsCanvas';
import '../../styles/news.css';

const NEWS_CONTENT_TYPE = 'newsPost';

const ITEMS_PER_PAGE = 10;
const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/aether.swiss.kite/';
const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/company/%C3%A6ther-swiss-kite';

const NewsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [newsItems, setNewsItems] = useState<NormalizedNewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const locale = getContentfulLocale(language);
        const content = await getContent(NEWS_CONTENT_TYPE, locale);
        const normalized = content
          .filter((item: ContentItem) => item.contentType === NEWS_CONTENT_TYPE)
          .map(normalizeNewsItem);

        setNewsItems(normalized);
        setCurrentPage(1);
      } catch (err) {
        console.error('Error loading news entries:', err);
        setError(t('newsPage.error'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [language, t]);

  const sortedNews = useMemo(() => {
    return [...newsItems].sort((a, b) => {
      const dateA = new Date(a.date || '').getTime();
      const dateB = new Date(b.date || '').getTime();
      return dateB - dateA;
    });
  }, [newsItems]);

  const articleNews = useMemo(
    () => sortedNews.filter((item) => !item.instagramEmbedUrl),
    [sortedNews]
  );

  const instagramHighlights = useMemo(
    () => sortedNews.filter((item) => item.instagramEmbedUrl),
    [sortedNews]
  );

  const latestInstagramHighlight = instagramHighlights[0];
  const totalPages = Math.ceil(articleNews.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const paginatedNews = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return articleNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [articleNews, currentPage]);

  const renderBody = () => {
    if (isLoading) {
      return (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" />
        </div>
      );
    }

    if (error) {
      return <p className="news-error">{error}</p>;
    }

    if (!articleNews.length) {
      return <p className="news-empty">{t('newsPage.empty')}</p>;
    }

    return (
      <Row className="g-4">
        {paginatedNews.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={4}>
            <article className="news-card">
              <div className="news-card-media">
                {item.instagramEmbedUrl ? (
                  <InstagramEmbed url={item.instagramEmbedUrl} title={item.title} />
                ) : (
                  item.heroImage && (
                    <img src={item.heroImage} alt={item.title} />
                  )
                )}
              </div>
              <p className="news-meta">
                {item.date ? `${t('newsPage.publishedOn')} ${new Date(item.date).toLocaleDateString(language)}` : ''}
              </p>
              <h3 className="news-card-title">{item.title}</h3>
              {item.summary && <p className="news-card-summary">{item.summary}</p>}
              <Link to={`/news/${item.slug}`} className="news-card-link">
                {t('newsPage.readMore')} →
              </Link>
            </article>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div className="news-page">
      <div style={{ height: '300px', position: 'relative' }}>
        <ThreadsCanvas />
      </div>
      <Container fluid>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <NavComponent className="mb-4" />
          </Col>
        </Row>
      </Container>
      <section className="news-hero">
        <Container fluid>
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <p className="news-hero-kicker">{t('newsPage.kicker')}</p>
              <h1 className="news-hero-title">{t('newsPage.title')}</h1>
              <p className="news-hero-copy">{t('newsPage.subtitle')}</p>
            </Col>
          </Row>
        </Container>
      </section>
      <Container fluid className="news-content">
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
        {renderBody()}

        {totalPages > 1 && (
          <div className="news-pagination">
            <button
              type="button"
              className="news-pagination-button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              {t('newsPage.paginationPrevious')}
            </button>
            <span className="news-pagination-status">
              {`${t('newsPage.paginationLabel')} ${currentPage} ${t('newsPage.paginationSeparator')} ${totalPages}`}
            </span>
            <button
              type="button"
              className="news-pagination-button"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              {t('newsPage.paginationNext')}
            </button>
          </div>
        )}
          </Col>
        </Row>
      </Container>

      {(latestInstagramHighlight || LINKEDIN_PROFILE_URL) && (
        <section className="news-highlights-section">
          <Container fluid>
            <Row>
              <Col sm={1}></Col>
              <Col sm={10}>
                <p className="news-highlights-kicker">{t('newsPage.highlightsLabel')}</p>
                <h2 className="news-highlights-title">{t('newsPage.highlightsTitle')}</h2>
                <p className="news-highlights-subtitle">{t('newsPage.highlightsSubtitle')}</p>
                <div className="news-highlights-grid">
                  {latestInstagramHighlight && (
                    <article className="highlight-panel highlight-panel-instagram">
                      <div className="highlight-panel-header">
                        <p className="highlight-platform-label">{t('newsPage.instagramLabel')}</p>
                        <h3 className="highlight-panel-title">{t('newsPage.instagramSectionTitle')}</h3>
                        <p className="highlight-panel-subtitle">{t('newsPage.instagramSectionSubtitle')}</p>
                      </div>
                      <div className="instagram-highlight-card">
                        <div className="instagram-highlight-media">
                          <InstagramEmbed
                            url={latestInstagramHighlight.instagramEmbedUrl!}
                            title={latestInstagramHighlight.title}
                          />
                        </div>
                        <div className="instagram-highlight-content">
                          <p className="highlight-card-status">{t('newsPage.instagramLatestLabel')}</p>
                          <h4 className="instagram-highlight-title">{latestInstagramHighlight.title}</h4>
                          {latestInstagramHighlight.summary && (
                            <p className="instagram-highlight-summary">{latestInstagramHighlight.summary}</p>
                          )}
                          <a
                            href={INSTAGRAM_PROFILE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="instagram-highlight-link"
                          >
                            {t('newsPage.instagramProfileLink')}
                          </a>
                        </div>
                      </div>
                    </article>
                  )}

                  <article className="highlight-panel highlight-panel-linkedin">
                    <div className="highlight-panel-header">
                      <p className="highlight-platform-label">{t('newsPage.linkedinLabel')}</p>
                      <h3 className="highlight-panel-title">{t('newsPage.linkedinTitle')}</h3>
                      <p className="highlight-panel-subtitle">{t('newsPage.linkedinSubtitle')}</p>
                    </div>
                    <div className="linkedin-highlight-card">
                      <p className="highlight-card-status">{t('newsPage.linkedinLatestLabel')}</p>
                      <div className="linkedin-highlight-header">
                        <a
                          href={LINKEDIN_PROFILE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="linkedin-highlight-brand-link"
                          aria-label={t('newsPage.linkedinProfileLink')}
                        >
                          <div className="linkedin-highlight-mark">in</div>
                        </a>
                        <a
                          href={LINKEDIN_PROFILE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="linkedin-highlight-meta linkedin-highlight-brand-link"
                        >
                          <p className="linkedin-highlight-company">{t('newsPage.linkedinCompany')}</p>
                        </a>
                      </div>
                      <h4 className="linkedin-highlight-title">{t('newsPage.linkedinCardTitle')}</h4>
                      <p className="linkedin-highlight-summary">{t('newsPage.linkedinCardSummary')}</p>
                      <div className="linkedin-highlight-placeholder">
                        <span className="linkedin-highlight-placeholder-line" />
                        <span className="linkedin-highlight-placeholder-line is-short" />
                        <span className="linkedin-highlight-placeholder-block" />
                      </div>
                      <a
                        href={LINKEDIN_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-highlight-link"
                      >
                        {t('newsPage.linkedinProfileLink')}
                      </a>
                    </div>
                  </article>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default NewsPage;
