import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'

import { Container, H1 } from '@/components/ui'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

type BlogPost = {
  title: { cs: string; en: string }
  date: string
  category: 'news' | 'therapeutic'
  image: string | null
  excerpt: { cs: string; en: string }
}

const BLOG_POSTS: BlogPost[] = [
  {
    title: {
      cs: 'Výpovědi, které dostávají tvar – Misky „Říkám si"',
      en: 'Testimonials taking form – "I Say to Myself" bowls',
    },
    date: '2026-01-13',
    category: 'news',
    image: null,
    excerpt: {
      cs: 'Příběhy a výpovědi lidí se proměňují v keramické misky — nový formát participativního umění.',
      en: 'People\'s stories and testimonials transform into ceramic bowls — a new format of participatory art.',
    },
  },
  {
    title: {
      cs: 'Čtyři roky na cestě. A nový krok před námi. Kam kráčíš?',
      en: 'Four years on the road. A new step ahead. Where are you going?',
    },
    date: '2025-10-14',
    category: 'news',
    image: null,
    excerpt: {
      cs: 'Ohlédnutí za čtyřmi lety projektu PRAHO! a pohled na to, co nás čeká.',
      en: 'Looking back at four years of the PRAHO! project and ahead at what awaits us.',
    },
  },
  {
    title: {
      cs: 'Čeho si na Praze nejvíc vážíš? Přijď nám to říct do Kunratic a Slivence',
      en: 'What do you value most about Prague? Come tell us in Kunratice and Slivenec',
    },
    date: '2025-10-08',
    category: 'news',
    image: null,
    excerpt: {
      cs: 'Zveme vás k participaci — přijďte sdílet, co pro vás Praha znamená.',
      en: 'We invite you to participate — come share what Prague means to you.',
    },
  },
  {
    title: {
      cs: 'Terapeutické okénko: Umíš ukázat svou zranitelnost?',
      en: 'Therapeutic Window: Can you show your vulnerability?',
    },
    date: '2025-08-12',
    category: 'therapeutic',
    image: null,
    excerpt: {
      cs: 'Zamyšlení nad zranitelností a její rolí v mezilidských vztazích.',
      en: 'Reflecting on vulnerability and its role in interpersonal relationships.',
    },
  },
  {
    title: {
      cs: 'Terapeutické okénko: Máš tendenci někdy upadat do sebelítosti?',
      en: 'Therapeutic Window: Do you tend to fall into self-pity?',
    },
    date: '2025-06-15',
    category: 'therapeutic',
    image: null,
    excerpt: {
      cs: 'Terapeutický pohled na sebelítost — jak ji rozpoznat a jak s ní pracovat.',
      en: 'A therapeutic look at self-pity — how to recognize it and work with it.',
    },
  },
  {
    title: {
      cs: 'Terapeutické okénko: Dostal/a ses někdy do bodu...',
      en: 'Therapeutic Window: Have you ever reached a point...',
    },
    date: '2025-04-29',
    category: 'therapeutic',
    image: null,
    excerpt: {
      cs: 'Otevřený rozhovor o momentech, kdy ztrácíme víru v lásku.',
      en: 'An open conversation about moments when we lose faith in love.',
    },
  },
  {
    title: {
      cs: 'Novinka z PRAHO! project: Komplimentky Chci Ti říct',
      en: 'New from PRAHO! project: "I Want to Tell You" compliment cards',
    },
    date: '2025-02-05',
    category: 'news',
    image: null,
    excerpt: {
      cs: 'Představujeme nový produkt — kartičky s komplimenty pro vaše blízké.',
      en: 'Introducing a new product — compliment cards for your loved ones.',
    },
  },
  {
    title: {
      cs: 'Jak může umění proměnit veřejný prostor?',
      en: 'How can art transform public space?',
    },
    date: '2025-01-17',
    category: 'news',
    image: null,
    excerpt: {
      cs: 'Workshop o proměně veřejného prostoru prostřednictvím umění a komunitního zapojení.',
      en: 'Workshop on transforming public space through art and community engagement.',
    },
  },
  {
    title: {
      cs: 'Nový web – nové stránky našeho příběhu',
      en: 'New website – new pages of our story',
    },
    date: '2024-11-08',
    category: 'news',
    image: null,
    excerpt: {
      cs: 'S novým webem přinášíme lepší přehlednost, přístupnost a prostor pro naše příběhy.',
      en: 'With the new website, we bring better clarity, accessibility, and space for our stories.',
    },
  },
]

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString(locale === 'cs' ? 'cs-CZ' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('blog')

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-4">{t('title')}</H1>
        <p className="mb-12 max-w-[var(--width-content)] text-text-muted">{t('intro')}</p>

        {/* Category filter */}
        <div className="mb-12 flex gap-4">
          {(['allCategories', 'news', 'therapeutic'] as const).map((cat) => (
            <span
              key={cat}
              className="font-mono text-[13px] uppercase tracking-[3.9px] text-text cursor-default"
            >
              {t(cat)}
            </span>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 gap-x-[var(--spacing-grid-gutter)] gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              {/* Placeholder thumbnail */}
              <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-warm">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={locale === 'cs' ? post.title.cs : post.title.en}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="font-display text-[40px] text-text/10">PRAHO!</span>
                  </div>
                )}
              </div>

              {/* Category + date */}
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[3.3px] text-primary">
                  {t(post.category)}
                </span>
                <span className="text-[12px] text-gray">
                  {formatDate(post.date, locale)}
                </span>
              </div>

              {/* Title */}
              <h5 className="mb-2 transition-colors group-hover:text-primary">
                {locale === 'cs' ? post.title.cs : post.title.en}
              </h5>

              {/* Excerpt */}
              <p className="text-[13px] leading-relaxed text-text-muted">
                {locale === 'cs' ? post.excerpt.cs : post.excerpt.en}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  )
}
