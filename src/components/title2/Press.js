import React from "react";
import TrackVisibility from "react-on-screen";

const Press = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../../assests/images/", false, /\.(png|jpe?g|svg)$/)
  );

  const image = [];

  images.map((img, index) => {
    return image.push(img);
  });

  const Pressck = ({ isVisible }) => {
    return (
      <div
        className={
          isVisible ? "press animated fadeIn opacity1" : "press opacity0"
        }
      >
        <img className="press-image" src={image[0]} alt="tc-logo" />
        <img className="press-image" src={image[5]} alt="biz-insider-logo" />
        <img className="press-image" src={image[6]} alt="mashable-logo" />
      </div>
    );
  };

  return (
    <TrackVisibility once>
      <Pressck />
    </TrackVisibility>
  );
};

export default Press;
