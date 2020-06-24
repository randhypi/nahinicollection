import React from "react";
import TrackVisibility from "react-on-screen";

const Cr = ({ isVisible }) => {
  return (
    <section
      id="contactus"
      className={
        isVisible ? "press animated fadeIn opacity1" : "press opacity0"
      }
    >
      <div style={{ color: "white", textAlign: "center" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>CONTACT US</h1>
        <br></br>
        <h4>For general inquiry & bulk order, Whatsapp our hotline at</h4>
        <br></br>
        <a href="https://wa.me/628886181332" style={{ color: "white" }}>
          {" "}
          <div
            style={{ width: "300px", margin: "auto" }}
            className={"border border-info"}
          >
            <h5>
              <b>
                <i class="fab fa-whatsapp"></i> +62 888-6181-332
              </b>
            </h5>
          </div>
        </a>
      </div>
    </section>
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
