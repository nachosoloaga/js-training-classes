import React from "react";
import {
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  CodePane,
  Notes,
} from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Arrow functions
      </Heading>
      <Text fontSize={30}>
        Una{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">
          arrow function
        </a>{" "}
        es una alternativa un poco más compacta a una{" "}
        <strong>function expression</strong> tradicional, aunque tiene algunas
        limitaciones y no puede utilizarse en todos los casos. Estas
        limitaciones son principalmente las siguientes:{" "}
        <UnorderedList fontSize={30}>
          <ListItem>
            No tienen sus propios enlaces a this o super y no se deben usar como
            métodos dentro de un objeto o clase.
          </ListItem>
          <ListItem>
            No son aptas para los métodos call, apply y bind, que se basan en
            establecer un alcance particular.
          </ListItem>
          <ListItem>No se pueden utilizar como constructor.</ListItem>
        </UnorderedList>
      </Text>

      <Notes>
        Existen otras limitaciones, como por ejemplo el uso de yield dentro de
        su cuerpo, pero en las cuales todavía no vale la pena entrar en detalle.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Arrow functions
      </Heading>

      <Text fontSize={30}>
        La sintáxis de una <strong>arrow function</strong> es la siguiente:
      </Text>

      <CodePane language="js">
        {`
          const functionName = (param1, param2) => {
            return param1 * param2;
          }

          // Return statement is optional as long as there's not additional logic
          const functionName = (param1, param2) => param1 * param2;

          // A common use case is related with array methods such as .map()
          const multipliedByTwo = [1, 2, 3].map((num) => num * 2);

        `}
      </CodePane>

      <Notes>Notar como en el segundo ejemplo se remueven las llaves.</Notes>
    </Slide>
  </>
);
