import forest from "../../images/forest.png";
import VovRecords from "../../images/vinyl project hero.png";
import workout from "../../images/workout project.png";
import movies from "../../images/movies.png";
import git from "../../images/git3.png";
import todo from "../../images/todo3.png";
import weather from "../../images/weather.png";

const projects = [
  {
    id: 1,
    name: "weather",
    description: "Weather spp, Search for city forecast and next 5 days ",
    img: weather,
    url: "https://github.com/vov62/ToDo-app",
  },

  {
    id: 2,
    name: "Forest Group Estate",
    description: "Frontend Project for Real Estate Agency called 'Forest Group",
    img: forest,
    url: "https://forest-group-estate.netlify.app/",
  },
  {
    id: 3,
    name: "Vov Records",
    description:
      "Vinyl records E-commerce app, search for your favorite vinyl record",
    img: VovRecords,
    url: "https://vov-records.netlify.app/",
  },
  {
    id: 4,
    name: "workout-tracker-app",
    description:
      "MERN-workout-tracker-app,This app allows users to register and track their gym workouts",
    img: workout,
    url: "https://vov-workout-app.herokuapp.com/login",
  },
  {
    id: 5,
    name: "movies",
    description: "Movies app, search for your favorite movie.",
    img: movies,
    url: "https://github.com/vov62/React-Movies-App",
  },
  {
    id: 6,
    name: "git",
    description:
      "Github users app, find any user on github and explore his repos",
    img: git,
    url: "https://github.com/vov62/github-front-project",
  },
  {
    id: 7,
    name: "todo",
    description: "Todo crud app, read, create, delete and update your task",
    img: todo,
    url: "https://github.com/vov62/ToDo-app",
  },
];

export default projects;
