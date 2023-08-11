export default {
  title: 'Files',
  name: 'files',
  type: 'object',
  fields: [
    {
      title: 'File Name',
      name: 'fileName',
      type: 'string',
    },
    {
      title: 'Upload Document',
      name: 'file',
      type: 'file',
      storeOriginalFilename: 'true'
    },
  ],
}
