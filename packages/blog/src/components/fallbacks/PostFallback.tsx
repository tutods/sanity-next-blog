import Image from 'next/image';
import { PortableText } from '@portabletext/react/src';
import { components } from '@shared/client/utils/components';
import { Loading } from '@components/ui';

export const PostFallback = () => (
  <article>
    <header className={'bg-gray-50 py-24 text-center'}>
      <div className="container mx-auto flex flex-col gap-16">
        <section className={'flex flex-col gap-6'}>
          <div className="flex flex-col text-center items-center justify-center gap-3">
            <p
              className={
                'm-0 bg-gray-300 animate-pulse h-2 w-full max-w-[5%] rounded'
              }
            ></p>
            <h1
              className={
                'bg-gray-300 h-12 animate-pulse w-full max-w-[50%] rounded'
              }
            />
          </div>
          <h2 className={'h-8 rounded bg-gray-300 animate-pulse w-full'} />
        </section>

        <section
          className={
            'relative h-[400px] md:h-[650px] md:rounded-md animate-pulse bg-gray-300 overflow-hidden shadow'
          }
        />
      </div>
    </header>
    <main className={'py-12 flex items-center justify-center'}>
      <Loading className={'h-12 w-12'} />
    </main>
  </article>
);
