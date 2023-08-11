export default {
  title: 'Media',
  name: 'media',
  type: 'object',
  fields: [
    {
      title: 'Image/Gif',
      name: 'image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      image: 'image',
      title: 'media',
    },
    prepare(selection) {
      return {
        title: 'Media',
        media: selection.image
      }
    },
  },
}
