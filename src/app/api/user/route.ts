// File: src/app/api/user/route.ts

import { NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'
import { clerkClient } from '@clerk/clerk-sdk-node'
import { headers } from 'next/headers'

export async function GET() {
  const headerList = await headers()
  const { userId } = getAuth({ headers: headerList })

  if (!userId) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  try {
    const user = await clerkClient.users.getUser(userId)

    return NextResponse.json({
      id: user.id,
      email: user.emailAddresses?.[0]?.emailAddress,
      publicMetadata: user.publicMetadata,
      createdAt: user.createdAt,
    })
  } catch (error: any) {
    console.error('[API] ❌ Failed to fetch user:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
