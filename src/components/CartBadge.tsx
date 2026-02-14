'use client'

import { useCart } from '@/components/CartProvider'

export function CartBadge() {
  const { itemCount } = useCart()
  return <>{itemCount}</>
}
