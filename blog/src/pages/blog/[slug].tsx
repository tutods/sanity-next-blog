import { GetServerSideProps } from "next";
import BlockContent from "@sanity/block-content-to-react";
import { getBlogPost } from "@shared/client/queries/post";
import { TransformedPostResponse } from "@shared/types/Post";
import Image from "next/image";
import { env } from "@shared/env";
import { serializers } from "@shared/client/utils/serializers";

type Props = { post: TransformedPostResponse };

export const getServerSideProps: GetServerSideProps<
  Props,
  { slug: string }
> = async ({ params }) => {
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
    <div>
      <h1>{post.title}</h1>
      <p>{post.headline}</p>
      <p>{post._createdAt}</p>
      <div>
        {post.author.name}
        <Image
          src={post.author.avatar}
          alt={post.author.name}
          width={150}
          height={150}
        />
      </div>
      <BlockContent
        dataset={env.sanity.dataset}
        projectId={env.sanity.projectId}
        blocks={post.content}
        serializers={serializers}
      />
    </div>
  );
}
