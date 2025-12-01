import React, { useEffect, useMemo, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import NavComponent from '../layout/NavComponent';
import Footer from '../layout/Footer';
import ThreadsCanvas from '../features/ThreadsCanvas';
import { useLanguage } from '../../context/LanguageContext';
import { getContent, getContentfulLocale, type ContentItem } from '../../api/contentful';
import { normalizeEventItem, type NormalizedEventItem } from '../../utils/events';
import '../../styles/event-detail.css';

const EVENTS_CONTENT_TYPE = 'eventsTimeline';

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [article, setArticle] = useState<NormalizedEventItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const renderOptions = useMemo(
    () => ({
      renderMark: {
        [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
        [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
        [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
        [MARKS.CODE]: (text: React.ReactNode) => <code>{text}</code>,
      },
      renderNode: {
        [BLOCKS.HEADING_1]: (_node: any, children: React.ReactNode) => <h1>{children}</h1>,
        [BLOCKS.HEADING_2]: (_node: any, children: React.ReactNode) => <h2>{children}</h2>,
        [BLOCKS.HEADING_3]: (_node: any, children: React.ReactNode) => <h3>{children}</h3>,
        [BLOCKS.HEADING_4]: (_node: any, children: React.ReactNode) => <h4>{children}</h4>,
        [BLOCKS.HEADING_5]: (_node: any, children: React.ReactNode) => <h5>{children}</h5>,
        [BLOCKS.HEADING_6]: (_node: any, children: React.ReactNode) => <h6>{children}</h6>,
        [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => <p>{children}</p>,
        [BLOCKS.UL_LIST]: (_node: any, children: React.ReactNode) => <ul>{children}</ul>,
        [BLOCKS.OL_LIST]: (_node: any, children: React.ReactNode) => <ol>{children}</ol>,
        [BLOCKS.LIST_ITEM]: (_node: any, children: React.ReactNode) => <li>{children}</li>,
        [BLOCKS.QUOTE]: (_node: any, children: React.ReactNode) => <blockquote>{children}</blockquote>,
        [BLOCKS.HR]: () => <hr />,
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
          const asset = node.data.target;
          const imageUrl = asset?.fields?.file?.url ? `https:${asset.fields.file.url}` : undefined;
          const altText = asset?.fields?.title || asset?.fields?.description || 'Embedded asset';

          if (!imageUrl) return null;
          return <img src={imageUrl} alt={altText} className="event-detail-embedded" />;
        },
        [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
        [INLINES.ENTRY_HYPERLINK]: (_node: any, children: React.ReactNode) => <span>{children}</span>,
      },
    }),
    [],
  );

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const locale = getContentfulLocale(language);
        const data = await getContent(EVENTS_CONTENT_TYPE, locale);
        const normalized = data
          .filter((item: ContentItem) => item.contentType === EVENTS_CONTENT_TYPE)
          .map(normalizeEventItem);

        const found = normalized.find((item) => item.slug === id || item.id === id);
        if (!found) {
          navigate('/events', { replace: true });
          return;
        }

        setArticle(found);
      } catch (err) {
        console.error('Error loading event article:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id, language, navigate]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  if (!article) {
    return null;
  }

  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString(language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  const detailPath = '/events';

  const bodyContent = (() => {
    if (article.article && typeof article.article === 'object' && (article.article as any).nodeType) {
      return documentToReactComponents(article.article as any, renderOptions);
    }

    if (typeof article.article === 'string') {
      return article.article;
    }

    return article.summary;
  })();

  return (
    <div className="event-detail-page">
      <div style={{ height: '300px', position: 'relative' }}>
        <ThreadsCanvas />
      </div>
      <NavComponent className="mb-4" />
      <Container className="event-detail-container">
        <Link to={detailPath} className="event-detail-back">
          ← {t('eventsDetail.back')}
        </Link>
        <div className="event-detail-hero">
          <p className="event-detail-meta">
            {formattedDate && `${t('eventsDetail.publishedOn')} ${formattedDate}`}
          </p>
          <h1 className="event-detail-title">{article.title}</h1>
          {article.summary && <p className="event-detail-summary">{article.summary}</p>}
        </div>
        {article.image && (
          <div className="event-detail-media">
            <img src={article.image} alt={article.title} />
          </div>
        )}
        <div className="event-detail-body">{bodyContent}</div>
      </Container>
      <Footer />
    </div>
  );
};

export default EventDetailPage;
