import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return <div className={`bg-white ${className}`}>{children}</div>
}

type PortfolioCardProps = {
  title: string
  category?: string
  imageUrl: string
  imageAlt: string
  className?: string
}

export function PortfolioCard({ title, category, imageUrl, imageAlt, className = '' }: PortfolioCardProps) {
  return (
    <div className={`group relative aspect-square overflow-hidden ${className}`}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white/95 p-6 transition-transform duration-300 group-hover:translate-y-0">
        {category && (
          <span className="mb-2 block font-mono text-[14px] uppercase tracking-[4.2px] text-text">
            {category}
          </span>
        )}
        <h4>{title}</h4>
      </div>
    </div>
  )
}
