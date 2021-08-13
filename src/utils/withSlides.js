import React from "react";

const selectSlides = (slidesDirectory) => {
  return require(`../slides/${slidesDirectory}`).default();
};

const withSlides = (Children, slidesDirectory) => {
  return <Children slides={selectSlides(slidesDirectory)} />;
};

export default withSlides;
