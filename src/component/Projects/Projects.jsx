import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import projects from "../../assets/projectsData/data";
import ProjectItem from "./ProjectItem";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* <div className="projects_allItems">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, i) => {
            return (
              <SwiperSlide key={project.id}>
                <ProjectItem
                  title={project.name}
                  img={project.img}
                  desc={project.description}
                  url={project.url}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}

      {/* experiment */}
      <div
        className="projects_allItems"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <>
          {projects.map((project, i) => {
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
