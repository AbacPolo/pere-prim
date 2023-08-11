export default {
  name: 'game',
  type: 'document',
  title: 'Game',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
    },
    {
      type: 'image',
      name: 'bannerImage',
      title: 'Banner Image',
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
    },
  ],
}
