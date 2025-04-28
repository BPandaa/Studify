//import MaxWidthWrapper from './components/MaxWidthWrapper'
//mport Link from 'next/link'
//import { ArrowRight } from 'lucide-react'
//import { buttonVariants } from './components/ui/button'
import  Hero  from "./components/Hero";
import Headers from './components/Headers'
import CardSection from './components/CardSection'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
    
    <Headers/>    
    <Hero/>
    <BlogSection/>
    <CardSection/>
    <Footer/>
      
    </>
  )
}