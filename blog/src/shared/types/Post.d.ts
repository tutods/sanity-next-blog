import {
  BlockReference,
  CodeReference,
  ImageReference,
  ImageReferenceWithAltAndCaption,
} from "@shared/types/Common";
import { Author, AuthorImageUrl } from "@shared/types/Author";

type ContentItem =
  | BlockReference
  | ImageReferenceWithAltAndCaption
  | CodeReference;

export type Post = {
  title: string;
  slug: string;
  locale: "pt" | "en";
  headline?: string;
  cover: ImageReference;
  content: ContentItem[];
  author: Author;
  _createdAt: string;
  _updatedAt?: string;
};

export type PostWithCoverUrl = Omit<Post, "cover"> & {
  cover: string;
};

type FieldsToPick =
  | "title"
  | "slug"
  | "locale"
  | "cover"
  | "headline"
  | "_updatedAt"
  | "_createdAt";

export type PostListResponse = Pick<Post, FieldsToPick>;

export type TransformedPostListResponse = Pick<PostWithCoverUrl, FieldsToPick>;

export type TransformedPostResponse = Omit<PostWithCoverUrl, "author"> & {
  author: AuthorImageUrl;
};
