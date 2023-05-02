import Image from 'next/image';
import Link from 'next/link';
import { PortableTextReactComponents } from '@portabletext/react';

import { HighlightedCode } from '@components/HighlightedCode';
import { Quote } from '@components/Quote';
import {
  CodeReference,
  CustomQuote,
  ImageReferenceWithAltAndCaption,
} from '@shared/types/Common';
import { getSanityImageUrl } from '@utils/getSanityImageUrl';

export const components: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value }: { value: CodeReference }) => (
      <HighlightedCode className="my-2" code={value} />
    ),
    image: ({ value }: { value: ImageReferenceWithAltAndCaption }) => (
      <figure className="my-6 flex flex-col gap-4 items-center justify-center">
        {/*TODO: improve images*/}
        <Image
          alt={value.alt}
          className="rounded-xl object-cover"
          height={600}
          loading="lazy"
          src={getSanityImageUrl(value).maxWidth(1080).maxHeight(600).url()}
          width={1080}
          style={{
            width: 1080,
            height: 600,
          }}
        />
        {value.caption && (
          <figcaption className="text-gray-400 text-center text-xs flex gap-0.5">
            <strong>Caption:</strong>
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    quote: ({ value }: { value: CustomQuote }) => (
      <Quote className="my-12" quote={value.quote} source={value.source} />
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="[&:first-of-type]:mt-0 mt-12 mb-2 text-5xl font-bold">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="[&:first-of-type]:mt-0 mt-12 mb-2 text-3xl font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-4 mb-2 font-bold text-2xl">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-4 mb-2 font-bold text-xl">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="mt-4 mb-2 font-bold text-lg">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="mt-4 mb-2 font-bold text-md">{children}</h6>
    ),
    normal: ({ children }) => (
      <p className="mt-1.5 mb-3 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-purple-6000 pl-2">{children}</blockquote>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul className="mb-2 pl-6 list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-2 pl-6 list-decimal">{children}</ol>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href ?? '').startsWith('http')
        ? '_blank'
        : undefined;

      return (
        <Link passHref href={value?.href} target={target}>
          {children}
        </Link>
      );
    },
    code: ({ children }) => (
      <code className="bg-dracula-background text-dracula-purple px-2 py-1 rounded font-mono">
        {children}
      </code>
    ),
  },
};
