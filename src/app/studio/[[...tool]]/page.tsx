import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { projectId } from "@/sanity/env";

/**
 * The admin lives on the site itself: /studio
 *
 * Rendered dynamically on purpose. The Studio is a single-page app on an
 * optional catch-all route with no pre-generated params, so forcing it static
 * makes the deployed route fail at request time even though it builds fine.
 */
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Studio — The Virtuose",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  // A missing project id would otherwise surface as an opaque 500.
  if (!projectId) {
    return (
      <main
        style={{
          minHeight: "100svh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
          background: "#0a0a0b",
          color: "#f2efea",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "44ch", lineHeight: 1.6 }}>
          <h1 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
            The CMS is not configured
          </h1>
          <p style={{ opacity: 0.7, fontSize: "0.95rem" }}>
            <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> is missing from this
            deployment&rsquo;s environment variables. Add it in the hosting
            dashboard, then redeploy — the value is baked in at build time, so
            an existing build will not pick it up.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
