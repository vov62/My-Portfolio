import React from "react";
import projectsData from "../../assets/projectsData/data";
import ProjectItem from "./ProjectsItem";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects_allItems">
        <>
          {projectsData.map((project, i) => {
            return (
              <ProjectItem
                title={project.name}
                img={project.img}
                desc={project.description}
                url={project.url}
              />
            );
          })}
        </>
      </div>
    </section>
  );
};

export default Projects;
