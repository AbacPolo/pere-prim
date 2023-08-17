import {ImageIcon} from '@sanity/icons'

export default {
  title: 'Media',
  name: 'media',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      title: 'Image/Gif',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Alt',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      image: 'image',
      title: 'media',
    },
    prepare(selection) {
      return {
        title: 'Media',
        media: selection.image
      }
    },
  },
}
