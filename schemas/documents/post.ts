import {SchemaTypeDefinition} from 'sanity'
import slugify from 'slugify'

export const postSchema: SchemaTypeDefinition = {
  name: 'post',
  title: 'Posts',
  type: 'document',
  fieldsets: [
    {
      name: 'extraDetails',
      title: 'Extra Details',
      options: {columns: 2, collapsed: true, collapsible: true},
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      placeholder: 'Insert the title of your post',
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
            remove: /[*+~.'":;@?!\/\[\](){}]/g,
          }),
      },
    },
    {
      title: 'Language',
      name: 'locale',
      fieldset: 'extraDetails',
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
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      fieldset: 'extraDetails',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'text',
      rows: 10,
    },
    {
      title: 'Cover Image',
      name: 'cover',
      type: 'image',
      options: {
        hotspot: true,
      },
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
            withFilename: true,
          },
        },
      ],
    },
    {
      title: 'Author',
      name: 'auhtor',
      type: 'reference',
      to: [{type: 'author'}],
    },
  ],
}
