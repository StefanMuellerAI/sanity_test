import type { MetadataRoute } from "next";
import {
  getAllBlogSlugs,
  getAllSlugs,
} from "@/sanity/lib/fetch";
import { absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [schulungSlugs, blogSlugs] = await Promise.all([
    getAllSlugs(),
    getAllBlogSlugs(),
  ]);

  const staticEntries: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    { url: absoluteUrl("/blog"), lastModified: now, priority: 0.8, changeFrequency: "weekly" },
    { url: absoluteUrl("/team"), lastModified: now, priority: 0.5, changeFrequency: "monthly" },
    { url: absoluteUrl("/presse"), lastModified: now, priority: 0.6, changeFrequency: "monthly" },
    { url: absoluteUrl("/impressum"), lastModified: now, priority: 0.2, changeFrequency: "yearly" },
    { url: absoluteUrl("/datenschutz"), lastModified: now, priority: 0.2, changeFrequency: "yearly" },
  ];

  const schulungEntries: MetadataRoute.Sitemap = schulungSlugs.map((slug) => ({
    url: absoluteUrl(`/schulungen/${slug}`),
    lastModified: now,
    priority: 0.9,
    changeFrequency: "monthly",
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: absoluteUrl(`/blog/${slug}`),
    lastModified: now,
    priority: 0.7,
    changeFrequency: "monthly",
  }));

  return [...staticEntries, ...schulungEntries, ...blogEntries];
}
