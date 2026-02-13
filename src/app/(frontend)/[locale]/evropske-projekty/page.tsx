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
  const t = await getTranslations({ locale, namespace: 'europeanProjects' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

export default async function EuropeanProjectsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('europeanProjects')

  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="max-w-[var(--width-content)]">
          <H1 className="mb-16">{t('title')}</H1>

          {/* About us */}
          <section className="mb-16">
            <H4>{t('aboutTitle')}</H4>
            <Subtitle className="mt-2 block">{t('aboutSubtitle')}</Subtitle>
            <div className="mt-6 space-y-4 text-text-muted">
              <p>{t('aboutP1')}</p>
              <p>{t('aboutP2')}</p>
              <p className="font-mono text-[13px] uppercase tracking-[3.9px] text-gray">
                {t('pic')} &middot; {t('oid')}
              </p>
            </div>
          </section>

          {/* Partners */}
          <section className="mb-16">
            <H4>{t('partnersTitle')}</H4>
            <p className="mt-4 text-text-muted">
              {t('partnersDesc')}{' '}
              <Link href="/partneri" className="text-primary underline underline-offset-2 hover:no-underline">
                &rarr;
              </Link>
            </p>
          </section>

          {/* Memberships */}
          <section className="mb-16">
            <H4>{t('membershipsTitle')}</H4>
            <p className="mt-4 text-text-muted">{t('membershipsDesc')}</p>
          </section>

          {/* Current projects */}
          <section className="mb-16">
            <H4>{t('currentTitle')}</H4>
            <div className="mt-6 border-l-[3px] border-primary pl-8">
              <h5 className="mb-4">{t('currentProjectTitle')}</h5>
              <ul className="space-y-2 text-text-muted">
                <li>{t('currentProjectProgram')}</li>
                <li>{t('currentProjectDuration')}</li>
                <li>{t('currentProjectPartners')}</li>
                <li>{t('currentProjectOutputs')}</li>
              </ul>
            </div>
          </section>

          {/* Upcoming projects */}
          <section className="mb-16">
            <H4>{t('upcomingTitle')}</H4>
            <p className="mt-4 text-text-muted">{t('upcomingDesc')}</p>
          </section>

          {/* Team */}
          <section>
            <H4>{t('teamTitle')}</H4>
            <div className="mt-4 space-y-2 text-text-muted">
              <p>{t('teamP1')}</p>
              <p className="font-mono text-[13px] uppercase tracking-[3.9px] text-gray">
                {t('teamContact')}
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  )
}
