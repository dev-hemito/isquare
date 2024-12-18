import Image from 'next/image'
import React from 'react'

export const ContactBanner = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <div className="md:flex">
                <div className="w-full flex justify-center items-center p-3">
                    <div className='text-center md:text-left'><h2 className='text-3xl mb-3'>Contact Us for <br />
                        your Learning, Consulting, Coaching</h2>
                        <a href='/contact'
                            className="inline-block mt-3 bg-yellow-400 hover:bg-black text-black hover:text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                        >
                            Reach out to us
                        </a>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <Image src='/vectorContact.png' width={1000} height={1000} className='h-full w-full' alt='vector' />
                </div>
            </div>
        </div>
    )
}
