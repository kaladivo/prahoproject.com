'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
import { useCart } from '@/components/CartProvider'
import { Link } from '@/i18n/navigation'

const SHIPPING_COSTS = {
  zasilkovna: 89,
  pickup: 0,
} as const

type ShippingMethod = keyof typeof SHIPPING_COSTS

export function CheckoutForm() {
  const t = useTranslations('checkout')
  const tCart = useTranslations('cart')
  const router = useRouter()
  const { items, subtotal, clearCart } = useCart()

  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('zasilkovna')
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    postalCode: '',
    country: 'CZ',
    notes: '',
  })

  const shippingCost = SHIPPING_COSTS[shippingMethod]
  const total = subtotal + shippingCost

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (items.length === 0) return

    setProcessing(true)
    setError('')

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((item) => ({
            productId: item.productId,
            variantName: item.variantName,
            quantity: item.quantity,
            unitPrice: item.price,
          })),
          customer: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
          },
          shippingAddress: {
            street: form.street,
            city: form.city,
            postalCode: form.postalCode,
            country: form.country,
          },
          shippingMethod,
          notes: form.notes,
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Checkout failed')

      if (data.url) {
        clearCart()
        window.location.href = data.url
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setProcessing(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="mb-8 text-text-muted">{tCart('empty')}</p>
        <Link
          href="/e-shop"
          className="inline-flex h-[66px] items-center justify-center border border-black bg-black px-[83px] font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:bg-white hover:text-black"
        >
          {tCart('continueShopping')}
        </Link>
      </div>
    )
  }

  const inputClass =
    'w-full border border-border-light px-4 py-3 font-mono text-[13px] tracking-[1px] text-text outline-none transition-colors focus:border-black placeholder:text-gray'

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.5px] text-text md:text-[36px] mb-12">
        {t('title')}
      </h1>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left column - form */}
        <div className="lg:col-span-7 space-y-10">
          {/* Contact info */}
          <section>
            <h2 className="mb-6 font-mono text-[14px] uppercase tracking-[4.2px] text-text">
              {t('contactInfo')}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder={t('firstName')}
                value={form.firstName}
                onChange={(e) => updateField('firstName', e.target.value)}
                className={inputClass}
              />
              <input
                type="text"
                required
                placeholder={t('lastName')}
                value={form.lastName}
                onChange={(e) => updateField('lastName', e.target.value)}
                className={inputClass}
              />
              <input
                type="email"
                required
                placeholder={t('email')}
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={inputClass}
              />
              <input
                type="tel"
                placeholder={t('phone')}
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className={inputClass}
              />
            </div>
          </section>

          {/* Shipping method */}
          <section>
            <h2 className="mb-6 font-mono text-[14px] uppercase tracking-[4.2px] text-text">
              {t('shippingMethod')}
            </h2>
            <div className="space-y-3">
              <label
                className={`flex cursor-pointer items-center justify-between border p-4 transition-colors ${
                  shippingMethod === 'zasilkovna' ? 'border-black' : 'border-border-light hover:border-gray'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    value="zasilkovna"
                    checked={shippingMethod === 'zasilkovna'}
                    onChange={() => setShippingMethod('zasilkovna')}
                    className="accent-black"
                  />
                  <div>
                    <span className="block font-mono text-[13px] uppercase tracking-[3.9px] text-text">
                      {t('zasilkovna')}
                    </span>
                    <span className="block font-mono text-[11px] tracking-[1px] text-text-muted">
                      {t('zasilkovnaDesc')}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[13px] tracking-[2px] text-text">
                  {t('zasilkovnaPrice')}
                </span>
              </label>

              <label
                className={`flex cursor-pointer items-center justify-between border p-4 transition-colors ${
                  shippingMethod === 'pickup' ? 'border-black' : 'border-border-light hover:border-gray'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    value="pickup"
                    checked={shippingMethod === 'pickup'}
                    onChange={() => setShippingMethod('pickup')}
                    className="accent-black"
                  />
                  <div>
                    <span className="block font-mono text-[13px] uppercase tracking-[3.9px] text-text">
                      {t('pickup')}
                    </span>
                    <span className="block font-mono text-[11px] tracking-[1px] text-text-muted">
                      {t('pickupDesc')}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[13px] tracking-[2px] text-text">
                  {t('pickupPrice')}
                </span>
              </label>
            </div>
          </section>

          {/* Shipping address (for Zásilkovna) */}
          {shippingMethod === 'zasilkovna' && (
            <section>
              <h2 className="mb-6 font-mono text-[14px] uppercase tracking-[4.2px] text-text">
                {t('shippingAddress')}
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder={t('street')}
                  value={form.street}
                  onChange={(e) => updateField('street', e.target.value)}
                  className={inputClass}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder={t('city')}
                    value={form.city}
                    onChange={(e) => updateField('city', e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    required
                    placeholder={t('postalCode')}
                    value={form.postalCode}
                    onChange={(e) => updateField('postalCode', e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </section>
          )}

          {/* Notes */}
          <section>
            <textarea
              placeholder={t('notes')}
              value={form.notes}
              onChange={(e) => updateField('notes', e.target.value)}
              rows={3}
              className={inputClass}
            />
          </section>
        </div>

        {/* Right column - summary */}
        <div className="lg:col-span-5">
          <div className="border border-border-light p-6">
            <h2 className="mb-6 font-mono text-[14px] uppercase tracking-[4.2px] text-text">
              {t('orderSummary')}
            </h2>

            <div className="space-y-4 border-b border-border-light/30 pb-4">
              {items.map((item) => (
                <div key={`${item.productId}-${item.variantName ?? ''}`} className="flex justify-between">
                  <span className="font-mono text-[12px] tracking-[1px] text-text">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-mono text-[12px] tracking-[1px] text-text">
                    {item.price * item.quantity} Kč
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-b border-border-light/30 py-4">
              <div className="flex justify-between">
                <span className="font-mono text-[12px] uppercase tracking-[2.4px] text-text-muted">
                  {tCart('subtotal')}
                </span>
                <span className="font-mono text-[13px] tracking-[2px] text-text">
                  {subtotal} Kč
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-[12px] uppercase tracking-[2.4px] text-text-muted">
                  {tCart('shipping')}
                </span>
                <span className="font-mono text-[13px] tracking-[2px] text-text">
                  {shippingCost === 0 ? t('pickupPrice') : `${shippingCost} Kč`}
                </span>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <span className="font-mono text-[13px] uppercase tracking-[3.9px] text-text">
                {tCart('orderTotal')}
              </span>
              <span className="font-mono text-[16px] tracking-[2px] text-text font-semibold">
                {total} Kč
              </span>
            </div>

            {error && (
              <p className="mt-4 font-mono text-[12px] text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={processing}
              className="mt-6 flex h-[66px] w-full items-center justify-center border border-black bg-black font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing ? t('processing') : t('pay')}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
