import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeReference } from "@shared/types/Common";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  code: CodeReference;
  className?: string;
};

export const HighlightedCode = ({
  code: { code, filename, language },
  className = "",
}: Props) => {
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
        wrapLongLines
        language={language}
        style={dracula}
      >
        {code}
      </SyntaxHighlighter>

      <button className={"absolute bottom-4 right-4 text-white"}>Copy</button>
    </div>
  );
};
