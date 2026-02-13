'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import type { Locale } from '@/i18n/routing'

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('common')

  const targetLocale: Locale = locale === 'cs' ? 'en' : 'cs'

  function handleSwitch() {
    router.replace(pathname, { locale: targetLocale })
  }

  return (
    <button
      onClick={handleSwitch}
      className="rounded border border-gray-300 px-3 py-1.5 text-sm transition-colors hover:bg-gray-100"
      type="button"
    >
      {t('switchLanguage')}
    </button>
  )
}
