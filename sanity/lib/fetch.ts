import { client } from "./client";
import { isSanityConfigured } from "../env";
import {
  allBlogPostsQuery,
  allBlogSlugsQuery,
  allSchulungenQuery,
  allSlugsQuery,
  blogPostBySlugQuery,
  schulungBySlugQuery,
} from "./queries";
import {
  sampleBlogPosts,
  sampleSchulungen,
  type SampleBlogPost,
  type SampleSchulung,
} from "./sample-data";

export type SchulungListItem = {
  _id: string;
  titel: string;
  slug: string;
  untertitel?: string;
  kurzbeschreibung?: string;
  dauer?: string;
  format?: string;
  level?: string;
  preis?: string;
  zielgruppe?: string;
  bild?: unknown;
  highlight?: boolean;
};

export type SchulungDetail = SchulungListItem & {
  beschreibung?: unknown;
  agenda?: { _key?: string; titel?: string; beschreibung?: string }[];
  voraussetzungen?: string;
};

function sampleAsListItem(s: SampleSchulung): SchulungListItem {
  return { ...s };
}

export async function getAllSchulungen(): Promise<SchulungListItem[]> {
  if (!isSanityConfigured || !client) {
    return sampleSchulungen.map(sampleAsListItem);
  }
  const data = await client.fetch<SchulungListItem[]>(allSchulungenQuery);
  if (!data || data.length === 0) {
    return sampleSchulungen.map(sampleAsListItem);
  }
  return data;
}

export async function getSchulungBySlug(
  slug: string
): Promise<SchulungDetail | null> {
  if (!isSanityConfigured || !client) {
    const found = sampleSchulungen.find((s) => s.slug === slug);
    return found ?? null;
  }
  const data = await client.fetch<SchulungDetail | null>(
    schulungBySlugQuery,
    { slug }
  );
  if (data) return data;
  const fallback = sampleSchulungen.find((s) => s.slug === slug);
  return fallback ?? null;
}

export async function getAllSlugs(): Promise<string[]> {
  if (!isSanityConfigured || !client) {
    return sampleSchulungen.map((s) => s.slug);
  }
  const data = await client.fetch<string[]>(allSlugsQuery);
  const sampleSlugs = sampleSchulungen.map((s) => s.slug);
  return Array.from(new Set([...(data || []), ...sampleSlugs]));
}

export type BlogPostListItem = {
  _id: string;
  titel: string;
  slug: string;
  untertitel?: string;
  veroeffentlichtAm?: string;
  autor?: string;
  headerbild?: unknown;
  tags?: string[];
  downloadAnzahl?: number;
  hatVideo?: boolean;
};

export type BlogPostDownload = {
  _key?: string;
  titel: string;
  beschreibung?: string;
  kategorie?: string;
  url?: string;
  groesse?: number;
  dateiname?: string;
};

export type BlogPostDetail = BlogPostListItem & {
  text?: unknown;
  video?: {
    url?: string;
    beschriftung?: string;
    dateiUrl?: string;
    poster?: unknown;
  };
  downloads?: BlogPostDownload[];
};

export async function getAllBlogPosts(): Promise<BlogPostListItem[]> {
  if (!isSanityConfigured || !client) {
    return sampleBlogPosts.map(sampleBlogAsListItem);
  }
  const data = await client.fetch<BlogPostListItem[]>(allBlogPostsQuery);
  if (!data || data.length === 0) {
    return sampleBlogPosts.map(sampleBlogAsListItem);
  }
  return data;
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPostDetail | null> {
  if (!isSanityConfigured || !client) {
    const found = sampleBlogPosts.find((p) => p.slug === slug);
    return found ? sampleBlogAsDetail(found) : null;
  }
  const data = await client.fetch<BlogPostDetail | null>(blogPostBySlugQuery, {
    slug,
  });
  if (data) return data;
  const fallback = sampleBlogPosts.find((p) => p.slug === slug);
  return fallback ? sampleBlogAsDetail(fallback) : null;
}

export async function getAllBlogSlugs(): Promise<string[]> {
  if (!isSanityConfigured || !client) {
    return sampleBlogPosts.map((p) => p.slug);
  }
  const data = await client.fetch<string[]>(allBlogSlugsQuery);
  const sampleSlugs = sampleBlogPosts.map((p) => p.slug);
  return Array.from(new Set([...(data || []), ...sampleSlugs]));
}

function sampleBlogAsListItem(p: SampleBlogPost): BlogPostListItem {
  return {
    _id: p._id,
    titel: p.titel,
    slug: p.slug,
    untertitel: p.untertitel,
    veroeffentlichtAm: p.veroeffentlichtAm,
    autor: p.autor,
    tags: p.tags,
    downloadAnzahl: p.downloads?.length ?? 0,
    hatVideo: Boolean(p.video?.url),
  };
}

function sampleBlogAsDetail(p: SampleBlogPost): BlogPostDetail {
  return {
    ...sampleBlogAsListItem(p),
    text: p.text,
    video: p.video,
    downloads: p.downloads,
  };
}
