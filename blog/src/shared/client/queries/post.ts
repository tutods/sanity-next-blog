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
    const updatedAt = post._updatedAt ? parseISO(post._updatedAt) : undefined;
    const createddAt = parseISO(post._createdAt);

    return {
      ...post,
      cover: getSanityImageUrl(post.cover).maxWidth(1000).url(),
      _updatedAt: updatedAt ? format(updatedAt, "dd/MM/yyyy") : undefined,
      _createdAt: format(createddAt, "dd/MM/yyyy"),
    };
  });
};

export const getBlogPost = async (slug: string) => {
  try {
    const post = await client
      .fetch(
        `
    *[_type == "post" && slug.current == $slug] {
      title,
      headline,
      cover,
      content, 
      locale,
      'author': author-> {
        name,
        avatar
      },
      _updatedAt,
      _createdAt
    }
  `,
        { slug }
      )
      .then((res) => res[0]);

    console.log(post);

    const updatedAt = post._updatedAt && parseISO(post._updatedAt);
    const createddAt = parseISO(post._createdAt);

    return {
      ...post,
      cover: getSanityImageUrl(post.cover).maxWidth(2000).url(),
      author: {
        ...post.author,
        avatar: getSanityImageUrl(post.author.avatar).maxWidth(400).url(),
      },
      _updatedAt: updatedAt ? format(updatedAt, "dd/MM/yyyy") : undefined,
      _createdAt: format(createddAt, "dd/MM/yyyy"),
    };
  } catch (e) {
    console.error(e);
  }
};
