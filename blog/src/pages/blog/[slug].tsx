import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getBlogPost } from "@shared/client/queries/post";

type Porps = {};

export const getServerSideProps: GetServerSideProps<
  {},
  { slug: string }
> = async ({ params }) => {
  const { slug } = params;

  const post = await getBlogPost(slug!.toString());

  console.log(post, "<-");
  return {
    props: {},
  };
};

export default function Post() {
  return <div>Post details</div>;
}
