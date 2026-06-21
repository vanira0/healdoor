import type { Block } from 'payload'

export const ProductGridBlock: Block = {
  slug: 'productGrid',
  labels: {
    singular: 'Product Grid',
    plural: 'Product Grids',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
    },
    {
      name: 'displayMode',
      type: 'select',
      options: [
        { label: 'Rent Only', value: 'rent' },
        { label: 'Buy Only', value: 'buy' },
        { label: 'Both (Toggle)', value: 'both' },
      ],
      defaultValue: 'both',
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
    },
  ],
}
