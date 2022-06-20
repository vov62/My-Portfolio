import React from "react";
import { Link } from "react-router-dom";
import "./projectItem.css";

const ProjectItem = ({ title, img, desc, url }) => {
  return (
    <>
      <div className="project_img">
        <img src={img} alt="project img" />
      </div>

      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <Link to={url} target="_blank">
          <h4 className="projectItem_viewProject">View Project</h4>
        </Link>
      </div>
    </>
  );
};

export default ProjectItem;
