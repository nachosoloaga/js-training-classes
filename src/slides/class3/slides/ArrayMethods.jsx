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
        New array methods
      </Heading>

      <Text fontSize={30}>
        Con ES6 llegaron nuevos métodos sobre el tipo de dato Array, que nos
        permiten manipularlo de una forma más “funcional”. Si bien algunos de
        los métodos que veremos existen con anterioridad a la versión ES6,
        aprovechamos esta clase para introducirlos. Los más populares son:
      </Text>

      <UnorderedList fontSize={30}>
        <ListItem>
          Array.<strong>map()</strong>
        </ListItem>
        <ListItem>
          Array.<strong>find()</strong>
        </ListItem>
        <ListItem>
          Array.<strong>forEach()</strong>
        </ListItem>
        <ListItem>
          Array.<strong>reduce()</strong>
        </ListItem>
        <ListItem>
          Array.<strong>from()</strong>
        </ListItem>
      </UnorderedList>

      <Text fontSize={30}>
        Existe una gran cantidad de métodos de Array y pueden verse{" "}
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array">
          aquí.
        </a>
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Array.map
      </Heading>

      <Text fontSize={30}>
        El método{" "}
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map">
          map()
        </a>{" "}
        crea un nuevo array con los resultados de la llamada a la función
        callback recibida sobre cada uno de sus elementos.
      </Text>

      <CodePane language="js">
        {`
          const numbers = [1, 4, 9];
          const roots = numbers.map(function(num) {
              return Math.sqrt(num);
          });

          const people = [{name: 'John', age: 21}, {name:'Anna', age: 22}];
          const names = people.map(function(person) {
            return person.name;
          });
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Array.find()
      </Heading>

      <Text fontSize={30}>
        El método{" "}
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find">
          find()
        </a>{" "}
        devuelve el valor del primer elemento del array que evalúa a true la
        función proporcionada.
      </Text>

      <CodePane language="js">
        {`
          const inventary = [
            {name: 'apples', quantity: 2},
            {name: 'bananas', quantity: 0},
            {name: 'cherry', quantity: 5}
          ];
        
          function isCherry(fruit) {
              return fruit.name === 'cherry';
          }
          
          console.log(inventary.find(isCherry)); // { name: 'cherrys', quantity: 5 }
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Array.forEach()
      </Heading>

      <Text fontSize={30}>
        El método{" "}
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach">
          forEach()
        </a>{" "}
        ejecuta la función indicada una vez por cada elemento del array.
      </Text>

      <CodePane language="js">
        {`
          const array = ['a', 'b', 'c'];

          array.forEach(element => console.log(element));
          
          // expected output: "a"
          // expected output: "b"
          // expected output: "c"
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Array.reduce()
      </Heading>

      <Text fontSize={30}>
        El método{" "}
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">
          reduce()
        </a>{" "}
        ejecuta una función reductora sobre cada elemento de un array,
        devolviendo como resultado un único valor.
      </Text>

      <CodePane language="js">
        {`
          const array1 = [1, 2, 3, 4];
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          
          // 1 + 2 + 3 + 4
          console.log(array1.reduce(reducer)); // expected output: 10
          
          // 5 + 1 + 2 + 3 + 4
          console.log(array1.reduce(reducer, 5)); // expected output: 15
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Array.reduce()
      </Heading>
      <Text fontSize={30}>La función reductora recibe cuatro argumentos:</Text>
      <UnorderedList fontSize={30}>
        <ListItem>Acumulador (acc)</ListItem>
        <ListItem>Valor Actual (cur)</ListItem>
        <ListItem>Índice Actual (idx)</ListItem>
        <ListItem>Array (src)</ListItem>
      </UnorderedList>
      <Text fontSize={30}>
        El valor devuelto de la función reductora se asigna al acumulador, cuyo
        valor se recuerda en cada iteración y, en última instancia, se convierte
        en el valor final, único y resultante.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Array.from()
      </Heading>

      <Text fontSize={30}>
        El método{" "}
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from">
          from()
        </a>{" "}
        crea una nueva instancia de Array a partir de un objeto iterable.
      </Text>

      <CodePane language="js">
        {`
          console.log(Array.from('JavaScript'));
          // expected output: Array ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];

          console.log(Array.from([1, 2, 3], x => x + x));
          // expected output: Array [2, 4, 6]
        `}
      </CodePane>

      <Text fontSize={30}>
        Array.from() permite crear Arrays de:
        <UnorderedList fontSize={30}>
          <ListItem>
            Objetos array-like (objetos con propiedad length o elementos
            indexados).
          </ListItem>
          <ListItem>
            Objetos{" "}
            <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Iteration_protocols">
              iterables
            </a>{" "}
            (objetos de los cuales se pueden obtener sus elementos como Map y
            Set).
          </ListItem>
        </UnorderedList>
      </Text>
    </Slide>
  </>
);
