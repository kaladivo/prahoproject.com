import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { TeamMembers } from './collections/TeamMembers'
import { Partners } from './collections/Partners'
import { PortfolioItems } from './collections/PortfolioItems'
import { BlogPosts } from './collections/BlogPosts'
import { LegalPages } from './collections/LegalPages'
import { Quizzes } from './collections/Quizzes'
import { QuizResponses } from './collections/QuizResponses'
import { Products } from './collections/Products'
import { Orders } from './collections/Orders'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: [
      {
        label: 'Čeština',
        code: 'cs',
      },
      {
        label: 'English',
        code: 'en',
      },
    ],
    defaultLocale: 'cs',
    fallback: true,
  },
  collections: [Media, Pages, TeamMembers, Partners, PortfolioItems, BlogPosts, LegalPages, Quizzes, QuizResponses, Products, Orders],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    push: true,
    migrationDir: path.resolve(dirname, 'migrations'),
  }),
  editor: lexicalEditor(),
  sharp,
})
