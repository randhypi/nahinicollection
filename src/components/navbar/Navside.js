import React from "react";

const Navside = props => {
  return (
    <div
      className={
        props.toggle
          ? "navside d-block d-lg-none animated slideInDown "
          : "navside d-block d-lg-none  animated slideOutUp invisible"
      }
    >
      <button type="button" className="navbar-toggler" onClick={props.click}>
        <span className={props.toggle ? "fas fa-times" : "fas fa-bars"}></span>
      </button>

      <div
        className={
          props.toggle
            ? "h2 animated flipInY delay-1s"
            : "h2 animated flipOutY delay-1s"
        }
      >
        <h2>HOME</h2>
        <h2>BLOG</h2>
      </div>
    </div>
  );
};

export default Navside;
