import React from "react";

const selectSlides = (slidesFilename) => {
  return require(`../slides/${slidesFilename}`).default();
};

const withSlides = (Children, slidesFilename) => {
  return <Children slides={selectSlides(slidesFilename)} />;
};

export default withSlides;
