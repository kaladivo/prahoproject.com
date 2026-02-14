import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

import { Container, H1 } from '@/components/ui'
import { Subtitle } from '@/components/ui/Typography'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'press' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

const PRESS_MENTIONS = [
  { source: 'Czechdesign', date: '2025-06-11', title: 'Kdy naposledy jsi dělal něco poprvé?', url: '#' },
  { source: 'REM Space', date: '2025-06-02', title: 'Nový mural v Kongresovém centru Praha...', url: '#' },
  { source: 'Pražský patriot', date: '2025-06-01', title: 'Congress Center mural with online version', url: '#' },
  { source: 'Earch.cz', date: '2025-05-27', title: 'Vernisáž v Kongresovém centru Praha', url: '#' },
  { source: 'iDnes', date: '2025-05-28', title: 'Kongresové centrum zdobí muraly Crossroads', url: '#' },
  { source: 'Metro', date: '2025-05-28', title: 'Crossroads murals at Congress Center', url: '#' },
  { source: 'Pražský deník', date: '2025-05-28', title: 'Congress Center mural and residents\' stories', url: '#' },
  { source: 'Listy Prahy 1', date: '2025-01-02', title: 'Kultura v metru', url: '#' },
  { source: 'A2 Magazine', date: '2024-11-05', title: 'Síla sdílení: S Annoumarií Čermákovou o platformě PRAHO! project', url: '#' },
  { source: 'A2 Magazine', date: '2024-11-01', title: 'Síla sdílení', url: '#' },
  { source: 'Metro', date: '2024-10-31', title: 'Festival and metro line C coverage', url: '#' },
  { source: 'Radio Wave', date: '2024-08-29', title: 'Underpass sociology discussion', url: '#' },
  { source: 'Pražský patriot', date: '2024-07-30', title: 'Feminist underpass controversy', url: '#' },
  { source: 'Deník N', date: '2024-07-31', title: 'Pražský jinonický podchod budí emoce', url: '#' },
  { source: 'iDnes', date: '2024-06-05', title: 'Prague mural coverage', url: '#' },
  { source: 'Novinky Prahy 5', date: '2024-05-01', title: 'Proměna veřejného prostoru', url: '#' },
  { source: 'Fakulta humanitních studií', date: '2024-04-10', title: 'Feminism discussion coverage', url: '#' },
  { source: 'Forbes', date: '2022-04-02', title: 'Vytržení z každodenní šedi. Tajemná pražská básnířka vydává knihu', url: '#' },
  { source: 'UMPRUM', date: '2024-03-25', title: 'Artist graduate featured in project', url: '#' },
  { source: 'ČT Art', date: '2024-03-28', title: 'Exhibition opening coverage', url: '#' },
  { source: 'Daily Coffee', date: '2024-03-13', title: 'PRAHO! project chystá dosud největší instalaci', url: '#' },
  { source: 'Art 2 Friends', date: '2024-12-02', title: 'Interactive card game "A co teď?" coverage', url: '#' },
  { source: 'Aktuálně.cz', date: '2023-08-17', title: 'Podchod v srdci Prahy jako bezpečné prostředí? Queer komunita to dokázala', url: '#' },
  { source: 'Deník N', date: '2023-08-22', title: 'Art in public space coverage', url: '#' },
  { source: 'Heroine', date: '2023-08-07', title: 'LGBTQ+ Pride discussion', url: '#' },
  { source: 'Kultura 21', date: '2023-08-20', title: 'Fügnerovo náměstí transformation', url: '#' },
  { source: 'Refresher', date: '2023-08-16', title: 'Queer life in Prague', url: '#' },
  { source: 'Praha IN', date: '2023-08-16', title: '„Jsem asi homofob." LGBT+ projekt nabádá k pochopení', url: '#' },
  { source: 'Pražský patriot', date: '2023-08-13', title: 'LGBTQ+ support coverage', url: '#' },
  { source: 'Pražská drbna', date: '2023-08-13', title: 'Fügnerovo náměstí revitalization', url: '#' },
  { source: 'Studentské listy', date: '2023-08-16', title: 'Queer poetry and love for Prague', url: '#' },
  { source: 'Refresher', date: '2023-07-19', title: 'Pride flag activism', url: '#' },
  { source: 'Hey FOMO', date: '2023-08-01', title: 'Queer All Year project support', url: '#' },
  { source: 'Lui', date: '2023-08-10', title: 'LGBT-themed mural coverage', url: '#' },
  { source: 'iList', date: '2023-05-16', title: 'Umění je v každodennosti, říká autorka projektu PRAHO!', url: '#' },
  { source: 'Daily Coffee', date: '2023-04-19', title: 'Projekt PRAHO! oživuje veřejný prostor a spojuje lidi', url: '#' },
  { source: 'TV Prima', date: '2023-04-19', title: '"Showtime" program feature', url: '#' },
  { source: 'Mladá Fronta', date: '2023-04-13', title: 'Tajní básníci zvelebí podchod', url: '#' },
  { source: 'MČ Praha 8', date: '2023-04-12', title: 'Underpass opening', url: '#' },
  { source: 'Večerní Praha', date: '2023-03-28', title: 'Fügnerovo náměstí redesign', url: '#' },
  { source: 'Aktuálně.cz', date: '2022-12-02', title: 'V Praze se objevují tajemné básně...', url: '#' },
  { source: 'Ženy.cz', date: '2023-08-21', title: 'Cultural recommendations', url: '#' },
  { source: 'Zažít město jinak', date: '2022-10-04', title: 'Anonymní intimita města', url: '#' },
  { source: 'Expost', date: '2022-08-15', title: 'Anti-conflict team coverage', url: '#' },
  { source: 'Play.cz', date: '2022-02-25', title: 'Public space publication expansion', url: '#' },
  { source: 'Artikl.org', date: '2022-03-15', title: 'Anonymně intimní projekt', url: '#' },
  { source: 'Daily Coffee', date: '2022-02-24', title: 'Public space revitalization coverage', url: '#' },
  { source: 'Nějakej Dejv (Podcast)', date: '2022-02-23', title: 'Anonymous poetry stickers', url: '#' },
  { source: 'My děti ze stanice 2020 (Podcast)', date: '2023-04-19', title: 'Anonymous basic coverage', url: '#' },
  { source: 'Kam s dětmi', date: '2021-12-21', title: 'PRAHO! V metropoli se šíří záhadné básně', url: '#' },
  { source: 'Trendy zdraví', date: '2021-12-22', title: 'Anonymous poems spread', url: '#' },
  { source: 'Pražský deník', date: '2021-12-16', title: 'City transformation coverage', url: '#' },
  { source: 'Blesk', date: '2021-12-17', title: 'Tajemné básně zaplavily Prahu...', url: '#' },
  { source: 'Večerní Praha', date: '2021-12-16', title: 'Anonymous poems coverage', url: '#' },
  { source: 'Prague Free Guide', date: '2021-11-30', title: 'Básně v ulicích. Lidé je hledají...', url: '#' },
] as const

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString(locale === 'cs' ? 'cs-CZ' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function PressPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('press')

  const sorted = [...PRESS_MENTIONS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-4">{t('title')}</H1>
        <p className="mb-2 text-text-muted">{t('intro')}</p>
        <Subtitle className="mb-16 block">
          {t('count', { count: PRESS_MENTIONS.length })}
        </Subtitle>

        <div className="max-w-[var(--width-content)]">
          <div className="divide-y divide-border-light/30">
            {sorted.map((mention, i) => (
              <a
                key={i}
                href={mention.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-5 transition-colors hover:bg-warm/30 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="shrink-0 font-mono text-[13px] uppercase tracking-[3.9px] text-gray sm:w-[180px]">
                  {mention.source}
                </span>
                <span className="shrink-0 text-[13px] text-gray sm:w-[160px]">
                  {formatDate(mention.date, locale)}
                </span>
                <span className="text-text transition-colors group-hover:text-primary">
                  {mention.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </main>
  )
}
