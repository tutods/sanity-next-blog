import { Locales } from '@enums';

import { Author, AuthorImageUrl } from '@shared/types/Author';
import {
  BlockReference,
  CodeReference,
  ImageReference,
  ImageReferenceWithAltAndCaption,
} from '@shared/types/Common';

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

export type PostWithCoverUrl = Omit<Post, 'cover'> & {
  cover: string;
};

type FieldsToPick =
  | 'title'
  | 'slug'
  | 'cover'
  | 'headline'
  | 'locale'
  | '_updatedAt'
  | '_createdAt';

export type PostListResponse = Pick<Post, FieldsToPick | 'author'>;

export type TransformedPostListResponse = Pick<
  PostWithCoverUrl,
  FieldsToPick
> & {
  author: AuthorImageUrl;
};

export type TransformedPostResponse = Omit<PostWithCoverUrl, 'author'> & {
  author: AuthorImageUrl;
};
