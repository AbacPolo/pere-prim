export default {
    title: 'Video',
    name: 'video',
    type: 'object',
    fields: [
      {
        title: 'URL',
        name: 'url',
        type: 'url',
      },
    ],
    preview: {
      select: {
        url: 'url',
      },
      prepare(selection) {
        return {
          title: 'Video',
          subtitle: selection.url
        }
      },
    },
  }
  