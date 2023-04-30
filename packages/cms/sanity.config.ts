import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

const { SANITY_STUDIO_DATASET, SANITY_STUDIO_PROJECT_ID } = import.meta.env;

export default defineConfig({
  name: "default",
  title: "udemy-blog",

  projectId: SANITY_STUDIO_PROJECT_ID ?? "",
  dataset: SANITY_STUDIO_DATASET ?? "production",

  plugins: [deskTool(), visionTool(), codeInput(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
});
