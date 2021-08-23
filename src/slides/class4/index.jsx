import React from "react";
import "../../styles/styles.css";
import * as Slides from "./slides";

export default () => (
  <>
    <Slides.BlockingCode />

    <Slides.Promises />

    <Slides.AsyncAwait />

    <Slides.AJAX />
  </>
);
