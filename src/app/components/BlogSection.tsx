'use client'

import React, { useEffect, useState } from 'react'
import { sanityClient } from '@/sanity/client'

type BlogPost = {
  _id: string
  title: string
  excerpt: string
  category: string
  date: string
  image?: { url: string }
  slug: { current: string }
  isPremium: boolean
}

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await sanityClient.fetch(
        `*[_type == "post"] | order(date desc){
          _id,
          title,
          excerpt,
          category,
          date,
          "image": image.asset->{url},
          slug,
          isPremium
        }`
      )
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <section className="max-w-6xl mx-auto py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-amber-950 mb-4">Latest Articles</h2>
        <p className="text-lg text-amber-900 max-w-2xl mx-auto">
          Knowledge and strategies from my university journey - some free for all, some exclusive to premium members.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-xl shadow-md overflow-hidden relative">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image?.url || '/placeholder.jpg'} 
                alt={post.title} 
                className={`w-full h-full object-cover transition-all ${post.isPremium ? 'blur-sm' : ''}`}
              />
              {post.isPremium && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-amber-600/80 p-3 rounded-full text-white text-xl">
                    🔒
                  </div>
                </div>
              )}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  post.isPremium ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-800'
                }`}>
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-5">
              <div className="text-xs text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString()}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${post.isPremium ? 'blur-[2px]' : ''}`}>
                {post.title}
              </h3>
              <p className={`text-gray-600 mb-4 ${post.isPremium ? 'blur-[2px]' : ''}`}>
                {post.excerpt}
              </p>

              {post.isPremium ? (
                <a href="#signup" className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                  Unlock Premium Content
                </a>
              ) : (
                <a href={`/blog/${post.slug.current}`} className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium">
                  Read More →
                </a>
              )}
            </div>

            {post.isPremium && (
              <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                Premium
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
