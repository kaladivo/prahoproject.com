import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'

import { Container, H1 } from '@/components/ui'
import { getPortfolioByCategory } from '@/data/portfolio'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'portfolio' })
  return {
    title: `${t('realizaceTitle')} — PRAHO! Project`,
  }
}

export default async function RealizacePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('portfolio')

  const items = getPortfolioByCategory('realizace')

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-4">{t('realizaceTitle')}</H1>
        <p className="mb-12 max-w-[var(--width-content)] text-text-muted">
          {t('realizaceIntro')}
        </p>

        {/* Category filter */}
        <div className="mb-12 flex gap-6">
          <span className="font-mono text-[13px] uppercase tracking-[3.9px] text-primary cursor-default border-b-2 border-primary pb-1">
            {t('realizace')}
          </span>
          <NextLink
            href="/autorska-tvorba"
            className="font-mono text-[13px] uppercase tracking-[3.9px] text-gray transition-colors hover:text-primary pb-1"
          >
            {t('autorskaTvorba')}
          </NextLink>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 gap-[var(--spacing-grid-gutter)] sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <NextLink
              key={item.slug}
              href={`/portfolio-item/${item.slug}`}
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={item.image}
                alt={locale === 'cs' ? item.title.cs : item.title.en}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white/95 p-6 transition-transform duration-300 group-hover:translate-y-0">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[3.3px] text-primary">
                  {t('realizace')}
                </span>
                <h4 className="text-[20px] leading-[26px]">
                  {locale === 'cs' ? item.title.cs : item.title.en}
                </h4>
              </div>
            </NextLink>
          ))}
        </div>
      </Container>
    </main>
  )
}
