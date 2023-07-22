import project_data from "./project_data";

import Project_Card from "./Project_Card";

export default function Projects() {
    return (
        <div id="projects" className="px-5">

            <div className="text-center font-bold text-2xl pt-6">
                Projects
            </div>

            <div className="py-3 flex flex-wrap md:inline-grid md:grid-cols-3">
                {project_data.map((proj) => {
                    return (
                        <Project_Card 
                            key={proj.key} 
                            title={proj.title} 
                            description={proj.description} 
                            isVideo={proj.isVideo}
                            github={proj.github}
                            filePath={proj.filePath}
                            languages={proj.languages}
                        />
                    )
                })}
            </div>

        </div>
    )
}