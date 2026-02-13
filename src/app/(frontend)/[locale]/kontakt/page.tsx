import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'

import { Container, H1, H4 } from '@/components/ui'
import { ContactForm } from '@/components/ContactForm'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

const TEAM_CONTACTS = [
  {
    name: 'Annamarie Čermáková',
    role: { cs: 'Kreativní ředitelka', en: 'Creative Director' },
    email: 'annamarie@prahoproject.cz',
    photo: 'annamarie.jpg',
  },
  {
    name: 'Veronika Matějková',
    role: { cs: 'Finanční ředitelka', en: 'Financial Director' },
    email: 'veronika@prahoproject.cz',
    photo: 'veronika.jpg',
  },
  {
    name: 'Petra Štěrbová',
    role: { cs: 'Vedoucí PR', en: 'PR Lead' },
    email: 'petra@prahoproject.cz',
    photo: 'petra.jpg',
  },
] as const

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('contact')

  return (
    <main className="py-16 md:py-24">
      <Container>
        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-[var(--spacing-grid-gutter)]">
          {/* Left column: Contact info */}
          <div>
            <H1 className="mb-8">{t('title')}</H1>
            <p className="mb-2 text-text-muted">
              {t('intro')}{' '}
              <a
                href="https://www.instagram.com/prahoproject/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Instagram
              </a>
              .
            </p>

            {/* Direct contact */}
            <section className="mt-10">
              <h5 className="mb-4">{t('directContact')}</h5>
              <div className="space-y-2 text-text-muted">
                <p>
                  <span className="font-medium text-text">T: </span>
                  <a href="tel:+420724005615" className="hover:text-primary">
                    +420 724 005 615
                  </a>
                </p>
                <p>
                  <span className="font-medium text-text">E: </span>
                  <a href="mailto:ahoj@prahoproject.cz" className="hover:text-primary">
                    ahoj@prahoproject.cz
                  </a>
                </p>
                <p>
                  <span className="font-medium text-text">A: </span>
                  <a
                    href="https://maps.google.com/?q=Bubenské+nábřeží+306/13+Praha+7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    Hala 40, Bubenské nábřeží 306/13, Praha 7
                  </a>
                </p>
              </div>
            </section>

            {/* Organization details */}
            <section className="mt-10">
              <h5 className="mb-4">{t('orgDetails')}</h5>
              <div className="space-y-1 text-[13px] text-text-muted">
                <p>
                  <span className="font-medium text-text">{t('orgName')}: </span>
                  PRAHO! project, z.s.
                </p>
                <p>
                  <span className="font-medium text-text">{t('orgType')}: </span>
                  {t('orgTypeValue')}
                </p>
                <p>
                  <span className="font-medium text-text">{t('orgIc')}: </span>
                  19347197
                </p>
                <p>
                  <span className="font-medium text-text">{t('orgAddress')}: </span>
                  Korunní 2569/108, Praha 10
                </p>
                <p>
                  <span className="font-medium text-text">{t('orgBank')}: </span>
                  325452806/0300
                </p>
                <p>
                  <span className="font-medium text-text">{t('orgDatabox')}: </span>
                  6d7k43a
                </p>
              </div>
            </section>
          </div>

          {/* Right column: Contact form */}
          <div className="lg:pt-20">
            <H4 className="mb-8">{t('formTitle')}</H4>
            <ContactForm />
          </div>
        </div>

        {/* Team contacts grid */}
        <section className="mt-20">
          <h6 className="mb-8">{t('teamTitle')}</h6>
          <div className="grid grid-cols-1 gap-[var(--spacing-grid-gutter)] sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_CONTACTS.map((person) => (
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
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  )
}
