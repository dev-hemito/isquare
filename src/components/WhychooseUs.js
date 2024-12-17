import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WhychooseUs = () => {
    return (
        <div className="relative  py-48 overflow-hidden">
            {/* Animated Square Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute bg-yellow-400/50 rounded-lg animate-square-move"
                        style={{
                            width: `${Math.random() * 20 + 20}px`,
                            height: `${Math.random() * 20 + 20}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 5}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                        <div className="  text-black p-4">
                            <h2 className='font-bold text-3xl py-2 text-green-900'>Why <br /> Choose Us</h2>
                            <p className='min-h-28 text-sm'>
                                Learning needs identification, customised training workshops and practical assignments, and support in measuring the impact of the learning intervention.
                            </p>
                            <a href='/services'
                                className="inline-block bg-yellow-400 hover:bg-black text-black hover:text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                            >
                                Join us now
                            </a>
                        </div>
                        <div className="border border-yellow-400 text-black p-4">
                            <h2 className='font-bold text-3xl py-2 text-yellow-400'>Quality <br/> defined</h2>
                            <p className='px-2 text-sm'>
                            By providing exceptional and cutting-edge training solutions, we aim to consistently meet and exceed our clients' expectations. 
                            </p>
                        </div>
                        <div className="border border-yellow-400 text-black p-4">
                            <h2 className='font-bold text-3xl py-2 text-yellow-400'>Customer service</h2>
                            <p className='px-2 text-sm'>
                            Build enduring relationships with our customers to make sure our offerings satisfy their requirements.
                            </p>
                        </div>
                        <div className="border border-yellow-400 text-black p-4">
                            <h2 className='font-bold text-3xl py-2 text-yellow-400'>Ongoing Learning</h2>
                            <p className='px-2 text-sm'>
                            Encourage lifelong learning and personal growth. 
                            </p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default WhychooseUs;