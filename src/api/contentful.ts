import axios from "axios";

// Get API keys from environment variables
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!SPACE_ID || !ACCESS_TOKEN) {
  console.error("Missing Contentful API credentials. Please check your .env file.");
}

const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;

// Export ContentItem interface
export interface ContentItem {
  id: string;
  contentType: string;
  fields: {
    [key: string]: any;
    order?: number;
  };
}

// Also export as type for better compatibility
export type { ContentItem as ContentItemType };

// Locale mapping helper
export const getContentfulLocale = (lang: string): string => {
  const localeMap: { [key: string]: string } = {
    'en': 'en-US',
    'fr': 'fr-CH',
    'de': 'de-CH',
  };
  return localeMap[lang] || 'en-US';
};

export const getContent = async (contentType?: string, locale?: string): Promise<ContentItem[]> => {
  try {
    const params: Record<string, any> = {
      access_token: ACCESS_TOKEN,
      include: 2, // include linked assets
    };
    
    if (contentType) {
      params.content_type = contentType;
    }

    // Only add locale if it's provided, otherwise use Contentful's default
    if (locale) {
      params.locale = locale;
    }
    
    console.log('Fetching Contentful with params:', params);
    
    const response = await axios.get(`${BASE_URL}/entries`, {
      params,
    });

    console.log('Contentful response locale:', response.data.items[0]?.sys?.locale);
    console.log('Sample entry fields:', response.data.items[0]?.fields);

    const assetsMap: Record<string, string | null> = {};
    (response.data.includes?.Asset || []).forEach((asset: any) => {
      assetsMap[asset.sys.id] = asset.fields.file?.url
        ? `https:${asset.fields.file.url}`
        : null;
    });

    const resolveField = (field: any): any => {
      if (Array.isArray(field)) {
        return field.map(resolveField);
      } else if (field?.sys?.type === "Link" && field.sys.linkType === "Asset") {
        return assetsMap[field.sys.id] || null;
      } else if (typeof field === "object" && field !== null) {
        const obj: Record<string, any> = {};
        for (const key in field) {
          obj[key] = resolveField(field[key]);
        }
        return obj;
      }
      return field;
    };

    // Map entries and resolve asset links
    const mappedResult: ContentItem[] = response.data.items.map((item: any) => ({
      id: item.sys.id,
      contentType: item.sys.contentType.sys.id,
      fields: resolveField(item.fields),
    }));

    // Sort by fields.order (ascending)
    const sortedResult = mappedResult.sort(
      (a, b) => (a.fields.order || 0) - (b.fields.order || 0)
    );

    console.log("Resolved & sorted Contentful data:", sortedResult);
    return sortedResult;
  } catch (error: any) {
    // If locale request fails (400), try again without locale (fallback to default)
    if (error?.response?.status === 400 && locale) {
      console.warn(`Locale '${locale}' not available in Contentful, falling back to default locale`);
      return getContent(contentType); // Retry without locale
    }
    
    console.error("Error fetching from Contentful:", error);
    return [];
  }
};

