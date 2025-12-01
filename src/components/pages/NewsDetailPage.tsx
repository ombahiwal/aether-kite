import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Container, Spinner, Image } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import NavComponent from '../layout/NavComponent';
import Footer from '../layout/Footer';
import ThreadsCanvas from '../features/ThreadsCanvas';
import { useLanguage } from '../../context/LanguageContext';
import { getContent, getContentfulLocale, type ContentItem } from '../../api/contentful';
import { normalizeNewsItem, type NormalizedNewsItem } from '../../utils/news';
import InstagramEmbed from '../features/InstagramEmbed';
import '../../styles/news.css';

const NEWS_CONTENT_TYPE = 'newsPost';

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [article, setArticle] = useState<NormalizedNewsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const renderOptions = useMemo(() => ({
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
      [BLOCKS.QUOTE]: (_node: any, children: React.ReactNode) => (
        <blockquote>
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr />,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const asset = node.data.target;
        const imageUrl = asset?.fields?.file?.url ? `https:${asset.fields.file.url}` : undefined;
        const altText = asset?.fields?.title || asset?.fields?.description || 'Embedded asset';

        if (!imageUrl) return null;
        return (
          <Image src={imageUrl} alt={altText} fluid className="my-4 rounded" />
        );
      },
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
      [INLINES.ENTRY_HYPERLINK]: (_node: any, children: React.ReactNode) => <span>{children}</span>,
    },
  }), []);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const locale = getContentfulLocale(language);
        const data = await getContent(NEWS_CONTENT_TYPE, locale);
        const normalized = data
          .filter((item: ContentItem) => item.contentType === NEWS_CONTENT_TYPE)
          .map(normalizeNewsItem);

        const found = normalized.find((item) => item.slug === id || item.id === id);

        if (!found) {
          navigate('/news', { replace: true });
          return;
        }

        setArticle(found);
      } catch (err) {
        console.error('Error loading article:', err);
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

  return (
    <div className="news-page">
      <div style={{ height: '300px', position: 'relative' }}>
        <ThreadsCanvas />
      </div>
      <NavComponent className="mb-4" />
      <Container className="py-5">
        <Link to="/news" className="news-detail-back">← {t('newsPage.back')}</Link>
        <div className="news-detail-hero">
          <p className="news-detail-meta">
            {formattedDate && `${t('newsPage.publishedOn')} ${formattedDate}`}
            {article.authors ? ` · ${article.authors}` : ''}
          </p>
          <h1 className="news-detail-title">{article.title}</h1>
        </div>
        <div className="news-card-media" style={{ marginBottom: '2rem' }}>
          {article.instagramEmbedUrl ? (
            <InstagramEmbed url={article.instagramEmbedUrl} title={article.title} />
          ) : (
            article.heroImage && <img src={article.heroImage} alt={article.title} />
          )}
        </div>
        <div className="news-detail-body">
          {article.body && typeof article.body === 'object' && article.body.nodeType
            ? documentToReactComponents(article.body, renderOptions)
            : (typeof article.body === 'string' ? article.body : article.summary)}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
