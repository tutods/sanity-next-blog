import { ImageReference } from "@shared/types/Common";

export type Author = {
  _id?: string;
  name: string;
  bio: string;
  avatar: ImageReference;
  github?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  _updatedAt?: string;
  _createdAt?: string;
};

export type AuthorImageUrl = Omit<Author, "avatar"> & { avatar: string };
