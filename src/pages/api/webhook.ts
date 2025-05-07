// File: src/pages/api/webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

// Initialize Stripe with a valid API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16', // Use a current Stripe API version
})

// Disable body parsing to get raw buffer for verification
export const config = {
  api: {
    bodyParser: false,
  },
}

// Helper to convert readable stream to buffer
const buffer = async (readable: any) => {
  const chunks: Uint8Array[] = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed')
  }

  // Validate required environment variables
  if (!process.env.STRIPE_WEBHOOK_SECRET || !process.env.CLERK_SECRET_KEY) {
    console.error('[Webhook] ❌ Missing required environment variables')
    return res.status(500).send('Server configuration error')
  }

  let event: Stripe.Event

  try {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']
    
    if (!sig) {
      console.error('[Webhook] ❌ Missing Stripe signature header')
      return res.status(400).send('Missing Stripe signature')
    }

    // Verify webhook signature
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET)
    console.log('[Webhook] ✅ Event received:', event.type)
  } catch (err: any) {
    console.error('[Webhook] ❌ Stripe verification error:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  // Handle checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.metadata?.userId
    console.log('[Webhook] 🔑 Stripe userId:', userId)

    if (!userId) {
      console.warn('[Webhook] ⚠️ No userId found in metadata')
      return res.status(400).send('Missing userId')
    }

    try {
      // Update user metadata in Clerk
      const clerkRes = await fetch(`https://api.clerk.com/v1/users/${userId}/metadata`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          public_metadata: {
            isPremium: true,
            premiumSince: new Date().toISOString(),
            stripeCustomerId: session.customer as string,
          },
        }),
      })

      if (!clerkRes.ok) {
        const result = await clerkRes.json()
        console.error('[Webhook] ❌ Clerk API error:', result)
        throw new Error(`Clerk update failed: ${JSON.stringify(result)}`)
      }

      const result = await clerkRes.json()
      console.log('[Webhook] 📦 Clerk metadata update result:', result)
    } catch (err: any) {
      console.error('[Webhook] ❌ Failed to update Clerk metadata:', err.message)
      return res.status(500).send('Failed to update user premium status')
    }
  }

  // Return success response
  return res.status(200).json({ received: true })
}