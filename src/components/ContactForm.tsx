'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button, Input, Textarea } from '@/components/ui'

export function ContactForm() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          turnstileToken: data.get('cf-turnstile-response'),
        }),
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Input
        name="name"
        placeholder={t('namePlaceholder')}
        required
        disabled={status === 'sending'}
      />
      <Input
        name="email"
        type="email"
        placeholder={t('emailPlaceholder')}
        required
        disabled={status === 'sending'}
      />
      <Textarea
        name="message"
        placeholder={t('messagePlaceholder')}
        rows={4}
        required
        disabled={status === 'sending'}
      />

      {/* Cloudflare Turnstile widget placeholder — renders when NEXT_PUBLIC_TURNSTILE_SITE_KEY is set */}
      {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
        <div
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          data-theme="light"
        />
      )}

      <Button variant="submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t('sending') : t('submit')}
      </Button>

      {status === 'sent' && (
        <p className="text-sm text-primary">{t('successMessage')}</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600">{t('errorMessage')}</p>
      )}
    </form>
  )
}
