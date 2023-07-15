import Image from "next/image";

export default function Intro() {
    return (
        <div>
            <Image src='/intro.jpg' className="profile-img" width={300} height={300} alt="Abhiram face" />
            <h1>Hey, Im Abhiram 👋</h1>
            <p>
                Im a software developer based in Lagos, Nigeria. I specialize in building (and occasionally designing)
                exceptional websites, applications, and everything in between.
            </p>
        </div>
    )
}

