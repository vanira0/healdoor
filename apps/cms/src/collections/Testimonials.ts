import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Written', value: 'written' },
        { label: 'Video', value: 'video' },
      ],
      defaultValue: 'written',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'handle',
      type: 'text',
      admin: {
        description: 'Social media handle (e.g. @neha.pandey)',
        condition: (data) => data?.type === 'video',
      },
    },
    {
      name: 'designation',
      type: 'text',
    },
    {
      name: 'organization',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Profile photo or video thumbnail',
      },
    },
    {
      name: 'videoFile',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'MP4 video file for video testimonials',
        condition: (data) => data?.type === 'video',
      },
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
    },
    {
      name: 'testimonial',
      type: 'textarea',
      required: true,
    },
    {
      name: 'timeAgo',
      type: 'text',
      admin: {
        description: 'Display time (e.g. "2 weeks ago", "1 month ago")',
        condition: (data) => data?.type === 'written',
      },
    },
    {
      name: 'social_media_link',
      type: 'text',
      admin: {
        description: 'Link to a social media profile or post (e.g., Instagram Reel)',
      },
    },
    {
      name: 'instagramLink',
      type: 'text',
      admin: {
        description: 'Instagram post/reel URL',
        condition: (data) => data?.type === 'video',
      },
    },
    {
      name: 'isVerified',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show verified badge next to handle',
      },
    },
  ],
}
