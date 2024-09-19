import { RobotIcon } from '@sanity/icons'

export default {
    name: 'game',
    type: 'document',
    title: 'Project',
    icon: RobotIcon,
    fields: [
        {
            type: 'string',
            name: 'name',
            title: 'Name',
            validation: (Rule) => Rule.required(),
        },
        {
            type: 'image',
            name: 'bannerImage',
            title: 'Banner Image',
            validation: (Rule) => Rule.required(),
        },
        {
            type: 'string',
            name: 'description',
            title: 'Description',
            description: 'Short description of the game',
            validation: (Rule) => Rule.required(),
        },
        {
            type: 'date',
            name: 'project_Date',
            title: 'Project Date',
            description: 'The date of creation of the project',
            options: {
                dateFormat: 'DD-MM-YYYY', // Formato de la fecha
                calendarTodayLabel: 'Today' // Etiqueta para el día actual
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Preview',
            name: 'preview',
            type: 'array',
            of: [{ type: 'richText' }, { type: 'media' }],
        },
        {
            type: 'string',
            name: 'engine',
            title: 'Engine',
            description: 'Engine names have to be written equelly throughout games',
            validation: (Rule) => Rule.required(),
        },
        {
            type: 'tags',
            name: 'game_Tags',
            title: 'Tags',
            description: 'Tags related to the project',
            options: {
                includeFromRelated: 'game_Tags'
            },
            validation: (Rule) => Rule.required(),
        },
        {
            type: 'array',
            name: 'socials',
            title: 'Socials',
            of: [{ type: 'socials' }],
        },
        {
            type: 'array',
            name: 'body',
            title: 'Body',
            of: [{ type: 'card' }],
            validation: (Rule) => Rule.required(),
        },
    ],
    initialValue: {
        priority: 0,
    },
}
