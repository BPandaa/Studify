import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    '/',
    '/blog(.*)',
    '/api/(.*)',        // ✅ This is the key line for fixing your current error
    '/sign-in(.*)',
    '/studio(.*)',
  ],
}
