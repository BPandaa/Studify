import React from 'react'

const CardSection = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 px-8" id='pricing' >
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-amber-950 mb-4">Choose Your Student Success Path</h2>
        <p className="text-lg text-amber-900 max-w-2xl mx-auto">
          Based on my 3 years of university experience, I've created resources to help you thrive academically and financially.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Free Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] border-t-4 border-amber-400">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">Free Access</span>
              <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-amber-950 mb-3">Ultimate Student Life Guide</h3>
            <p className="text-gray-700 mb-6">
              Discover proven strategies to excel academically, manage your time effectively, and make the most of your university experience.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Study techniques from top students</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Campus life hacks and resources</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Mental health and self-care tips</span>
              </li>
            </ul>
            <a href="#free-guide" className="block w-full py-3 text-center bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium rounded-lg transition-colors duration-200">
              Get Free Access
            </a>
          </div>
        </div>

        {/* Premium Card */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] border-t-4 border-amber-600 relative">
          <div className="absolute top-6 right-6">
           
          </div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <span className="bg-amber-600 text-white text-sm font-medium px-3 py-1 rounded-full">Premium</span>
            </div>
            <h3 className="text-2xl font-bold text-amber-950 mb-3">Student Money-Making Blueprint</h3>
            <p className="text-gray-700 mb-6">
              Learn how I earned while studying, with practical step-by-step guides to create income streams without sacrificing your grades.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>10+ proven income methods for students</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Templates for freelancing success</span>
              </li>
             
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Monthly Q&A sessions</span>
              </li>
            </ul>
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-sm text-gray-500 line-through">$49.99</span>
                <span className="text-2xl font-bold text-amber-950 ml-2">$29.99</span>
              </div>
              <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded">40% OFF</span>
            </div>
            <a href="#premium-access" className="block w-full py-3 text-center bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200 group">
              Get Premium Access
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
                <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSection