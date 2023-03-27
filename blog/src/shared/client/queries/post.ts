import t from "@shared/translations";
import { client } from "@shared/client";
import {
  Post,
  PostListResponse,
  TransformedPostListResponse,
  TransformedPostResponse,
} from "@shared/types/Post";
import { getSanityImageUrl } from "@utils/getSanityImageUrl";
import { format, parseISO } from "date-fns";
import { enUS, pt } from "date-fns/locale";
import { Locales } from "@enums";

const getFormattedDate = (date: string, language: Locales) => {
  const asDate = parseISO(date);
  const locale = language === Locales.EN ? enUS : pt;

  return format(asDate, t[language].date.format, { locale });
};

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
      locale,
      _updatedAt,
      _createdAt
    }
  `,
      {
        locale,
      }
    );

    return posts.map((post) => ({
      ...post,
      cover: getSanityImageUrl(post.cover).maxWidth(1000).url(),
      _updatedAt: post._updatedAt
        ? getFormattedDate(post._updatedAt, post.locale)
        : undefined,
      _createdAt: getFormattedDate(post._createdAt, post.locale),
    }));
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

    return {
      ...post,
      cover: getSanityImageUrl(post.cover).maxWidth(2000).url(),
      author: {
        ...post.author,
        avatar: getSanityImageUrl(post.author?.avatar).maxWidth(400).url(),
      },
      _updatedAt: post._updatedAt
        ? getFormattedDate(post._updatedAt, post.locale)
        : undefined,
      _createdAt: getFormattedDate(post._createdAt, post.locale),
    } as TransformedPostResponse;
  } catch (error) {
    console.error(error);
    return;
  }
};
