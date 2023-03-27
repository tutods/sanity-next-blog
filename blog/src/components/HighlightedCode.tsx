import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeReference } from "@shared/types/Common";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const HighlightedCode = ({
  code: { code, filename, language },
}: {
  code: CodeReference;
}) => {
  return (
    <div className={"bg-dracula-background pt-4"}>
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
          borderRadius: 0,
        }}
        showLineNumbers
        wrapLongLines
        language={language}
        style={dracula}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
