import { Locales } from "@enums";
import { GetStaticProps } from "next";
import { getBlogPosts } from "@shared/client/queries/post";
import { TransformedPostListResponse } from "@shared/types/Post";

type Props = {
  locale: Locales;
  posts: TransformedPostListResponse[];
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  // const posts = await getBlogPosts(locale);

  return {
    props: {
      posts: [],
      locale: locale ? (locale as Locales) : Locales.EN,
    },
  };
};

export default function Home({ posts, locale }: Props) {
  return <main></main>;
}
