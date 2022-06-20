import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import projects from "../../assets/projectsData/data";
import ProjectItem from "./ProjectItem";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects_allItems">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
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
      </div>
    </section>
  );
};

export default Projects;
