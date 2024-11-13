import { BlockElementIcon } from '@sanity/icons'

export default {
    title: 'Card',
    name: 'businessCard',
    type: 'object',
    icon: BlockElementIcon,
    fields: [
        {
            title: 'Logo',
            name: 'logo',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
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
            title: 'Start Date',
            name: 'startDate',
            type: 'date',
            options: {
                dateFormat: 'MMM-YYYY',
                calendarTodayLabel: 'Today'
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'End Date',
            name: 'endDate',
            type: 'date',
            options: {
                dateFormat: 'MMM-YYYY',
                calendarTodayLabel: 'Today'
            },
            hidden: ({ parent, value }) => parent?.currentlyHere
        },
        {
            title: 'Currently',
            name: 'currentlyHere',
            type: 'boolean',
            initialValue: 'false',
        },
        {
            title: 'Content Text',
            name: 'contentText',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}
