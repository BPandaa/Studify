// File: src/app/api/test-clerk/route.ts
import { NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'

export async function GET(req: Request) {
  try {
    console.log('[Test] 🔄 Testing Clerk metadata update')
    
    // Get your user ID from the URL query or use a hardcoded test value
    const url = new URL(req.url)
    const userId = url.searchParams.get('userId') || 'user_2wpH3Oklle7qjP3mWoa5KRjgCmeB'
    
    console.log('[Test] 🔄 Target user ID:', userId)
    console.log('[Test] 🔑 CLERK_SECRET_KEY present:', !!process.env.CLERK_SECRET_KEY)
    
    if (!process.env.CLERK_SECRET_KEY) {
      return NextResponse.json({ error: 'Missing CLERK_SECRET_KEY' }, { status: 500 })
    }
    
    // Update user metadata in Clerk
    const updateData = {
      public_metadata: {
        isPremium: true
      }
    }
    
    console.log('[Test] 📝 Update data:', JSON.stringify(updateData))
    
    const clerkRes = await fetch(`https://api.clerk.com/v1/users/${userId}/metadata`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
    
    const responseText = await clerkRes.text()
    let result
    try {
      result = JSON.parse(responseText)
    } catch (e) {
      result = { rawResponse: responseText }
    }
    
    console.log('[Test] 📊 Clerk API response status:', clerkRes.status)
    console.log('[Test] 📄 Clerk API response:', JSON.stringify(result))
    
    return NextResponse.json({
      success: clerkRes.ok,
      status: clerkRes.status,
      result
    })
  } catch (error: any) {
    console.error('[Test] ❌ Error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}