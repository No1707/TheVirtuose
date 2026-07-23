import { defineField, defineType } from "sanity";

/**
 * The only site-wide asset that changes often enough to be worth managing:
 * the looping showreel behind the homepage headline. Everything else (studio
 * figures, copy) is fixed in the code.
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
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
