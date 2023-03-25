export type PostListResponse = {
  title: string;
  slug: string;
  locale: "pt-PT" | "en-US";
  headline?: string;
  cover: {
    asset: {};
  };
};
