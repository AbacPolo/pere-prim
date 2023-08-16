export default {
  title: 'Card',
  name: 'businessCard',
  type: 'object',
  fields: [
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'string',
    },
    {
      title: 'Content Text',
      name: 'contentText',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
