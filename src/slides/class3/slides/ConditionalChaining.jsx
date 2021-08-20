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
        Encadenamiento opcional
      </Heading>

      <Text fontSize={30}>
        El operador de 
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining">
          encadenamiento opcional ?.
        </a>
        permite leer el valor de una propiedad o un conjunto de propiedades
        anidadas de un objeto, sin tener que validar expresamente que cada
        referencia en la “cadena” sea válida.
      </Text>

      <Text fontSize={30}>
        Utilizando este operador si una referencia es casi-nula 
        <strong>(null o undefined)</strong> en lugar de causar un error, la
        expresión hace una evaluación de circuito corto y retorna{" "}
        <strong>undefined</strong>. Cuando se usa con llamadas a funciones,
        devuelve undefined si la función dada no existe.
        <Text fontSize={30}>
          Su sintáxis dependiendo el tipo de dato es la siguiente:
          <UnorderedList fontSize={30}>
            <ListItem>obj?.prop</ListItem>
            <ListItem>obj?.[expr]</ListItem>
            <ListItem>arr?.[index]</ListItem>
            <ListItem>func?.(args)</ListItem>
          </UnorderedList>
        </Text>
      </Text>

      <Notes>Conditional chaining fue introducido en ES2020.</Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Encadenamiento opcional
      </Heading>

      <CodePane language="js">
        {`
          const adventurer = {
            name: 'Alice',
            cat: {
              name: 'Dinah'
            }
          };
          
          const dogName = adventurer.dog?.name;
          console.log(dogName); // expected output: undefined
          
          console.log(adventurer.someNonExistentMethod?.()); // expected output: undefined

          let arr = [1, 2, 3, 4, 5];
          console.log(arr?.[42]); // expected output: undefined
        `}
      </CodePane>
    </Slide>
  </>
);
