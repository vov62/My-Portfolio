import React from "react";
import "./projectsItem.css";

const ProjectItem = ({ title, img, desc, url }) => {
  return (
    <>
      <div className="project-details">
        <div className="project_img">
          <img src={img} alt={title} />
        </div>
        <div className="projectItem__info">
          <h3 className="projectItem__title">{title}</h3>
          <p className="projectItem__desc">{desc}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <h4 className="projectItem_viewProject">View Project</h4>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
