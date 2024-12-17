import React from 'react';

const OurMission = () => {
  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">

          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission
          </p>
          <p className="mb-4  text-gray-500  ">
            Empowering Growth, Enhancing Excellence
          </p>
          <p className=''>
            To empower Individuals and businesses with tailored training consulting and coaching solutions that drive growth and innovation. We believe in creating lasting partnerships that help our clients navigate the complexities of the market. 
          </p>
          <p className=''>
            We harness innovative strategies and best practices to ignite passion, foster positive transformation, and unlock the potential of young learners, driving sustainable growth and excellence
          </p>
          <div className="flex justify-center items-center mt-10">
            <a href='/services'
              className="inline-block bg-yellow-400 hover:bg-white text-black hover:text-black font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              Get started now
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurMission;