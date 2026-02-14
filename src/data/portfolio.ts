export type PortfolioItem = {
  slug: string
  title: { cs: string; en: string }
  category: 'realizace' | 'autorska-tvorba'
  image: string
  year: string
  location?: { cs: string; en: string }
  description?: { cs: string; en: string }
  partners?: string[]
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // === Realizace ===
  {
    slug: 'crossroads',
    title: { cs: 'Crossroads', en: 'Crossroads' },
    category: 'realizace',
    image: '/assets/portfolio/realizace/crossroads.jpg',
    year: '2024',
    location: {
      cs: 'Kongresové centrum Praha, severní terasy',
      en: 'Prague Congress Centre, northern terraces',
    },
    description: {
      cs: 'Realizace Crossroads reflektuje slova, pocity a myšlenky obyvatel Prahy 4 a návštěvníků KCP. Během pěti měsíců byly sbírány výpovědi jak lokálně v areálu KCP, tak online prostřednictvím sociálních sítí.',
      en: 'The Crossroads installation reflects the words, feelings and thoughts of Prague 4 residents and KCP visitors. Over five months, testimonies were collected both locally in the KCP area and online through social media.',
    },
    partners: ['Kongresové centrum Praha', 'Molotow'],
  },
  {
    slug: 'mas-cas',
    title: { cs: 'Máš čas?', en: 'Do You Have Time?' },
    category: 'realizace',
    image: '/assets/portfolio/realizace/crossroads.jpg',
    year: '2024',
    location: {
      cs: 'Metro Kačerov, Praha 4',
      en: 'Kačerov metro station, Prague 4',
    },
    description: {
      cs: 'Interaktivní hra ve stanici metra Kačerov. Kolemjdoucí jsou vyzváni k zastavení a zamyšlení nad otázkami o čase, přítomnosti a mezilidských vztazích.',
      en: 'An interactive game at the Kačerov metro station. Passers-by are invited to stop and reflect on questions about time, presence, and human relationships.',
    },
  },
  {
    slug: 'kam-kracis',
    title: { cs: 'Kam kráčíš?', en: 'Where Are You Going?' },
    category: 'realizace',
    image: '/assets/portfolio/realizace/kam-kracis.jpg',
    year: '2023',
    location: { cs: 'Praha', en: 'Prague' },
    description: {
      cs: 'Umělecká intervence ve veřejném prostoru zkoumající směřování a cestu každého z nás. Kde jsme byli, kde jsme teď a kam míříme?',
      en: 'An artistic intervention in public space exploring the direction and journey of each of us. Where have we been, where are we now, and where are we heading?',
    },
  },
  {
    slug: 'pristi-stanice',
    title: { cs: 'Příští stanice', en: 'Next Station' },
    category: 'realizace',
    image: '/assets/portfolio/realizace/pristi-stanice.jpg',
    year: '2023',
    location: { cs: 'Praha', en: 'Prague' },
    description: {
      cs: 'Projekt zachycující příběhy cestujících a jejich vztah k místům, kterými projíždějí. Co pro nás znamená „příští stanice"?',
      en: 'A project capturing the stories of travelers and their relationship to the places they pass through. What does "next station" mean to us?',
    },
  },
  {
    slug: 'ozveny',
    title: { cs: 'Ozvěny', en: 'Echoes' },
    category: 'realizace',
    image: '/assets/portfolio/realizace/ozveny.jpg',
    year: '2025',
    location: { cs: 'Park Zahrádky, Praha 9', en: 'Park Zahrádky, Prague 9' },
    description: {
      cs: 'Betonové bloky v parku se prostřednictvím umělecké intervence staly nositeli místních příběhů a vzpomínek, propojujících minulost místa s přítomností.',
      en: 'Concrete blocks in the park became carriers of local stories and memories through artistic intervention, connecting the past of the place with the present.',
    },
  },
  {
    slug: 'we-should-have-a-talk',
    title: { cs: 'We Should Have a Talk', en: 'We Should Have a Talk' },
    category: 'realizace',
    image: '/assets/portfolio/realizace/we-should-have-a-talk.jpg',
    year: '2023',
    location: { cs: 'Praha', en: 'Prague' },
    description: {
      cs: 'Výstava zkoumající sílu dialogu a potřebu mluvit o tom, co je důležité. Interaktivní formát pozval návštěvníky k otevřenému sdílení.',
      en: 'An exhibition exploring the power of dialogue and the need to talk about what matters. The interactive format invited visitors to share openly.',
    },
  },
  {
    slug: 'mluvme-spolu',
    title: { cs: 'Mluvme spolu!', en: "Let's Talk!" },
    category: 'realizace',
    image: '/assets/portfolio/realizace/mluvme-spolu.jpg',
    year: '2023',
    location: { cs: 'Praha', en: 'Prague' },
    description: {
      cs: 'Participativní projekt o komunikaci a mezilidském propojení. Veřejný prostor se stal místem pro sdílení myšlenek a pocitů.',
      en: 'A participatory project about communication and human connection. Public space became a place for sharing thoughts and feelings.',
    },
  },
  {
    slug: 'queer-all-year',
    title: { cs: 'Queer All Year', en: 'Queer All Year' },
    category: 'realizace',
    image: '/assets/portfolio/realizace/queer-all-year.jpg',
    year: '2023',
    location: { cs: 'Praha', en: 'Prague' },
    description: {
      cs: 'Celoroční iniciativa oslavující queer komunitu a její příběhy prostřednictvím umění ve veřejném prostoru.',
      en: 'A year-round initiative celebrating the queer community and its stories through art in public space.',
    },
  },
  {
    slug: 'zmeny',
    title: { cs: 'Změny', en: 'Changes' },
    category: 'realizace',
    image: '/assets/portfolio/realizace/zmeny.webp',
    year: '2022',
    location: { cs: 'Podchod, Praha', en: 'Underpass, Prague' },
    description: {
      cs: 'Proměna podchodu v uměleckou galerii zachycující změny, kterými procházíme — osobní i společenské.',
      en: 'Transformation of an underpass into an art gallery capturing the changes we go through — personal and societal.',
    },
  },
  {
    slug: 'doteky-prahy',
    title: { cs: 'Doteky Prahy', en: 'Touches of Prague' },
    category: 'realizace',
    image: '/assets/portfolio/realizace/doteky-prahy.jpg',
    year: '2022',
    location: { cs: 'Praha', en: 'Prague' },
    description: {
      cs: 'Projekt mapující osobní vztahy lidí k Praze — místa, která je oslovují, dojímají a formují.',
      en: "A project mapping people's personal relationships with Prague — places that speak to them, move them, and shape them.",
    },
  },
  {
    slug: 'anonymni-intimita',
    title: { cs: 'Anonymní intimita', en: 'Anonymous Intimacy' },
    category: 'realizace',
    image: '/assets/portfolio/realizace/anonymni-intimita.jpg',
    year: '2021',
    location: { cs: 'Praha', en: 'Prague' },
    description: {
      cs: 'Počátek projektu PRAHO! — samolepky a plakáty s intimními výpověďmi anonymních lidí rozmístěné po Praze.',
      en: 'The beginning of the PRAHO! project — stickers and posters with intimate testimonials from anonymous people placed around Prague.',
    },
  },

  // === Autorská tvorba ===
  {
    slug: 'interaktivni-hra-a-co-ted',
    title: {
      cs: 'Interaktivní hra A co teď?',
      en: 'Interactive Game: And What Now?',
    },
    category: 'autorska-tvorba',
    image: '/assets/portfolio/autorska-tvorba/interaktivni-hra.jpg',
    year: '2024',
    description: {
      cs: 'Interaktivní karetní hra navržená pro otevřený rozhovor. Otázky inspirované projektem PRAHO! vás povedou k upřímnému sdílení.',
      en: 'An interactive card game designed for open conversation. Questions inspired by the PRAHO! project will guide you to honest sharing.',
    },
  },
  {
    slug: 'kompletni-edice-a-hra',
    title: {
      cs: 'PRAHO! Kompletní edice & Interaktivní hra',
      en: 'PRAHO! Complete Edition & Interactive Game',
    },
    category: 'autorska-tvorba',
    image: '/assets/portfolio/autorska-tvorba/kompletni-edice-a-hra.jpg',
    year: '2024',
    description: {
      cs: 'Kompletní set všech čtyř sezónních publikací PRAHO! společně s interaktivní karetní hrou A co teď?',
      en: 'The complete set of all four seasonal PRAHO! publications together with the interactive card game And What Now?',
    },
  },
  {
    slug: 'chci-ti-rict',
    title: { cs: 'Chci Ti říct', en: 'I Want to Tell You' },
    category: 'autorska-tvorba',
    image: '/assets/portfolio/autorska-tvorba/chci-ti-rict.jpg',
    year: '2025',
    description: {
      cs: 'Kartičky s komplimenty pro vaše blízké — malý kousek PRAHO! pro každodenní sdílení laskavosti.',
      en: 'Compliment cards for your loved ones — a small piece of PRAHO! for everyday sharing of kindness.',
    },
  },
  {
    slug: 'kompletni-edice',
    title: { cs: 'PRAHO! Kompletní edice', en: 'PRAHO! Complete Edition' },
    category: 'autorska-tvorba',
    image: '/assets/portfolio/autorska-tvorba/kompletni-edice.jpg',
    year: '2024',
    description: {
      cs: 'Čtyři sezónní publikace v jednom balení — kompletní příběh projektu PRAHO! od jara do zimy.',
      en: 'Four seasonal publications in one package — the complete story of the PRAHO! project from spring to winter.',
    },
  },
  {
    slug: 'publikace-jaro',
    title: { cs: 'Publikace PRAHO! 1/4 — Jaro', en: 'Publication PRAHO! 1/4 — Spring' },
    category: 'autorska-tvorba',
    image: '/assets/portfolio/autorska-tvorba/publikace-jaro.jpg',
    year: '2023',
    description: {
      cs: 'První díl sezónní čtyřdílné publikace PRAHO! věnovaný jaru — novým začátkům a probouzení.',
      en: 'The first part of the seasonal four-part PRAHO! publication dedicated to spring — new beginnings and awakening.',
    },
  },
  {
    slug: 'publikace-leto',
    title: { cs: 'Publikace PRAHO! 2/4 — Léto', en: 'Publication PRAHO! 2/4 — Summer' },
    category: 'autorska-tvorba',
    image: '/assets/portfolio/autorska-tvorba/publikace-leto.jpg',
    year: '2023',
    description: {
      cs: 'Druhý díl sezónní publikace PRAHO! věnovaný létu — intenzitě prožitků a letní svobodě.',
      en: 'The second part of the seasonal PRAHO! publication dedicated to summer — intensity of experiences and summer freedom.',
    },
  },
  {
    slug: 'publikace-podzim',
    title: { cs: 'Publikace PRAHO! 3/4 — Podzim', en: 'Publication PRAHO! 3/4 — Autumn' },
    category: 'autorska-tvorba',
    image: '/assets/portfolio/autorska-tvorba/publikace-podzim.jpg',
    year: '2023',
    description: {
      cs: 'Třetí díl sezónní publikace PRAHO! věnovaný podzimu — reflexi a proměnám.',
      en: 'The third part of the seasonal PRAHO! publication dedicated to autumn — reflection and transformation.',
    },
  },
  {
    slug: 'publikace-zima',
    title: { cs: 'Publikace PRAHO! 4/4 — Zima', en: 'Publication PRAHO! 4/4 — Winter' },
    category: 'autorska-tvorba',
    image: '/assets/portfolio/autorska-tvorba/publikace-zima.jpg',
    year: '2023',
    description: {
      cs: 'Čtvrtý a poslední díl sezónní publikace PRAHO! věnovaný zimě — klidu, intimitě a uzavření cyklu.',
      en: 'The fourth and final part of the seasonal PRAHO! publication dedicated to winter — calm, intimacy, and closing the cycle.',
    },
  },
]

export function getPortfolioByCategory(category: 'realizace' | 'autorska-tvorba'): PortfolioItem[] {
  return PORTFOLIO_ITEMS.filter((item) => item.category === category)
}

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return PORTFOLIO_ITEMS.find((item) => item.slug === slug)
}
