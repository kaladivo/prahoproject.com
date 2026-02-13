import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full border-0 border-b border-b-black bg-transparent px-0 py-3 font-heading text-[14px] text-text outline-none placeholder:text-placeholder focus:border-b-primary ${className}`}
      {...props}
    />
  )
}

export function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full border-0 border-b border-b-black bg-transparent px-0 py-3 font-heading text-[14px] text-text outline-none placeholder:text-placeholder focus:border-b-primary ${className}`}
      {...props}
    />
  )
}
