'use client'

import { SignIn } from '@clerk/nextjs'
import { useSearchParams } from 'next/navigation'

export default function SignInPage() {
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get('redirect_url') || '/'

  return (
    <main className="min-h-screen flex items-center justify-center">
      <SignIn path="/sign-in" routing="path" forceRedirectUrl={redirectUrl} />
    </main>
  )
}
