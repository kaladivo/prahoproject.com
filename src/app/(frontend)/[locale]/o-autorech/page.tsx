import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'

import { Container, H1, H4 } from '@/components/ui'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'authors' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

const TEAM_MEMBERS = [
  { name: 'Annamarie', role: { cs: 'Zakladatelka & kreativní ředitelka', en: 'Founder & Creative Director' }, photo: 'annamarie.jpg' },
  { name: 'Klára', role: { cs: 'Obsahová dramaturgynĕ', en: 'Content Dramaturg' }, photo: 'klara.jpg' },
  { name: 'Nina', role: { cs: 'Vizuální designérka', en: 'Visual Designer' }, photo: 'nina.jpg' },
  { name: 'Jakub', role: { cs: 'Analytik & správce webu', en: 'Analyst & Website Manager' }, photo: 'jakub.jpg' },
  { name: 'Veronika', role: { cs: 'Spoluzakladatelka & finanční ředitelka', en: 'Co-founder & Financial Director' }, photo: 'veronika.jpg' },
  { name: 'Ema', role: { cs: 'Vedoucí marketingu & PR', en: 'Marketing & PR Lead' }, photo: 'ema-marketing.jpg' },
  { name: 'Ema', role: { cs: 'Produkční & projektová koordinátorka', en: 'Producer & Project Coordinator' }, photo: 'ema-production.jpg' },
  { name: 'Magdaléna', role: { cs: 'Správkyně komunity', en: 'Community Manager' }, photo: 'magdalena.jpg' },
  { name: 'Kateřina', role: { cs: 'Spoluzakladatelka & vedoucí HR', en: 'Co-founder & HR Lead' }, photo: 'katerina.jpg' },
  { name: 'Apolena', role: { cs: 'Vedoucí produkce', en: 'Production Lead' }, photo: 'apolena.jpg' },
  { name: 'Kristína', role: { cs: 'Kurátorka realizací', en: 'Curator of Implementations' }, photo: 'kristina.jpg' },
  { name: 'Běta', role: { cs: 'Produkční & projektová koordinátorka', en: 'Producer & Project Coordinator' }, photo: 'beta.jpg' },
] as const

export default async function AuthorsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('authors')

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-12">{t('title')}</H1>

        {/* Recruitment section */}
        <section className="mb-16 max-w-[var(--width-content)]">
          <H4>{t('recruitTitle')}</H4>
          <p className="mt-4 text-text-muted">{t('recruitContact')}</p>
          <p className="mt-2 text-gray">{t('recruitNote')}</p>
        </section>

        {/* Team grid */}
        <section>
          <h6 className="mb-8">{t('teamTitle')}</h6>
          <div className="grid grid-cols-2 gap-[var(--spacing-grid-gutter)] sm:grid-cols-3 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.photo} className="group">
                <div className="relative mb-4 aspect-square overflow-hidden">
                  <Image
                    src={`/assets/team/${member.photo}`}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <h5 className="mb-1">{member.name}</h5>
                <p className="text-[13px] text-gray">
                  {locale === 'cs' ? member.role.cs : member.role.en}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  )
}
