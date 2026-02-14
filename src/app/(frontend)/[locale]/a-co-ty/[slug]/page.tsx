import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Container } from '@/components/ui'
import { QuizPlayer } from '@/components/QuizPlayer'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'quizzes',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    locale: locale as 'cs' | 'en',
    limit: 1,
  })

  const quiz = docs[0]
  if (!quiz) return { title: 'PRAHO! Project' }

  return {
    title: `${quiz.title} — PRAHO! Project`,
    description: quiz.description as string | undefined,
  }
}

export default async function QuizDetailPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'quizzes',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    locale: locale as 'cs' | 'en',
    limit: 1,
  })

  const quiz = docs[0]
  if (!quiz) notFound()

  const quizData = {
    id: String(quiz.id),
    title: quiz.title as string,
    description: quiz.description as string | undefined,
    thankYouMessage: quiz.thankYouMessage as string | undefined,
    questions: (quiz.questions as Array<{
      id: string
      questionText: string
      type: 'text' | 'single' | 'multiple'
      options?: Array<{ id: string; label: string; value: string }>
      required: boolean
    }>).map((q) => ({
      id: q.id,
      questionText: q.questionText,
      type: q.type,
      options: q.options?.map((o) => ({
        id: o.id,
        label: o.label,
        value: o.value,
      })),
      required: q.required,
    })),
  }

  return (
    <main className="py-16 md:py-24">
      <Container>
        <QuizPlayer quiz={quizData} />
      </Container>
    </main>
  )
}
