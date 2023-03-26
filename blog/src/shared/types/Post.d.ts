import { ImageReference } from "@shared/types/Common";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export type Post = {
  title: string;
  slug: string;
  locale: "pt-PT" | "en-US";
  headline?: string;
  cover: ImageReference;
  content: any[];
  createdAt: string;
  updatedAt?: string;
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
  | "updatedAt"
  | "createdAt";

export type PostListResponse = Pick<Post, FieldsToPick>;

export type TransformedPostListResponse = Pick<PostWithCoverUrl, FieldsToPick>;
