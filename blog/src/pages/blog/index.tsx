import { format, parseISO } from "date-fns";
import { GetServerSideProps } from "next";
import {
  PostListResponse,
  TransformedPostListResponse,
} from "@shared/types/Post";
import Image from "next/image";
import { getSanityImageUrl } from "@utils/getSanityImageUrl";
import { PostCard } from "@components/cards/Post";
import { Locales } from "@enums";
import {
  getBlogPosts,
  getBlogPostsCountByLocale,
} from "@shared/client/services/posts";

type Props = {
  posts: TransformedPostListResponse[];
  locale: Locales;
};

export const getServerSideProps: GetServerSideProps<
  Props,
  { page: string }
> = async ({ locale, query }) => {
  let { page } = query;
  const localeAsEnum = locale ? (locale as Locales) : Locales.EN;

  if (page instanceof Array) {
    page = page[0];
  }

  const postsCount = await getBlogPostsCountByLocale(localeAsEnum);
  const posts = await getBlogPosts(localeAsEnum, !!page ? Number(page) : 1);

  return {
    props: {
      posts,
      locale: localeAsEnum,
    },
  };
};

export default function Blog({ posts, locale }: Props) {
  return (
    <section className={"py-6"}>
      <div className="container mx-auto px-4 gap-4 md:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
