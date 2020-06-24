import React from "react";
import TrackVisibility from "react-on-screen";

const Fl = ({ isVisible }) => {
  return (
    <section
      id="follow"
      style={{
        height: "auto",
        color: "black",
        padding: "10px 10px",
      }}
      className={
        isVisible ? "press animated fadeIn opacity1" : "press opacity0"
      }
    >
      <div
        class="container"
        style={{
          fontSize: "3em",
        }}
      >
        <div class="row">
          <div class=" col-sm-12 col-lg-6" style={{ textAlign: "center" }}>
            <i class="fab fa-instagram"></i> nahinihijab.id
          </div>
          <div
            class="col-sm "
            style={{
              width: "auto",
              textAlign: "center",
            }}
          >
            <a
              href="https://www.instagram.com/nahinihijab.id/"
              style={{
                color: "black",
              }}
            >
              <div
                className="border"
                style={{
                  backgroundColor: "#f4eeff",
                  width: "400px",
                  margin: "auto",
                }}
              >
                + FOLLOW NIH
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Follow = () => {
  return (
    <TrackVisibility once>
      <Fl />
    </TrackVisibility>
  );
};

export default Follow;
