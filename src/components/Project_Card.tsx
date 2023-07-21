import {Project} from '@/components/project_data';
import Link from 'next/link';
import Image from 'next/image';


export default function Project_Card (project: Project) {


    let projectDisplay = <p>Image</p>; 

    if (project.isVideo) {
        projectDisplay = <iframe width="560" height="315" src="https://www.youtube.com/embed/V2yBrowfJGo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    } 

    return (
        <div className="border-black border-2 m-2 p-2 bg-blue-200 text-gray-900">
            <div className="font-bold text-xl">
                {project.title}
            </div>

            {projectDisplay}

            <div className="text-m">
                {project.description}
            </div>

            <div className="text-m italic">
                Skills: {project.languages.join(', ')}
            </div>

            <Link href={project.github} className='hover:underline'> link </Link>


        </div>
    )

}