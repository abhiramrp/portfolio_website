"use client";

import Link from "next/link";
import { useState } from 'react';

import ThemeSwitcher from "@/app/themeswitcher";

import {Bars3Icon} from "@heroicons/react/24/solid";

export default function Navbar() {

    const [navActive, setNavActive] = useState(false);

    return (

        <nav className="bg-blue-500 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <Link href="/" className="text-white">
                    Abhiram Rishi Prattipati
                </Link>
                </div>
            </div>
            <div className="flex sm:block justify-between items-center ">
                    
                <div className="ml-4 flex space-x-4">
                    <ThemeSwitcher />
                <Link href="#intro" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                </Link>
                <Link href="#about" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                </Link>
                <Link href="/projects" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Projects
                </Link>
                <Link href="https://drive.google.com/file/d/1UtM5LFFq9-iRM1oE2ZtzYwRQ4LF87mKZ/view?usp=sharing" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Resume
                </Link>
                <Link href="/contact" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact
                </Link>
                
                </div>
            </div>
            </div>
        </nav>
    )

 
}