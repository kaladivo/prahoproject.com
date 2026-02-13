'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import type { Locale } from '@/i18n/routing'
import { Container } from '@/components/ui'

type NavItem = {
  label: string
  href?: string
  highlighted?: boolean
  children?: { label: string; href: string }[]
}

function useNavItems(): NavItem[] {
  const t = useTranslations('nav')

  return [
    {
      label: t('informace'),
      children: [
        { label: t('oProjektu'), href: '/o-projektu' },
        { label: t('evropskeProjekty'), href: '/evropske-projekty' },
        { label: t('oAutorech'), href: '/o-autorech' },
        { label: t('partneri'), href: '/partneri' },
        { label: t('manifest'), href: '/manifest' },
        { label: t('napsaliONas'), href: '/napsali-o-nas' },
        { label: t('oceneniAUznani'), href: '/oceneni-a-uznani' },
        { label: t('blog'), href: '/novinky' },
      ],
    },
    {
      label: t('umeleckeVystupy'),
      children: [
        { label: t('realizace'), href: '/realizace' },
        { label: t('autorskaTvorba'), href: '/autorska-tvorba' },
      ],
    },
    {
      label: t('eshop'),
      href: '/e-shop',
    },
    {
      label: t('podporNas'),
      href: '/podpor-nas',
      highlighted: true,
    },
    {
      label: t('kontakt'),
      children: [
        { label: t('proTebe'), href: '/kontakt' },
        { label: t('proMedia'), href: '/pro-media' },
        { label: t('oSpolku'), href: '/o-spolku' },
        { label: t('stockholm'), href: '/stockholm-project' },
      ],
    },
  ]
}

function DesktopDropdown({
  item,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: {
  item: NavItem
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {item.href ? (
        <Link
          href={item.href}
          className={`font-mono text-[14px] font-normal uppercase tracking-[4.2px] transition-colors ${
            item.highlighted ? 'text-primary hover:text-primary/80' : 'text-text hover:text-primary'
          }`}
        >
          {item.label}
        </Link>
      ) : (
        <button
          type="button"
          className={`font-mono text-[14px] font-normal uppercase tracking-[4.2px] transition-colors ${
            item.highlighted ? 'text-primary hover:text-primary/80' : 'text-text hover:text-primary'
          }`}
        >
          {item.label}
        </button>
      )}

      {item.children && isOpen && (
        <div className="absolute left-0 top-full z-50 min-w-[220px] bg-white pt-2">
          <div className="border border-border-light/20 bg-white py-2 shadow-sm">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-5 py-2 font-mono text-[13px] font-normal uppercase tracking-[3.9px] text-text transition-colors hover:text-primary"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileMenu({
  isOpen,
  onClose,
  navItems,
}: {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}) {
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const targetLocale: Locale = locale === 'cs' ? 'en' : 'cs'

  function handleLanguageSwitch() {
    router.replace(pathname, { locale: targetLocale })
    onClose()
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out panel */}
      <nav
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-[380px] overflow-y-auto bg-white transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-border-light/30 px-6 py-5">
          <Link href="/" onClick={onClose}>
            <Image
              src="/assets/logos/logo-main.png"
              alt="PRAHO! Project"
              width={66}
              height={40}
              className="h-[40px] w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-text"
            aria-label={t('closeMenu')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6">
          {navItems.map((item, index) => (
            <div key={item.label} className="border-b border-border-light/20">
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                    className={`flex w-full items-center justify-between py-4 font-mono text-[14px] font-normal uppercase tracking-[4.2px] transition-colors ${
                      item.highlighted ? 'text-primary' : 'text-text'
                    }`}
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform ${expandedItem === index ? 'rotate-180' : ''}`}
                    >
                      <path d="M2 4l4 4 4-4" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      expandedItem === index ? 'max-h-[500px] pb-3' : 'max-h-0'
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block py-2 pl-4 font-mono text-[13px] font-normal uppercase tracking-[3.9px] text-text transition-colors hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href!}
                  onClick={onClose}
                  className={`block py-4 font-mono text-[14px] font-normal uppercase tracking-[4.2px] transition-colors ${
                    item.highlighted ? 'text-primary' : 'text-text hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Language switcher */}
          <div className="border-b border-border-light/20">
            <button
              type="button"
              onClick={handleLanguageSwitch}
              className="block w-full py-4 text-left font-mono text-[14px] font-normal uppercase tracking-[4.2px] text-text transition-colors hover:text-primary"
            >
              {tCommon('switchLanguage')}
            </button>
          </div>

          {/* Cart */}
          <div className="pt-4">
            <Link
              href="/cart"
              onClick={onClose}
              className="inline-flex items-center gap-2 font-mono text-[14px] font-normal uppercase tracking-[4.2px] text-text transition-colors hover:text-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              {t('cart')} 0
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export function Header() {
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const navItems = useNavItems()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const targetLocale: Locale = locale === 'cs' ? 'en' : 'cs'

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleDropdownEnter(index: number) {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpenDropdown(index)
  }

  function handleDropdownLeave() {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  function handleLanguageSwitch() {
    router.replace(pathname, { locale: targetLocale })
  }

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white/[0.98] shadow-sm' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-[70px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/assets/logos/logo-main.png"
              alt="PRAHO! Project"
              width={66}
              height={40}
              className="h-[40px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-[17px] lg:flex" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <DesktopDropdown
                key={item.label}
                item={item}
                isOpen={openDropdown === index}
                onMouseEnter={() => handleDropdownEnter(index)}
                onMouseLeave={handleDropdownLeave}
              />
            ))}

            {/* Language switcher */}
            <button
              type="button"
              onClick={handleLanguageSwitch}
              className="font-mono text-[14px] font-normal uppercase tracking-[4.2px] text-text transition-colors hover:text-primary"
            >
              {tCommon('switchLanguage')}
            </button>
          </nav>

          {/* Desktop right: cart */}
          <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/cart"
              className="inline-flex items-center gap-1.5 font-mono text-[14px] font-normal uppercase tracking-[4.2px] text-text transition-colors hover:text-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              {t('cart')} 0
            </Link>
          </div>

          {/* Mobile: cart + hamburger */}
          <div className="flex items-center gap-4 lg:hidden">
            <Link
              href="/cart"
              className="inline-flex items-center gap-1 font-mono text-[13px] font-normal uppercase tracking-[3.9px] text-text"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              0
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="p-1 text-text"
              aria-label={t('menu')}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navItems={navItems}
      />
    </header>
  )
}
