import React from "react";
import "./project.css";
import filter from "../../assests/img/AppReviewFilter.png";
import sochroom from "../../assests/img/sochroom.png";
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
          <ProjectBlock image={fylo} />
        </a>
        <a href="https://sochroom.sochcast.com/">
          <ProjectBlock image={sochroom} />
        </a>
        <a href="https://appreviewfilter.netlify.app">
          <ProjectBlock image={filter} />
        </a>
      </div>
    </div>
  );
};

export default Project;
