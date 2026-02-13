import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'

import { Container, H1, H4 } from '@/components/ui'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'media' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

const MEDIA_CONTACTS = [
  {
    name: 'Annamarie Čermáková',
    role: { cs: 'Kreativní ředitelka', en: 'Creative Director' },
    email: 'annamarie@prahoproject.cz',
    phone: '+420 724 005 615',
    photo: 'annamarie.jpg',
  },
  {
    name: 'Veronika Matějková',
    role: { cs: 'Finanční ředitelka', en: 'Financial Director' },
    email: 'veronika@prahoproject.cz',
    phone: '+420 723 640 642',
    photo: 'veronika.jpg',
  },
  {
    name: 'Petra Štěrbová',
    role: { cs: 'Vedoucí PR', en: 'PR Lead' },
    email: 'petra@prahoproject.cz',
    phone: '+420 731 990 801',
    photo: 'petra.jpg',
  },
] as const

export default async function MediaPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('media')

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-8">{t('title')}</H1>
        <p className="mb-16 max-w-[var(--width-content)] text-text-muted">{t('intro')}</p>

        {/* Media contacts grid */}
        <section>
          <h6 className="mb-8">{t('contactsTitle')}</h6>
          <div className="grid grid-cols-1 gap-[var(--spacing-grid-gutter)] sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA_CONTACTS.map((person) => (
              <div key={person.email} className="group">
                <div className="relative mb-4 aspect-square overflow-hidden">
                  <Image
                    src={`/assets/team/${person.photo}`}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h5 className="mb-1">{person.name}</h5>
                <p className="text-[13px] text-gray">
                  {locale === 'cs' ? person.role.cs : person.role.en}
                </p>
                <a
                  href={`mailto:${person.email}`}
                  className="mt-1 block text-[13px] text-text-muted transition-colors hover:text-primary"
                >
                  {person.email}
                </a>
                <a
                  href={`tel:${person.phone.replace(/\s/g, '')}`}
                  className="mt-0.5 block text-[13px] text-text-muted transition-colors hover:text-primary"
                >
                  {person.phone}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Press center */}
        <section className="mt-20">
          <H4 className="mb-6">{t('pressCenterTitle')}</H4>
          <div className="space-y-4 text-text-muted">
            <p>{t('pressCenterDesc')}</p>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://drive.google.com/drive/folders/prahoproject-press"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[3.9px] text-text transition-colors hover:text-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('pressKit')}
              </a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
