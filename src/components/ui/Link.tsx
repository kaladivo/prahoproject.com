import NextLink from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

type LinkProps = ComponentProps<typeof NextLink> & {
  children: ReactNode
  variant?: 'default' | 'nav' | 'footer'
  className?: string
}

export function Link({ children, variant = 'default', className = '', ...props }: LinkProps) {
  const variants = {
    default: 'text-text hover:text-primary',
    nav: 'font-mono text-[14px] font-normal uppercase tracking-[4.2px] text-text hover:text-primary',
    footer:
      'font-mono text-[13px] font-normal uppercase tracking-[3.9px] text-footer-text hover:text-primary',
  }

  return (
    <NextLink className={`transition-colors ${variants[variant]} ${className}`} {...props}>
      {children}
    </NextLink>
  )
}
