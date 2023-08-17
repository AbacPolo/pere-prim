import {DownloadIcon} from '@sanity/icons'

export default {
  title: 'Files',
  name: 'files',
  type: 'object',
  icon: DownloadIcon,
  fields: [
    {
      title: 'File Name',
      name: 'fileName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Upload Document',
      name: 'file',
      type: 'file',
      storeOriginalFilename: 'true',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'fileName',
    },
    prepare(selection) {
      return {
        title: 'File',
        subtitle: selection.title,
      }
    },
  },
}
