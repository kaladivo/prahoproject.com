'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export type CartItem = {
  productId: string
  variantName?: string
  name: string
  price: number
  quantity: number
  image?: string
  slug: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (productId: string, variantName?: string) => void
  updateQuantity: (productId: string, quantity: number, variantName?: string) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
}

const CartContext = createContext<CartContextType | null>(null)

const CART_KEY = 'praho-cart'

function loadCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const saved = localStorage.getItem(CART_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
  } catch {
    // storage full or unavailable
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setItems(loadCart())
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) {
      saveCart(items)
    }
  }, [items, loaded])

  const addItem = useCallback((item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === item.productId && i.variantName === item.variantName,
      )
      if (existing) {
        return prev.map((i) =>
          i.productId === item.productId && i.variantName === item.variantName
            ? { ...i, quantity: i.quantity + (item.quantity ?? 1) }
            : i,
        )
      }
      return [...prev, { ...item, quantity: item.quantity ?? 1 }]
    })
  }, [])

  const removeItem = useCallback((productId: string, variantName?: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.productId === productId && i.variantName === variantName)),
    )
  }, [])

  const updateQuantity = useCallback(
    (productId: string, quantity: number, variantName?: string) => {
      if (quantity <= 0) {
        removeItem(productId, variantName)
        return
      }
      setItems((prev) =>
        prev.map((i) =>
          i.productId === productId && i.variantName === variantName ? { ...i, quantity } : i,
        ),
      )
    },
    [removeItem],
  )

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
