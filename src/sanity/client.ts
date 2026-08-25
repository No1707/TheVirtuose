import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityConfigured } from "./env";

/** Null until a project id is configured, so the site can run without a CMS. */
export const client: SanityClient | null = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      perspective: "published",
    })
  : null;

export const WORKS_QUERY = `*[_type == "workList"][0].projects[]{
  _key, title, client, category, year, runtime,
  video{url, posterUrl, width, height, duration}
}`;

export const SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  showreel{url, posterUrl, width, height},
  advertisingPreview{url, posterUrl, width, height},
  socialPreview{url, posterUrl, width, height},
  socialPreview2{url, posterUrl, width, height},
  brandPreview{url, posterUrl, width, height},
  longFormPreview{url, posterUrl, width, height}
}`;
