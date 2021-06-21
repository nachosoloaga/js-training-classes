import React from "react";

const addSlides = (Children, slidesFilename) => {
  const selectSlides = (slidesFilename) => {
    const markdownObject = require(`../slides/${slidesFilename}`);
    const slides = markdownObject.default;

    return slides;
  };

  return <Children slides={selectSlides(slidesFilename)} />;
};

export default addSlides;
