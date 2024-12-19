import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar'
import React from 'react'

export const page = () => {
  return (
    <div>
        <Navbar/>
        <CSRPage/>
        <Footer/>
    </div>
  )
}



const CSRPage = () => {
  const initiatives = [
    {
      title: "Environmental Sustainability",
      description: "Leading the change in environmental conservation through sustainable practices and green initiatives.",
      metric: "50,000 Trees Planted",
      icon: "🌱"
    },
    {
      title: "Education for All",
      description: "Empowering communities through education and skill development programs.",
      metric: "10,000 Students Supported",
      icon: "📚"
    },
    {
      title: "Community Health",
      description: "Promoting healthcare accessibility and wellness programs in underserved areas.",
      metric: "25 Health Camps",
      icon: "🏥"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            Making a Difference
          </h1>
          <p className="text-black text-xl md:text-2xl max-w-2xl mx-auto">
            Our commitment to creating positive impact in communities and environment
          </p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 px-4 bg-yellow-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-black mb-2">$2M+</h3>
            <p className="text-black text-lg">Invested in Communities</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-black mb-2">50K+</h3>
            <p className="text-black text-lg">Lives Impacted</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-black mb-2">100+</h3>
            <p className="text-black text-lg">Projects Completed</p>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
            Our Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300 shadow-sm">
                <div className="text-4xl mb-4">{initiative.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <p className="text-yellow-600 font-bold">{initiative.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Our Vision for Tomorrow
          </h2>
          <p className="text-black text-lg mb-8">
            We envision a future where business success and social responsibility go hand in hand.
            Our commitment extends beyond profit to create lasting positive impact in every community we touch.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-900 transition-colors duration-300">
            Join Our Mission
          </button>
        </div>
      </section>

      {/* Latest Projects Carousel */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
            Latest Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-yellow-600 text-xl font-bold mb-4">
                Green Energy Initiative
              </h3>
              <p className="text-gray-700 mb-4">
                Converting our facilities to 100% renewable energy sources by 2025.
              </p>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-yellow-400 rounded-full" style={{width: '75%'}}></div>
              </div>
              <p className="text-gray-500 mt-2">75% Completed</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-yellow-600 text-xl font-bold mb-4">
                Youth Education Program
              </h3>
              <p className="text-gray-700 mb-4">
                Providing digital literacy training to underprivileged youth.
              </p>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-yellow-400 rounded-full" style={{width: '90%'}}></div>
              </div>
              <p className="text-gray-500 mt-2">90% Completed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;