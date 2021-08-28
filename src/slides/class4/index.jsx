import React from "react";
import "../../styles/styles.css";
import * as Slides from "./slides";

export default () => (
  <>
    <Slides.Agenda />

    <Slides.ExecutionContext />

    <Slides.BlockingCode />

    <Slides.Promises />

    <Slides.AsyncAwait />

    <Slides.AJAX />

    <Slides.XMLHttpRequest />

    <Slides.FetchAPI />

    <Slides.FormData />
  </>
);
