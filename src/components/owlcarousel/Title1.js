import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import title1 from "../../assests/svg/title1.svg";
import TrackVisibility from "react-on-screen";

const ComponentTrack = ({ isVisible }) => {
  return (
    <div
      className={
        isVisible
          ? "animated fadeIn judultitle opacity1 "
          : " judultitle opacity0 "
      }
    >
      <h1>Lorem Ipsum</h1>
    </div>
  );
};

const Owl = ({ isVisible }) => {
  const options = {
    margin: 30,
    center: true,
    responsiveClass: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    loop: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,
        center: true
      },
      400: {
        items: 1,
        center: true
      },
      600: {
        items: 2,
        center: true
      },
      700: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };
  return (
    <div className={isVisible ? "title1  animated fadeIn" : "invisible"}>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={title1} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#title" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={title1} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">Card title 2</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#title" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={title1} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">Card title 3</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#title" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={title1} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">Card title 4 </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#title" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={title1} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">Card title 5</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#title" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={title1} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">Card title 6</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#title" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

const Title1 = () => {
  return (
    <section id="title">
      <div className="container">
        <TrackVisibility once>
          <ComponentTrack />
        </TrackVisibility>
        <TrackVisibility once>
          <Owl />
        </TrackVisibility>
      </div>
    </section>
  );
};

export default Title1;
