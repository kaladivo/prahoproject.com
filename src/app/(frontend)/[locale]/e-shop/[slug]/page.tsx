import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

import { Container, H1 } from '@/components/ui'
import { AddToCartButton } from '@/components/AddToCartButton'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'products',
    where: { slug: { equals: slug } },
    locale: locale as 'cs' | 'en',
    limit: 1,
  })
  const product = docs[0]
  if (!product) return { title: 'Product not found' }
  return {
    title: `${typeof product.name === 'string' ? product.name : ''} — PRAHO! Project`,
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations('shop')

  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'products',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    locale: locale as 'cs' | 'en',
    limit: 1,
  })

  const product = docs[0]
  if (!product) notFound()

  const name = typeof product.name === 'string' ? product.name : ''
  const featuredImage = typeof product.featuredImage === 'object' && product.featuredImage
  const gallery = product.gallery ?? []
  const isVariable = product.productType === 'variable'
  const variants = product.variants ?? []
  const inStock = isVariable
    ? variants.some((v) => (v.stock ?? 0) > 0)
    : (product.stock ?? 0) > 0

  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Images */}
          <div className="space-y-4">
            {featuredImage && featuredImage.url ? (
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={featuredImage.url}
                  alt={typeof featuredImage.alt === 'string' ? featuredImage.alt : name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            ) : (
              <div className="flex aspect-square items-center justify-center bg-gray-50 text-gray-300">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
            )}
            {gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {gallery.map((item, i) => {
                  const img = typeof item.image === 'object' && item.image
                  if (!img || !img.url) return null
                  return (
                    <div key={i} className="relative aspect-square overflow-hidden bg-gray-50">
                      <Image
                        src={img.url}
                        alt={typeof img.alt === 'string' ? img.alt : `${name} ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 25vw, 12vw"
                      />
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Product info */}
          <div>
            <H1 className="mb-6">{name}</H1>

            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[18px] tracking-[2px] text-text">
                {product.price} Kč
              </span>
              {product.compareAtPrice && product.compareAtPrice > product.price && (
                <span className="font-mono text-[14px] tracking-[2px] text-gray line-through">
                  {product.compareAtPrice} Kč
                </span>
              )}
            </div>

            {typeof product.excerpt === 'string' && product.excerpt && (
              <p className="mb-8 text-text-muted">{product.excerpt}</p>
            )}

            <AddToCartButton
              productId={String(product.id)}
              name={name}
              price={product.price}
              slug={product.slug}
              image={featuredImage && featuredImage.url ? featuredImage.url : undefined}
              inStock={inStock}
              variants={isVariable ? variants.map((v) => ({
                name: typeof v.name === 'string' ? v.name : '',
                price: v.price,
                stock: v.stock ?? 0,
              })) : undefined}
            />

            {/* Description */}
            {product.description && (
              <div className="mt-12 border-t border-border-light/30 pt-8">
                <div className="prose prose-sm max-w-none">
                  {/* Rich text would need a renderer; for now show excerpt */}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  )
}
