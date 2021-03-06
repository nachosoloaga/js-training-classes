import React from "react";

import {
  FlexBox,
  FullScreen,
  Deck,
  Box,
} from "spectacle";

const theme = {
  colors: {
    primary: "#d9d9d9",
    secondary: "#d9d9d9",
    backgroundColor: "#0d0d0d"
  },
  fonts: {
    header: 'Roboto',
    text: 'Roboto',
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
