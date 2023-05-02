import Image from 'next/image';
import Link from 'next/link';

import { TransformedPostListResponse } from '@shared/types/Post';

type Props = {
  post: TransformedPostListResponse;
};

export const PostCard = ({
  post: { title, cover, _createdAt, slug, headline, author },
}: Props) => {
  return (
    <article className="w-full bg-white shadow-post rounded-sm p-6 inline-flex flex-col gap-8">
      <section className="relative overflow-hidden h-60 aspect-square rounded-md">
        <Image
          fill
          alt={title}
          className="object-cover object-center"
          src={cover}
        />
      </section>
      <section>
        <Link passHref href={`/blog/${slug}`}>
          <h3 className="text-gray-900 font-semibold hover:underline transition-all ease-in-out duration-300 text-2xl mb-2">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 line-clamp-2 font-normal">{headline}</p>

        {!!author && (
          <div className="flex items-center gap-3 mt-6">
            <Image
              alt={author.name}
              className="rounded-full"
              height={40}
              src={author.avatar}
              width={40}
            />

            <div>
              <p className="font-semibold text-sm text-gray-900">
                {author.name}
              </p>
              <p className="text-xs text-gray-500">{_createdAt}</p>
            </div>
          </div>
        )}
      </section>
    </article>
  );
};
