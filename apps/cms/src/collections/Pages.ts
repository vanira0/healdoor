import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'page_builder',
      type: 'blocks',
      blocks: [
        // Extend with custom blocks here later
        {
          slug: 'content',
          fields: [
            {
              name: 'richText',
              type: 'richText',
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'meta_title',
          type: 'text',
        },
        {
          name: 'meta_description',
          type: 'textarea',
        },
      ],
    },
  ],
}
