import {Project} from '@/components/project_data';
import Link from 'next/link';
import Image from 'next/image';


export default function Project_Card (project: Project) {

    return (
        <div className="border-black border-2 m-2 p-2 bg-blue-200 text-gray-900">
            <div className="font-bold text-xl">
                {project.title}
            </div>

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