export default {
  title: 'Card',
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
      of: [{type: 'richText'}, {type: 'media'}, {type: 'video'}, {type: 'files'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      return {
        title: 'Card',
        subtitle: selection.title,
      }
    },
  },
}
