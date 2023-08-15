export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [

    {
      type: 'image',
      name: 'bannerImage',
      title: 'Banner Image',
    },
    {
      type: 'string',
      name: 'mainTitle',
      title: 'Main Title',
    },
    {
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
    },
    {
      type: 'array',
      name: 'socials',
      title: 'Socials',
      of: [{type: 'socials'}],
    }
  ],
}
