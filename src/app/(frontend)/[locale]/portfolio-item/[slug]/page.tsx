import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'
import { notFound } from 'next/navigation'

import { Container, H1, Subtitle } from '@/components/ui'
import { PORTFOLIO_ITEMS, getPortfolioBySlug } from '@/data/portfolio'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const item = getPortfolioBySlug(slug)
  if (!item) return { title: 'Not Found — PRAHO! Project' }

  const title = locale === 'cs' ? item.title.cs : item.title.en
  return { title: `${title} — PRAHO! Project` }
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations('portfolio')

  const item = getPortfolioBySlug(slug)
  if (!item) notFound()

  const title = locale === 'cs' ? item.title.cs : item.title.en
  const description = item.description
    ? locale === 'cs'
      ? item.description.cs
      : item.description.en
    : null
  const location = item.location
    ? locale === 'cs'
      ? item.location.cs
      : item.location.en
    : null
  const categoryLabel =
    item.category === 'realizace' ? t('realizace') : t('autorskaTvorba')
  const backHref =
    item.category === 'realizace' ? '/realizace' : '/autorska-tvorba'

  return (
    <main className="py-16 md:py-24">
      <Container>
        {/* Back link */}
        <NextLink
          href={backHref}
          className="mb-8 inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[3.9px] text-gray transition-colors hover:text-primary"
        >
          &larr; {t('backToPortfolio')}
        </NextLink>

        {/* Hero image */}
        <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden">
          <Image
            src={item.image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1300px) 100vw, 1300px"
            priority
          />
        </div>

        {/* Title + category */}
        <div className="mb-8">
          <Subtitle className="mb-3 block">{categoryLabel}</Subtitle>
          <H1>{title}</H1>
        </div>

        {/* Description */}
        {description && (
          <div className="mb-12 max-w-[var(--width-content)]">
            <p className="text-text-muted leading-relaxed">{description}</p>
          </div>
        )}

        {/* Information section */}
        <div className="mb-12 grid grid-cols-1 gap-8 border-t border-border-light pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {location && (
            <div>
              <h6 className="mb-2">{t('location')}</h6>
              <p className="text-[13px] text-text-muted">{location}</p>
            </div>
          )}
          <div>
            <h6 className="mb-2">{t('year')}</h6>
            <p className="text-[13px] text-text-muted">{item.year}</p>
          </div>
          <div>
            <h6 className="mb-2">{t('category')}</h6>
            <p className="text-[13px] text-text-muted">{categoryLabel}</p>
          </div>
        </div>

        {/* Partners */}
        {item.partners && item.partners.length > 0 && (
          <div className="border-t border-border-light pt-8">
            <h6 className="mb-4">{t('partnersTitle')}</h6>
            <div className="flex flex-wrap gap-4">
              {item.partners.map((partner) => (
                <span
                  key={partner}
                  className="bg-bg-muted px-4 py-2 text-[13px] text-text-muted"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        )}
      </Container>
    </main>
  )
}
