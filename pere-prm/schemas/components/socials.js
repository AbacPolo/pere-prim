export default {
    title: 'Socials',
    name: 'socials',
    type: 'object',
    fields: [
      {
        title: 'Content',
        name: 'content',
        type: 'array',
        of: [{type: 'socialProfile'}],
      },
    ],
    preview: {
      prepare() {
        return {
          title: 'Socials Card',
        }
      },
    },
  }
  