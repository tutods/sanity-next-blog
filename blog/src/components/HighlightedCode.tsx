import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeReference } from "@shared/types/Common";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Icon } from "@components/ui";
import { useEffect, useState } from "react";

type Props = {
  code: CodeReference;
  className?: string;
};

export const HighlightedCode = ({
  code: { code, filename, language },
  className = "",
}: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = () => {
    if (!isCopied) {
      navigator.clipboard.writeText(code);
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
      className={`bg-dracula-background pt-4 rounded-lg relative ${className}`}
    >
      <div
        className={
          "bg-dracula-currentLine text-dracula-purple w-fit rounded-lg px-2 ml-4"
        }
      >
        {filename}
      </div>
      <SyntaxHighlighter
        customStyle={{
          margin: 0,
          borderRadius: "0 0 0.5rem 0.5rem",
        }}
        showLineNumbers
        wrapLines
        language={language}
        style={dracula}
      >
        {code}
      </SyntaxHighlighter>

      <Icon
        name={isCopied ? "check" : "copy"}
        onClick={onCopy}
        size="xl"
        className={`${
          isCopied ? "text-dracula-green" : "text-gray-400"
        } cursor-pointer transition-all duration-300 ease-in-out absolute md:top-unset md:bottom-4 top-4 right-4 text-gray-400 hover:text-white`}
      />
    </div>
  );
};
