import { format, parseISO } from "date-fns";
import { GetServerSideProps } from "next";
import { getBlogPosts } from "@shared/client/queries/post";
import {
  PostListResponse,
  TransformedPostListResponse,
} from "@shared/types/Post";
import Image from "next/image";
import { getSanityImageUrl } from "@utils/getSanityImageUrl";
import { PostCard } from "@components/cards/Post";
import { Locales } from "@enums";

type Props = {
  posts: TransformedPostListResponse[];
  locale: Locales;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => {
  const posts = await getBlogPosts(locale ?? "en");

  return {
    props: {
      posts,
      locale: locale ? (locale as Locales) : Locales.EN,
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
