import { Url } from "next/dist/shared/lib/router/router"

interface Project {
    id: number,
    title: string, 
    description: string, 
    github: Url
}

const project_data: Array<Project> = [
    {
        id: 1, 
        title: 'Disaster Tweets',
        description: 'dfa',
        github: 'https://github.com/abhiramrp/tank_game'
    }, 
    {
        id: 2, 
        title: 'Tank Game',
        description: 'dfxzca',
        github: 'https://github.com/abhiramrp/tank_game'
    }

];

export default project_data;



