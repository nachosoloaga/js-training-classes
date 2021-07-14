import React from "react";

import {
  FlexBox,
  FullScreen,
  Progress,
  Deck,
  Box,
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
    <div style={{ backgroundColor: "#ffd84d" }}>
      {slides}
    </div>
  </Deck>
);

export default Presentation;
