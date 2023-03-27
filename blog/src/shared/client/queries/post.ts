import { client } from "@shared/client";
import {
  Post,
  PostListResponse,
  TransformedPostListResponse,
  TransformedPostResponse,
} from "@shared/types/Post";
import { getSanityImageUrl } from "@utils/getSanityImageUrl";
import { format, parseISO } from "date-fns";

export const getBlogPosts = async (
  locale = "en"
): Promise<TransformedPostListResponse[]> => {
  try {
    const posts: PostListResponse[] = await client.fetch(
      `
    *[_type == "post" && locale == $locale] | order(_createdAt desc) {
      title,
      'slug': slug.current,
      headline,
      cover,
      _updatedAt,
      _createdAt
    }
  `,
      {
        locale,
      }
    );

    return posts.map((post) => {
      // Trasnform string to date
      const updatedAt = post._updatedAt ? parseISO(post._updatedAt) : undefined;
      const createdAt = parseISO(post._createdAt);

      return {
        ...post,
        cover: getSanityImageUrl(post.cover).maxWidth(1000).url(),
        _updatedAt: updatedAt ? format(updatedAt, "dd/MM/yyyy") : undefined,
        _createdAt: format(createdAt, "dd/MM/yyyy"),
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getBlogPost = async (
  slug: string
): Promise<TransformedPostResponse | undefined> => {
  try {
    const post: Post = await client
      .fetch<Post[]>(
        `
          *[_type == "post" && slug.current == $slug] {
            title,
            headline,
            cover,
            content, 
            locale,
            'author': author->,
            _updatedAt,
            _createdAt
          }
        `,
        { slug }
      )
      .then((res) => res[0]);

    console.log("POST", post);
    // Transform string to data
    const updatedAt = post._updatedAt && parseISO(post._updatedAt);
    const createdAt = parseISO(post._createdAt);

    return {
      ...post,
      cover: getSanityImageUrl(post.cover).maxWidth(2000).url(),
      author: {
        ...post.author,
        avatar: getSanityImageUrl(post.author?.avatar).maxWidth(400).url(),
      },
      _updatedAt: updatedAt ? format(updatedAt, "dd/MM/yyyy") : undefined,
      _createdAt: format(createdAt, "dd/MM/yyyy"),
    } as TransformedPostResponse;
  } catch (error) {
    console.error(error);
    return;
  }
};
