import React from "react";
import { Slide, Heading, Text } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d" className="flex-center-column">
      <Heading margin="0px" fontSize="50px">
        Práctica
      </Heading>

      <Text fontSize={40}>
        <a href="https://codesandbox.io/s/working-with-promises-rmwps">
          Working with Promises
        </a>
      </Text>

      <Text fontSize={40}>
        <a href="https://codesandbox.io/s/playing-with-the-swapi-ei9j4">
          Playing with the SWAPI
        </a>
      </Text>

      <Text fontSize={40} style={{ alignSelf: "center" }}>
        <a href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-quiz-time">
          Promises Quiz
        </a>
      </Text>
    </Slide>
  </>
);
