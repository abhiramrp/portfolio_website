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
        filePath: '/projects/disaster_tweets.jpg', 
        languages: ['Python', 'NLTK', 'Machine Learning', 'TensorFlow', 'Pandas', 'sci-kit learn']
    }, 
    {
        title: 'Food Expiration Tracker',
        description: 'Android Firebase application that help users track food items in their kitchen and notifies them if any food item expired.',
        github: 'https://github.com/abhiramrp/Food_Expiration_Tracker',
        filePath: '/projects/food_expiration_tracker.jpg', 
        languages: ['Android', 'Kotlin', 'Firebase', 'Firestore']
    },
    {
        title: 'Tank Game',
        description: '2-player Java game where both players battle each other for survival.',
        isVideo: true,
        filePath: 'V2yBrowfJGo',
        github: 'https://github.com/abhiramrp/tank_game',
        languages: ['Java', 'OOPS']
    },
    {
        title: 'Personal Finance', 
        description: "Django web application where users can track their finances such as debit, credit, savings, and other accounts.", 
        github: 'https://github.com/abhiramrp/PersonalFinance',
        isVideo: true, 
        filePath: 'pLwWa1HFi08',
        languages: ['Python', 'Django', 'SQLite', 'Chart.js', 'Bootstrap']
    },
    {
        title: 'Roomeet',
        description: "Flask web application where users can find roommates and listings by 'swiping' left or right based on their location and preferences.",
        github: 'https://github.com/abhiramrp/RoomeetProject', 
        filePath: '/projects/roomeet.jpg',
        languages: ['Python', 'Flask', 'SQLite']
    }
];

export default project_data;



