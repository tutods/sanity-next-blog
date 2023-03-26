import { client } from "@shared/client";
import { PostListResponse } from "@shared/types/Post";

export const getBlogPosts = async (): Promise<PostListResponse> => {
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
