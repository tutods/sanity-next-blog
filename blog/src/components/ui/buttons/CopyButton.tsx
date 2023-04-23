import { ReactNode, useEffect, useState } from "react";
import { Locales } from "@enums";
import { Icon } from "@components/ui";
import t from "@shared/translations";
import { Button } from "@components/ui/buttons/Button";
import clsx from "clsx";

type Props = {
  textToCopy: string;
  locale: Locales;
};

export const CopyButton = ({ textToCopy, locale = Locales.EN }: Props) => {
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
      className={"text-gray-700 font-semibold"}
      onClick={onCopy}
      disabled={isCopied}
      icon={
        <Icon
          name={clsx([{ copy: !isCopied }, { check: isCopied }])}
          size={"lg"}
        />
      }
    >
      {t[locale].buttons.copy_link}
    </Button>
  );
};
