import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import clsx from 'clsx';

import { Icon } from '@components/ui';
import { CodeReference } from '@shared/types/Common';

type Props = {
  code: CodeReference;
  className?: string;
};

export const HighlightedCode = ({
  code: { code, filename, language },
  className = '',
}: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = async () => {
    if (!isCopied) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
    }
  };

  useEffect(() => {
    let copyTimeout: NodeJS.Timeout;

    if (isCopied) {
      copyTimeout = setTimeout(() => setIsCopied(false), 5000);
    }

    return () => clearTimeout(copyTimeout);
  }, [isCopied]);

  return (
    <div
      className={clsx([
        'bg-dracula-background pt-4 rounded-lg relative',
        className,
      ])}
    >
      <div className="bg-dracula-currentLine font-medium text-dracula-purple w-fit rounded px-2 ml-4 flex gap-2 items-center">
        <Icon name="code" size="sm" />
        {filename}
      </div>
      <SyntaxHighlighter
        showLineNumbers
        wrapLines
        language={language}
        style={dracula}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 0.5rem 0.5rem',
        }}
      >
        {code}
      </SyntaxHighlighter>

      <Icon
        name={isCopied ? 'check' : 'copy'}
        onClick={onCopy}
        size="xl"
        className={clsx([
          'cursor-pointer transition-all duration-300 ease-in-out absolute md:top-unset md:bottom-4 top-4 right-4',
          { 'text-dracula-green': isCopied },
          { 'text-gray-400 hover:text-white': !isCopied },
        ])}
      />
    </div>
  );
};
