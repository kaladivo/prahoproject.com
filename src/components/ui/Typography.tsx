import type { ReactNode } from 'react'

type HeadingProps = {
  children: ReactNode
  className?: string
}

export function H1({ children, className = '' }: HeadingProps) {
  return <h1 className={className}>{children}</h1>
}

export function H2({ children, className = '' }: HeadingProps) {
  return <h2 className={className}>{children}</h2>
}

export function H3({ children, className = '' }: HeadingProps) {
  return <h3 className={className}>{children}</h3>
}

export function H4({ children, className = '' }: HeadingProps) {
  return <h4 className={className}>{children}</h4>
}

export function H5({ children, className = '' }: HeadingProps) {
  return <h5 className={className}>{children}</h5>
}

export function H6({ children, className = '' }: HeadingProps) {
  return <h6 className={className}>{children}</h6>
}

export function HeroTagline({ children, className = '' }: HeadingProps) {
  return (
    <p
      className={`font-display text-[70px] font-normal leading-[77px] text-text ${className}`}
    >
      {children}
    </p>
  )
}

export function Subtitle({ children, className = '' }: HeadingProps) {
  return (
    <span
      className={`font-mono text-[13px] font-normal uppercase tracking-[3.9px] text-gray ${className}`}
    >
      {children}
    </span>
  )
}
