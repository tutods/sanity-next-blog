import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeReference, ImageReferenceWithAlt } from "@shared/types/Common";
import { getSanityImageUrl } from "@utils/getSanityImageUrl";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { HighlightedCode } from "@components/HighlightedCode";

export const serializers = {
  types: {
    code: ({ node }: { node: CodeReference }) => (
      <HighlightedCode code={node} />
    ),
    image: ({ node }: { node: ImageReferenceWithAlt }) => (
      <figure>
        <img
          src={getSanityImageUrl(node).maxWidth(1080).url()}
          alt={node.alt}
        />
        <figcaption>{node.alt}</figcaption>
      </figure>
    ),
  },
};
