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

type Props = {
  posts: TransformedPostListResponse[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getBlogPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function Blog({ posts }: Props) {
  return (
    <ul
      style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 30 }}
    >
      {posts.map((post) => (
        <li key={post.slug}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
