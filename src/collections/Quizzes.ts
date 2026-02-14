import type { CollectionConfig } from 'payload'

export const Quizzes: CollectionConfig = {
  slug: 'quizzes',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'questions',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'questionText',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Text (open answer)', value: 'text' },
            { label: 'Single choice', value: 'single' },
            { label: 'Multiple choice', value: 'multiple' },
          ],
        },
        {
          name: 'options',
          type: 'array',
          admin: {
            condition: (_, siblingData) =>
              siblingData?.type === 'single' || siblingData?.type === 'multiple',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'value',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'required',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'thankYouMessage',
      type: 'textarea',
      localized: true,
    },
  ],
}
