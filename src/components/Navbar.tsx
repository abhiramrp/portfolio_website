import Link from "next/link";

export default function Navbar() {
    return (
        <div className="nav-container">
            <p>
                Navbar
            </p>
            <div className="logo">
                <Link href="/">
                    Abhiram Rishi Prattipati
                </Link>
            </div>
        </div>
    )
}