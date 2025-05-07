import { sanityClient } from '@/sanity/client'
import { groq } from 'next-sanity'
import { getAuth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { headers } from 'next/headers'

type Props = {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: Props) {
  const slug = params.slug

  // ✅ Get Clerk auth headers from request
  const headersList = headers()
  const { userId } = getAuth({ headers: headersList })

  // 🔒 Redirect to sign-in if not logged in
  if (!userId) {
    redirect(`/sign-in?redirect_url=/blog/${slug}`)
  }

  // ✅ Fetch blog post from Sanity
  const query = groq`
    *[_type == "post" && slug.current == $slug][0]{
      title,
      content,
      date,
      isPremium
    }
  `
  const post = await sanityClient.fetch(query, { slug })

  if (!post) return <div>Not found</div>

  // 🔍 Fetch user metadata using secret key
  const response = await fetch(`https://api.clerk.com/v1/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
    },
    cache: 'no-store',
  })

  const user = await response.json()
  const isPremium = user?.public_metadata?.isPremium === true

  // ✅ Allow access if post is free or user is premium
  const canAccess = !post.isPremium || isPremium

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {new Date(post.date).toLocaleDateString()}
      </p>

      {!canAccess ? (
        <div className="bg-amber-100 p-4 rounded-lg text-center">
          This is a <strong>premium article</strong>. Please{' '}
          <a className="underline text-amber-800">subscribe</a> to unlock it.
        </div>
      ) : (
        <article className="prose prose-lg">
          <PortableText value={post.content} />
        </article>
      )}
    </main>
  )
}
