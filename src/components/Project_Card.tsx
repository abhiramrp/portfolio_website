import {Project} from '@/components/project_data';
import Link from 'next/link';
import Image from 'next/image';
import Iframe from 'react-iframe';


export default function Project_Card (project: Project) {


    let projectDisplay = <Image src={project.filePath} alt="Project Stock Image" width="0"
    height="0" sizes="100vw" className="w-full h-auto" />; 

    if (project.isVideo) {
        let youtubeStr = "https://www.youtube.com/embed/" + project.filePath;
       
        projectDisplay = <Iframe url={youtubeStr} 
        className="w-full h-auto aspect-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen/>
        
        /*
        <iframe src={youtubeStr} 
                            title="W3Schools Free Online Web Tutorials"
                            className="relative w-full h-auto"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>

                        </iframe>

        */
        
    }

    return (
        <div className="border-black border-2 m-2 p-2 bg-blue-200 text-gray-900 flex-col">
            <div className="font-bold text-2xl flex justify-center relative">
                {project.title}
            </div>

            <div className='flex justify-center items-center p-2'>
                {projectDisplay}
            </div>


            <div className="text-m">
                {project.description}
            </div>

            <div className="text-m italic">
                Skills: {project.languages.join(', ')}
            </div>

            <div className="text-xl flex justify-center relative">
                <Link href={project.github} className='hover:underline'> GitHub </Link>
            </div>


        </div>
    )

}