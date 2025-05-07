// src/pages/api/webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

const buffer = async (readable: any) => {
  const chunks: Uint8Array[] = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed')
  }

  const buf = await buffer(req)
  const sig = req.headers['stripe-signature'] as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!)
    console.log('[Webhook] ✅ Event:', event.type)
  } catch (err: any) {
    console.error('[Webhook] ❌ Verification error:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.metadata?.userId

    console.log('[Webhook] 🎯 Stripe userId:', userId)

    if (userId) {
      try {
        const updateRes = await fetch(`https://api.clerk.com/v1/users/${userId}/metadata`, {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${process.env.CLERK_SECRET_KEY!}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            public_metadata: { isPremium: true },
          }),
        })

        const result = await updateRes.json()
        console.log('[Webhook] ✅ Clerk update:', result)
      } catch (error) {
        console.error('[Webhook] ❌ Clerk error:', error)
        return res.status(500).send('Clerk update failed')
      }
    }
  }

  return res.status(200).end()
}

export default handler
