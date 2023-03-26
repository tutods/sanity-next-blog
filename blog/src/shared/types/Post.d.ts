import {
  BlockReference,
  CodeReference,
  ImageReference,
  ImageReferenceWithAlt,
} from "@shared/types/Common";
import { Author } from "@shared/types/Author";

type ContentItem = BlockReference | ImageReferenceWithAlt | CodeReference;

export type Post = {
  title: string;
  slug: string;
  locale: "pt-PT" | "en-US";
  headline?: string;
  cover: ImageReference;
  content: ContentItem[];
  auhtor?: Author;
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
  author: {
    avatar: string;
    name: string;
  };
};
