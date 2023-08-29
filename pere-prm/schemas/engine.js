import {CogIcon} from '@sanity/icons'

export default {
  name: 'engine',
  type: 'document',
  title: 'Engine',
  icon: CogIcon,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'image',
      name: 'bannerImage',
      title: 'Banner Image',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'description',
      title: 'Description',
      description: 'Short description of the engine',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Preview',
      name: 'preview',
      type: 'array',
      of: [{type: 'richText'}, {type: 'media'}],
    },
    {
      type: 'array',
      name: 'socials',
      title: 'Socials',
      of: [{type: 'socials'}],
    },
    {
      type: 'array',
      name: 'body',
      title: 'Body',
      of: [{type: 'card'}],
      validation: (Rule) => Rule.required(),
    },
  ],
}
