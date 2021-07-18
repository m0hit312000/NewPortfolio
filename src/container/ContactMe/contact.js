import React from "react";
import "./contact.css";

/**
 * @author
 * @function Contact
 **/

const Contact = (props) => {
  return (
    <div ref={props.refProp} className="contact">
      <div className="sec_heading">
        <h1>Contact</h1>
        <hr className="line-1" />
        <hr className="line-2" />
      </div>
    </div>
  );
};

export default Contact;
