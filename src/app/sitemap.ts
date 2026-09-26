import type { MetadataRoute } from "next";

import { posts } from "@/content/posts";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
