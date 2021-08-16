import React from "react";
import '../../styles/styles.css';
import * as Slides from './slides';

export default () => (
  <>
    <Slides.Agenda />

    <Slides.BuiltInFunctions />

    <Slides.DomIntro />

    <Slides.WindowAPI />

    <Slides.Debugger />

    <Slides.Callbacks />

    <Slides.Events />
  </>
);
