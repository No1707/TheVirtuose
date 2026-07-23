import { defineArrayMember, defineField, defineType } from "sanity";

const CATEGORIES = [
  { title: "Advertising", value: "Advertising" },
  { title: "Social & Reels", value: "Social & Reels" },
  { title: "Brand Film", value: "Brand Film" },
  { title: "Long Form", value: "Long Form" },
];

/**
 * All projects live as an array inside one document. Sanity arrays are
 * drag-reorderable out of the box, so the running order on /work is simply the
 * order of this list — no ordering plugin and no manual index numbers.
 */
export const workList = defineType({
  name: "workList",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "projects",
      title: "Projects",
      description:
        "Drag to reorder — this is the order shown on the Work page.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "project",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "client",
              title: "Client",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              options: { list: CATEGORIES, layout: "radio" },
              validation: (r) => r.required(),
            }),
            defineField({
              name: "year",
              title: "Year",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "video",
              title: "Video",
              type: "videoAsset",
            }),
            defineField({
              name: "runtime",
              title: "Runtime override",
              description:
                "Optional. Leave empty to use the video's real duration.",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "title",
              client: "client",
              category: "category",
              poster: "video.posterUrl",
            },
            prepare({ title, client, category }) {
              return {
                title: title || "Untitled project",
                subtitle: [client, category].filter(Boolean).join(" · "),
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Projects" }),
  },
});
