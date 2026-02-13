import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

import { Container, H1 } from '@/components/ui'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'manifest' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

const VALUES = [
  { titleKey: 'creativityTitle', descKey: 'creativityDesc' },
  { titleKey: 'humanityTitle', descKey: 'humanityDesc' },
  { titleKey: 'inclusionTitle', descKey: 'inclusionDesc' },
  { titleKey: 'freedomTitle', descKey: 'freedomDesc' },
  { titleKey: 'longevityTitle', descKey: 'longevityDesc' },
] as const

export default async function ManifestPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('manifest')

  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="max-w-[var(--width-content)]">
          <H1 className="mb-12">{t('title')}</H1>

          <section className="mb-16">
            <h2 className="mb-6 text-primary">{t('vision')}</h2>
            <p className="text-[18px] leading-[32px] text-text-muted">{t('mission')}</p>
          </section>

          <div className="space-y-12">
            {VALUES.map(({ titleKey, descKey }) => (
              <section key={titleKey} className="border-l-[3px] border-primary pl-8">
                <h3 className="mb-3">{t(titleKey)}</h3>
                <p className="text-text-muted">{t(descKey)}</p>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
}
