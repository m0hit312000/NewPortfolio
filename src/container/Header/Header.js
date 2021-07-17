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
        <li className="nav_list_item">Home</li>
        <li className="nav_list_item">About Me</li>
        <li className="nav_list_item">Resume</li>
        <li className="nav_list_item">Contact</li>
        <li className="nav_list_item">Skills</li>
      </ul>
    </div>
  );
};

export default Header;
