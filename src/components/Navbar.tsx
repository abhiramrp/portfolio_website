"use client";

import Link from "next/link";
import { useState } from 'react';

import ThemeSwitcher from "@/app/themeswitcher";

import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

export default function Navbar() {

    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="inline-block w-full bg-blue-500 text-white">

            <div className="justify-between flex items-center p-4">
                <Link href="/" className="text-2xl font-bold p-2">
                    Abhiram Rishi Prattipati
                </Link>

                <div className="flex justify-center items-center px-2">
                    <ThemeSwitcher />

                    <button onClick={() => setNavbar(!navbar)} className="w-10 h-10 md:hidden">
                        {
                            navbar ? (<XMarkIcon />) : (<Bars3Icon />)
                        }
                    </button>
                </div>
            </div>
            

            <div className={`flex justify-center items-center md:block ${
                navbar ? 'flex' : 'hidden'
            }`}>
                <ul className="h-fit md:h-auto items-center justify-center md:flex">
                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="/" onClick={() => setNavbar(!navbar)}>
                            Home
                        </Link>

                    </li>
                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="#about" onClick={() => setNavbar(!navbar)}>
                            About
                        </Link>
                    </li>
                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                            Projects
                        </Link>
                    </li>
                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="https://drive.google.com/file/d/1rx_3lACaA5FxVC4iUH0StJv23Cg9Uy0q/view?usp=sharing" onClick={() => setNavbar(!navbar)}>
                            Resume
                        </Link>
                    </li>
                    <li className="text-xl py-3 px-5 text-center hover:bg-blue-100 hover:text-gray-800">
                        <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                            Contact
                        </Link>
                    </li>
                </ul>

            </div>

        </nav>
    )

 
}


/*
<div className="justify-between flex items-center p-4">
                <Link href="/" className="text-2xl font-bold">
                    Abhiram Rishi Prattipati
                </Link>

                <div className="flex justify-center items-center px-2">
                    <ThemeSwitcher />

                    <button onClick={() => setNavbar(!navbar)} className="w-10 h-10 md:hidden">
                        {
                            navbar ? (<XMarkIcon />) : (<Bars3Icon />)
                        }
                    </button>
                </div>
            </div>
*/