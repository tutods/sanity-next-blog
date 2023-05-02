import { GetServerSideProps } from 'next';
import { DEFAULT_PAGINATION_OFFSET } from '@constants';
import { Locales } from '@enums';

import { BlogPagination } from '@components/blog';
import { PostCard } from '@components/cards/Post';
import {
  getBlogPosts,
  getBlogPostsCountByLocale,
} from '@shared/client/services/posts';
import { TransformedPostListResponse } from '@shared/types/Post';

type Props = {
  posts: TransformedPostListResponse[];
  locale: Locales;
  page: number;
  totalOfPages: number;
};

export const getServerSideProps: GetServerSideProps<
  Props,
  { page: string }
> = async ({ locale, query }) => {
  let { page } = query;
  const localeAsEnum = locale ? (locale as Locales) : Locales.EN;

  if (page instanceof Array) {
    page = page[0];
  }

  const postsCount = await getBlogPostsCountByLocale(localeAsEnum);
  const posts = await getBlogPosts(localeAsEnum, !!page ? Number(page) : 1);

  return {
    props: {
      posts,
      locale: localeAsEnum,
      page: !!page ? Number(page) : 1,
      totalOfPages: Math.ceil(postsCount / DEFAULT_PAGINATION_OFFSET) ?? 1,
    },
  };
};

export default function Blog({ posts, locale, page, totalOfPages }: Props) {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4 gap-4 md:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      {!!posts.length && (
        <div className="container mx-auto pt-12">
          <BlogPagination
            locale={locale}
            page={page}
            totalOfPages={totalOfPages}
          />
        </div>
      )}
    </section>
  );
}
