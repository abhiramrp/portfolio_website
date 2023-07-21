import Link from "next/link";
import Image from "next/image";

import { EnvelopeIcon } from "@heroicons/react/24/solid";


export default function Contact(){
    return (
        <div id="contact" className="bg-blue-300 text-gray-800 pb-4">
            <div className="text-center font-bold text-2xl p-6">
                Contact
            </div>

            <div className="ml-4 flex justify-center items-center">

                <div className="w-10 h-10 items-center font-bold text-xl">
                    <Link href="mailto:pabhiramrishi@gmail.com">
                        <EnvelopeIcon className="h-10" />
                    </Link>
                </div>

                <div className="text-center font-bold text-xl hover:underline">
                    <Link href="mailto:pabhiramrishi@gmail.com">
                        pabhiramrishi@gmail.com
                    </Link>
                </div>

            </div>

            <div className="ml-4 flex justify-center items-center">

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

                <div className="text-center font-bold text-xl hover:underline">
                    <Link href="https://www.linkedin.com/in/abhiramprattipati/">
                        Message me on LinkedIn!
                    </Link>
                </div>

            </div>

        </div>
    )
}