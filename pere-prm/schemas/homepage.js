export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [

    {
      type: 'image',
      name: 'bannerImage',
      title: 'Banner Image',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'mainTitle',
      title: 'Main Title',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
      validation: (Rule) => Rule.required(),
    },
    {
      type: 'array',
      name: 'socials',
      title: 'Socials',
      of: [{type: 'socials'}],
    }
  ],
}
