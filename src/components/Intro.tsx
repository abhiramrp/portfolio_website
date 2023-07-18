import Image from "next/image";

export default function Intro() {
    return (
        <div className="flex">

            <div>
                <Image src="/intro.jpg" className="ml-auto" alt="Abhiram's face"  width={500} height={500} />
            </div>

            <div>
                <h1>Hey, Im Abhiram 👋</h1>
            </div>

            <div>
                Im a software developer based in Dallas-Forth metroplex, TX. I am currently looking for entry level roles in software development, cloud computinng, and machine learning. 
            </div>

        </div>
    )
}

