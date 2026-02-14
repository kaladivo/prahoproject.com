'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useCart } from '@/components/CartProvider'

type Variant = {
  name: string
  price: number
  stock: number
}

type Props = {
  productId: string
  name: string
  price: number
  slug: string
  image?: string
  inStock: boolean
  variants?: Variant[]
}

export function AddToCartButton({ productId, name, price, slug, image, inStock, variants }: Props) {
  const t = useTranslations('shop')
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    variants && variants.length > 0 ? variants[0] : null,
  )
  const [added, setAdded] = useState(false)

  const effectivePrice = selectedVariant ? selectedVariant.price : price
  const effectiveInStock = selectedVariant ? selectedVariant.stock > 0 : inStock

  function handleAdd() {
    addItem({
      productId,
      variantName: selectedVariant?.name,
      name: selectedVariant ? `${name} — ${selectedVariant.name}` : name,
      price: effectivePrice,
      image,
      slug,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="space-y-4">
      {variants && variants.length > 0 && (
        <div>
          <label className="mb-2 block font-mono text-[12px] uppercase tracking-[3.6px] text-text-muted">
            {t('selectVariant')}
          </label>
          <div className="flex flex-wrap gap-2">
            {variants.map((v) => (
              <button
                key={v.name}
                type="button"
                onClick={() => setSelectedVariant(v)}
                className={`border px-4 py-2 font-mono text-[12px] uppercase tracking-[2.4px] transition-colors ${
                  selectedVariant?.name === v.name
                    ? 'border-black bg-black text-white'
                    : 'border-border-light text-text hover:border-black'
                } ${v.stock <= 0 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={v.stock <= 0}
              >
                {v.name} — {v.price} Kč
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleAdd}
        disabled={!effectiveInStock || added}
        className={`inline-flex h-[66px] w-full items-center justify-center border font-mono text-[12px] uppercase tracking-[3.6px] transition-colors ${
          !effectiveInStock
            ? 'cursor-not-allowed border-gray bg-gray-100 text-gray'
            : added
              ? 'border-green-600 bg-green-600 text-white'
              : 'border-black bg-black text-white hover:bg-white hover:text-black cursor-pointer'
        }`}
      >
        {!effectiveInStock ? t('outOfStock') : added ? t('added') : t('addToCart')}
      </button>
    </div>
  )
}
