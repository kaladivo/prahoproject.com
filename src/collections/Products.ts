import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'productType', 'status', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
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
      type: 'richText',
      localized: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Price in CZK',
      },
    },
    {
      name: 'compareAtPrice',
      type: 'number',
      min: 0,
      admin: {
        description: 'Original price for sale display (optional)',
      },
    },
    {
      name: 'productType',
      type: 'select',
      required: true,
      defaultValue: 'simple',
      options: [
        { label: 'Simple', value: 'simple' },
        { label: 'Variable', value: 'variable' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'variants',
      type: 'array',
      admin: {
        condition: (data) => data?.productType === 'variable',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'sku',
          type: 'text',
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          min: 0,
        },
        {
          name: 'stock',
          type: 'number',
          min: 0,
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'sku',
      type: 'text',
      admin: {
        position: 'sidebar',
        condition: (data) => data?.productType === 'simple',
      },
    },
    {
      name: 'stock',
      type: 'number',
      min: 0,
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        condition: (data) => data?.productType === 'simple',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Publikace', value: 'publications' },
        { label: 'Hry', value: 'games' },
        { label: 'Merch', value: 'merch' },
        { label: 'Ostatní', value: 'other' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'weight',
      type: 'number',
      min: 0,
      admin: {
        description: 'Weight in grams (for shipping calculation)',
        position: 'sidebar',
      },
    },
  ],
}
