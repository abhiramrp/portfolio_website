import Link from "next/link";

export default function Footer() {
    return (
        <div className="footer-container">
            <p>
                Footer
            </p>
            <div className="social_icons">
                asdfsdf
                <Link
                    href="https://github.com/abhiramrp"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-github"></i>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/abhiramprattipati/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </Link>
            </div>
        </div>
    )
}

