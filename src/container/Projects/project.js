import React from "react";
import "./project.css";
import filter from "../../assests/img/AppReviewFilter.png";
import sochroom from "../../assests/img/sochroom.png";
import Confusion from "../../assests/img/Confusion.png";
import fylo from "../../assests/img/fylo.png";
import ProjectBlock from "../../components/ProjectBlock/projectBlock";

/**
 * @author
 * @function Project
 **/

const Project = (props) => {
  return (
    <div className="project">
      <div className="sec_heading">
        <h1>Project</h1>
        <hr className="line-1" />
        <hr className="line-2" />
      </div>
      <div className="project_content">
        <a href="https://fylolandpage.netlify.app">
          <ProjectBlock
            image={fylo}
            title={"Fylo"}
            description={"A Sample Responsive Landing Page"}
          />
        </a>
        <a href="https://sochroom.sochcast.com/">
          <ProjectBlock
            image={sochroom}
            title={"Sochroom"}
            description={"A Live Audio Podcasting Application"}
          />
        </a>
        <a href="https://restaurantconfusiondemo.netlify.app">
          <ProjectBlock
            image={Confusion}
            title={"conFusion"}
            description={"A Restaurant Application"}
          />
        </a>
        <a href="https://appreviewfilter.netlify.app">
          <ProjectBlock
            image={filter}
            title={"Review Filter"}
            description={"A Review Filter Application"}
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
