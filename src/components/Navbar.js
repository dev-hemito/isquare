'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-black fixed top-0 w-full z-50 shadow-sm">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                {/* Logo */}
                <Link href="/" className="flex items-center" onClick={closeMenu}>
                    <img 
                        src="/logo1.png" 
                        className="md:h-12 h-9 mr-3 w-auto object-contain" 
                        alt="Company Logo" 
                    />
                </Link>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center lg:order-2">
                    <Link 
                        href="/contact"
                        className="hidden sm:inline-block font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 bg-yellow-300 text-black hover:bg-yellow-500 transition-colors"
                    >
                        Contact Us
                    </Link>

                    <button 
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open main menu'}</span>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Navigation Menu */}
                <div 
                    className={`
                        items-center justify-between w-full lg:flex lg:w-auto lg:order-1 
                        ${isMenuOpen ? 'block' : 'hidden'}
                        absolute lg:static left-0 right-0 top-full bg-black lg:bg-transparent
                    `}
                    id="mobile-menu"
                >
                    <ul className="
                        flex flex-col mt-4 font-medium 
                        lg:flex-row lg:space-x-8 lg:mt-0 
                        gap-5 p-4 lg:p-0
                    ">
                        {[
                            { href: '/', label: 'Home' },
                            { href: '/#whoweare', label: 'Who we are' },
                            { href: '/services', label: 'Services' },
                            { href: '/#mission', label: 'Our Mission' },
                            { href: '/consultants', label: 'Consultants' },
                            { href: '/articles', label: 'Articles' },
                            { href: '/csr', label: 'CSR' },
                            { href: '/contact', label: 'Contact', mobileOnly: true }
                        ].map((link) => (
                            <li 
                                key={link.href} 
                                className={`
                                    ${link.mobileOnly ? 'lg:hidden' : ''}
                                    w-full lg:w-auto
                                `}
                            >
                                <Link 
                                    href={link.href}
                                    className="
                                        block py-2 lg:py-0
                                        text-gray-200 hover:text-white 
                                        transition-colors
                                        text-center lg:text-left
                                    "
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar