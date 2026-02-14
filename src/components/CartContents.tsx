'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useCart } from '@/components/CartProvider'

export function CartContents() {
  const t = useTranslations('cart')
  const { items, removeItem, updateQuantity, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h1 className="font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.5px] text-text md:text-[36px] mb-4">
          {t('title')}
        </h1>
        <p className="text-text-muted mb-8">{t('empty')}</p>
        <Link
          href="/e-shop"
          className="inline-flex h-[66px] items-center justify-center border border-black bg-black px-[83px] font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:bg-white hover:text-black"
        >
          {t('continueShopping')}
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.5px] text-text md:text-[36px] mb-12">
        {t('title')}
      </h1>

      {/* Header */}
      <div className="hidden border-b border-border-light/30 pb-4 md:grid md:grid-cols-12 md:gap-4">
        <span className="col-span-6 font-mono text-[11px] uppercase tracking-[3.3px] text-text-muted">
          {t('product')}
        </span>
        <span className="col-span-2 font-mono text-[11px] uppercase tracking-[3.3px] text-text-muted">
          {t('price')}
        </span>
        <span className="col-span-2 font-mono text-[11px] uppercase tracking-[3.3px] text-text-muted">
          {t('quantity')}
        </span>
        <span className="col-span-2 text-right font-mono text-[11px] uppercase tracking-[3.3px] text-text-muted">
          {t('total')}
        </span>
      </div>

      {/* Items */}
      <div className="divide-y divide-border-light/30">
        {items.map((item) => (
          <div key={`${item.productId}-${item.variantName ?? ''}`} className="py-6 md:grid md:grid-cols-12 md:items-center md:gap-4">
            {/* Product */}
            <div className="col-span-6 flex items-center gap-4">
              {item.image ? (
                <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-gray-50">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                </div>
              ) : (
                <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-gray-50 text-gray-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                  </svg>
                </div>
              )}
              <div>
                <Link
                  href={`/e-shop/${item.slug}`}
                  className="font-mono text-[13px] uppercase tracking-[3.9px] text-text hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
                <button
                  type="button"
                  onClick={() => removeItem(item.productId, item.variantName)}
                  className="mt-1 block font-mono text-[11px] uppercase tracking-[2.2px] text-gray hover:text-primary transition-colors"
                >
                  {t('remove')}
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="col-span-2 mt-2 md:mt-0">
              <span className="font-mono text-[13px] tracking-[2px] text-text">{item.price} Kč</span>
            </div>

            {/* Quantity */}
            <div className="col-span-2 mt-2 md:mt-0">
              <div className="inline-flex items-center border border-border-light">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.productId, item.quantity - 1, item.variantName)}
                  className="px-3 py-2 font-mono text-[14px] text-text hover:text-primary transition-colors"
                >
                  −
                </button>
                <span className="px-3 py-2 font-mono text-[13px] text-text">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.productId, item.quantity + 1, item.variantName)}
                  className="px-3 py-2 font-mono text-[14px] text-text hover:text-primary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Line total */}
            <div className="col-span-2 mt-2 text-right md:mt-0">
              <span className="font-mono text-[13px] tracking-[2px] text-text">
                {item.price * item.quantity} Kč
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 flex flex-col items-end border-t border-border-light/30 pt-8">
        <div className="w-full max-w-sm space-y-3">
          <div className="flex justify-between">
            <span className="font-mono text-[13px] uppercase tracking-[3.9px] text-text-muted">
              {t('subtotal')}
            </span>
            <span className="font-mono text-[14px] tracking-[2px] text-text">{subtotal} Kč</span>
          </div>
          <Link
            href="/checkout"
            className="mt-6 flex h-[66px] w-full items-center justify-center border border-black bg-black font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:bg-white hover:text-black"
          >
            {t('checkout')}
          </Link>
          <Link
            href="/e-shop"
            className="mt-3 block text-center font-mono text-[12px] uppercase tracking-[3.6px] text-gray hover:text-primary transition-colors"
          >
            {t('continueShopping')}
          </Link>
        </div>
      </div>
    </div>
  )
}
