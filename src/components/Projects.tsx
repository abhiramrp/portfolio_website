import project_data from "./project_data";

import Project_Card from "./Project_Card";

export default function Projects() {
    return (
        <div id="projects" className="px-5">

            <div className="font-bold text-2xl pt-6">
                Projects
            </div>

            <div className="p-1 flex">
                {project_data.map((proj) => {
                    return (
                        <Project_Card 
                            key={proj.id} 
                            id={proj.id} 
                            title={proj.title} 
                            description={proj.description} 
                            github={proj.github}
                            languages={proj.languages}
                        />
                    )
                })}
            </div>

        </div>
    )
}