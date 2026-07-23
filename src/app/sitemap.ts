import type { MetadataRoute } from "next";
import { locales } from "@/i18n/dictionaries";

const SITE = "https://the-virtuose.com";
const PATHS = ["", "/work"];

/**
 * Public pages in every language, cross-linked with hreflang alternates so
 * search engines serve the right one. /studio and the API stay out.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    PATHS.map((path) => ({
      url: `${SITE}/${locale}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE}/${l}${path}`])
        ),
      },
    }))
  );
}
