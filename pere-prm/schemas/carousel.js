export default {
  name: 'carousel',
  type: 'document',
  title: 'Carousel',
  fields: [
    {
      name: 'preview',
      type: 'array',
      title: 'Selected Cards',
      of: [
        {
          title: 'Card',
          name: 'card',
          type: 'reference',
          options: {
            disableNew: true
          },
          to: [{type: 'game'}, {type: 'engine'}],
        },
      ],
    },
  ],
}
