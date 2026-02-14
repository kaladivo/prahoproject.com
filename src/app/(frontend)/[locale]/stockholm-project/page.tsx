import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

import { Container, H1, H4 } from '@/components/ui'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'stockholm' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

export default async function StockholmPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('stockholm')

  const faqs = [
    { q: t('faq1q'), a: t('faq1a') },
    { q: t('faq2q'), a: t('faq2a') },
    { q: t('faq3q'), a: t('faq3a') },
    { q: t('faq4q'), a: t('faq4a') },
    { q: t('faq5q'), a: t('faq5a') },
  ]

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-8">{t('title')}</H1>

        <div className="max-w-[var(--width-content)] space-y-20">
          {/* Introduction */}
          <section className="space-y-6 text-text-muted">
            <p>{t('intro')}</p>
            <p>{t('originDesc')}</p>
            <p>{t('currentDesc')}</p>
          </section>

          {/* FAQ Accordion */}
          <section>
            <H4 className="mb-8">{t('faqTitle')}</H4>
            <div className="divide-y divide-border-light/30">
              {faqs.map((faq, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-text transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="ml-4 shrink-0 text-[20px] text-gray transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-text-muted">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
}
