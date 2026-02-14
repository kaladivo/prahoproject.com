import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Container, H1 } from '@/components/ui'
import { StatsCharts } from '@/components/StatsCharts'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'quiz' })
  return {
    title: `${t('statsTitle')} — PRAHO! Project`,
  }
}

type Answer = {
  questionId: string
  value: string | string[]
}

type QuizQuestion = {
  id: string
  questionText: string
  type: 'text' | 'single' | 'multiple'
  options?: Array<{ id: string; label: string; value: string }>
}

type QuizStat = {
  quizId: string
  quizTitle: string
  totalResponses: number
  questions: Array<{
    questionId: string
    questionText: string
    type: 'text' | 'single' | 'multiple'
    options?: Array<{ label: string; value: string }>
    distribution: Record<string, number>
    textAnswers?: string[]
  }>
}

export default async function StatisticsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('quiz')

  const payload = await getPayload({ config })

  // Get all published quizzes
  const { docs: quizzes } = await payload.find({
    collection: 'quizzes',
    where: { status: { equals: 'published' } },
    locale: locale as 'cs' | 'en',
    limit: 100,
  })

  // Get all responses
  const { docs: responses } = await payload.find({
    collection: 'quiz-responses',
    limit: 10000,
    sort: '-createdAt',
  })

  // Compute stats per quiz
  const stats: QuizStat[] = quizzes.map((quiz) => {
    const quizResponses = responses.filter((r) => {
      const quizRef = r.quiz
      const refId = typeof quizRef === 'object' && quizRef !== null ? (quizRef as { id: string | number }).id : quizRef
      return String(refId) === String(quiz.id)
    })

    const questions = (quiz.questions as QuizQuestion[]).map((q) => {
      const distribution: Record<string, number> = {}
      const textAnswers: string[] = []

      for (const response of quizResponses) {
        const answers = response.answers as Answer[]
        const answer = answers?.find((a) => a.questionId === q.id)
        if (!answer) continue

        if (q.type === 'text') {
          if (typeof answer.value === 'string' && answer.value.trim()) {
            textAnswers.push(answer.value)
          }
        } else if (q.type === 'single') {
          const val = String(answer.value)
          distribution[val] = (distribution[val] || 0) + 1
        } else if (q.type === 'multiple' && Array.isArray(answer.value)) {
          for (const val of answer.value) {
            distribution[val] = (distribution[val] || 0) + 1
          }
        }
      }

      return {
        questionId: q.id,
        questionText: q.questionText,
        type: q.type,
        options: q.options?.map((o) => ({ label: o.label, value: o.value })),
        distribution,
        textAnswers: q.type === 'text' ? textAnswers.slice(0, 20) : undefined,
      }
    })

    return {
      quizId: String(quiz.id),
      quizTitle: quiz.title as string,
      totalResponses: quizResponses.length,
      questions,
    }
  })

  const totalResponses = responses.length

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-4">{t('statsTitle')}</H1>
        <p className="mb-8 max-w-2xl text-text-muted">{t('statsIntro')}</p>

        <div className="mb-12">
          <span className="font-mono text-[13px] uppercase tracking-[3.9px] text-gray">
            {t('totalResponses')}: {totalResponses}
          </span>
        </div>

        {stats.length === 0 ? (
          <p className="text-gray">{t('noStats')}</p>
        ) : (
          <StatsCharts stats={stats} />
        )}
      </Container>
    </main>
  )
}
