import { format, parseISO } from "date-fns";
import { GetServerSideProps } from "next";
import { getBlogPosts } from "@shared/client/queries/post";
import {
  PostListResponse,
  TransformedPostListResponse,
} from "@shared/types/Post";
import Image from "next/image";
import { getSanityImageUrl } from "@utils/getSanityImageUrl";
import { Post } from "@components/cards/Post";
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
    <ul
      style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 30 }}
    >
      {posts.map((post) => (
        <li key={post.slug}>
          <Post locale={locale} post={post} />
        </li>
      ))}
    </ul>
  );
}
