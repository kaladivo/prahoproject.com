'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

export function Hero() {
  const t = useTranslations('home')

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white">
      {/* Background blob — Prague river/map outline */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/assets/hero/pozadi-vrstva.png"
          alt=""
          fill
          className="animate-hero-drift object-cover object-center"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Overlay layer */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/assets/hero/hero-overlay.png"
          alt=""
          fill
          className="animate-hero-drift-reverse object-contain object-left-top opacity-60"
          priority
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-[800px] flex-col items-center px-6 text-center">
        <p className="font-display text-[clamp(32px,6vw,70px)] font-normal leading-[1.1] text-black">
          {t('heroTagline')}
        </p>

        <Link
          href="/o-projektu"
          className="mt-10 inline-block border border-transparent bg-black px-[83px] py-[20px] font-mono text-[12px] font-normal uppercase tracking-[3.6px] text-white transition-all duration-300 hover:border-black hover:bg-white hover:text-black"
        >
          {t('heroLink')}
        </Link>
      </div>

      {/* Floating PRAHO! label on the right */}
      <span
        className="absolute right-6 top-1/2 origin-center -translate-y-1/2 rotate-90 font-mono text-[14px] font-normal uppercase tracking-[4.2px] text-black/70 md:right-10"
        aria-hidden="true"
      >
        {t('heroLabel')}
      </span>
    </section>
  )
}
