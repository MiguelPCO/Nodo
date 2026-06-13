import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /m/ reservado: rutas de memoria privadas (QR) nunca indexables.
        disallow: ["/m/", "/api/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
