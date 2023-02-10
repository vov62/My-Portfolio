import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import projects from "../../assets/projectsData/data";
import ProjectItem2 from "./ProjectsItem2";
import "./projects2.css";

const Projects2 = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects_allItems">
        <>
          {projects.map((project, i) => {
            return (
              <ProjectItem2
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

export default Projects2;
