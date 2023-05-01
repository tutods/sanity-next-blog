import { defineCliConfig } from 'sanity/cli';

const { SANITY_STUDIO_DATASET, SANITY_STUDIO_PROJECT_ID } = import.meta.env;

export default defineCliConfig({
  api: {
    projectId: SANITY_STUDIO_PROJECT_ID ?? '',
    dataset: SANITY_STUDIO_DATASET ?? 'production',
  },
});
