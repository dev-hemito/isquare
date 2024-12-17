import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = () => {
    return (
        <div className="relative bg-[#183E0B] py-28 overflow-hidden">
            {/* Animated Square Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, index) => (
                    <div 
                        key={index}
                        className="absolute bg-white/10 rounded-lg animate-square-move"
                        style={{
                            width: `${Math.random() * 50 + 20}px`,
                            height: `${Math.random() * 50 + 20}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 5}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        High Impact Services
                    </h2>

                    <p className="font-light text-white text-sm tracking-wide">
                        Navigate challenges, identify hidden advantages and emerge stronger
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                        <div className="bg-yellow-300 text-black p-4">
                            <h2 className='font-bold text-lg py-2 text-green-900'>Training <br /> Workshops</h2>
                            <p className='min-h-28 text-sm'>
                                Learning needs identification, customised training workshops and practical assignments, and support in measuring the impact of the learning intervention.
                            </p>
                            <Image src='/icon1.png' alt='icon' width={200} height={200} className="h-10 w-auto" /> <br />
                            <Link href='/service' className='text-black mt-5 underline'>Know more</Link>
                        </div>
                        <div className="bg-yellow-300 text-black p-4">
                            <h2 className='font-bold text-lg py-2 text-green-900'>HR <br />
                                Consulting</h2>
                            <p className='min-h-28 text-sm'>
                                HR Solutions - Core Knowledge, Core Behaviours and Specialist Knowledge for small and large organisations.
                            </p>
                            <Image src='/icon2.png' alt='icon' width={200} height={200} className="h-10 w-auto" /> <br />
                            <Link href='/service' className='text-black mt-5 underline'>Know more</Link>
                        </div>
                        <div className="bg-yellow-300 text-black p-4">
                            <h2 className='font-bold text-lg py-2 text-green-900'>Coaching, <br />
                                Counseling and Mentoring</h2>
                            <p className='min-h-28 text-sm'>
                                Learning needs identification, customised training workshops and practical assignments, and support in measuring the impact of the learning intervention.
                            </p>
                            <Image src='/icon3.png' alt='icon' width={200} height={200} className="h-10 w-auto" /> <br />
                            <Link href='/service' className='text-black mt-5 underline'>Know more</Link>
                        </div>
                        <div className="bg-yellow-300 text-black p-4">
                            <h2 className='font-bold text-lg py-2 text-green-900'>Guest <br />
                                Speaker</h2>
                            <p className='min-h-28 text-sm'>
                                Resource person for seminars, workshops Conferences and Universities on Human Resource development areas.
                            </p>
                            <Image src='/icon4.png' alt='icon' width={200} height={200} className="h-10 w-auto" /> <br />
                            <Link href='/service' className='text-black mt-5 underline'>Know more</Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <a href='/services'
                        className="inline-block bg-yellow-400 hover:bg-white text-black hover:text-black font-medium py-3 px-6 rounded-md transition-colors duration-300"
                    >
                        Join us now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;