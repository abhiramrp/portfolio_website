import Link from "next/link";

import ThemeSwitcher from "@/app/themeswitcher";

export default function Navbar() {
    return (
        <nav className="">
            <p>
                Navbar
            </p>
            <ThemeSwitcher />
            <div className="logo">
                <Link href="/">
                    Abhiram Rishi Prattipati
                </Link>
            </div>
        </nav>
    )
}