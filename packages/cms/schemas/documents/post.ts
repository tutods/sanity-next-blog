import { SchemaTypeDefinition } from "sanity";
import slugify from "slugify";
import { contentDefaultSettings } from "../defaults/content";

export const postSchema: SchemaTypeDefinition = {
  name: "post",
  title: "Posts",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      placeholder: "Insert the title of your post",
      validation: (Rule) => [
        Rule.required().error("The title is required!"),
        Rule.min(10).error("The title need at least 10 characters!"),
        Rule.max(50).warning("Shorter titles are usually better"),
      ],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) =>
          slugify(input, {
            lower: true,
            remove: /[*+~.'":;@?!/[\](){}]/g,
          }),
      },
      validation: (Rule) => Rule.required().error("The slug is required!"),
    },
    {
      title: "Headline",
      name: "headline",
      // TODO: check if use block or test for the headline
      type: "text",
      rows: 5,
      validation: (Rule) => [
        Rule.required().warning(
          "The headline is not required, but is a good help for your SEO!"
        ),
        Rule.min(50).warning(
          "For a good headline we suggest between 50 a 160 characters."
        ),
        // TODO: max
        Rule.max(160).warning("Attention! Long headlines ..."),
      ],
    },
    {
      title: "Cover Image",
      name: "cover",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error("The cover image is required!"),
    },
    contentDefaultSettings,
    {
      title: "Language",
      name: "locale",
      type: "string",
      options: {
        list: [
          {
            title: "English",
            value: "en",
          },
          {
            title: "Portuguese",
            value: "pt",
          },
        ],
      },
      validation: (Rule) => Rule.required().error("The language is required!"),
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) =>
        Rule.required().error("Your post need to have an author!"),
    },
  ],
};
