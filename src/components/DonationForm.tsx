'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const PRESET_AMOUNTS = [100, 250, 500, 1000, 2500]

export function DonationForm() {
  const t = useTranslations('donation')
  const [step, setStep] = useState(1)
  const [amount, setAmount] = useState<number | null>(500)
  const [customAmount, setCustomAmount] = useState('')
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const effectiveAmount = customAmount ? Number(customAmount) : amount

  function updateField(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleAmountSelect(value: number) {
    setAmount(value)
    setCustomAmount('')
  }

  function handleCustomAmount(value: string) {
    setCustomAmount(value)
    setAmount(null)
  }

  async function handleSubmit() {
    if (!effectiveAmount || effectiveAmount <= 0) return

    setProcessing(true)
    setError('')

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{
            productId: 'donation',
            quantity: 1,
            unitPrice: effectiveAmount,
            variantName: `Donation — ${effectiveAmount} Kč`,
          }],
          customer: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: '',
          },
          shippingAddress: {
            street: 'N/A',
            city: 'N/A',
            postalCode: '00000',
            country: 'CZ',
          },
          shippingMethod: 'pickup',
          notes: form.message ? `Donation message: ${form.message}` : 'Donation',
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Payment failed')

      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setProcessing(false)
    }
  }

  const inputClass =
    'w-full border border-border-light px-4 py-3 font-mono text-[13px] tracking-[1px] text-text outline-none transition-colors focus:border-black placeholder:text-gray'

  // Step indicators
  const steps = [
    { num: 1, title: t('step1Title') },
    { num: 2, title: t('step2Title') },
    { num: 3, title: t('step3Title') },
  ]

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="font-heading text-[28px] font-semibold leading-[1.2] tracking-[-0.5px] text-text md:text-[36px] mb-4">
        {t('title')}
      </h1>
      <p className="mb-12 text-text-muted">{t('intro')}</p>

      {/* Step indicator */}
      <div className="mb-12 flex items-center justify-center gap-8">
        {steps.map((s) => (
          <div key={s.num} className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-[12px] ${
                step >= s.num ? 'bg-black text-white' : 'border border-border-light text-gray'
              }`}
            >
              {s.num}
            </div>
            <span
              className={`hidden font-mono text-[12px] uppercase tracking-[2.4px] sm:block ${
                step >= s.num ? 'text-text' : 'text-gray'
              }`}
            >
              {s.title}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1: Amount */}
      {step === 1 && (
        <div>
          <p className="mb-6 text-center text-text-muted">{t('step1Desc')}</p>
          <div className="mb-6 flex flex-wrap justify-center gap-3">
            {PRESET_AMOUNTS.map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => handleAmountSelect(val)}
                className={`border px-6 py-3 font-mono text-[14px] tracking-[2px] transition-colors ${
                  amount === val && !customAmount
                    ? 'border-black bg-black text-white'
                    : 'border-border-light text-text hover:border-black'
                }`}
              >
                {val} Kč
              </button>
            ))}
          </div>
          <div className="mx-auto max-w-xs">
            <input
              type="number"
              min="1"
              placeholder={t('amountPlaceholder')}
              value={customAmount}
              onChange={(e) => handleCustomAmount(e.target.value)}
              className={`${inputClass} text-center`}
            />
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!effectiveAmount || effectiveAmount <= 0}
              className="inline-flex h-[66px] items-center justify-center border border-black bg-black px-[83px] font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t('next')}
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Contact info */}
      {step === 2 && (
        <div>
          <p className="mb-6 text-center text-text-muted">{t('step2Desc')}</p>
          <div className="space-y-4">
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
            </div>
            <input
              type="email"
              required
              placeholder={t('email')}
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={inputClass}
            />
            <textarea
              placeholder={t('message')}
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
              rows={3}
              className={inputClass}
            />
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex h-[66px] items-center justify-center border border-border-light px-12 font-mono text-[12px] uppercase tracking-[3.6px] text-text transition-colors hover:border-black"
            >
              {t('back')}
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!form.firstName || !form.lastName || !form.email}
              className="inline-flex h-[66px] items-center justify-center border border-black bg-black px-[83px] font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {t('next')}
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirm & Pay */}
      {step === 3 && (
        <div>
          <p className="mb-6 text-center text-text-muted">{t('step3Desc')}</p>

          <div className="mx-auto max-w-sm border border-border-light p-6">
            <div className="space-y-3 text-center">
              <span className="block font-mono text-[11px] uppercase tracking-[3.3px] text-text-muted">
                {t('step1Title')}
              </span>
              <span className="block font-mono text-[24px] tracking-[2px] text-text">
                {effectiveAmount} Kč
              </span>
              <span className="block font-mono text-[12px] tracking-[1px] text-text-muted">
                {form.firstName} {form.lastName} · {form.email}
              </span>
            </div>
          </div>

          {error && (
            <p className="mt-4 text-center font-mono text-[12px] text-red-600">{error}</p>
          )}

          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex h-[66px] items-center justify-center border border-border-light px-12 font-mono text-[12px] uppercase tracking-[3.6px] text-text transition-colors hover:border-black"
            >
              {t('back')}
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={processing}
              className="inline-flex h-[66px] items-center justify-center border border-black bg-black px-[83px] font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {processing ? t('processing') : t('donate')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
