'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTranslations } from 'next-intl'

type CookiePreferences = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'praho-cookie-consent'

function getStoredPreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null
    return JSON.parse(stored) as CookiePreferences
  } catch {
    return null
  }
}

function storePreferences(prefs: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
}

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean
  disabled?: boolean
  onChange: (val: boolean) => void
  label: string
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? 'bg-primary' : 'bg-border-light'
        } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      <span className="text-[13px] leading-tight">{label}</span>
    </label>
  )
}

export function CookieConsent() {
  const t = useTranslations('cookies')
  const [visible, setVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const stored = getStoredPreferences()
    if (!stored) {
      setVisible(true)
    }
  }, [])

  const accept = useCallback(
    (prefs: CookiePreferences) => {
      storePreferences(prefs)
      setVisible(false)
    },
    [],
  )

  function handleAcceptAll() {
    accept({ necessary: true, analytics: true, marketing: true })
  }

  function handleDecline() {
    accept({ necessary: true, analytics: false, marketing: false })
  }

  function handleSaveCustom() {
    accept({ necessary: true, analytics, marketing })
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label={t('heading')}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border-light/30 bg-white p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:p-8"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        {/* Close button */}
        <button
          type="button"
          onClick={handleDecline}
          className="absolute right-4 top-4 p-1 text-gray transition-colors hover:text-text"
          aria-label={t('close')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col gap-6 pr-8 lg:flex-row lg:items-start lg:gap-10 lg:pr-0">
          {/* Text */}
          <div className="flex-1">
            <h2 className="mb-2 font-heading text-[18px] font-medium leading-[25px] text-text">
              {t('heading')}
            </h2>
            <p className="text-[13px] leading-[22px] text-text-muted">
              {t('description')}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowCustomize(!showCustomize)}
              className="h-[44px] border border-border-light px-6 font-mono text-[12px] uppercase tracking-[3.6px] text-text transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              {t('customize')}
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="h-[44px] border border-border-light px-6 font-mono text-[12px] uppercase tracking-[3.6px] text-text transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              {t('decline')}
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="h-[44px] border border-transparent bg-black px-6 font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:border-black hover:bg-white hover:text-black"
            >
              {t('acceptAll')}
            </button>
          </div>
        </div>

        {/* Customize panel */}
        {showCustomize && (
          <div className="mt-6 border-t border-border-light/30 pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
                <Toggle checked disabled label={t('necessary')} onChange={() => {}} />
                <Toggle checked={analytics} label={t('analytics')} onChange={setAnalytics} />
                <Toggle checked={marketing} label={t('marketing')} onChange={setMarketing} />
              </div>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="h-[44px] border border-transparent bg-black px-6 font-mono text-[12px] uppercase tracking-[3.6px] text-white transition-colors hover:border-black hover:bg-white hover:text-black"
              >
                {t('save')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
