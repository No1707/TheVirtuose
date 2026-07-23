/**
 * Sanity connection settings. The project id and dataset are public values —
 * they are safe in the browser bundle. Secrets (API tokens, R2 keys) must live
 * only in server-side env vars, never here.
 */
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/** True once the CMS is actually configured; lets the site fall back to the
 *  built-in sample content while Sanity is still being set up. */
export const sanityConfigured = Boolean(projectId);
