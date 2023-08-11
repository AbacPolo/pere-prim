export default {
  title: 'RichText',
  name: 'richText',
  type: 'object',
  fields: [
    {
      title: 'Content Text',
      name: 'contentText',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  preview: {
    select: {
      title: 'contentText'
    },
    prepare(selection) {
      return {
        title: 'Content Text',
        subtitle: selection.title[0].children[0].text
      }
    },
  },
}
