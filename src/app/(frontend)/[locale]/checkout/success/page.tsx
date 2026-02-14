import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import NextLink from 'next/link'

import { Container, H1 } from '@/components/ui'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: `Objednávka přijata — PRAHO! Project`,
  }
}

export default async function CheckoutSuccessPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('donation')

  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-8">
            <svg className="mx-auto" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <H1 className="mb-4">{t('thankYou')}</H1>
          <p className="mb-8 text-text-muted">{t('thankYouDesc')}</p>
          <NextLink
            href="/e-shop"
            className="inline-flex h-[66px] items-center justify-center border border-black bg-black px-[83px] font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:bg-white hover:text-black"
          >
            {locale === 'cs' ? 'Zpět do e-shopu' : 'Back to e-shop'}
          </NextLink>
        </div>
      </Container>
    </main>
  )
}
