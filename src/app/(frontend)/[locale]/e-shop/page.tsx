import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import NextLink from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Container, H1 } from '@/components/ui'

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'shop' })
  return {
    title: `${t('title')} — PRAHO! Project`,
  }
}

const CATEGORIES = ['publications', 'games', 'merch', 'other'] as const

export default async function ShopPage({ params, searchParams }: Props) {
  const { locale } = await params
  const { category } = await searchParams
  setRequestLocale(locale)
  const t = await getTranslations('shop')

  const payload = await getPayload({ config })
  const { docs: products } = await payload.find({
    collection: 'products',
    where: {
      status: { equals: 'published' },
      ...(category ? { category: { equals: category } } : {}),
    },
    locale: locale as 'cs' | 'en',
    sort: '-createdAt',
    limit: 100,
  })

  return (
    <main className="py-16 md:py-24">
      <Container>
        <H1 className="mb-4">{t('title')}</H1>
        <p className="mb-12 max-w-[var(--width-content)] text-text-muted">
          {t('intro')}
        </p>

        {/* Category filter */}
        <div className="mb-12 flex flex-wrap gap-6">
          <NextLink
            href="/e-shop"
            className={`font-mono text-[13px] uppercase tracking-[3.9px] pb-1 transition-colors ${
              !category ? 'text-primary border-b-2 border-primary cursor-default' : 'text-gray hover:text-primary'
            }`}
          >
            {t('allCategories')}
          </NextLink>
          {CATEGORIES.map((cat) => (
            <NextLink
              key={cat}
              href={`/e-shop?category=${cat}`}
              className={`font-mono text-[13px] uppercase tracking-[3.9px] pb-1 transition-colors ${
                category === cat ? 'text-primary border-b-2 border-primary cursor-default' : 'text-gray hover:text-primary'
              }`}
            >
              {t(cat)}
            </NextLink>
          ))}
        </div>

        {products.length === 0 ? (
          <p className="text-text-muted">{t('noProducts')}</p>
        ) : (
          <div className="grid grid-cols-1 gap-[var(--spacing-grid-gutter)] sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const image = typeof product.featuredImage === 'object' && product.featuredImage
              return (
                <NextLink
                  key={product.id}
                  href={`/e-shop/${product.slug}`}
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    {image && image.url ? (
                      <Image
                        src={image.url}
                        alt={typeof image.alt === 'string' ? image.alt : (typeof product.name === 'string' ? product.name : '')}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-300">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </div>
                    )}
                    {product.compareAtPrice && product.compareAtPrice > product.price && (
                      <span className="absolute left-3 top-3 bg-primary px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-white">
                        Sale
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-mono text-[14px] uppercase tracking-[4.2px] text-text group-hover:text-primary transition-colors">
                      {typeof product.name === 'string' ? product.name : ''}
                    </h3>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="font-mono text-[14px] tracking-[2px] text-text">
                        {product.price} Kč
                      </span>
                      {product.compareAtPrice && product.compareAtPrice > product.price && (
                        <span className="font-mono text-[12px] tracking-[2px] text-gray line-through">
                          {product.compareAtPrice} Kč
                        </span>
                      )}
                    </div>
                  </div>
                </NextLink>
              )
            })}
          </div>
        )}
      </Container>
    </main>
  )
}
