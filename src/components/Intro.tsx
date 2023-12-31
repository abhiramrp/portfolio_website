"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Intro() {

    const { theme } = useTheme();

    let githubfile = "/logos/github_light.svg";

    if (theme === "dark") {
        githubfile = "/logos/github.svg";
    }

    const intro_text = "I'm a software developer based in Dallas-Fort Worth metroplex, TX. " + 
    "I am currently looking for entry level roles in software development, cloud computing, and machine learning.";



    return (
        <div className="flex flex-wrap justify-center items-center p-5" id="intro">
            <div className="relative w-[300px] h-[300px]">
                <Image
                    src="/profile.jpg"
                    alt="Abhiram's face"
                    fill={true}
                />
            </div>

            <div className="flex-col justify-center align-middle items-center p-5">

                <div className="text-center font-bold text-3xl p-3">
                    Hey, I&#39;m Abhiram 👋
                </div>

                <div className="text-center text-lg p-3">
                    {intro_text}
                </div>

                <div className="ml-4 flex justify-center items-center space-x-4 p-3">

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

                <div className="ml-4 flex justify-center items-center space-x-4 p-3">

                    <div className="w-10 h-10 relative m-2">
                        <Link href="https://github.com/abhiramrp">
                            <Image
                                quality={100}
                                src={githubfile}
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



        </div>
    );
}