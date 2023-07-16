import project_data from "./project_data";

export default function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <div>
                {project_data.map((proj) => {
                    return (
                        <div key={proj.id}>
                            <p>{proj.description}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}