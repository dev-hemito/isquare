
import About from '@/components/About'
import Hero from '@/components/Hero'
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
      <Hero
        title="Start your own business"
        description="We'll take you through all the hardcore paperwork regarding a company registration."
        buttonText1="Get started now"
        buttonLink1="/register"
        buttonText2="Learn More"
        buttonLink2="/register"
      />
      <About/>
      <Services/>
      <OurMission/>
      <WhychooseUs/>
      <ProfileCard/>
    </div>
  )
}
export default page
