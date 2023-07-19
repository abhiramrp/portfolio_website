import project_data from "./project_data";

export default function Projects() {
    return (
        <div id="projects" className="px-5">

            <div className="font-bold text-2xl pt-6">
                Projects
            </div>

            <div className="p-1 flex">
                {project_data.map((proj) => {
                    return (
                        <div key={proj.id} className="p-2 bg-blue-100">
                            <p>{proj.description}</p>
                            <p>{proj.title}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}