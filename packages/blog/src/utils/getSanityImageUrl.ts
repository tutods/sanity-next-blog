import imageUrlBuilder from "@sanity/image-url";
import { client } from "@shared/client";
import { ImageReference } from "@shared/types/Common";

const builder = imageUrlBuilder(client);

export const getSanityImageUrl = (source: ImageReference) =>
  builder.image(source);
