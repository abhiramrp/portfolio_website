interface Project {
    id: number,
    title: string, 
    description: string, 
    github: string, 
    languages: string[]
}

const project_data: Array<Project> = [
    {
        id: 1, 
        title: 'Disaster Tweets',
        description: 'dfa',
        github: 'https://github.com/abhiramrp/tank_game',
        languages: ['python', 'NLP']
    }, 
    {
        id: 2, 
        title: 'Tank Game',
        description: 'dfxzca',
        github: 'https://github.com/abhiramrp/tank_game',
        languages: ['java', 'OOPs']
    }

];

export default project_data;



