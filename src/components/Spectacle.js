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

export default Presentation;
