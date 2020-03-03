import React from "react";
import TrackVisibility from "react-on-screen";

const Cr = ({ isVisible }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className={
        isVisible
          ? "carousel slide animated fadeIn opacity1"
          : "carousel slide opacity0"
      }
      data-ride="carousel"
      data-interval="3000"
      data-pause="hover"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <h2 className="testimonial-text">
            I no longer have to sniff other dogs for love. I've found the
            hottest Corgi on TinDog. Woof.
          </h2>
          <img
            className="testimonials-image"
            src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
            alt="dog-profile"
          />
          <em>Pebbles, New York</em>
        </div>
        <div className="carousel-item">
          <h2 className="testimonial-text">
            My dog used to be so lonely, but with TinDog's help, they've found
            the love of their life. I think.
          </h2>
          <img
            className="testimonials-image"
            src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
            alt="lady-profile"
          />
          <em>Beverly, Illinois</em>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

const Carousel = () => {
  return (
    <TrackVisibility once>
      <Cr />
    </TrackVisibility>
  );
};

export default Carousel;
