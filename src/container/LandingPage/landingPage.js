import React from "react";
import profile_pic from "../../assests/img/_storage_emulated_0_Pictures_Cartoon_Photo_cartoon1626270305172.png";
import github from "../../assests/img/github.svg";
import linkedin from "../../assests/img/linkedin.svg";
import arrow_down from "../../assests/img/arrow_down.svg";
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
            <img className="linkedin_pic" src={linkedin} alt="linkedin" />
            <img className="github_pic" src={github} alt="github" />
          </div>
        </div>
        <div className="profile">
          <img className="profile_pic" src={profile_pic} alt="profile" />
        </div>
      </div>
      <div className="swipe">
        <h3>Swipe Up</h3>
        <img className="arrow_down" src={arrow_down} alt="arrow_down" />
      </div>
    </div>
  );
};

export default LandingPage;
