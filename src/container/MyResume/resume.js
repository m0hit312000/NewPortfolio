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
      <div className="resume_content">
        <div className="education">
          <div className="education_content">
            <div className="education_head">
              <p>Education</p>
            </div>
            <div className="resume_block education_block">
              <div className="education_block-1">
                <p>B.Tech Computer Science,</p>
              </div>
              <div className="education_block-2">
                <p>
                  Indore Institute of Science and Technology,
                  <span> 2018-2022</span>
                </p>
              </div>
              <div className="education_block-3">
                <p>Indore, India</p>
                <span>
                  <p></p>
                </span>
              </div>
              <div className="education_block-">
                <p>C.G.P.A - 8.22</p>
              </div>
            </div>
          </div>
        </div>
        <div className="work">
          <div className="work_content">
            <div className="work_head">
              <p>Work Expereince</p>
            </div>
            <div className="resume_block work_block">
              <p>
                Software Developer Intern, <span>Skylar Minds</span>
              </p>
              <p>April, 2021</p>
              <p>
                Developing real-time industry-related React Applications and
                Confer with management or development teams to prioritize needs,
                resolve conﬂicts, develop content criteria, or choose solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
