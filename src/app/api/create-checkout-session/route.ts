// File: src/app/api/webhook/route.ts

import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
})

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
    console.log('[Webhook] ✅ Stripe event received:', event.type)
  } catch (err: any) {
    console.error('[Webhook] ❌ Stripe verification error:', err.message)
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.metadata?.userId

    console.log('[Webhook] 🧑 Session userId:', userId)

    if (!userId) {
      console.warn('[Webhook] ⚠️ No userId in metadata')
      return new NextResponse('Missing userId', { status: 400 })
    }

    try {
      const res = await fetch(`https://api.clerk.com/v1/users/${userId}/metadata`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY!}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          public_metadata: {
            isPremium: true,
          },
        }),
      })

      const result = await res.json()
      console.log('[Webhook] ✅ Clerk response status:', res.status)
      console.log('[Webhook] 📦 Clerk response body:', result)

      if (!res.ok) {
        throw new Error('Failed to update Clerk metadata')
      }
    } catch (error: any) {
      console.error('[Webhook] ❌ Clerk update failed:', error.message)
      return new NextResponse('Failed to update metadata', { status: 500 })
    }
  }

  return new NextResponse(null, { status: 200 })
}
