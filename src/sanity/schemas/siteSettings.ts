import { defineField, defineType } from "sanity";

/**
 * Site-wide media managed by Alec:
 *  - the looping hero showreel
 *  - one short landscape clip per service, shown when a format is hovered on
 *    the "What we cut" list. Each is optional; empty ones fall back to the
 *    animated placeholder.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "showreel",
      title: "Hero showreel",
      description:
        "The looping video behind the homepage headline. Keep it short (8–20s), quiet and light — it autoplays for every visitor.",
      type: "videoAsset",
    }),
    defineField({
      name: "advertisingPreview",
      title: "Ads — hover clip",
      description:
        "Short landscape clip shown when 'Ads' is hovered. Optional. Keep it a few seconds, muted, light.",
      type: "videoAsset",
    }),
    defineField({
      name: "socialPreview",
      title: "Social & Reels — hover clip",
      description: "Short landscape clip for 'Social & Reels'. Optional.",
      type: "videoAsset",
    }),
    defineField({
      name: "brandPreview",
      title: "Corporate — hover clip",
      description: "Short landscape clip for 'Corporate'. Optional.",
      type: "videoAsset",
    }),
    defineField({
      name: "longFormPreview",
      title: "Long Form & Podcast — hover clip",
      description: "Short landscape clip for 'Long Form & Podcast'. Optional.",
      type: "videoAsset",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
