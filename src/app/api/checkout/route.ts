import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getPayload } from 'payload'
import config from '@payload-config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-01-28.clover',
})

const SHIPPING_COSTS: Record<string, number> = {
  zasilkovna: 89,
  pickup: 0,
}

function generateOrderNumber(): string {
  const date = new Date()
  const y = date.getFullYear().toString().slice(-2)
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase()
  return `PH-${y}${m}-${rand}`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items, customer, shippingAddress, shippingMethod, notes } = body

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
    }

    if (!customer?.email || !customer?.firstName || !customer?.lastName) {
      return NextResponse.json({ error: 'Customer info required' }, { status: 400 })
    }

    const shippingCost = SHIPPING_COSTS[shippingMethod] ?? 0
    const subtotal = items.reduce(
      (sum: number, item: { unitPrice: number; quantity: number }) => sum + item.unitPrice * item.quantity,
      0,
    )
    const total = subtotal + shippingCost

    const payload = await getPayload({ config })
    const orderNumber = generateOrderNumber()

    // Create order in Payload
    const order = await payload.create({
      collection: 'orders',
      data: {
        orderNumber,
        status: 'pending',
        items: items.map((item: { productId: string; variantName?: string; quantity: number; unitPrice: number }) => ({
          product: item.productId,
          variantName: item.variantName,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
        })),
        subtotal,
        shippingCost,
        total,
        customer: {
          email: customer.email,
          firstName: customer.firstName,
          lastName: customer.lastName,
          phone: customer.phone || '',
        },
        shippingAddress: shippingMethod === 'pickup'
          ? { street: 'Osobní odběr', city: 'Praha 7', postalCode: '17000', country: 'CZ' }
          : {
              street: shippingAddress?.street || '',
              city: shippingAddress?.city || '',
              postalCode: shippingAddress?.postalCode || '',
              country: shippingAddress?.country || 'CZ',
            },
        shippingMethod,
        notes: notes || '',
      },
    })

    // Create Stripe Checkout Session
    const origin = request.headers.get('origin') || 'http://localhost:3000'

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item: { unitPrice: number; quantity: number; variantName?: string; productId: string }) => ({
        price_data: {
          currency: 'czk',
          product_data: {
            name: item.variantName || `Product ${item.productId}`,
          },
          unit_amount: Math.round(item.unitPrice * 100),
        },
        quantity: item.quantity,
      }),
    )

    // Add shipping as a line item
    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: 'czk',
          product_data: { name: 'Doprava — Zásilkovna' },
          unit_amount: shippingCost * 100,
        },
        quantity: 1,
      })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      customer_email: customer.email,
      metadata: {
        orderId: String(order.id),
        orderNumber,
      },
    })

    // Update order with Stripe session ID
    await payload.update({
      collection: 'orders',
      id: order.id,
      data: {
        stripeSessionId: session.id,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Checkout error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
