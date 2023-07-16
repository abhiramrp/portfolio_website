import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="">
            <p>
                Navbar
            </p>
            <div className="logo">
                <Link href="/">
                    Abhiram Rishi Prattipati
                </Link>
            </div>
        </nav>
    )
}