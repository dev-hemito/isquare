import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-black fixed top-0 w-full z-50">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <Link href="#" className="flex items-center">
                    <img src="/logo1.png" className="md:h-12 h-9 mr-3 w-auto  object-contain" alt="Landwind Logo" />
                </Link>
                <div className="flex items-center lg:order-2">
                    <div className="hidden mt-2 mr-4 sm:inline-block">
                        <span></span>
                    </div>

                    <Link href=""
                        className="   font-medium  text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  bg-yellow-300 text-black hover:bg-yellow-500">Contact Us</Link>
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="true">
                        <span className="sr-only">Open main menu</span>
                        <Menu />
                    </button>
                </div>
                <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-5">
                    <li>
                            <Link href="/"
                                className="text-gray-200 hover:text-white">Home</Link>
                        </li>
                        <li>
                            <Link href="/whoweare"
                                className="text-gray-200 hover:text-white">Who we are</Link>
                        </li>
                        <li>
                            <Link href="#"
                                className="text-gray-200 hover:text-white">Services</Link>
                        </li>
                        <li>
                            <Link href="#"
                                className="text-gray-200 hover:text-white">Our Mission</Link>
                        </li>
                        <li>
                            <Link href="#"
                                className="text-gray-200 hover:text-white">Consultants</Link>
                        </li>
                        <li>
                            <Link href="#"
                                className="text-gray-200 hover:text-white">Articles</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
        </nav>

    )
}

export default Navbar
