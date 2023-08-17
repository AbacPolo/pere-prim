import {PresentationIcon} from '@sanity/icons'

export default {
  title: 'Section Card',
  name: 'card',
  type: 'object',
  icon: PresentationIcon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'richText'}, {type: 'media'}, {type: 'video'}, {type: 'files'}, {type: 'businessCard'}],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: 'Section',
      }
    },
  },
}
