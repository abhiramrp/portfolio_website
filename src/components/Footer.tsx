import Link from "next/link";
import Image from "next/image";

import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Footer() {
    return (
        <footer className="bg-gray-600 text-white mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between py-2">
                <span className="text-sm">
                    © {new Date().getFullYear()} Abhiram Rishi Prattipati. Made with <a href="https://nextjs.org/">Next.js</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a>. Deployed on <a href="https://vercel.com/">Vercel</a>. <a href="https://github.com/abhiramrp/portfolio_website"> Stock Image Credits.</a> 
                </span>

                <div className="ml-4 flex justify-center items-center space-x-4">

                    <div className="w-10 h-10 relative">
                        <Link href="mailto:pabhiramrishi@gmail.com">
                            <EnvelopeIcon className="h-10" />
                        </Link>
                    </div>

                    <div className="w-10 h-10 relative p-2">
                        <Link href="https://github.com/abhiramrp">
                            <Image
                                quality={100}
                                src="/logos/github.svg"
                                alt="github"
                                fill
                                sizes="100%"
                                style={{
                                    objectFit: "cover"
                                }} />
                        </Link>
                    </div>

                    <div className="w-12 h-10 relative">
                        <Link href="https://www.linkedin.com/in/abhiramprattipati/">

                            <Image
                                quality={100}
                                src="/logos/linkedin.svg"
                                alt="github"
                                fill
                                sizes="100%"
                                style={{
                                    objectFit: "cover"
                                }} />
                        </Link>
                    </div>


                </div>
            </div>


        </footer>
    );
}


/**
 * <Image fill={true} src="/logos/github.svg" alt="github"  />
 */
