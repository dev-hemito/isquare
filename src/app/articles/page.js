import BlogListing from '@/components/BlogListing'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export const page = () => {
  return (
    <div>
        <Navbar/>
        <BlogListing/>
        <Footer/>
    </div>
  )
}
export default page;