import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, message, turnstileToken } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Validate Turnstile token if configured
  if (process.env.TURNSTILE_SECRET_KEY && turnstileToken) {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    })
    const verification = await verifyRes.json()

    if (!verification.success) {
      return NextResponse.json({ error: 'Verification failed' }, { status: 403 })
    }
  }

  // Send email notification
  // For now, log the contact submission. Replace with actual email service (Resend, SendGrid, etc.)
  console.log('[Contact Form]', { name, email, message: message.substring(0, 100) })

  // TODO: Integrate with email service (e.g., Resend) to send to ahoj@prahoproject.cz

  return NextResponse.json({ success: true })
}
