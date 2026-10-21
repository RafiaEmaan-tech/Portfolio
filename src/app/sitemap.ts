import type { MetadataRoute } from "next";
import { profile, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-10-21"),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}${profile.photo}`],
    },
    {
      url: `${siteUrl}${profile.cv}`,
      lastModified: new Date("2026-10-21"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
