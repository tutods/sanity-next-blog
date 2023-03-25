import {SchemaTypeDefinition} from 'sanity'
import slugify from 'slugify'

export const postSchema: SchemaTypeDefinition = {
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      placeholder: 'Insert the title of your post',
      validation: (Rule) => [
        Rule.required().error('The title is required!'),
        Rule.min(10).error('The title need at least 10 characters!'),
        Rule.max(50).warning('Shorter titles are usually better'),
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          slugify(input, {
            lower: true,
            remove: /[*+~.'":;@?!/[\](){}]/g,
          }),
      },
      validation: (Rule) => Rule.required().error('The slug is required!'),
    },
    {
      title: 'Headline',
      name: 'headline',
      // TODO: check if use block or test for the headline
      type: 'text',
      rows: 5,
      validation: (Rule) => [
        Rule.required().warning('The headline is not required, but is a good help for your SEO!'),
        Rule.min(50).warning('For a good headline we suggest between 50 a 160 characters.'),
        // TODO: max
        Rule.max(160).warning('Attention! Long headlines ...'),
      ],
    },
    {
      title: 'Cover Image',
      name: 'cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('The cover image is required!'),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Heading 4', value: 'h4'},
            {title: 'Heading 5', value: 'h5'},
            {title: 'Heading 6', value: 'h6'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Numbered', value: 'number'},
            {title: 'Bullet', value: 'bullet'},
          ],
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              title: 'Alt Text',
              name: 'alt',
              type: 'string',
              options: {
                isHeighlighted: true,
              },
            },
          ],
        },
        {
          type: 'code',
          options: {
            language: 'typescript',
            withFilename: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().error('The content of your post is required!'),
    },
    {
      title: 'Language',
      name: 'locale',
      type: 'string',
      options: {
        list: [
          {
            title: 'English',
            value: 'en-US',
          },
          {
            title: 'Portuguese',
            value: 'pt-PT',
          },
        ],
      },
      validation: (Rule) => Rule.required().error('The language is required!'),
    },
    {
      title: 'Author',
      name: 'auhtor',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required().error('Your post need to have an author!'),
    },
  ],
}
