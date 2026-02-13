import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'submit'
  className?: string
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-mono uppercase border border-transparent bg-black text-white transition-colors hover:bg-white hover:text-black hover:border-black cursor-pointer'

  const variants = {
    primary: 'text-[12px] tracking-[3.6px] h-[66px] px-[83px]',
    submit: 'text-[13px] tracking-[3.9px] h-[60px] px-[83px]',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
