import React from "react";

const Navside = (props) => {
  return (
    <div
      className={
        props.toggle
          ? "navside d-block d-lg-none animated slideInDown "
          : "navside d-block d-lg-none  animated slideOutUp invisible"
      }
      style={{
        textAlign: "center",
      }}
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
        style={{ width: "30%" }}
      >
        <h1>
          <a href="#header" onClick={props.click} className="navbarlink">
            HOME
          </a>
        </h1>
        <h1>
          <a href="#follow" className="navbarlink" onClick={props.click}>
            INSTAGRAM
          </a>
        </h1>
        <h1>
          {" "}
          <a href="#contactus" className="navbarlink" onClick={props.click}>
            CONTACT US
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Navside;
