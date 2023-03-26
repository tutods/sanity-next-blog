import styles from "@components/cards/Post/styles.module.scss";
import { TransformedPostListResponse } from "@shared/types/Post";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: TransformedPostListResponse;
};

export const Post = ({ post }: Props) => {
  return (
    <article className={styles["container"]}>
      <div>
        <Image alt={post.title} src={post.cover} fill />
      </div>
      <div>
        <section>
          <h3>{post.title}</h3>
          <time>{post._createdAt}</time>
        </section>
        <p>{post.headline}</p>

        <Link passHref href={`/blog/${post.slug}`}>
          <button>View Details</button>
        </Link>
      </div>
    </article>
  );
};
