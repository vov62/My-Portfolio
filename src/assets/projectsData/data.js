import movies from '../../images/movies.png';
import git from '../../images/git3.png';
import todo from '../../images/todo3.png';
import weather from '../../images/weather2.jpg';


const projects = [
    {
        id: 1,
        name: 'movies',
        description: 'Movies app, search for your favorite movie.',
        img: movies,
        url: 'https://github.com/vov62/React-Movies-App',
    },
    {
        id: 2,
        name: 'git',
        description: 'Github users app, find any user on github and explore his repos.',
        img: git,
        url: 'https://github.com/vov62/github-front-project',
    },
    {
        id: 3,
        name: 'todo',
        description: 'Todo crud app, read, create, delete and update your task.',
        img: todo,
        url: 'https://github.com/vov62/ToDo-app',
    },
    {
        id: 4,
        name: 'weather',
        description: 'Weather spp, search for weather of any city.',
        img: weather,
        url: 'https://github.com/vov62/ToDo-app',

    },

]

export default projects;