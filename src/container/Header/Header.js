import React from "react";
import "./Header.css";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <div className="header">
      <ul className="nav_list">
        <li
          onClick={() => props.ref1.current.scrollIntoView()}
          className="nav_list_item"
        >
          Home
        </li>
        <li
          onClick={() => props.ref2.current.scrollIntoView()}
          className="nav_list_item"
        >
          About Me
        </li>
        <li
          onClick={() => props.ref3.current.scrollIntoView()}
          className="nav_list_item"
        >
          Skills
        </li>
        <li
          onClick={() => props.ref4.current.scrollIntoView()}
          className="nav_list_item"
        >
          Resume
        </li>
        <li
          onClick={() => props.ref5.current.scrollIntoView()}
          className="nav_list_item"
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Header;
