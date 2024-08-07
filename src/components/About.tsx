export default function About() {

    const bio = "I graduated from San Francisco State University with a BS in Computer Science. " + 
    "As a computer science student with a strong passion for software development and programming, " + 
    "I am eager to gain hands-on experience in this field and apply my skills and knowledge in the industry." + 
    "I also led the logistics team for my schools' anuual hackathon. ";

    const work = " I also worked as a programming instructor at iD Tech Camps for two years " + 
    "where I taught children courses in Python, Java, C++, and web development. " +
    "I helped them understand basic programming concepts and OOPS concepts.";



    return (
        <div id="about" className="bg-blue-300 text-gray-800">

            <div className="text-center font-bold text-2xl pt-6">
                About Me
            </div>

            <div className="p-8">
                
                <p>{bio}</p>
                <br></br>
                <p>{work}</p>
                <br></br>
                <p>I am currently a Full Stack Developer Intern at <a href="https://cogentibs.com/" className="hover:underline">Cogent IBS</a> and a Software Engineering Intern at <a href="https://www.tradesun.com/" className="hover:underline">TradeSun</a>.</p>

            </div>

        </div>
    )
}