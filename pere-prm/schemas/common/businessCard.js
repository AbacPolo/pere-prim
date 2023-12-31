import {BlockElementIcon} from '@sanity/icons'

export default {
  title: 'Card',
  name: 'businessCard',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'string',
    },
    {
      title: 'Content Text',
      name: 'contentText',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
