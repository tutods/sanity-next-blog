import { FieldDefinition } from 'sanity';

export const contentDefaultSettings: FieldDefinition = {
  title: 'Content',
  name: 'content',
  validation: (Rule) =>
    Rule.required().error('The content of your post is required!'),
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Heading 5', value: 'h5' },
        { title: 'Heading 6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Numbered', value: 'number' },
        { title: 'Bullet', value: 'bullet' },
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
          validation: (Rule) =>
            Rule.required().error('The alt text is required.'),
        },
        {
          title: 'Caption',
          name: 'caption',
          type: 'string',
          validation: (Rule) =>
            Rule.required().warning(
              "The caption isn't required but can help to improve your SEO.",
            ),
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
    {
      type: 'quote',
      name: 'quote',
      title: 'Custom Quote',
    },
  ],
};
