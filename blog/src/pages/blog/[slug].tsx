import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
// import PortableText from "@sanity/block-content-to-react";
import { PortableText } from "@portabletext/react";

import { getBlogPost, getBlogPostsPaths } from "@shared/client/queries/post";
import { TransformedPostResponse } from "@shared/types/Post";
import Image from "next/image";
import { env } from "@shared/env";
import { components } from "@shared/client/utils/components";
import { PostFallback } from "@components/fallbacks";
import { useRouter } from "next/router";
import { Icon } from "@components/ui";
import Link from "next/link";

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
    fallback: true,
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
  const { isFallback } = useRouter();

  if (isFallback) {
    return <PostFallback />;
  }

  return (
    <article>
      <header className={"bg-slate-100 py-24 text-center"}>
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
              loading={"lazy"}
              className={"object-cover object-center"}
            />
          </section>
        </div>
      </header>
      <main className={"bg-white py-12"}>
        <section className="container mx-auto px-4">
          <PortableText value={post.content} components={components} />
        </section>
        <section className="mx-auto container px-4 mt-12 border-t border-t-gray-200 py-4 grid grid-cols-2">
          <div className={""}>
            <div className={"flex gap-2"}>
              <div>
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={50}
                  height={50}
                  className={"object-cover rounded-full ring ring-slate-800/10"}
                />
              </div>

              <div className="flex flex-col gap-0">
                <p className="font-bold">{post.author.name}</p>
                <ul className="flex items-center gap-1 text-xs">
                  {!!post.author.github && (
                    <li>
                      <Link
                        className={
                          "hover:text-violet-600 transition-colors ease-in-out duration-300"
                        }
                        href={post.author.github}
                        target={"_blank"}
                        passHref
                      >
                        <Icon name={"github"} size={"lg"} />
                      </Link>
                    </li>
                  )}
                  {!!post.author.linkedin && (
                    <li>
                      <Link
                        className={
                          "hover:text-violet-600 transition-colors ease-in-out duration-300"
                        }
                        href={post.author.linkedin}
                        target={"_blank"}
                        passHref
                      >
                        <Icon name={"linkedin"} size={"lg"} />
                      </Link>
                    </li>
                  )}
                  {!!post.author.twitter && (
                    <li>
                      <Link
                        className={
                          "hover:text-violet-600 transition-colors ease-in-out duration-300"
                        }
                        href={post.author.twitter}
                        target={"_blank"}
                        passHref
                      >
                        <Icon name={"twitter"} size={"lg"} />
                      </Link>
                    </li>
                  )}
                  {!!post.author.instagram && (
                    <li>
                      <Link
                        className={
                          "hover:text-violet-600 transition-colors ease-in-out duration-300"
                        }
                        href={post.author.instagram}
                        target={"_blank"}
                        passHref
                      >
                        <Icon name={"instagram"} size={"lg"} />
                      </Link>
                    </li>
                  )}
                  {!!post.author.facebook && (
                    <li>
                      <Link
                        className={
                          "hover:text-violet-600 transition-colors ease-in-out duration-300"
                        }
                        href={post.author.facebook}
                        target={"_blank"}
                        passHref
                      >
                        <Icon name={"facebook"} size={"lg"} />
                      </Link>
                    </li>
                  )}
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
