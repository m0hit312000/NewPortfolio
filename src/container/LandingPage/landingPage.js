import React from "react";
import profile_pic from "../../assests/img/_storage_emulated_0_Pictures_Cartoon_Photo_cartoon1626270305172.png";
import github from "../../assests/img/github.svg";
import linkedin from "../../assests/img/linkedin.svg";
import arrow_down from "../../assests/img/down.png";
import "./landingPage.css";

/**
 * @author
 * @function LandingPage
 **/

const LandingPage = (props) => {
  return (
    <div ref={props.refProp} className="landing_page">
      <div className="intro_area">
        <div className="intro">
          <h1>Hi!, I'm</h1>
          <h1>Mohit Mishra</h1>
          <h1>
            I am a <span className="intro_role">Front End Developer</span>
          </h1>
          <div className="social_intro">
            <a href="https://linkedin.com/in/mohit-mishra-820b14193">
              <img className="linkedin_pic" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/m0hit312000">
              <img className="github_pic" src={github} alt="github" />
            </a>
          </div>
        </div>
        <div className="profile">
          <img className="profile_pic" src={profile_pic} alt="profile" />
        </div>
      </div>
      <div className="swipe">
        <img className="arrow_down" src={arrow_down} alt="arrow_down" />
      </div>
    </div>
  );
};

export default LandingPage;
