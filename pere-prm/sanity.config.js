import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

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
              .child(S.document().title('Home Page').schemaType('homepage').documentId('homepage')),
            S.divider(),
            S.listItem()
              .title('Games')
              .child(S.documentList().title('Game').filter('_type == "game"')),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
