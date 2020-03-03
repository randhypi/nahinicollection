import React from "react";

const Linavbar = props => {
  return (
    <ul className={`navbar-nav ml-auto ${props.Linavbar}`}>
      <li className="nav-item">
        <a href="#pricing" className="navbarlink">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#cta" className="navbarlink">
          Blog
        </a>
      </li>
    </ul>
  );
};

export default Linavbar;
