import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CodeReference } from "@shared/types/Common";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const HighlightedCode = ({
  code: { code, filename, language },
}: {
  code: CodeReference;
}) => {
  return (
    <SyntaxHighlighter
      showLineNumbers
      wrapLongLines
      language={language}
      style={dracula}
    >
      {code}
    </SyntaxHighlighter>
  );
};
