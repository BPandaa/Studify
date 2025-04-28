import React from 'react'

const BlogSection = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "10 Study Hacks That Saved My GPA",
      excerpt: "Discover the proven techniques that helped me maintain a 3.8+ GPA while still having time for social activities...",
      category: "Academic Success",
      date: "April 15, 2025",
      image: "/api/placeholder/600/400",
      isPremium: false
    },
    {
      id: 2,
      title: "How I Made $1,200/Month Freelancing as a Student",
      excerpt: "A step-by-step guide to landing your first clients and managing freelance work alongside your studies...",
      category: "Income Strategies",
      date: "April 10, 2025",
      image: "/api/placeholder/600/400",
      isPremium: true
    },
    {
      id: 3,
      title: "Optimize Your Dorm Room for Productivity",
      excerpt: "Transform your small living space into an environment that promotes focus and helps you achieve more...",
      category: "Student Life",
      date: "April 5, 2025",
      image: "/api/placeholder/600/400",
      isPremium: false
    },
    {
      id: 4,
      title: "Building a Passive Income Stream While Studying",
      excerpt: "How I created a digital product that generates $500+ monthly with minimal ongoing work...",
      category: "Income Strategies",
      date: "March 28, 2025",
      image: "/api/placeholder/600/400",
      isPremium: true
    },
    {
      id: 5,
      title: "Budget-Friendly Meal Prep for Students",
      excerpt: "Save money and eat healthier with these simple recipes and shopping strategies designed for busy students...",
      category: "Student Life",
      date: "March 20, 2025",
      image: "/api/placeholder/600/400",
      isPremium: false
    },
    {
      id: 6, 
      title: "Landing High-Paying Internships: My Framework",
      excerpt: "The exact process I used to secure competitive internships that paid more than most entry-level jobs...",
      category: "Career Development",
      date: "March 15, 2025",
      image: "/api/placeholder/600/400",
      isPremium: true
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-amber-950 mb-4">Latest Articles</h2>
        <p className="text-lg text-amber-900 max-w-2xl mx-auto">
          Knowledge and strategies from my university journey - some free for all, some exclusive to premium members.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden relative">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className={`w-full h-full object-cover transition-all ${post.isPremium ? 'blur-sm' : ''}`}
              />
              {post.isPremium && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-amber-600/80 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              )}
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  post.isPremium 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {post.category}
                </span>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5 relative">
              <div className="text-xs text-gray-500 mb-2">{post.date}</div>
              <h3 className={`text-xl font-bold mb-2 ${post.isPremium ? 'blur-[2px]' : ''}`}>
                {post.title}
              </h3>
              <p className={`text-gray-600 mb-4 ${post.isPremium ? 'blur-[2px]' : ''}`}>
                {post.excerpt}
              </p>
              
              {post.isPremium ? (
                <div className="relative">
                  <div className="relative z-10">
                    <a href="#signup" className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                      Unlock Premium Content
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ) : (
                <a href={`/blog/${post.id}`} className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
            
            {/* Premium Badge */}
            {post.isPremium && (
              <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Premium
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="/blog" className="px-6 py-3 bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium rounded-lg transition-colors duration-200 inline-flex items-center">
          View All Articles
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default BlogSection