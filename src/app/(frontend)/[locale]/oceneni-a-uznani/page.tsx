import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

import { Container, H1, H4 } from '@/components/ui'
import { Subtitle } from '@/components/ui/Typography'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'awards' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

export default async function AwardsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('awards')

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-8">{t('title')}</H1>
        <p className="mb-16 max-w-[var(--width-content)] text-text-muted">{t('intro')}</p>

        <div className="max-w-[var(--width-content)]">
          {/* Award card */}
          <article className="border border-border-light/30 p-8 md:p-12">
            <Subtitle className="mb-4 block">{t('awardTheme')}</Subtitle>
            <H4 className="mb-6">{t('awardName')}</H4>

            <div className="space-y-4 text-text-muted">
              <p className="font-medium text-text">{t('awardCategory')}</p>
              <p>{t('awardProject')}</p>
              <p>{t('awardInstallation')}</p>

              <div className="border-l-2 border-primary pl-6 py-2">
                <p className="italic">{t('juryQuote')}</p>
              </div>

              <p>{t('projectDesc')}</p>

              <div className="grid grid-cols-1 gap-3 pt-2 text-[13px] text-gray sm:grid-cols-2">
                <p>{t('awardedBy')}</p>
                <p>{t('awardDate')}</p>
                <p>{t('awardVenue')}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[3.9px] text-text transition-colors hover:text-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('diploma')}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[3.9px] text-text transition-colors hover:text-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('pressRelease')}
              </a>
            </div>
          </article>
        </div>
      </Container>
    </main>
  )
}
