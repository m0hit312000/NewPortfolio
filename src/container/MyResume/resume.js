import React from "react";
import "./resume.css";

/**
 * @author
 * @function Resume
 **/

const Resume = (props) => {
  return (
    <div ref={props.refProp} className="resume">
      <div className="sec_heading">
        <h1>Resume</h1>
        <hr className="line-1" />
        <hr className="line-2" />
      </div>
    </div>
  );
};

export default Resume;
