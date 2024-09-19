import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { HomeIcon } from '@sanity/icons'
import { JoystickIcon } from '@sanity/icons'
import { RocketIcon } from '@sanity/icons'
import { UserIcon } from '@sanity/icons'
import { ImagesIcon } from '@sanity/icons'
import { tags } from 'sanity-plugin-tags'

export default defineConfig({
    name: 'default',
    title: 'pere-prm',

    projectId: 'h2rv99ub',
    dataset: 'production',

    plugins: [
        deskTool({
            structure: (S, context) => {
                return S.list()
                    .title('Content')
                    .items([
                        S.listItem()
                            .title('Home Page')
                            .icon(HomeIcon)
                            .child(S.document().title('Home Page').schemaType('homepage').documentId('homepage')),
                        S.listItem()
                            .title('Carousel')
                            .icon(ImagesIcon)
                            .child(S.document().title('Carousel').schemaType('carousel').documentId('carousel')),
                        S.divider(),
                        S.listItem()
                            .title('Projects')
                            .icon(JoystickIcon)
                            .child(S.documentList().title('Project').filter('_type == "game"')),
                        // S.listItem()
                        //   .title('Engines')
                        //   .icon(RocketIcon)
                        //   .child(S.documentList().title('Engine').filter('_type == "engine"')),
                        S.divider(),
                        S.listItem()
                            .title('About Page')
                            .icon(UserIcon)
                            .child(S.document().title('About Page').schemaType('about').documentId('about')),
                    ])
            },
        }),
        visionTool(),
        tags({}),
    ],

    schema: {
        types: schemaTypes,
    },
})
