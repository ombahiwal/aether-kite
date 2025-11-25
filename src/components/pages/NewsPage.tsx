import React, { useEffect, useMemo, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavComponent from '../layout/NavComponent';
import Footer from '../layout/Footer';
import { useLanguage } from '../../context/LanguageContext';
import { getContent, getContentfulLocale, type ContentItem } from '../../api/contentful';
import { normalizeNewsItem, type NormalizedNewsItem } from '../../utils/news';
import InstagramEmbed from '../features/InstagramEmbed';
import '../../styles/news.css';

const NEWS_CONTENT_TYPE = 'newsPost';

const NewsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [newsItems, setNewsItems] = useState<NormalizedNewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

    if (!sortedNews.length) {
      return <p className="news-empty">{t('newsPage.empty')}</p>;
    }

    return (
      <Row className="g-4">
        {sortedNews.map((item) => (
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
      <NavComponent className="mb-4" />
      <section className="news-hero">
        <Container>
          <p className="news-hero-kicker">{t('newsPage.kicker')}</p>
          <h1 className="news-hero-title">{t('newsPage.title')}</h1>
          <p className="news-hero-copy">{t('newsPage.subtitle')}</p>
        </Container>
      </section>
      <Container className="news-content">
        {renderBody()}
      </Container>
      <Footer />
    </div>
  );
};

export default NewsPage;
