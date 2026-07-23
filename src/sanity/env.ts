/**
 * Sanity connection settings.
 *
 * The project id and dataset are hardcoded on purpose: they are public values
 * (any Sanity-powered site ships them in its client bundle), so treating them
 * as secrets bought nothing and made the deployment depend on environment
 * variables being set correctly on the host. Env vars still win if present,
 * which keeps staging/another dataset possible.
 */
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2uvyyqny";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const sanityConfigured = Boolean(projectId);
