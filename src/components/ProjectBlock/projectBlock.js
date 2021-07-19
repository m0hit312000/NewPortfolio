import React from "react";
import "./projectBlock.css";

/**
 * @author
 * @function ProjectBlock
 **/

const ProjectBlock = (props) => {
  return (
    <div className="project_block">
      <img src={props.image} alt="pro_img" />
    </div>
  );
};

export default ProjectBlock;
