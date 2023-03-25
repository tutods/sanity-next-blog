import { GetServerSideProps } from "next";
import { getBlogPosts } from "@shared/client/queries/post";
import { PostListResponse } from "@shared/types/Post";

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getBlogPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function Blog({ posts }: { posts: PostListResponse[] }) {
  console.log(posts);

  return <div>Blog!</div>;
}
