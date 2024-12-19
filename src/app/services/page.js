'use client'
import { Footer } from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ServicesComponent from '@/components/ServiceDetailed'
import React, { useMemo } from 'react'




export const HeroV2 = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: 500,  // Scrolls the page 500 pixels down
      behavior: 'smooth'  // Smooth scroll effect
    });
  };

  // Generate stable random values on initial render
  const backgroundSquares = useMemo(() => {
    return [...Array(20)].map((_, index) => ({
      width: 20 + Math.floor(Math.random() * 20),
      height: 20 + Math.floor(Math.random() * 20),
      left: Math.floor(Math.random() * 100),
      top: Math.floor(Math.random() * 100),
      animationDuration: 5 + Math.floor(Math.random() * 10)
    }));
  }, []); // Empty dependency array ensures this only runs once
  return (
    <div className="flex h-screen justify-center items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundSquares.map((square, index) => (
          <div
            key={index}
            className="absolute bg-yellow-400/20 rounded-lg animate-square-move"
            style={{
              width: `${square.width}px`,
              height: `${square.height}px`,
              left: `${square.left}%`,
              top: `${square.top}%`,
              animationDelay: '0s',
              animationDuration: `${square.animationDuration}s`
            }}
          />
        ))}
      </div>
      <div className="text-center max-w-6xl mx-10 z-10">
        <h1 className="my-3   text-gray-600 text-3xl  font-light ">
          <span className='text-green-800 text-7xl font-bold  '>Inspire </span> growth, <br /> enhance <span className='text-green-800 text-7xl font-bold '>Impact</span>
        </h1>
        <div>
          <p className="max-w-4xl mx-auto mt-5 text-gray-500 md:leading-relaxed text-sm ">
            We serve across Industries and focus on the service sector. Our strength lies in collaborating closely with clients to gain a deep understanding of their business challenges and then crafting tailored programs that are practical and impactful, driving meaningful change in their organization.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
          <a
            className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-black transition-all rounded-md shadow-xl sm:w-auto bg-yellow-300 hover:bg-gradient-to-b hover:bg-yellow-500"
            href="/contact"
          >
            Get Started Now
          </a>
          <button
            onClick={handleScroll}
            className="inline-block w-auto text-center min-w-[200px] px-6 py-4 transition-all bg-black text-white rounded-md sm:w-auto hover:bg-gray-800"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export const page = () => {
  return (
    <div>
      <Navbar />
      <HeroV2 />
      <ServicesComponent />
      <Footer />
    </div>
  )
}
export default page
