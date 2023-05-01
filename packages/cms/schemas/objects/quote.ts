import { SchemaTypeDefinition } from 'sanity';

export const quoteSchema: SchemaTypeDefinition = {
  title: 'Quote',
  name: 'quote',
  type: 'object',
  fields: [
    {
      title: 'Quote',
      name: 'quote',
      type: 'text',
      validation: (Rule) => [Rule.required().error('The quote is required!')],
    },
    {
      title: 'Source/Author',
      name: 'source',
      type: 'string',
    },
  ],
};
