import React from "react";

const Linavbar = (props) => {
  return (
    <ul className={`navbar-nav ml-auto ${props.Linavbar}`}>
      <li className="nav-item">
        <a href="#header" className="navbarlink">
          HOME
        </a>
      </li>
      <li className="nav-item">
        <a href="#follow" className="navbarlink">
          INSTAGRAM
        </a>
      </li>
      <li className="nav-item">
        <a href="#contacus" className="navbarlink">
          CONTACT US
        </a>
      </li>
    </ul>
  );
};

export default Linavbar;
