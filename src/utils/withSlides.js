import React from "react";

const selectSlides = (slidesFilename) => {
  const markdownObject = require(`../slides/${slidesFilename}`);
  const slides = markdownObject.default;

  return slides;
};

const withSlides = (Children, slidesFilename) => {
  return <Children slides={selectSlides(slidesFilename)} />;
};

export default withSlides;
