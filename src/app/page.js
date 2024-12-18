
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
                  title1 = 'Ready to sky-rocket your business'
                  title2 = ' and drive growth?'
                  description = "Transform your team's potential into success with our different training programs. Our goal is to help your team perform better and thus bring a long-lasting impression into your business. Partner with us in your journey to excellence and unlock new possibilities that lead to great results."
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
