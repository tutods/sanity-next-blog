import {SchemaTypeDefinition} from 'sanity'

export const postSchema: SchemaTypeDefinition = {
  name: 'posts',
  title: 'Post',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      placeholder: 'Insert the title of your post'
    }, {
      title: 'Content',
      name: 'content',
      type: 'text',
      rows: 10
    }
  ]
}