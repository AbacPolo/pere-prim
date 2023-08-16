export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      type: 'array',
      name: 'body',
      title: 'Body',
      of: [{type: 'card'}],
    },
  ],
}
