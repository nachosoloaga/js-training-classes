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
        Colecciones
      </Heading>
      <Text fontSize={30}>
        ES6 introdujo 2 nuevas estructuras de datos:
        <UnorderedList fontSize={30}>
          <ListItem>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">
              Map
            </a>
            : es una colección de pares clave-valor.
          </ListItem>
          <ListItem>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set">
              Set
            </a>
            : es una estructura similar a un arreglo pero que no admite
            elementos duplicados.
          </ListItem>
        </UnorderedList>
      </Text>

      <Text fontSize={30}>
        Además, se definen dos variantes de cada una de estas:{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap">
          WeakMap
        </a>{" "}
        y{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WEakSet">
          WeakSet
        </a>{" "}
        que agregan algunas diferencias.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Map
      </Heading>

      <CodePane language="js">
        {`
          // Create a new empty Map
          let map = new Map(); 
          map.set('name','Tutorial Point'); 
          map.get('name'); // Tutorial point

          // Get the amount of key-value pairs of map.
          map.size; // 1

          // Check if map has a given key.
          map.has('age') // false
        `}
      </CodePane>

      <CodePane language="js">
        {`
          // We can also instantiate a Map with elements
          let roles = new Map([ 
              ['r1', 'User'], 
              ['r2', 'Guest'], 
              ['r3', 'Admin'], 
          ]);  
          console.log(roles.get('r2'))
        `}
      </CodePane>

      <Notes>
        Existen otros métodos en la interfaz de Map como clear() que pueden
        verse en los links de la primer diapo.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        WeakMap
      </Heading>

      <Text fontSize={30}>
        Un WeakMap es idéntico a un Map con algunas excepciones:
        <UnorderedList fontSize={30}>
          <ListItem>
            Sus claves <strong>deben</strong> ser objetos.
          </ListItem>
          <ListItem>
            Las claves de un WeakMap pueden ser recolectadas por el Garbage
            Collector.
          </ListItem>
          <ListItem>
            Un WeakMap no puede ser iterado o limpiado. Es decir, no se pueden
            invocar los métodos <strong>forEach()</strong> ni{" "}
            <strong>clear()</strong>
          </ListItem>
        </UnorderedList>
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Set
      </Heading>

      <CodePane language="js">
        {`
          let mySet = new Set();

          mySet1.add(1) // Set [ 1 ]
          mySet1.add(5) // Set [ 1, 5 ]
          mySet1.add(5) // Set [ 1, 5 ]

          mySet1.add('some text') // Set [ 1, 5, 'some text' ]

          const o = {a: 1, b: 2}
          mySet1.add(o)
          
          mySet1.add({a: 1, b: 2}) // o is referencing a different object, so this is okay

          mySet1.delete(5) // removes 5 from the set

          mySet1.size // 4, since we just removed one value

          mySet1.clear() // Set []
        `}
      </CodePane>

      <Notes>
        Un WeakSet es identico a un Set solo que estos pueden contener
        unicamente objetos, y estos objetos pueden ser removidos por el Garbage
        Collector. Además, no pueden ser iterados ni limpiados.
      </Notes>
    </Slide>
  </>
);
