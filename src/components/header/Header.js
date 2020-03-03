import React, { useEffect, useState } from "react";
import Navibar from "../navbar/navbar";
import { Container } from "react-bootstrap";
import img1 from "../../assests/svg/header.svg";

const Header = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoad(true);
    });

    return () => {
      window.removeEventListener("load", () => {});
    };
  });

  return (
    <section id="header">
      <Container>
        <Navibar />
        <div className="row">
          <div
            className={
              load
                ? " col-sm-12 col-lg-6 title1 title1animation "
                : "title1 col-sm-12 col-lg-6"
            }
          >
            <h1>
              Lorem ipsum is placeholder text commonly used in the graphic
            </h1>

            <button
              type="button"
              className="btn btn-dark btn-lg download-button"
            >
              <i className="fab fa-apple"></i>
              Download
            </button>
            <button
              type=" button"
              className="btn btn-outline-light btn-lg download-button"
            >
              <i className="fab fa-google-play"></i>
              Download
            </button>
          </div>
          <div className="col-sm-12 col-lg-6">
            <img
              src={img1}
              alt=""
              className={load ? "img1 img1animation" : "img1"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
