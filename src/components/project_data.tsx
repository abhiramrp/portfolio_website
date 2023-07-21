export interface Project {
    key ?: any, 
    title: string, 
    description: string, 
    isVideo ?: boolean,
    filePath: string,
    github: string, 
    languages: string[]
}

const project_data: Array<Project> = [
    {
        title: 'Disaster Tweets',
        description: 'ML model that predicts tweets that are about natural disasters using Logistic Regression and TF-IDF algorithm. ',
        github: 'https://github.com/abhiramrp/nlp_disaster_tweets',
        filePath: 'sdfs', 
        languages: ['Python', 'NLTK', 'Machine Learning', 'TensorFlow', 'Pandas', 'sci-kit learn']
    }, 
    {
        title: 'Tank Game',
        description: 'dfxzca',
        isVideo: true,
        filePath: 'asfds',
        github: 'https://github.com/abhiramrp/tank_game',
        languages: ['java', 'OOPS']
    },
    {
        title: 'Personal Finance', 
        description: "Django web application where users can track their finances such as debit, credit, savings, and other accounts.", 
        github: 'https://github.com/abhiramrp/PersonalFinance',
        isVideo: true, 
        filePath: 'sdfs',
        languages: ['Python', 'Django', 'SQLite', 'Chart.js', 'Bootstrap']
    }
];

export default project_data;



