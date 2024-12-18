// components/Hero.js
'use client'
import Image from 'next/image';
import React from 'react';

const Hero = ({ title, description, buttonText1, buttonLink1, buttonText2, buttonLink2 }) => {
    const handleScroll = () => {
        window.scrollBy({
          top: 500,  // Scrolls the page 500 pixels down
          behavior: 'smooth'  // Smooth scroll effect
        });
      };
    return (
        <section className="relative  py-32 md:py-40 lg:py-48 overflow-x-hidden ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                            {title}
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl mb-8">{description}</p>

                        <div className="md:flex  items-center justify-start gap-5 mt-6 "><a
                            className="inline-block mb-3 w-full md:w-auto text-center min-w-[200px] px-6 py-4 text-black transition-all rounded-md shadow-xl  bg-yellow-300 hover:bg-gradient-to-b  hover:bg-yellow-500 "
                            href="/contact">Get Started Now
                        </a>
                            <button className="inline-block mb-3 w-full md:w-auto text-center min-w-[200px] px-6 py-4 transition-all bg-black text-white  rounded-md   hover:bg-gray-800"
                                onClick={handleScroll}>Learn more
                            </button>
                        </div>
                        <div className="grid mt-10 md:grid-cols-4 grid-cols-3 p-3">
                            <Image src='/partnerlogo1.png' alt='logos' width={300} height={300} className='h-10 md:h-16 w-auto' />
                            <Image src='/partnerlogo2.png' alt='logos' width={300} height={300} className='h-10 md:h-16 w-auto' />
                            <Image src='/partnerlogo3.png' alt='logos' width={300} height={300} className='h-10 md:h-16 w-auto' />

                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Image
                            src="/hero1.png"
                            alt="Hero Image"
                            width={1000}
                            height={1000}
                            className="w-2/3 h-auto rounded-md "
                        />
                    </div>

                </div>

            </div>
            <div className="absolute top-0 hidden md:block right-0 w-96 h-96 scale-150 bg-yellow-400/30 rounded-full z-0"></div>
        </section>
    );
};

export default Hero;