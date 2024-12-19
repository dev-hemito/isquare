'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Book, Users, Brain, Mic } from 'lucide-react';

const servicesData = {
    "Training & Development": {
        icon: Book,
        color: "bg-blue-50 hover:bg-blue-100",
        borderColor: "border-blue-200",
        iconColor: "text-blue-500",
        content: {
            "Behavioural & Cognitive Assessments": [
                "Predictive Index – An in-depth understanding of PI Profile, Behavioural and Cognitive Assessments, Relationship Guide, Manager development Plan, Coaching Guide, Interview Guide, Team Profiles. ",
                "DISC – Understanding Personality types",
                "Belbin Team Roles"
            ],
            "Change Management": [
                "Bringing People Together amid Chaos: How Groups Can Grow Resilient and Adjust to Change",
                "Handling Change in the Work Environment",
                "Taking the Lead in Organisational Change",
                "Succeeding in an Uncertain and Chaotic Workplace",
                "Flourishing in high-pressure situations"
            ],
            "Communication Skills": [
                "Effective Communication Strategies for Professionals",
                "Assertiveness and Self-confidence",
                "Boundaries, Rapport and Relationship ",
                "Communicating Effectively: A Guide to Ensuring Mutual Understanding",
                "Developing a Positive and Respectful Work Environment",
                "Cultivating Curiosity in the Workplace to Improve Team Performance",
                "Communication and Gender in the Workplace",
                "Increasing Your Personal Influence and Impact",
                "Taking the Lead Across Generations",
                "How to engage in tough conversations",
                "Negotiation Skills: Getting to Collaboration",
                "Soft Skills: What's Behind a Handshake, eye contact and a Smile?",
                "The Art of Story-telling"
            ],
            "Conflict Resolution": [
                "Dealing With Difficult People",
                "Resolving Workplace Generational Conflict",
                "Taking on Conflict as a Tool for Ongoing Development",

            ],
            "Customer Service": [
                "Building Meaningful Connections ",
                "Negotiation Skills: Getting to Influencing and Collaboration",
                "What is Luxury and Luxury Customer Service?",
                "Resolving Customer Conflict",
                "Complaint Management.",
                "Delighting your customer",
            ],
            "EDI – Equity, Diversity & Inclusion": [
                "Cultural Competence: Beyond Festivals, Food, and Flags",
                "Disability Inclusion in The Workplace",
                "Inclusion and sensitisation when working with Differently-abled.",
                "LGBTQAI – Awareness and Support ",
            ],
            "Emotional Intelligence": [
                "EI (EQ) – Level 1 - Building Up Your Emotional Intelligence",
                "EI (EQ) – Level 2 - The Application of Emotional Intelligence",
                "EI (EQ) – Level 3 - The Emotionally Astute Leader",
                "EI (EQ) – Level 3 - The Emotionally Astute Leader"
            ],
            "Goal alignment": [
                "V.I.B.E. Organisational Culture Transformation Program",
                "Creating a Shared Purpose",
                "OKR - Objectives and Key Results",
                "NLP – What Leaders Need to Know",
            ],
            "Innovation": [
                "Six Thinking Hats",
                "Critical Thinking, Problem Solving and Situational decision-making techniques",
                "How to Integrate Generative AI Into HR",
                "The Six Types of Working Genius: Enhancing Team Productivity",
                "Analytical Thinking and Business Impact",
            ],
            "Leadership Training": [
                "Mastering the Transition from Peer to Supervisor",
                "Leadership and Followership",
                "Authentic Leadership Level 1: Introduction to Leadership",
                "Authentic Leadership Level 2: Maximizing Your Leadership Potential",
                "Authentic Leadership: Essential Skills for New Leaders",
                "Responsibility and Accountability",
                "Facilitated Strategic Planning Courses",
                "Facilitating Effective Meetings",
                "Leadership Boot Camp for New and Emerging Leaders and Managers",
                "Performance Management Essentials – Goal setting to Review. ",
                "How to Deliver Effective Feedback to enhance performance",
                "Developing Servant Leaders Who Inspire and Serve",
                "The Employee Engagement Recipe - Motivating, Appreciating, and more",
                "The Art of Motivation",
                "Executive presence and Personal Impact. ",
            ],
            "Meeting and Group Facilitation": [
                "Managing Effective Virtual Meetings and Teams",
                "How to Conduct a Conflict Resolution Meeting Successfully",
                "Managing Meetings Effectively ",
                "Exit interview – the least conquered area. ",
            ],
            "Presentation Skills": [
                "Powerful Presentation Skills for the Boardrooms",
                "Developing your Unique Content Presentation Style.",
                "Tools and Techniques beyond PowerPoint. ",
                "Methodical Mind Map-Based Presentations to Preserve Your Sanity ",
            ],
            "Social etiquette": [
                "Dining Etiquette for Business Meetings",
                "Professional Grooming for Corporates",
                "Social Skills for Business and Personal Events",
            ],
            "Sales & Negotiations":
                [
                    "CASH Selling",
                    "Sales Negotiations",
                    "Selling in the virtual environment",
                    "Key Account Management",
                    "Sales Presentations",
                    "Being a Sales Manager",
                    "Sales Coaching",
                ],
            "Stress Management & Resilience": [
                "Developing Resilience and wellbeing",
                "Stress Management",
                "Practical Mindfulness",
            ],
            "Talent Acquisition": [
                "Competency Vs Behavioural Interviewing Techniques",
                "Recruitment support - Assessment Center for Leadership roles",
                "Recruitment and Selection – What Young Managers should know. ",
            ],
            "Team Development": [
                "Building high-performance teams",
                "Team building and teamwork ",
                "The Six Types of Working Genius: Enhancing Team Productivity",
                "Unlocking Your Team's Potential: Enhancing Team Dynamics and Performance With Psychological Safety",
                "Cultivating Curiosity in the Workplace for Enhanced Team Communication and Motivation.",
                "Radical Candor – The Millennial way",
                "HR for Non-HR professional",
                "Sports – A mode of team building: Travel – Play - Fun ",
            ],
            "Management & Productivity": [
                "Time Management, Productivity & Delegation",
                "Achieving Your Goals in the Fast Lane",
                "Managing Time and Energy for Higher Productivity",
                "Taming Distraction and Mastering to be in the Zone.",
                "Lean / Six Sigma Courses",
                "Quantitative Analysis courses",
            ],
            "Train the Trainer": [
                "Develop your specialists into team skill trainers",
                "Managers as Facilitators",
                "Developing your Team Skill Training Pack",
                "Coach the Coach – For Team Leaders",
            ],
            "Wellness Program ": [
                "Work-Life Balance ",
                "Confidence",
                "Relationships ",
                "Transitioning & Decision Making",
                "Reiki (Level 1, 2 and 3) ",
                "Self-Awareness ",
                "Dealing with overwhelm and busyness ",
                "Communication & Assertiveness ",
                "Eating Concerns, Nutrition & Body Image ",
                "Mindfulness & Meditation ",
                "Sleep ",
                "Stress and Resilience ",
                "Physical Exercise (Yoga",

            ]
        }
    },
    "Consulting": {
        icon: Users,
        color: "bg-green-50 hover:bg-green-100",
        borderColor: "border-green-200",
        iconColor: "text-green-500",
        content: {
            "Human Resources": [
                "Workforce Planning",
                "Performance Management Design",
                "Team and Organisational performance",
                "Commercial Mindset",
                "Enabling Change to Create Value",
                "Compensation and Benefits ",
                "HR Analytics",
                "Digital Environment in a People Context",
                "Best Practice and Quality Audit",
                "Support with Professional Certifications",
                "Organisational Culture Transformation ",
                "Develop employer brand",
                "Organisational development",
                "HSE Management ",


            ],
            "Strategic Planning": [
                "Strategy Formulation",
                "Strategy Review",
                "Market Studies",
                "Risk Management",
                "Governance Management",
                "Performance Management",

            ],
            "Operational Optimization": [
                "Operations Diagnostics",
                "Value Stream Mapping",
                "Management Diagnostics",
                "Improvement Interventions",
                "Efficiency Improvement",
                "Quality Improvement",

            ]
        }
    },
    "Coaching, Counseling & Mentoring": {
        icon: Brain,
        color: "bg-purple-50 hover:bg-purple-100",
        borderColor: "border-purple-200",
        iconColor: "text-purple-500",
        content: [
            "Essential Coaching Skills for Leaders (Coach the Coach)",
            "Leaders as Mentors: How to Enhance Performance Through Effective Coaching Discussions",
            "Transformative Coaching for Enhanced Performance ",
            "CIPD - Experience Assessment Mentoring",
            "Career Coaching - Fresh Applicants and those Aspiring for Senior Roles",
            "Leadership Coaching - Tools leaders need to excel in the Challenging Business Environment",
            "Enable Employees to have a Voice",
            "Imposter Syndrome",

        ]
    },
    "Guest Speaker": {
        icon: Mic,
        color: "bg-orange-50 hover:bg-orange-100",
        borderColor: "border-orange-200",
        iconColor: "text-orange-500",
        content: [
            "Seminars",
            "Workshops",
            "Conferences",
            "Universities on Human Resource Development Areas"
        ]
    }
};

