import clsx from 'clsx';

type Props = {
  quote: string;
  source?: string;
  className?: string;
};

export const Quote = ({ quote, source, className = '' }: Props) => (
  <section
    className={clsx([
      'pl-5 py-2 border-l-4 border-l-violet-600 italic',
      className,
    ])}
  >
    <blockquote className="mb-8 text-xl">&ldquo;{quote}&rdquo;</blockquote>
    {!!source && <p className="text-sm text-gray-500">— {source}</p>}
  </section>
);
