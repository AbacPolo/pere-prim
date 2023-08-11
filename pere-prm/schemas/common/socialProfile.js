export default {
  title: 'Social Profile',
  name: 'socialProfile',
  type: 'object',
  fields: [
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
    {
      title: 'Name',
      name: 'name',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
