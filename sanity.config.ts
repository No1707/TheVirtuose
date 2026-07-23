"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

/**
 * Studio config. Both content types are singletons — Alec should see two clear
 * entries ("Projects", "Site settings"), not a generic document list.
 */
export default defineConfig({
  basePath: "/studio",
  /**
   * defineConfig() runs when this module loads — and client modules are also
   * executed during server rendering. An empty projectId would therefore throw
   * before the page can show a helpful message, surfacing as an opaque 500.
   * The placeholder keeps it loadable; the page checks the real value.
   */
  projectId: projectId || "missing-project-id",
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Projects")
              .id("workList")
              .child(
                S.document().schemaType("workList").documentId("workList")
              ),
            S.listItem()
              .title("Site settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
