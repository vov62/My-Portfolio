import VovRecords from "../../images/vinyl project hero.png";
import workout from "../../images/workout project.png";

import movies from "../../images/movies.png";
import git from "../../images/git3.png";
import todo from "../../images/todo3.png";
import weather from "../../images/weather2.jpg";

const projects = [
  {
    id: 1,
    name: "Vov Records",
    description:
      "Vinyl records E-commerce app, search for your favorite vinyl record",
    img: VovRecords,
    url: "https://vov-records.netlify.app/",
  },
  {
    id: 2,
    name: "workout-tracker-app",
    description:
      "MERN-workout-tracker-app,This app allows users to register and track their gym workouts",
    img: workout,
    url: "https://vov-workout-app.herokuapp.com/login",
  },
  {
    id: 3,
    name: "movies",
    description: "Movies app, search for your favorite movie.",
    img: movies,
    url: "https://github.com/vov62/React-Movies-App",
  },
  {
    id: 4,
    name: "git",
    description:
      "Github users app, find any user on github and explore his repos",
    img: git,
    url: "https://github.com/vov62/github-front-project",
  },
  {
    id: 5,
    name: "todo",
    description: "Todo crud app, read, create, delete and update your task",
    img: todo,
    url: "https://github.com/vov62/ToDo-app",
  },
  {
    id: 6,
    name: "weather",
    description: "Weather spp, search for weather of any city",
    img: weather,
    url: "https://github.com/vov62/ToDo-app",
  },
];

export default projects;
