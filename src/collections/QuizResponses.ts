import type { CollectionConfig } from 'payload'

export const QuizResponses: CollectionConfig = {
  slug: 'quiz-responses',
  admin: {
    defaultColumns: ['quiz', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'quiz',
      type: 'relationship',
      relationTo: 'quizzes',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'answers',
      type: 'json',
      required: true,
    },
    {
      name: 'locale',
      type: 'select',
      options: [
        { label: 'Čeština', value: 'cs' },
        { label: 'English', value: 'en' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
