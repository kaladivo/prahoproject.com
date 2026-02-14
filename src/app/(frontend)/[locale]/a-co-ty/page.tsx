import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Container, H1 } from '@/components/ui'
import { Link } from '@/i18n/navigation'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'quiz' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

export default async function QuizListPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('quiz')

  const payload = await getPayload({ config })
  const { docs: quizzes } = await payload.find({
    collection: 'quizzes',
    where: { status: { equals: 'published' } },
    locale: locale as 'cs' | 'en',
    sort: '-createdAt',
  })

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-4">{t('title')}</H1>
        <p className="mb-12 max-w-2xl text-text-muted">{t('intro')}</p>

        {quizzes.length === 0 ? (
          <p className="text-gray">{t('noQuizzes')}</p>
        ) : (
          <div className="grid grid-cols-1 gap-[var(--spacing-grid-gutter)] sm:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((quiz) => (
              <Link
                key={quiz.id}
                href={`/a-co-ty/${quiz.slug}`}
                className="group block"
              >
                <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-bg-muted">
                  {quiz.featuredImage && typeof quiz.featuredImage === 'object' && quiz.featuredImage.url && (
                    <Image
                      src={quiz.featuredImage.url}
                      alt={quiz.featuredImage.alt || (quiz.title as string)}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                </div>
                <h5 className="mb-1 transition-colors group-hover:text-primary">
                  {quiz.title as string}
                </h5>
                {quiz.description && (
                  <p className="text-[13px] text-gray">
                    {quiz.description as string}
                  </p>
                )}
                <span className="mt-3 inline-block font-mono text-[12px] uppercase tracking-[3.6px] text-primary">
                  {t('startQuiz')}
                </span>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </main>
  )
}
