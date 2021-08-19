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
        Sintáxis de desestructuración
      </Heading>

      <Text fontSize={30}>
        En algunos casos puede resultarnos conveniente manipular propiedades de
        un objeto o elementos de un arreglo en particular. La desestructuración
        es una sintáxis especial que nos permite “desempaquetar” arreglos u
        objetos en un conjunto de variables. Por ejemplo, cuando necesitamos
        pasar propiedades o elementos específicos a una función.
      </Text>

      <UnorderedList fontSize={30}>
        <ListItem>
          Desestructuración de <strong>arreglos</strong>
        </ListItem>
        <ListItem>
          Desestructuración de <strong>objetos</strong>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Desestructuración de arreglos
      </Heading>

      <Text fontSize={30}>
        La{" "}
        <a href="https://javascript.info/destructuring-assignment#array-destructuring">
          desestructuración de arreglos
        </a>{" "}
        nos permite asignar a una o más variables elementos de un arreglo.
        <UnorderedList fontSize={30}>
          <ListItem>
            Sirve con cualquier iterable del lado derecho de la asignación.
          </ListItem>
          <ListItem>Podemos ignorar elementos utilizando comas</ListItem>
          <ListItem>Podemos intercambiar variables</ListItem>
          <ListItem>
            Podemos combinarlo para loopear con el método{" "}
            <strong>.entries()</strong>
          </ListItem>
        </UnorderedList>
      </Text>

      <CodePane language="js">
        {`
          // We have an array with the name and surname
          let arr = ["John", "Smith"]
          
          // Destructuring assignment sets firstName = arr[0]
          // and surname = arr[1]
          let [firstName, surname] = arr;
          
          console.log(firstName); // John
          console.log(surname);  // Smith
        `}
      </CodePane>

      <Notes>
        Cuando el arreglo contiene más elementos de los que esperamos del lado
        izquierdo, podemos utilizar el operador spread para obtener los
        elementos restantes en un arreglo.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Desestructuración de arreglos
      </Heading>

      <CodePane language="js">
        {`
          // Works with any iterable
          let [a, b, c] = "abc"; // ["a", "b", "c"]

          // We can use it to loop over keys and values with .entries()
          let user = {
            name: "John",
            age: 30
          };

          for (let [key, value] of Object.entries(user)) {
            console.log(key + value); // name:John, and then age:30
          }

          // Ignore elements using commas
          let [article, , verb] = ["The", "dog", "ran", "fast"];

          console.log(verb); // "ran"
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Desestructuración de objetos
      </Heading>

      <Text fontSize={30}>
        La{" "}
        <a href="https://javascript.info/destructuring-assignment#object-destructuring">
          desestructuración de objetos
        </a>{" "}
        nos permite desempaquetar propiedades de un objeto en una o más
        variables. En este caso, utilizamos llaves <strong>{"{  }"}</strong>.
      </Text>

      <CodePane language="js">
        {`
          let options = {
            title: "Menu",
            width: 100,
            height: 200
          };
          
          let {title, width, height} = options;
          
          console.log(title);  // "Menu"
          console.log(width);  // 100
          console.log(height); // 200

          // We can overwrite the name of a property

          let {width: w, height: h, title} = options;

          console.log(w, h, title); // 100, 200, "Menu"

          // For potentially missing properties, we can set default values using "="
          let options = {
            title: "Menu"
          };
          
          let {width = 100, height = 200, title} = options;
          
          alert(title);  // Menu
          alert(width);  // 100
          alert(height); // 200
        `}
      </CodePane>
    </Slide>
  </>
);
