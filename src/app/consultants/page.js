'use client'
import React, { useState } from 'react'
import { Footer } from '@/components/Footer'
import { HeroV2 } from '@/components/HeroV2'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

// Team Members Data - Full Original Content
const TEAM_MEMBERS = [
    {
        id: 1,
        name: "Jorely Mathew",
        role: "Chief Trainer & Consultant",
        image: "/jorely.png",
        credentials: "FCIPD, FCPHR, MBA, CHE, BHM, ACSTH, NLP",
        shortBio: "With three decades of expertise in Human Resources and Training, specializing in leadership development and high-performance team building.",
        professionalJourney: [
            "Over 30 years of experience in international luxury hospitality brands",
            "Leadership roles in HR and Training across global organizations",
            "Proven track record in driving business growth and leadership development"
        ],
        awards: [
            "Fellow of Chartered Institute of Personnel and Development (FCIPD)",
            "Global recognition from prestigious institutions in US, UK, and Australia",
            "Multiple advanced certifications in HR, Management, and Leadership"
        ],
        isOwner: true,
        fullDetails: true
    },
    {
        id: 2,
        name: "Iyrene Jorely Rose",
        role: "Managing Partner – i SQUARES",
        image: "/consultants/irene.png",
        shortBio: "Iyrene Jorely Rose is Graduating in Media and Communication at Manipal Institute of Communication and is the Technical representative of the student council. Iyrene was a school council member, at Modern International School Bangkok, Thailand. She is also an avid reader, writer, and painter and she enjoys baking and cooking along with her mother. Besides enjoying the facilitation of learning programs as a Teaching Assistant, she aspires to be a Marketing and Communications Director. Iyrene enjoys creative writing and content creation and manages the family-run youtube channel and The Home Pantry Facebook Page.",
        fullDetails: false
    },
    {
        id: 3,
        name: "Nahesh Hingorani",
        role: "Senior Trainer",
        image: "/consultants/nahesh.png",
        shortBio: "Over 15 years experience in Asia, delivering professional Management Consultancy services, specifically in Executive Coaching & Leadership. His diverse background allows him to analyse and understand clients' needs, create programs based on specific objectives, and deliver engagements that bring positive change. His key clients include Unilever, Pepsi, Porsche, Harley- Davidson, Bayer, BASF, Beiersdorf, Citibank and other fortune 1500 companies.",
        fullDetails: false
    },
    {
        id: 4,
        name: "Nassim Abed",
        role: "Management Consultant",
        image: "/consultants/abed.png",
        shortBio: "Nassim Abed is a strategic thinker, committed and analytical senior management consultant with over twenty years of professional experience focused mainly in the healthcare industry. Nassim has consistently produced unprecedented results upon executing projects in the areas of operational process improvement, strategy development and execution, performance management, and healthcare quality accreditation.",
        professionalJourney: [
            "Worked as regional head of strategy, business excellence, and program realization office at Merck & Co. and Takeda",
            "Led business risk management exercises focusing on regulatory uncertainties",
            "Coached management teams in process improvement initiatives",
            "Advised hospitals and clinics on JCI accreditation since 2019"
        ],
        awards: [
            "Geographic experience spanning Middle East, Africa, Turkey, Ukraine, and South-east Asia",
            "Certified Lean Six Sigma Black Belt",
            "Certified Project Management Professional (PMP®)",
            "Certified Professional in Healthcare Quality (CPHQ)"
        ],
        fullDetails: true
    },
    {
        id: 5,
        name: "Sanju Samuel",
        role: "Hospitality Consultant",
        image: "/consultants/sanju.png",
        shortBio: "Sanju Samuel an ace hotelier, he has two decades of hospitality experience under his belt to take pride of. He has been aligned with eclectic hospitality brands across the globe like Ritz-Carlton, Six Senses & Oberoi Hotels. He brings with him his rich and diverse experience in 'Sports Exotica'.",
        professionalJourney: [
            "645+ luxury hotel rooms pre-opening & counting",
            "500+ luxury hotel rooms renovated",
            "Pre-opening set up of rooms division and laundry",
            "Facility Planning for Housekeeping areas",
            "Innovator of new ideas, procedures & products"
        ],
        fullDetails: true
    },
    {
        id: 6,
        name: "Jahnavi Katti",
        role: "Wellness Consultant",
        image: "/consultants/katti.png",
        shortBio: "Jahnavi Katti is a Mindfulness & Career Coach certified by International Coach Academy Australia and UMass Chan Medical School USA. With expertise in facilitating and coaching, she helps corporate leaders in Fortune 100-500 companies manage Stress, Conflict, and Decision-making.",
        awards: [
            "Certified Professional Coach - International Coach Academy, Australia",
            "Mindfulness Coach - MIT Medical School, Boston US",
            "Certified Human Potential Coach - Being At Full Potential, Canada",
            "Ontological Coach - Integral Leadership & Coaching, Paris"
        ],
        fullDetails: true
    },
    {
        id: 7,
        name: "K P Rajesh",
        role: "H R Consultant",
        image: "/consultants/rajesh.png",
        shortBio: "An HR professional with over 20 years of experience, K P Rajesh has worked with prestigious organizations in India and Kuwait. His extensive background in Human Resources has equipped him with a unique understanding of managing a diverse workforce, Payroll Management, Statutory compliance, and building strong workplace cultures.",
        fullDetails: false
    }
]

