import React from "react";
import "./about.css";
import food from "../../assests/img/food.svg";
import plane from "../../assests/img/plane.svg";
import music from "../../assests/img/music.svg";
import guitar from "../../assests/img/guitar.svg";
import download from "../../assests/img/download.svg";
import doc from "../../assests/docs/Mohit_Mishra_Resume.pdf";

/**
 * @author
 * @function About
 **/

const About = (props) => {
  return (
    <div ref={props.refProp} className="about_me">
      <div className="sec_heading">
        <h1>About Me</h1>
        <hr className="line-1" />
        <hr className="line-2" />
      </div>
      <div className="about_me_body">
        <div className="about_me_para">
          <p>
            <span>My name is Mohit Mishra,</span> I am a Front End Developer
            dedicated to improving skills through hands-on learning and
            development work. Proﬁcient in development of both desktop and
            mobile compatible websites. Adept at using HTML5, JavaScript,
            React.js, and other programming languages to produce clean code.
            Well-organized and collaborative team player with strong
            communication and analytical abilities.
          </p>
        </div>
        <div className="about_me_content">
          <div className="personal_detail">
            <div className="about_me_content_head personal_details_heading">
              <p>Personal Details</p>
            </div>
            <div className="personal_detail_list">
              <div className="name">
                <p>Birthdate</p>
                <p>Phone</p>
                <p>Email</p>
                <p>Website</p>
                <p>Address</p>
                <p>Job</p>
              </div>
              <div className="ans">
                <p>03-01-2001</p>
                <p>+91 8085574989</p>
                <p>m0hit.mishra0301@gmail.com</p>
                <p>https://mohit-mishra-portfolio.netlify.app/</p>
                <p>Satna (M.P.), India</p>
                <p>Software Developer Intern</p>
              </div>
            </div>
          </div>
          <div className="interest">
            <div className="about_me_content_head my_interests_heading">
              <p>My Interests</p>
            </div>
            <div className="interest_blocks">
              <div className="block travel">
                <img className="interest_icons" src={plane} alt="travel" />
                <h3>Travel</h3>
              </div>
              <div className="block music">
                <img className="interest_icons" src={music} alt="travel" />
                <h3>Music</h3>
              </div>
              <div className="block food">
                <img className="interest_icons" src={food} alt="travel" />
                <h3>Food</h3>
              </div>
              <div className="block guitar">
                <img className="interest_icons" src={guitar} alt="travel" />
                <h3>Guitar</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download_cv">
        <a href={doc} download>
          <div className="download_button">
            <p>Download CV</p>
            <img className="download" src={download} alt="download" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default About;
