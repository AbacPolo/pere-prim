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
      type: 'string',
      name: 'description',
      title: 'Description',
      description: 'Short description of the game'
    },
    {
      type: 'string',
      name: 'engine',
      title: 'Engine',
      description: 'Engine names have to be written equelly throughout games'
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
