import {
  BlockReference,
  CodeReference,
  ImageReference,
  ImageReferenceWithAltAndCaption,
} from "@shared/types/Common";
import { Author, AuthorImageUrl } from "@shared/types/Author";
import { Locales } from "@enums";

type ContentItem =
  | BlockReference
  | ImageReferenceWithAltAndCaption
  | CodeReference;

export type Post = {
  title: string;
  slug: string;
  locale: Locales;
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
  | "locale"
  | "_updatedAt"
  | "_createdAt";

export type PostListResponse = Pick<Post, FieldsToPick>;

export type TransformedPostListResponse = Pick<PostWithCoverUrl, FieldsToPick>;

export type TransformedPostResponse = Omit<PostWithCoverUrl, "author"> & {
  author: AuthorImageUrl;
};
