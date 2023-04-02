import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
// import PortableText from "@sanity/block-content-to-react";
import { PortableText } from "@portabletext/react";

import { getBlogPost, getBlogPostsPaths } from "@shared/client/queries/post";
import { TransformedPostResponse } from "@shared/types/Post";
import Image from "next/image";
import { env } from "@shared/env";
import { components } from "@shared/client/utils/components";

type Props = { post: TransformedPostResponse };

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPostPaths = await getBlogPostsPaths();
  const paths = blogPostPaths.map(({ locale, slug }) => ({
    params: {
      slug,
    },
    locale,
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      props: {},
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  let { slug } = params;

  if (Array.isArray(slug)) {
    slug = slug[0];
  }

  const post = await getBlogPost(slug);

  if (!post) {
    return {
      props: {},
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default function Post({ post }: Props) {
  return (
    <article>
      <header className={"bg-gray-50 py-24 text-center"}>
        <div className="container mx-auto flex flex-col gap-16">
          <section className={"flex flex-col gap-6"}>
            <div className="flex flex-col text-center items-center justify-center gap-3">
              <p className={"m-0 text-sm font-medium text-violet-600"}>
                {post._createdAt}
              </p>
              <h1 className={"font-bold text-5xl"}>{post.title}</h1>
            </div>
            <h2 className={"text-xl text-gray-600 text-center font-normal"}>
              {post.headline}
            </h2>
          </section>

          <section
            className={
              "relative h-[400px] md:h-[650px] md:rounded-md overflow-hidden shadow"
            }
          >
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className={"object-cover object-center"}
            />
          </section>
        </div>
      </header>
      <main className={"bg-white py-12"}>
        <section className="container mx-auto px-4">
          <PortableText
            value={post.content}
            components={components}
            // serializers={serializers}
          />
        </section>
        <section className="mx-auto container px-4 mt-12 border-t border-t-gray-200 py-2 grid grid-cols-2">
          <div className={""}>
            <div className={"flex gap-2"}>
              <div>
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={50}
                  height={50}
                  className={"object-cover rounded-full"}
                />
              </div>

              <div className="flex flex-col gap-0">
                <p className="font-bold">{post.author.name}</p>
                <ul className="flex items-center gap-1 text-xs">
                  <li>G</li>
                  <li>L</li>
                  <li>T</li>
                  <li>I</li>
                  <li>F</li>
                </ul>
              </div>
            </div>
          </div>
          <div></div>
        </section>
      </main>
    </article>
  );
}
