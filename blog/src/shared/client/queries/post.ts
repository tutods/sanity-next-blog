import { client } from "@shared/client";

export const getBlogPosts = async () => {
  return client.fetch(`
    *[_type == "post"] {
      title,
      'slug': slug.current,
      headline,
      cover,
      locale
    }
  `);
};