const ServiceDetails = ({ content, isOpen }) => {
    const [openItems, setOpenItems] = useState({});

    if (!isOpen) return null;

    const toggleItem = (key) => {
        setOpenItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    if (Array.isArray(content)) {
        return (
            <div className="mt-4 space-y-2">
                {content.map((item, index) => (
                    <div key={index} className="pl-4 py-2 text-sm text-gray-600">
                        • {item}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="mt-4 space-y-2">
            {Object.entries(content).map(([key, value]) => (
                <div key={key} className="border-l-2 border-gray-200">
                    <div
                        className="flex items-center cursor-pointer p-2 hover:bg-gray-50"
                        onClick={() => toggleItem(key)}
                    >
                        {openItems[key] ?
                            <ChevronDown className="w-4 h-4 mr-2 text-gray-500" /> :
                            <ChevronRight className="w-4 h-4 mr-2 text-gray-500" />
                        }
                        <span className="font-medium">{key}</span>
                    </div>
                    {openItems[key] && (
                        <div className="ml-6 space-y-2">
                            {value.map((item, index) => (
                                <div key={index} className="py-2 text-sm text-gray-600">
                                    • {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const ServicesComponent = () => {
    const [openService, setOpenService] = useState(null);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
                People Development Resources
            </h1>
            <p className="text-center text-gray-600 mb-12">
                Comprehensive solutions for your organizational growth and development needs
            </p>

            <div className="grid grid-cols-1 gap-6">
                {Object.entries(servicesData).map(([service, { icon: Icon, color, borderColor, iconColor, content }]) => (
                    <div key={service} className="relative">
                        <div
                            className={`p-6 rounded-lg border-2 ${borderColor} ${color} cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                            onClick={() => setOpenService(openService === service ? null : service)}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <Icon className={`w-8 h-8 ${iconColor}`} />
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openService === service ? 'rotate-180' : ''
                                        }`}
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service}</h3>
                            <p className="text-sm text-gray-600">
                                Click to explore our {service.toLowerCase()} offerings
                            </p>
                        </div>

                        <div className={`mt-2 bg-white rounded-lg border shadow-lg p-4 transition-all duration-300 ${openService === service ? 'opacity-100 max-h-[500px] overflow-y-auto' : 'opacity-0 max-h-0 overflow-hidden'
                            }`}>
                            <ServiceDetails content={content} isOpen={openService === service} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesComponent;