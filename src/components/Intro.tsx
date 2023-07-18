import Image from "next/image";

export default function Intro() {
    return (
        <div className="flex justify-center items-center p-5">

            <div>
                <Image
                    src="/profile.jpg"
                    alt="Abhiram's face"
                    width={500}
                    height={500}
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
            </div>


            <div className="flex-col justify-center align-middle items-center">

                <div>
                    <h1>Hey, Im Abhiram 👋</h1>
                </div>

                <div>
                    Im a software developer based in Dallas-Forth metroplex, TX. I am currently looking for entry level roles in software development, cloud computinng, and machine learning. 
                </div>

            </div>

        </div>
    );
}

