import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/memory-box",
    "/como-funciona",
    "/regalos",
    "/archivo",
    "/journal",
    "/faq",
    "/primeros-anos",
    "/legado",
    "/promesa",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "/memory-box" ? 0.9 : 0.7,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...posts];
}
