import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

import { Container, H1, H4 } from '@/components/ui'
import { Subtitle } from '@/components/ui/Typography'
import { Link } from '@/i18n/navigation'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('about')

  const sections = [
    {
      title: t('originTitle'),
      subtitle: t('originSubtitle'),
      content: (
        <>
          <p>{t('originP1')}</p>
          <p>{t('originP2')}</p>
        </>
      ),
      align: 'left' as const,
    },
    {
      title: t('pillarsTitle'),
      subtitle: t('pillarsSubtitle'),
      content: <p>{t('pillarsP1')}</p>,
      align: 'right' as const,
    },
    {
      title: t('outputsTitle'),
      subtitle: t('outputsSubtitle'),
      content: (
        <>
          <p>{t('outputsP1')}</p>
          <p>
            <Link href="/realizace" className="text-primary underline underline-offset-2 hover:no-underline">
              {t('outputsLink')} &rarr;
            </Link>
          </p>
        </>
      ),
      align: 'left' as const,
    },
    {
      title: t('shopTitle'),
      subtitle: t('shopSubtitle'),
      content: (
        <>
          <p>{t('shopP1')}</p>
          <Link
            href="/e-shop"
            className="mt-4 inline-block border border-black bg-black px-8 py-3 font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:bg-white hover:text-black"
          >
            {t('shopCta')}
          </Link>
        </>
      ),
      align: 'right' as const,
    },
    {
      title: t('directionTitle'),
      subtitle: t('directionSubtitle'),
      content: <p>{t('directionP1')}</p>,
      align: 'left' as const,
    },
    {
      title: t('supportTitle'),
      subtitle: t('supportSubtitle'),
      content: (
        <>
          <p>{t('supportP1')}</p>
          <Link
            href="/podpor-nas"
            className="mt-4 inline-block border border-primary bg-primary px-8 py-3 font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:bg-white hover:text-primary"
          >
            {t('supportCta')}
          </Link>
        </>
      ),
      align: 'right' as const,
    },
  ]

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-16">{t('title')}</H1>

        <div className="max-w-[var(--width-content)] space-y-20">
          {sections.map((section, i) => (
            <section
              key={i}
              className={section.align === 'right' ? 'ml-auto max-w-[720px]' : 'max-w-[720px]'}
            >
              <H4>{section.title}</H4>
              <Subtitle className="mt-2 block">{section.subtitle}</Subtitle>
              <div className="mt-6 space-y-4 text-text-muted">{section.content}</div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  )
}
