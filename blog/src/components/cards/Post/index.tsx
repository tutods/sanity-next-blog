import t from "@shared/translations";
import styles from "@components/cards/Post/styles.module.scss";
import { TransformedPostListResponse } from "@shared/types/Post";
import Image from "next/image";
import Link from "next/link";
import { Locales } from "@enums";

type Props = {
  post: TransformedPostListResponse;
  locale: Locales;
};

export const Post = ({ post, locale }: Props) => {
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
          <button>{t[locale].buttons.read_more}</button>
        </Link>
      </div>
    </article>
  );
};
