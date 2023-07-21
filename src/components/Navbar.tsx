"use client";

import Link from "next/link";
import { useState } from 'react';

import ThemeSwitcher from "@/app/themeswitcher";

import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

export default function Navbar() {

    const [navbar, setNavbar] = useState(false);

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
                    
              

                    <ThemeSwitcher />

                    <div className="md:hidden">

                        <Bars3Icon className={`w-10 h-10 ${navbar ? (  <XMarkIcon className="w-10 h-10" /> ) : ( <Bars3Icon className="w-10 h-10"/> )}`} role="button" onClick={() => setNavbar(!navbar)} />

                    </div>

                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}>

                        <ul className="h-screen md:h-auto items-center justify-center md:flex ">

                        <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  border-purple-900  md:hover:text-white md:hover:bg-transparent">
                            <Link href="#intro" onClick={() => setNavbar(!navbar)}>
                                Home
                            </Link>
                        </li>

                        <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  border-purple-900  md:hover:text-white md:hover:bg-transparent">
                            <Link href="#about" onClick={() => setNavbar(!navbar)}>
                                About
                            </Link>
                        </li>

                        <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  border-purple-900  md:hover:text-white md:hover:bg-transparent">
                            <Link href="/projects" onClick={() => setNavbar(!navbar)}>
                                Projects
                                </Link>
                        </li>

                        <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  border-purple-900  md:hover:text-white md:hover:bg-transparent">
                            <Link href="https://drive.google.com/file/d/1UtM5LFFq9-iRM1oE2ZtzYwRQ4LF87mKZ/view?usp=sharing" onClick={() => setNavbar(!navbar)}>
                                Resume
                                </Link>
                        </li>

                        <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  border-purple-900  md:hover:text-white md:hover:bg-transparent">
                            <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                                Contact
                            </Link>

                        </li>

                        </ul>

                    </div>
             
            </div>
            </div>
        </nav>
    )

 
}




/*
<Bars3Icon role="button" onClick={() => setNavbar(!navbar)}> 
                            {navbar ? (  <XMarkIcon /> ) : ( <Bars3Icon /> )}
                        
                        </Bars3Icon>
*/