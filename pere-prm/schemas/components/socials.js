import {UsersIcon} from '@sanity/icons'

export default {
    title: 'Socials',
    name: 'socials',
    type: 'object',
    icon: UsersIcon,
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
  