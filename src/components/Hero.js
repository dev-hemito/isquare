// components/Hero.js
import Image from 'next/image';
import React from 'react';

const Hero = ({ title, description, buttonText1, buttonLink1, buttonText2, buttonLink2 }) => {
    return (
        <section className="relative  py-32 md:py-40 lg:py-48 overflow-x-hidden ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                            {title}
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl mb-8">{description}</p>

                        <div className="flex gap-3">
                            <a href={buttonLink1}
                                className="inline-block bg-yellow-400 hover:bg-green-900 text-black hover:text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                            >
                                {buttonText1}
                            </a>
                            <a href={buttonLink2}
                                className="inline-block bg-black hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                            >
                                {buttonText2}
                            </a>
                        </div>
                        <div className="grid mt-16 md:grid-cols-4 grid-cols-2 gap-10">
                           <Image src='/' alt='logos' width={300} height={300} className='h-10 w-auto'/>
                           <Image src='/' alt='logos' width={300} height={300} className='h-10 w-auto'/>
                           <Image src='/' alt='logos' width={300} height={300} className='h-10 w-auto'/>
                           <Image src='/' alt='logos' width={300} height={300} className='h-10 w-auto'/>
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