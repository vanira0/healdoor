import type { Block } from 'payload'

export const DoctorGridBlock: Block = {
  slug: 'doctorGrid',
  labels: {
    singular: 'Doctor Grid',
    plural: 'Doctor Grids',
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
      name: 'doctors',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'qualification',
          type: 'text',
        },
        {
          name: 'experience',
          type: 'text',
        },
        {
          name: 'badge',
          type: 'text',
          admin: { description: 'e.g. "FOUNDER" — leave empty for no badge' },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
