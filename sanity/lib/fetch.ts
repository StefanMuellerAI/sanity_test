import { client } from "./client";
import { isSanityConfigured } from "../env";
import {
  allSchulungenQuery,
  allSlugsQuery,
  schulungBySlugQuery,
} from "./queries";
import { sampleSchulungen, type SampleSchulung } from "./sample-data";

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
