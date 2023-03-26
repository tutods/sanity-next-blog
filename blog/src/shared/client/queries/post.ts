import { client } from "@shared/client";
import {
  PostListResponse,
  TransformedPostListResponse,
} from "@shared/types/Post";
import { getSanityImageUrl } from "@utils/getSanityImageUrl";
import { format, parseISO } from "date-fns";

export const getBlogPosts = async (): Promise<
  TransformedPostListResponse[]
> => {
  const posts: PostListResponse[] = await client.fetch(`
    *[_type == "post"] {
      title,
      'slug': slug.current,
      headline,
      cover,
      locale,
      'updatedAt': _updatedAt,
      'createdAt': _createdAt
    }
  `);

  return posts.map((post) => {
    const updatedAt = post.updatedAt && parseISO(post.updatedAt);
    const createddAt = parseISO(post.createdAt);

    return {
      ...post,
      cover: getSanityImageUrl(post.cover).maxWidth(1920).url(),
      updatedAt: updatedAt ? format(updatedAt, "dd/MM/yyyy") : undefined,
      createdAt: format(createddAt, "dd/MM/yyyy"),
    };
  });
};
