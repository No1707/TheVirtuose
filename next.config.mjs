/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async redirects() {
    return [
      // --- Legacy Adobe Portfolio URLs -----------------------------------
      // The old site lived at /home, /publicite, /reels, /entreprise,
      // /podcast and /contact. Permanent redirects so existing links,
      // bookmarks and search results land somewhere sensible instead of 404.
      { source: "/home", destination: "/en", permanent: true },
      { source: "/publicite", destination: "/en/work", permanent: true },
      { source: "/reels", destination: "/en/work", permanent: true },
      { source: "/entreprise", destination: "/en/work", permanent: true },
      { source: "/podcast", destination: "/en/work", permanent: true },
      { source: "/contact", destination: "/en#contact", permanent: true },

      // Convenience: /work without a locale falls back to the default one.
      { source: "/work", destination: "/en/work", permanent: false },
    ];
  },
};

export default nextConfig;
