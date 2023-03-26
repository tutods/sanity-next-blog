import { ImageReference } from "@shared/types/Common";

export type Post = {
  title: string;
  slug: string;
  locale: "pt-PT" | "en-US";
  headline?: string;
  cover: ImageReference;
};

export type PostListResponse = Pick<
  Post,
  "title" | "slug" | "locale" | "cover" | "headline"
>[];
