'use client'

import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton, SignOutButton } from '@clerk/nextjs'

const Headers = () => {
  return (
    <section className='mx-auto max-w-6xl p-6 pb-0'>
      <header className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20 sticky top-0 z-50 bg-base-100/50 backdrop-blur'>
        <div className="mt-6 flex justify-between gap-4 md:mb-16">
          {/* Logo */}
          <a className="flex items-center gap-2" href="/">
            <img
              alt="Studify Page logo"
              width="500"
              height="500"
              className="h-5 w-5"
              src="/globe.svg"
            />
            <p className="font-semibold">Studify</p>
          </a>

          {/* Links */}
          <div className="hidden flex-1 items-center gap-12 px-16 md:inline-flex">
            <a className="cursor-pointer hover:underline" href="/#pricing">Pricing</a>
            <a className="cursor-pointer hover:underline" href="/blogs">Blogs</a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn-sm btn hover:bg-amber-600">Log in</button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
  <div className="flex items-center gap-2">
    <UserButton />
    <SignOutButton>
      <button className="btn-sm btn hover:bg-red-600">Log out</button>
    </SignOutButton>
  </div>
</SignedIn>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Headers
