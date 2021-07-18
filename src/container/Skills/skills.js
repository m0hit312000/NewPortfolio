import React from "react";
import "./skills.css";

/**
 * @author
 * @function Skills
 **/

const Skills = (props) => {
  return (
    <div className="skills">
      <div className="sec_heading">
        <h1>Skills</h1>
        <hr className="line-1" />
        <hr className="line-2" />
      </div>
      <div className="skills_content">
        <div className="tech_skills">
          <div className="skills_head">
            <p>Technical Skills</p>
          </div>
          <div className="ranges html">
            <p>HTML5</p>
            <input className="range_slider" type="range" value={90} />
          </div>
          <div className="ranges css">
            <p>CSS3</p>
            <input className="range_slider" type="range" value={92} />
          </div>
          <div className="ranges js">
            <p>JavaScript</p>
            <input className="range_slider" type="range" value={85} />
          </div>
          <div className="ranges react">
            <p>React.js</p>
            <input className="range_slider" type="range" value={80} />
          </div>
          <div className="ranges c">
            <p>C++</p>
            <input className="range_slider" type="range" value={65} />
          </div>
          <div className="ranges express">
            <p>Express.js</p>
            <input className="range_slider" type="range" value={55} />
          </div>
          <div className="ranges mongo">
            <p>MongoDB</p>
            <input className="range_slider" type="range" value={55} />
          </div>
        </div>
        <div className="pro_skills">
          <div className="skills_head">
            <p>Professional Skills</p>
          </div>
          <div className="ranges mongo">
            <p>Communication</p>
            <input className="range_slider" type="range" value={88} />
          </div>
          <div className="ranges mongo">
            <p>TeamWork</p>
            <input className="range_slider" type="range" value={95} />
          </div>
          <div className="ranges mongo">
            <p>Creativity</p>
            <input className="range_slider" type="range" value={75} />
          </div>
          <div className="ranges mongo">
            <p>Dedication</p>
            <input className="range_slider" type="range" value={90} />
          </div>
          <div className="ranges mongo">
            <p>Project Management</p>
            <input className="range_slider" type="range" value={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
