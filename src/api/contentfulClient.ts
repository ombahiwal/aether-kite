import axios from "axios";
import type { AxiosInstance } from "axios";

// Environment variables
const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Configure Axios client
const contentfulClient: AxiosInstance = axios.create({
  baseURL: `https://cdn.contentful.com/spaces/${space}/environments/master`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

// ---- Type definitions ----
export interface Sys {
  id: string;
  type: string;
}

export interface Entry<T> {
  sys: Sys;
  fields: T;
}

export interface ContentfulResponse<T> {
  items: Entry<T>[];
  includes?: {
    Asset?: Entry<{
      title: string;
      file: {
        url: string;
        contentType: string;
        details: Record<string, unknown>;
      };
    }>[];
  };
}

// ---- API helper functions ----
export async function getEntries<T>(
  contentType: string,
  params: Record<string, unknown> = {}
): Promise<ContentfulResponse<T>> {
  const response = await contentfulClient.get<ContentfulResponse<T>>("/entries", {
    params: { content_type: contentType, ...params },
  });
  return response.data;
}

export async function getEntry<T>(entryId: string): Promise<Entry<T>> {
  const response = await contentfulClient.get<Entry<T>>(`/entries/${entryId}`);
  return response.data;
}

export default contentfulClient;
