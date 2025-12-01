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

      {instagramHighlights.length > 0 && (
        <section className="news-instagram-section">
          <Container fluid>
            <Row>
              <Col sm={1}></Col>
              <Col sm={10}>
                <p className="news-instagram-kicker">{t('newsPage.instagramLabel')}</p>
                <h2 className="news-instagram-title">{t('newsPage.instagramSectionTitle')}</h2>
                <p className="news-instagram-subtitle">{t('newsPage.instagramSectionSubtitle')}</p>
                <div className="instagram-scroll-container">
                  {instagramHighlights.map((item) => (
                    <div className="instagram-scroll-card" key={`instagram-${item.id}`}>
                      <InstagramEmbed url={item.instagramEmbedUrl!} title={item.title} />
                      <p className="instagram-scroll-caption">{item.title}</p>
                    </div>
                  ))}
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
