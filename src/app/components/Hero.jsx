import React from 'react'

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 lg:py-1">
      <div className="px-8 flex flex-col gap-8 lg:gap-10 items-center justify-center text-center">
        
        <h1 className="text-5xl lg:text-6xl font-bold text-amber-950 max-w-3xl mt-8 group">
          Maximise Your{' '}
          <span className="relative inline-block group-hover:text-amber-600 transition-colors duration-300">
            Student Life
            <span className="absolute -top-6 -right-6 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300">
              🎓
            </span>
          </span>{' '}
          And <span className=' group-hover:text-amber-600 transition-colors duration-300'>Income</span> <span className=' group-hover:underline group-hover:decoration-amber-600 group-hover:decoration-dashed'>All in One Place!</span>
        </h1>
        
    

        <p className="text-lg text-amber-900 max-w-2xl">
          Get the best free student life hacks and unlock proven ways to earn money during your studies. 
          Your future self will thank you!
        </p>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-amber-900">100% Free student resources</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-amber-900">Practical money-making strategies</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-amber-900">Built by students, for students</span>
          </div>
        </div>
        
        <a href="#start" className="mt-6 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg text-lg transition-all duration-200 flex items-center justify-center group">
          Get Started Free
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200">
            <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero