import React from 'react'


const Headers = () => {
  return (
    <section className='mx-auto max-w-6xl p-6 pb-0'>
    <header className='mx-auto w-full max-w-screen-xl px-2.5 md:px-20 sticky top-0 z-50  bg-base-100/50 backdrop-blur'>
      <header className="mt-6 flex justify-between gap-4 md:mb-16">
        <a className="flex items-center gap-2" href="/">
        <img alt="Studify Page logo"  width="500" height="500" className="h-5 w-5"  srcset="" src="/globe.svg"/>
        <p className="font-semibold">Studify</p></a><div className="hidden flex-1 items-center gap-12 px-16 md:inline-flex">
            <a className="cursor-pointer hover:underline" href="/#pricing">Pricing</a>
            <a className="cursor-pointer hover:underline" href="/blogs">Blogs</a>
            
            </div>
            
            <button className="btn-sm btn hover:bg-amber-600">Log in</button>
            </header>
    </header>
    


   
    
    
    </section>
  )
}

export default Headers


