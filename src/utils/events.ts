import type { ContentItem } from '../api/contentful';

export interface EventDateParts {
  iso: string;
  year: string;
  month: string;
  day: string;
  monthDay: string;
}

export interface NormalizedEventItem {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  date?: string;
  dateParts: EventDateParts;
  image?: string;
  link?: string;
  order?: number;
  article?: unknown;
  rawFields: ContentItem['fields'];
}

const formatTwoDigits = (value: number): string => value.toString().padStart(2, '0');

const extractPlainText = (value: unknown): string => {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return value.toString();

  if (Array.isArray(value)) {
    return value.map(extractPlainText).join(' ').trim();
  }

  if (typeof value === 'object') {
    const maybeNode = value as { content?: unknown[]; value?: unknown };
    if (maybeNode.value && typeof maybeNode.value === 'string') {
      return maybeNode.value;
    }

    if (Array.isArray(maybeNode.content)) {
      return maybeNode.content.map(extractPlainText).join(' ').trim();
    }
  }

  return '';
};

export const parseDateParts = (isoString?: string): EventDateParts => {
  if (!isoString) {
    return {
      iso: '',
      year: '',
      month: '',
      day: '',
      monthDay: '',
    };
  }

  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return {
      iso: '',
      year: '',
      month: '',
      day: '',
      monthDay: '',
    };
  }

  const year = `${date.getFullYear()}`;
  const month = formatTwoDigits(date.getMonth() + 1);
  const day = formatTwoDigits(date.getDate());

  return {
    iso: isoString,
    year,
    month,
    day,
    monthDay: `${month}.${day}`,
  };
};

export const normalizeEventItem = (item: ContentItem): NormalizedEventItem => {
  const { fields } = item;
  const slug = (fields.slug || fields.eventSlug || fields.slugId || item.id || '').toString();
  const rawDate =
    fields.eventDateTime ||
    fields.eventDate ||
    fields.date ||
    fields.timelineDate ||
    fields.startDate ||
    fields.publishedDate;

  const title =
    fields.eventTitle ||
    fields.title ||
    fields.headline ||
    `Event ${fields.order || ''}`.trim();

  const summary = extractPlainText(
    fields.eventDescription || fields.summary || fields.description || ''
  );

  const heroImageRaw =
    fields.eventImage ||
    fields.heroImage ||
    fields.image ||
    (Array.isArray(fields.images) ? fields.images[0] : undefined);

  const heroImage = typeof heroImageRaw === 'string' ? heroImageRaw : heroImageRaw?.url;

  const link = fields.eventLink || fields.link || (fields.slug ? `/events/${fields.slug}` : undefined);

  const article = fields.eventArticle || fields.eventBody || fields.article || fields.body;

  return {
    id: item.id,
    slug,
    title,
    summary,
    date: rawDate,
    dateParts: parseDateParts(rawDate),
    image: heroImage,
    link,
    order: fields.order,
    article,
    rawFields: fields,
  };
};

export const sortEventsByDateDesc = (events: NormalizedEventItem[]): NormalizedEventItem[] => {
  return [...events].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });
};

export const groupEventsByYear = (
  events: NormalizedEventItem[],
): Record<string, NormalizedEventItem[]> => {
  return events.reduce<Record<string, NormalizedEventItem[]>>((acc, event) => {
    const yearKey = event.dateParts.year || 'Upcoming';
    if (!acc[yearKey]) {
      acc[yearKey] = [];
    }
    acc[yearKey].push(event);
    return acc;
  }, {});
};
