import React from 'react';
import {
  Slide,
  Heading,
  Text,
  CodePane,
  Notes,
  UnorderedList,
  ListItem
} from 'spectacle';

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Number.parseInt
      </Heading>

      <Text fontSize={30}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt">parseInt</a> es una función que recibe un string (si no es un string lo convierte) y retorna un entero (o NaN). Además recibe como segundo parámetro la base en la que dicho número está representado.
      </Text>

      <Text fontSize={30}>
        <a href="https://thisthat.dev/number-constructor-vs-parse-int/">Number() vs parseInt()</a>
      </Text>

      <CodePane language="js">
        {`
          parseInt('0xF', 16)
          parseInt('F', 16)
          parseInt('17', 8)
          parseInt(021, 8)
          parseInt('015', 10)
          parseInt(15.99, 10)
          parseInt('1111', 2)
          parseInt('15 * 3', 10)
          parseInt('15e2', 10)
          parseInt('15px', 10)

          parseInt('Hello', 8) // Not a number at all
          parseInt('546', 2)   // Digits other than 0 or 1 are invalid for binary radix
        `}
      </CodePane>

      <Notes>
        Recordar que el tipo primitivo Number también incluye la representación de números flotantes, y la función parseInt retorna siempre números enteros. Además permite transformar números que poseen distinta base.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Number.parseFloat
      </Heading>

      <Text fontSize={30}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat">parseFloat</a> es una función que recibe un string (si no es un string lo convierte) y retorna un número flotante (o NaN).
      </Text>

      <CodePane language="js">
        {`
          parseFloat(3.14);
          parseFloat('3.14');
          parseFloat('  3.14  ');
          parseFloat('314e-2');
          parseFloat('0.0314E+2');
          parseFloat('3.14some non-digit characters');

          parseFloat('FF2'); // NaN
          parseFloat(900719925474099267n); // lose precision as the integer is too large to be represented as a float
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        isNaN / Number.isNaN
      </Heading>

      <Text fontSize={30}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN">isNaN</a> es una función que permite determinar si un valor es <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN">NaN</a>.
        Cuando el argumento pasado a esta función no es de tipo Number, primero se convierte a Number. Este compartamiento puede generar algunos casos especiales donde la función devuelve valores inesperados.
      </Text>

      <Text fontSize={30}>
        Por este motivo, en ECMAScript 2015 se define la función <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN">Number.isNaN</a>, la cual sirve para determinar si el parámetro recibido es NaN y es de tipo Number.
      </Text>

      <CodePane language="js">
        {`
          Number('false') // NaN.

          isNaN("false") // true because Number('false') returns NaN.

          Number.isNaN("false") // false because 'false' is not a Number.
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        String.localeCompare
      </Heading>

      <Text fontSize={30}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare">localeCompare</a> es una función que retorna un número entero indicando si un string está antes, despues o es igual a otro.
      </Text>

      <CodePane language="js">
        {`
          // The letter "a" is before "c" yielding a negative value
          'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

          // Alphabetically the word "check" comes after "against" yielding a positive value
          'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

          // "a" and "a" are equivalent yielding a neutral value of zero
          'a'.localeCompare('a'); // 0

          // Sort an array
          let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
          items.sort( (a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
          // ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Object methods
      </Heading>

      <Text fontSize={30}>
        El tipo Object provee una gran variedad de métodos que podemos utilizar para recorrerlo, copiarlo, filtrar sus claves, etc.
      </Text>

      <UnorderedList>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries">Object.entries</a> retorna un array de arrays. Permite recorrer un objeto iterando por sus claves y valores.
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys">Object.keys</a> retorna un array con las claves de un objeto.
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values">Object.values</a> retorna un array con los valores de un objeto.
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign">Object.assign</a> copia todas las propiedades enumerables de uno o más objetos en otro.
        </ListItem>
      </UnorderedList>
    </Slide>
  </>
);
