import React, { useState, useEffect } from "react";
import Linavbar from "./LiNavbar";
import Navside from "./Navside";

const Navibar = () => {
  const [toggle, setToggle] = useState(false);
  const clickToggle = () => {
    setToggle(!toggle);
  };

  const [scrooled, setScrooled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 80;
      if (isTop !== true) {
        setScrooled(true);
      } else {
        setScrooled(false);
      }
    });

    // const NavFix = () => {};

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <nav
      className={
        scrooled
          ? `navbar navbar-expand-lg  navbarscrolled fixed-top `
          : "navbar navbar-expand-lg fixed-top "
      }
    >
      {toggle ? (
        <Navside toggle={toggle} click={clickToggle} />
      ) : (
        <Navside toggle={toggle} click={clickToggle} />
      )}

      <a href="/home" className="navbarbrand">
        Lorem Ipsum
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        onClick={clickToggle}
      >
        <span className={toggle ? "fas fa-times" : "fas fa-bars"}></span>
      </button>

      <Linavbar Linavbar="d-none d-lg-block " />
    </nav>
  );
};

export default Navibar;
