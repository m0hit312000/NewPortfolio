import React from "react";
import github from "../../assests/img/github.svg";
import linkedin from "../../assests/img/linkedin.svg";
import "./Footer.css";

/**
 * @author
 * @function Footer
 **/

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="go_up">
        <button onClick={() => props.refProp.current.scrollIntoView()}>
          UP
        </button>
      </div>
      <div className="social_share">
        <a href="https://linkedin.com/in/mohit-mishra-820b14193">
          <img className="social_linkedin" src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/m0hit312000">
          <img className="social_github" src={github} alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
