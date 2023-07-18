import Link from "next/link";
import Image from "next/image";

import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Footer() {
    return (
        
        <footer className="bg-gray-600 text-white mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between py-2">
                <span className="text-sm">
                    © {new Date().getFullYear()} Abhiram Rishi Prattipati
                </span>

                <div className="ml-4 flex justify-center items-center space-x-4">

                    <div className="w-10 h-10 relative">
                        <Link href="mailto:pabhiramrishi@gmail.com">
                            <EnvelopeIcon className="h-10" />
                        </Link>
                    </div>

                    <div className="w-10 h-10 relative p-2">
                        <Link href="https://github.com/abhiramrp">
                            <Image sizes="100%" layout="fill" objectFit="cover" quality={100} src="/logos/github.svg" alt="github"  />
                        </Link>
                    </div>

                    <div className="w-12 h-10 relative">
                        <Link href="https://www.linkedin.com/in/abhiramprattipati/">

                            <Image sizes="100%" layout="fill" objectFit="cover" quality={100} src="/logos/linkedin.svg" alt="github"  />
                        </Link>
                    </div>


                </div>
            </div>


        </footer>
    )
}


/**
 * <Image fill={true} src="/logos/github.svg" alt="github"  />
 */

