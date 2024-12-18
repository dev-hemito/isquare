
import About from '@/components/About'
import { ContactBanner } from '@/components/ContactBanner'
import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import { HeroV2 } from '@/components/HeroV2'
import { Navbar } from '@/components/Navbar'
import OurMission from '@/components/OurMission'
import ProfileCard from '@/components/ProfileCard'
import Services from '@/components/Service'
import WhychooseUs from '@/components/WhychooseUs'
import React from 'react'

export const page = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero
        title="Start your own business"
        description="We'll take you through all the hardcore paperwork regarding a company registration."
        buttonText1="Get started now"
        buttonLink1="/register"
        buttonText2="Learn More"
        buttonLink2="/register"
      /> */}
       <HeroV2
                  title1 = 'Start your own business '
                  title2 = ''
                  description = '  Our team of accomplished trainers and consultants embodies a unique fusion of academic expertise and real-world experience. With a deep understanding of industry nuances and best practices, they provide tailored guidance and support to drive transformative growth and excellence.'
                  />
      <About/>
      <Services/>
      <OurMission/>
      <WhychooseUs/>
      <ProfileCard/>
      <ContactBanner/>
      <Footer/>
    </div>
  )
}
export default page
