import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 pb-32" id='whoweare'>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className=""></div>
                <div className="border-l-2 border-l-yellow-500 py-2 px-2"><h2 className='text-lg font-medium'>Who we are</h2></div>
                <div className='flex justify-center items-center'>
                    <Image src='/about1.jpg' alt='about' className='h-5/6 object-contain w-auto' width={300} height={300}/>
                </div>
                <div className=' text-sm  text-justify py-2'>
                    Welcome to i Square, where we specialize in empowering organizations with top-tier HR training solutions designed to enhance workforce performance and drive business success. With years of expertise in human resources and a deep understanding of organizational dynamics, we are dedicated to providing practical, results-driven training programs tailored to meet the unique needs of each client.
                    Our team of seasoned professionals is passionate about fostering a culture of continuous improvement, helping companies navigate complex HR challenges with confidence and skill. From leadership development and employee engagement to compliance training and performance management, we offer a comprehensive range of courses that equip your team with the tools they need to thrive.
                    We take pride in our personalized approach, working closely with you to design bespoke solutions that align with your organizational goals and values. Our commitment to excellence is reflected in the positive feedback we consistently receive from clients who have seen measurable improvements in productivity, morale, and compliance. We believe in building long-lasting partnerships, and our collaborative style ensures that your organization remains ahead of the curve in a constantly evolving business landscape.
                    Whether you're a small business or a large corporation, we are here to support your growth with flexible and innovative training options. At i Squares, we are driven by a simple mission: to help you unlock the full potential of your most valuable asset - your people. We look forward to partnering with you and delivering training solutions that inspire success at every level of your organization.
                </div>
            </div>
        </div>
    );
};

export default About;