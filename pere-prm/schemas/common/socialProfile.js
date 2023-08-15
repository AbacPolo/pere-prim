export default {
  title: 'Social Profile',
  name: 'socialProfile',
  type: 'object',
  fields: [
    {
      title: 'Social Icon',
      name: 'socialIcon',
      type: 'string',
      options: {
        list: [
          {title: 'Mail', value: 'Mail'},
          {title: 'LinkedIn', value: 'LinkedIn'},
          {title: 'GitHub', value: 'GitHub'},
          {title: 'Twitter', value: 'Twitter'},
          {title: 'Facebook', value: 'Facebook'},
          {title: 'Itch.io', value: 'Itch.io'},
          {title: 'Steam', value: 'Steam'},
        ],
      },
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
    },
    {
      title: 'Link Lable',
      name: 'linkLable',
      type: 'string',
    },
  ],
}
