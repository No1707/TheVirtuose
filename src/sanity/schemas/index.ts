import type { SchemaTypeDefinition } from "sanity";
import { videoAsset } from "./videoAsset";
import { workList } from "./workList";
import { siteSettings } from "./siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [
  videoAsset,
  workList,
  siteSettings,
];
