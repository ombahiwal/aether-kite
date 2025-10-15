import { createClient, Entry } from "contentful";

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID!;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN!;

export const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});


export interface InfoSectionFields {
  infoTitle: string;
  infoDesc: string;
  infoImage?: { url: string; title?: string };
}

export async function getInfoSections(): Promise<Entry<InfoSectionFields>[]> {
  const response = await client.getEntries<InfoSectionFields>({
    content_type: "infoSection",
    include: 1, // ensures linked assets are included
  });

  // Map over items to attach image URL directly
  return response.items.map((item) => {
    const imageAsset = item.fields.infoImage as any; // Contentful asset reference
    return {
      ...item,
      fields: {
        ...item.fields,
        imageUrl: imageAsset?.fields?.file
          ? `https:${imageAsset.fields.file.url}`
          : undefined,
      },
    };
  });
}

