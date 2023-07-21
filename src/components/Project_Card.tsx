import {Project} from '@/components/project_data';


export default function Project_Card (project: Project) {

    return (
        <div className='p-2'>
            <p>{project.description}</p>
            <br></br>

        </div>
    )

}