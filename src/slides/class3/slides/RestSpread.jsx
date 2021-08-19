import React from "react";
import {
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  CodePane,
} from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Operador spread
      </Heading>

      <Text fontSize={30}>
        El{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">
          operador spread
        </a>{" "}
        permite a un elemento iterable (por ej. un arreglo o un string) ser
        expandido en cero o más parámetros (para llamadas a funciones),
        elementos (para arreglos) o, en el caso de un objeto, ser expandido en
        cero o más pares de clave-valor.
      </Text>

      <CodePane language="js">
        {`
          var dateFields = [1970, 0, 1];  
          var d = new Date(...dateFields); // 1 Jan 1970
          
          var parts = ['shoulders', 'knees'];
          var lyrics = ['head', ...parts, 'and', 'toes']; // ["head", "shoulders", "knees", "and", "toes"]
          
          var obj1 = { foo: 'bar', x: 42 };
          var clonedObj = { ...obj1 }; // Object { foo: "bar", x: 42 }
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Parámetros rest
      </Heading>
      <Text fontSize={30}>
        Los{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">
          parámetros rest{" "}
        </a>
        nos permiten recibir un número indefinido de parámetros como un array.
        La sintáxis es idéntica a la del <strong>operador spread.</strong>
      </Text>
      <CodePane language="js">
        {`
          function sum(...theArgs) {
            return theArgs.reduce((previous, current) => {
              return previous + current;
            });
          }
          
          console.log(sum(1, 2, 3)); // expected output: 6
          console.log(sum(1, 2, 3, 4)); // expected output: 10

          function myFun(a, b, ...manyMoreArgs) {
            console.log("a", a);
            console.log("b", b);
            console.log("manyMoreArgs", manyMoreArgs); // ???
          }
          
          myFun("one", "two", "three", "four", "five", "six");
        `}
      </CodePane>
    </Slide>
  </>
);
