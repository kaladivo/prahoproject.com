import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import config from '@payload-config'
import { Container, H1 } from '@/components/ui'
import { RichTextContent } from '@/components/RichTextContent'
import { AccordionRichText } from '@/components/AccordionRichText'

const LEGAL_SLUGS = [
  'zasady-ochrany-osobnich-udaju',
  'pouzivani-souboru-cookies',
  'vseobecne-obchodni-podminky',
] as const

type Props = {
  params: Promise<{ locale: string; legalSlug: string }>
}

async function getLegalPage(slug: string, locale: string) {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'legal-pages',
    where: { slug: { equals: slug } },
    locale: locale as 'cs' | 'en',
    limit: 1,
  })
  return result.docs[0] ?? null
}

export async function generateStaticParams() {
  return LEGAL_SLUGS.map((legalSlug) => ({ legalSlug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, legalSlug } = await params
  const page = await getLegalPage(legalSlug, locale)
  if (!page) return {}
  return {
    title: `${page.title} — PRAHO! Project`,
  }
}

export default async function LegalPage({ params }: Props) {
  const { locale, legalSlug } = await params

  if (!LEGAL_SLUGS.includes(legalSlug as (typeof LEGAL_SLUGS)[number])) {
    notFound()
  }

  setRequestLocale(locale)

  const [page, t] = await Promise.all([
    getLegalPage(legalSlug, locale),
    getTranslations('legal'),
  ])

  if (!page) {
    notFound()
  }

  const effectiveDate = new Date(page.effectiveDate)
  const formattedDate = effectiveDate.toLocaleDateString(
    locale === 'cs' ? 'cs-CZ' : 'en-US',
    { day: 'numeric', month: 'long', year: 'numeric' },
  )

  const isTermsPage = legalSlug === 'vseobecne-obchodni-podminky'

  return (
    <main className="py-16 md:py-24">
      <Container as="article">
        <header className="mb-12">
          <H1>{page.title}</H1>
          <p className="mt-4 font-mono text-[13px] uppercase tracking-[3.9px] text-gray">
            {t('effectiveFrom')} {formattedDate}
          </p>
        </header>

        <div className={`max-w-[var(--width-content)] ${isTermsPage ? 'legal-accordion' : 'legal-prose'}`}>
          {isTermsPage ? (
            <AccordionRichText>
              <RichTextContent data={page.content as SerializedEditorState} />
            </AccordionRichText>
          ) : (
            <RichTextContent data={page.content as SerializedEditorState} />
          )}
        </div>
      </Container>
    </main>
  )
}
