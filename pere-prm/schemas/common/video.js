import {PlayIcon} from '@sanity/icons'

export default {
    title: 'Video',
    name: 'video',
    type: 'object',
    icon: PlayIcon,
    fields: [
      {
        title: 'URL',
        name: 'url',
        type: 'url',
        validation: (Rule) => Rule.required(),
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
  