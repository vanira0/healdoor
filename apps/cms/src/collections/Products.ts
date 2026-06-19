import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'rentPrice',
      type: 'number',
      admin: { description: 'Monthly rent price in ₹ (e.g. 1499)' },
    },
    {
      name: 'buyPrice',
      type: 'number',
      admin: { description: 'Purchase price in ₹ (e.g. 45000)' },
    },
    {
      name: 'rating',
      type: 'number',
      min: 0,
      max: 5,
      admin: { step: 0.1 },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Oxygen Equipment', value: 'oxygen' },
        { label: 'Respiratory', value: 'respiratory' },
        { label: 'ICU Equipment', value: 'icu' },
        { label: 'Mobility Aids', value: 'mobility' },
        { label: 'Monitoring', value: 'monitoring' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Show in "Highest Selling Products" section' },
    },
    {
      name: 'isAvailableForRent',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'isAvailableForPurchase',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: { description: 'Lower numbers appear first' },
    },
  ],
}
