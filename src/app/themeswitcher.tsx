"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { SunIcon ,MoonIcon} from "@heroicons/react/24/solid";


export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, []);
    
    if (!mounted) {
        return null;
    }


    if ( theme === "dark" ) {
        return (
            <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
        )
    }


    return (
        <MoonIcon className="w-10 h-10 text-gray-900" role="button" onClick={() => setTheme('dark')} />
    )

}