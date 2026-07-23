import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * The "key elements" that date quickly: the hero showreel, the studio numbers
 * and the client marquee. Everything else stays in code.
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
        "The looping video behind the homepage headline. Keep it short (8–20s) and quiet.",
      type: "videoAsset",
    }),
    defineField({
      name: "stats",
      title: "Studio numbers",
      description: "Shown in the Studio section. Keep these truthful.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "stat",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        }),
      ],
      validation: (r) => r.max(4).warning("The layout is designed for four."),
    }),
    defineField({
      name: "clients",
      title: "Client marquee",
      description:
        "Names scrolling across the homepage. Only list clients you may publicly name.",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
