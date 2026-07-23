import type { MetadataRoute } from "next";

const SITE = "https://the-virtuose.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The CMS and the API are not content for search engines.
      disallow: ["/studio", "/studio/", "/api/"],
    },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
