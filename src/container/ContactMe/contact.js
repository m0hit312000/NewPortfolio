import React, { useRef, useState } from "react";
import "./contact.css";
import send from "../../assests/img/send.svg";

/**
 * @author
 * @function Contact
 **/

const Contact = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const ref_1 = useRef(null);
  const ref_2 = useRef(null);
  const ref_3 = useRef(null);
  const ref_4 = useRef(null);
  const ref_5 = useRef(null);

  const handleSubmit = () => {
    let form = {
      name,
      phone,
      email,
      subject,
      message,
    };
    console.log(form);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setSubject("");
    ref_1.current.value = "";
    ref_2.current.value = "";
    ref_3.current.value = "";
    ref_4.current.value = "";
    ref_5.current.value = "";
    alert("Currently this site is under development");
  };

  return (
    <div ref={props.refProp} className="contact">
      <div className="sec_heading">
        <h1>Contact</h1>
        <hr className="line-1" />
        <hr className="line-2" />
      </div>
      <div className="contact_me">
        <form className="contact_form">
          <div className="input_box your_name">
            <input
              ref={ref_1}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input_field"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="input_box phone_no">
            <input
              ref={ref_2}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input_field"
              type="tel"
              placeholder="Phone Number"
            />
          </div>
          <div className="input_box email_add">
            <input
              ref={ref_3}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input_field"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="input_box subject">
            <input
              ref={ref_4}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="input_field"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="input_box message">
            <textarea
              ref={ref_5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input_field message_textarea"
              type="text"
              placeholder="Message"
            />
          </div>
          <div onClick={handleSubmit} type="submit" className="message_btn">
            Send Message
            <img className="send_img" src={send} alt="send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
