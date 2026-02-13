import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'

import { Container, H1 } from '@/components/ui'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'partners' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

type Partner = {
  name: string
  logo: string
  url?: string
}

const PARTNER_GROUPS: {
  categoryKey: 'institutional' | 'district' | 'international' | 'strategic' | 'media'
  partners: Partner[]
}[] = [
  {
    categoryKey: 'institutional',
    partners: [
      { name: 'Magistrát hl. m. Prahy', logo: 'magistrat-praha.png' },
      { name: 'TSK Praha', logo: 'tsk-praha.png' },
      { name: 'GHMP', logo: 'ghmp.png' },
      { name: 'Umění pro město', logo: 'umeni-pro-mesto.png' },
      { name: 'IPR Praha', logo: 'ipr-praha.png' },
      { name: 'Kreativní Praha', logo: 'kreativni-praha.png' },
    ],
  },
  {
    categoryKey: 'district',
    partners: [
      { name: 'Praha 1', logo: 'praha-1.png' },
      { name: 'Praha 2', logo: 'praha-2.png' },
      { name: 'Praha 3', logo: 'praha-3.png' },
      { name: 'Praha 5', logo: 'praha-5.png' },
      { name: 'Praha 7', logo: 'praha-7.png' },
      { name: 'Praha 8', logo: 'praha-8.png' },
      { name: 'Praha 9', logo: 'praha-9.png' },
      { name: 'Praha 12', logo: 'praha-12.png' },
      { name: 'Praha 17', logo: 'praha-17.png' },
      { name: 'Praha 18', logo: 'praha-18.png' },
    ],
  },
  {
    categoryKey: 'international',
    partners: [
      { name: 'Swedish Embassy', logo: 'swedish-embassy.png' },
      { name: 'Dutch Embassy', logo: 'dutch-embassy.png' },
    ],
  },
  {
    categoryKey: 'strategic',
    partners: [
      { name: 'ReKola', logo: 'rekola.png' },
      { name: 'Knihobudka', logo: 'knihobudka.png' },
    ],
  },
  {
    categoryKey: 'media',
    partners: [
      { name: 'Czech Design', logo: 'czech-design.png' },
    ],
  },
]

export default async function PartnersPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('partners')

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-16">{t('title')}</H1>

        <div className="max-w-[var(--width-content)] space-y-16">
          {PARTNER_GROUPS.map(({ categoryKey, partners }) => (
            <section key={categoryKey}>
              <h6 className="mb-8">{t(categoryKey)}</h6>
              <div className="grid grid-cols-3 items-center gap-[var(--spacing-grid-gutter)] sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                {partners.map((partner) => (
                  <div
                    key={partner.logo}
                    className="flex items-center justify-center p-4 grayscale transition-all hover:grayscale-0"
                  >
                    <Image
                      src={`/assets/partners/${partner.logo}`}
                      alt={partner.name}
                      width={140}
                      height={80}
                      className="h-auto max-h-[80px] w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  )
}
