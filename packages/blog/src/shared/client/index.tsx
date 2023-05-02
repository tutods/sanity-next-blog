import { createClient } from '@sanity/client';

import { env } from '@shared/env';

export const client = createClient({
  projectId: env.sanity.projectId,
  dataset: env.sanity.dataset,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: env.sanity.apiVersion,
});
