import { useEffect, useState } from 'react';
import { Locales } from '@enums';
import clsx from 'clsx';

import { Icon } from '@components/ui';
import { Button } from '@components/ui/buttons/Button';
import t from '@shared/translations';

type Props = {
  textToCopy: string;
  locale: Locales;
  className?: string;
};

export const CopyButton = ({
  textToCopy,
  locale = Locales.EN,
  className = '',
}: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = async () => {
    if (!isCopied) {
      await navigator.clipboard.writeText(textToCopy);
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
    <Button
      className={clsx(['text-gray-700 font-semibold', className])}
      disabled={isCopied}
      onClick={onCopy}
      icon={
        <Icon
          name={clsx([{ copy: !isCopied }, { check: isCopied }])}
          size="lg"
        />
      }
    >
      {t[locale].buttons.copy_link}
    </Button>
  );
};
