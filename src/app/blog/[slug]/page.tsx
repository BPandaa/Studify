import { sanityClient } from '@/sanity/client'
import { groq } from 'next-sanity'
import { getAuth, clerkClient } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { headers } from 'next/headers'

type Props = {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: Props) {
  const slug = params.slug
  const headerList = headers()
  const { userId } = getAuth({ headers: headerList })

  const query = groq`
    *[_type == "post" && slug.current == $slug][0]{
      title,
      content,
      date,
      isPremium
    }
  `
  const post = await sanityClient.fetch(query, { slug })

  if (!post) return <div className="text-center p-10">Post not found</div>

  const isPremiumPost = post.isPremium

  if (!userId && isPremiumPost) {
    redirect(`/sign-in?redirect_url=/blog/${slug}`)
  }

  // If logged in, get user metadata
  let userIsPremium = false

  if (userId) {
    const user = await clerkClient.users.getUser(userId)
    userIsPremium = user?.publicMetadata?.isPremium === true
  }

  const canAccess = !isPremiumPost || userIsPremium

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {new Date(post.date).toLocaleDateString()}
      </p>

      {!canAccess ? (
        <div className="bg-amber-100 p-4 rounded-lg text-center">
          <p>This is a premium article.</p>
          <a
            href="/#pricing"
            className="underline text-amber-800 font-medium"
          >
            Subscribe now to unlock this content.
          </a>
        </div>
      ) : (
        <article className="prose prose-lg">
          <PortableText value={post.content} />
        </article>
      )}
    </main>
  )
}
