export default {
  title: 'Section Card',
  name: 'card',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'richText'}, {type: 'media'}, {type: 'video'}, {type: 'files'}, {type: 'businessCard'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {
        title: 'Section',
        subtitle: selection.title,
      }
    },
  },
}
