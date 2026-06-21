import type { Block } from 'payload'

export const StepsBlock: Block = {
  slug: 'steps',
  labels: {
    singular: 'Steps / How It Works',
    plural: 'Steps Sections',
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
      name: 'steps',
      type: 'array',
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          admin: { description: 'Step number (e.g. "01")' },
        },
        {
          name: 'icon',
          type: 'text',
          admin: { description: 'Lucide icon name (e.g. Phone, MessageSquare)' },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    },
  ],
}
