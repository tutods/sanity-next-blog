import {SchemaTypeDefinition} from 'sanity'

export const authorSchema: SchemaTypeDefinition = {
  title: 'Authors',
  name: 'author',
  type: 'document',
  groups: [
    {
      title: 'Social',
      name: 'social',
    },
  ],
  fields: [
    {
      title: 'Photo',
      name: 'avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      placeholder: 'Insert author name',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text',
      placeholder: 'Short bio about the author',
    },
    {
      title: 'GitHub',
      name: 'github',
      type: 'string',
      group: 'social',
    },
    {
      title: 'LinkedIn',
      name: 'LinkedIn',
      type: 'string',
      group: 'social',
    },
    {
      title: 'Twitter',
      name: 'twitter',
      type: 'string',
      group: 'social',
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'string',
      group: 'social',
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'string',
      group: 'social',
    },
  ],
}
