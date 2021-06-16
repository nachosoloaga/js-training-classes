import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  FullScreen,
  Progress,
  Deck,
  Box,
  MarkdownSlideSet,
} from "spectacle";

const selectionPageStyles = {
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
};

const theme = {
  colors: {
    primary: "#000000",
    secondary: "#000000",
  },
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const Presentation = ({ slides }) => (
  <Deck theme={theme} template={template}>
    <MarkdownSlideSet backgroundColor="#ffd84d">{slides}</MarkdownSlideSet>
  </Deck>
);

const SelectionPage = () => {
  const classFilenames = {
    1: "class1.md",
    2: "class2.md",
  };

  const presentSlides = (classNumber) => {
    const fileName = classFilenames[classNumber];
    const markdownObject = require(`./slides/${fileName}`);
    const slides = markdownObject.default;

    ReactDOM.render(
      <Presentation slides={slides} />,
      document.getElementById("root")
    );
  };

  return (
    <div style={selectionPageStyles}>
      <h1>Which class do you want to present?</h1>
      <button onClick={() => presentSlides(1)}>Class 1</button>
      <button onClick={() => presentSlides(2)}>Class 2</button>
    </div>
  );
};

ReactDOM.render(<SelectionPage />, document.getElementById("root"));
