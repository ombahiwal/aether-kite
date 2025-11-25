import type { ContentItem } from '../api/contentful';

export interface NormalizedNewsItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  heroImage?: string;
  body?: any;
  authors?: string;
  date?: string;
  instagramEmbedUrl?: string;
  contentType: string;
  rawFields: ContentItem['fields'];
}

const coerceToString = (value: unknown, fallback = ''): string => {
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return value.toString();
  return fallback;
};

export const normalizeNewsItem = (item: ContentItem): NormalizedNewsItem => {
  const fields = item.fields || {};
  const slug = coerceToString(fields.slug || fields.postSlug || fields.newsSlug, item.id);
  const title = coerceToString(
    fields.newsTitle || fields.postTitle || fields.title,
    'Untitled'
  );
  const summary = coerceToString(
    fields.summary || fields.postSummary || fields.excerpt || fields.shortDescription,
    ''
  );
  const heroImage =
    fields.newsImage ||
    fields.thumbnail ||
    fields.heroImage ||
    fields.coverImage ||
    undefined;
  const body = fields.newsBody || fields.blogBody || fields.description || fields.body;
  const authors = coerceToString(fields.authors || fields.author || fields.byline, '');
  const date = coerceToString(fields.publishDate || fields.postDateTime || fields.date, '');
  const instagramEmbedUrl = coerceToString(fields.instagramEmbedUrl || fields.instagramUrl, '');

  return {
    id: item.id,
    slug,
    title,
    summary,
    heroImage,
    body,
    authors,
    date,
    instagramEmbedUrl: instagramEmbedUrl || undefined,
    contentType: item.contentType,
    rawFields: fields,
  };
};
