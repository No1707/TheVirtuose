import { defineField, defineType } from "sanity";
import { VideoUploadInput } from "../components/VideoUploadInput";

/**
 * A video hosted on Cloudflare R2. Every field here is filled in automatically
 * by the upload widget (see components/VideoUploadInput.tsx) — the editor only
 * ever drags a file in. Orientation and runtime are read from the file itself,
 * so nothing has to be tagged by hand.
 */
export const videoAsset = defineType({
  name: "videoAsset",
  title: "Video",
  type: "object",
  components: {
    // Replaced by the drag-and-drop uploader in the Studio.
    input: VideoUploadInput,
  },
  fields: [
    defineField({ name: "url", title: "Video URL", type: "url" }),
    defineField({ name: "posterUrl", title: "Poster URL", type: "url" }),
    defineField({ name: "width", title: "Width", type: "number" }),
    defineField({ name: "height", title: "Height", type: "number" }),
    defineField({
      name: "duration",
      title: "Duration (seconds)",
      type: "number",
    }),
    defineField({
      name: "originalFilename",
      title: "Original filename",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "originalFilename", subtitle: "url" },
  },
});
