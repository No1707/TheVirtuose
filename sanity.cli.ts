import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./src/sanity/env";

/**
 * Used by the Sanity CLI to run the Studio locally (`npm run studio`) and to
 * publish it to Sanity's own hosting (`npm run studio:deploy`), which serves
 * it at https://<studioHost>.sanity.studio.
 */
export default defineCliConfig({
  api: { projectId, dataset },
});
