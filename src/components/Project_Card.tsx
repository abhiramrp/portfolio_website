import {Project} from '@/components/project_data';
import Link from 'next/link';
import Image from 'next/image';


export default function Project_Card (project: Project) {


    let projectDisplay = <Image src={project.filePath} alt="Project Stock Image" fill/>; 

    if (project.isVideo) {
        let youtubeStr = "https://www.youtube.com/embed/" + project.filePath;
        projectDisplay = <iframe src={youtubeStr} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    }

    return (
        <div className="border-black border-2 m-2 p-2 bg-blue-200 text-gray-900 flex-col">
            <div className="font-bold text-xl flex justify-center relative">
                {project.title}
            </div>

            <div className='flex justify-center w-full h-fit relative p-1 object-contain'>
                {projectDisplay}
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