'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Container } from '@/components/ui'

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-footer-text transition-colors hover:text-primary"
    >
      {children}
    </a>
  )
}

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-footer-bg text-footer-text">
      <Container>
        {/* Three-column grid */}
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-3 md:gap-8">
          {/* Column 1: Contact Info */}
          <div className="space-y-3 font-heading text-[13px]">
            <p>
              <span className="font-medium">T: </span>
              <a href="tel:+420724005615" className="text-footer-text transition-colors hover:text-primary">
                +420 724 005 615
              </a>
            </p>
            <p>
              <span className="font-medium">E: </span>
              <a href="mailto:ahoj@prahoproject.cz" className="text-footer-text transition-colors hover:text-primary">
                ahoj@prahoproject.cz
              </a>
            </p>
            <p>
              <span className="font-medium">A: </span>
              <a
                href="https://maps.google.com/?q=Bubenské+nábřeží+306/13+Praha+7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text transition-colors hover:text-primary"
              >
                {t('address')}
              </a>
            </p>
          </div>

          {/* Column 2: Legal Links */}
          <div className="flex flex-col gap-3">
            <Link
              href="/zasady-ochrany-osobnich-udaju"
              className="font-mono text-[13px] font-normal uppercase tracking-[3.9px] text-footer-text transition-colors hover:text-primary"
            >
              {t('privacy')}
            </Link>
            <Link
              href="/pouzivani-souboru-cookies"
              className="font-mono text-[13px] font-normal uppercase tracking-[3.9px] text-footer-text transition-colors hover:text-primary"
            >
              {t('cookies')}
            </Link>
            <Link
              href="/vseobecne-obchodni-podminky"
              className="font-mono text-[13px] font-normal uppercase tracking-[3.9px] text-footer-text transition-colors hover:text-primary"
            >
              {t('terms')}
            </Link>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h6 className="mb-4 text-footer-text">{t('newsletter')}</h6>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-stretch"
            >
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                required
                className="min-w-0 flex-1 border-0 border-b border-b-white/40 bg-transparent px-0 py-3 font-heading text-[14px] text-footer-text outline-none placeholder:text-white/50 focus:border-b-primary"
              />
              <button
                type="submit"
                aria-label={t('subscribe')}
                className="ml-3 border-0 border-b border-b-white/40 bg-transparent px-2 py-3 text-footer-text transition-colors hover:text-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            {/* Copyright */}
            <p className="font-mono text-[14px] font-normal uppercase tracking-[4.2px] text-footer-text">
              {t('copyright')}{' '}
              <a
                href="https://prahoproject.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text transition-colors hover:text-primary"
              >
                prahoproject.cz
              </a>
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <SocialIcon href="https://www.instagram.com/prahoproject/" label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/prahoproject" label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/prahoproject" label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@prahoproject" label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