export const Page = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            
            <HeroV2
                title1='Ready to take your business growth'
                title2='to the next level?'
                description='Our team of accomplished trainers and consultants embodies a unique fusion of academic expertise and real-world experience. With a deep understanding of industry nuances and best practices, they provide tailored guidance and support to drive transformative growth and excellence.'
            />

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 
                        bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        Meet Our Expert Team
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {TEAM_MEMBERS.map(member => (
                            <div 
                                key={member.id} 
                                className={`
                                    bg-white rounded-xl shadow-lg overflow-hidden 
                                    transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                                    ${member.isOwner ? 'md:col-span-2 lg:col-span-1' : ''}
                                `}
                            >
                                <div className="relative">
                                    <Image 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-72 object-cover"
                                        width={500} height={500}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                        <h3 className="text-xl font-semibold">{member.name}</h3>
                                        <p className="text-sm">{member.role}</p>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.shortBio}</p>
                                    <button 
                                        onClick={() => setSelectedMember(member)}
                                        className="w-full bg-yellow-400 text-black py-2 rounded-md 
                                        hover:bg-yellow-500 transition duration-300 ease-in-out"
                                    >
                                        View Full Profile
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Profile Modal */}
            {selectedMember && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
                        <button 
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-black z-10"
                        >
                            &times;
                        </button>

                        <div className="grid md:grid-cols-3 p-8 gap-8">
                            {/* Profile Image */}
                            <div className="flex items-center justify-center">
                                <img 
                                    src={selectedMember.image} 
                                    alt={selectedMember.name} 
                                    className={`
                                        w-64 h-64 object-cover rounded-full 
                                        border-4 ${selectedMember.isOwner ? 'border-yellow-500' : 'border-gray-200'}
                                    `} 
                                />
                            </div>

                            {/* Profile Details */}
                            <div className="md:col-span-2">
                                <h2 className="text-4xl font-bold text-gray-900 mb-2">{selectedMember.name}</h2>
                                <p className="text-yellow-600 text-xl font-semibold mb-4">{selectedMember.role}</p>

                                {selectedMember.credentials && (
                                    <div className="mb-4">
                                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Credentials</h3>
                                        <p className="text-gray-600">{selectedMember.credentials}</p>
                                    </div>
                                )}

                                <p className="text-gray-700 mb-6">{selectedMember.shortBio}</p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Professional Journey */}
                                    {selectedMember.professionalJourney && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Professional Journey</h3>
                                            <ul className="space-y-3">
                                                {selectedMember.professionalJourney.map((journey, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-yellow-500 mr-2">●</span>
                                                        {journey}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Awards & Recognitions */}
                                    {selectedMember.awards && (
                                        <div>
                                            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Awards & Recognitions</h3>
                                            <ul className="space-y-3">
                                                {selectedMember.awards.map((award, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-yellow-500 mr-2">●</span>
                                                        {award}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default Page;