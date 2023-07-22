import {Project} from '@/components/project_data';
import Link from 'next/link';
import Image from 'next/image';
import Iframe from 'react-iframe';


export default function Project_Card (project: Project) {


    let projectDisplay = <Image src={project.filePath} alt="Project Stock Image" width="0"
    height="0"
    sizes="100vw" className="w-full h-auto" />; 

    if (project.isVideo) {
        let youtubeStr = "https://www.youtube.com/embed/" + project.filePath;
        /*
        projectDisplay = <iframe src={youtubeStr} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
            
        </iframe>
        */
       
        projectDisplay = <Iframe url={youtubeStr} 
            className='block relative w-full h-auto'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen />
    }

    return (
        <div className="border-black border-2 m-2 p-2 bg-blue-200 text-gray-900 flex-col">
            <div className="font-bold text-xl flex justify-center relative">
                {project.title}
            </div>

            <div className='flex justify-center relative p-2 w-fit h-auto'>
                {projectDisplay}
            </div>


            <div className="text-m">
                {project.description}
            </div>

            <div className="text-m italic">
                Skills: {project.languages.join(', ')}
            </div>

            <div className="text-l flex justify-center relative">
                <Link href={project.github} className='hover:underline'> GitHub </Link>
            </div>


        </div>
    )

}