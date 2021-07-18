import React from "react";
import {
  Slide,
  Heading,
  ListItem,
  Grid,
  OrderedList,
  Text,
  UnorderedList,
  CodePane,
  Notes
} from "spectacle";

export default () => (
  <>
    {/* Intro to JS */}
    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="100px">
        <i>Agenda</i>
      </Heading>

      <OrderedList>
        <Grid gridTemplateColumns="1fr 1fr 1fr" gridColumnGap={15}>
          <ListItem>
            Surgimiento de JS
          </ListItem>
          <ListItem>
            Características
          </ListItem>
          <ListItem>
            ¿Qué es ECMAScript?
          </ListItem>
          <ListItem>
            Sintaxis básica
          </ListItem>
          <ListItem>
            Variables - var, let, const
          </ListItem>
          <ListItem>
            Tipos de datos
          </ListItem>
          <ListItem>
            Operadores lógicos
          </ListItem>
          <ListItem>
            Estructuras de control
          </ListItem>
          <ListItem>
            Excepciones
          </ListItem>
          <ListItem>
            Funciones
          </ListItem>
          <ListItem>
            Window API
          </ListItem>
          <ListItem>
            Debugging
          </ListItem>
        </Grid>
      </OrderedList>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" padding="0px" fontSize="50px">
        <i>Javascript</i>
      </Heading>

      <Text>
        JavaScript fue creado inicialmente con un único propósito, "traer vida a las páginas web" - <i>make web pages alive</i>. Hoy en día se utiliza en muchos otros entornos también.
      </Text>
      <Text>
        Fue desarrollado originalmente por Brendan Eich de Netscape con el nombre de Mocha, el cual fue renombrado posteriormente a LiveScript, para finalmente quedar como JavaScript. Este último cambio de nombre se realizó en diciembre de 1995.
      </Text>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" padding="0px" fontSize="50px">
        <i>Javascript</i>
      </Heading>

      <Text>
        Los programas escritos en JavaScript son llamados scripts y no necesitan de ningún tipo de procesamiento especial o compilación para ser ejecutados. De hecho, pueden ser escritos directamente en el código HTML de una página web y se ejecutará cuando ésta sea cargada.
      </Text>

      <Text>
        Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.
      </Text>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" padding="0px" fontSize="50px">
        <i>Javascript</i>
      </Heading>

      <Text>
        Podemos destacar varias cosas únicas del lenguaje
      </Text>
      <UnorderedList>
        <ListItem>
          Es el lenguaje con integración completa con HTML y CSS más adoptado de la web.
        </ListItem>
        <ListItem>
          Simple de usar.
        </ListItem>
        <ListItem>
          Muy utilizado en la industria y actualmente en toda la web.
        </ListItem>
        <ListItem>
          En la actualidad existen muchos lenguajes construidos que se "transpilan" luego a JS y extienden o proveen nuevas funcionalidades.
        </ListItem>
        <ListItem>
          Es un lenguaje multi-paradigma.
        </ListItem>
        <ListItem>
          Existe una gran variedad de frameworks JS, tanto Frontend como Backend.
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" padding="0px" fontSize="50px">
        <i>ECMAScript</i>
      </Heading>

      <Text>
        <a href="https://en.wikipedia.org/wiki/ECMAScript">
          ECMAScript
        </a> es un estándar que define un lenguaje de tipos dinámicos ligeramente inspirado en Java y otros lenguajes del estilo de C. Soporta algunas características de la programación orientada a objetos mediante objetos basados en prototipos y pseudoclases.
      </Text>
      <Text>
         El objetivo de este estandar es asegurar la interoperabilidad de las páginas web entre diferentes navegadores web.
      </Text>
      <Text>
        JavaScript es un lenguaje de programación que implementa este estandar - ECMAScript está basado en JavaScript.
      </Text>
    </Slide>

    {/* let and const */}
    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="100px">
        Variables
      </Heading>

      <Text>
        Las variables son contenedores que nos permiten almacenar valores para su posterior uso y/o manipulación.
      </Text>

      <Text>
        Para declarar una variable podemos utilizar la palabra clave <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"><b>let</b></a>.
      </Text>

      <CodePane language="js">
        {`
          let myVariable;
          // Initialize with an initial value
          let myVariable = 'Hola Snapplerxs!';
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="100px">
        Variables
      </Heading>

      <Text>
        JavaScript es un lenguaje dinámico y de tipado flexible. En parte esto significa que las variables no están asociadas directamente con ningún tipo de valor en particular y se les pueden asignar o reasignar valores de cualquier tipo.
      </Text>

      <CodePane language="js">
        {`
          let foo = 42; // foo is a number
          foo = 'bar';  // foo is a string
          foo = true;   // foo is a boolean

          // Uncaught SyntaxError: Identifier 'foo' has already been declared
          let foo = 10;
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Constantes
      </Heading>

      <Text>
        A diferencia de las variables, las constantes no pueden cambiar su valor posteriormente. Se debe especificar el valor al momento de su declaración.
      </Text>

      <Text>
        Para definir una constante, usamos la palabra clave <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a>.
      </Text>

      <CodePane language="js">
        {`
          const FOO = "bar";

          // this will throw an error - Uncaught TypeError: Assignment to constant variable.
          FOO = 20;

          // trying to redeclare a constant throws an error
          // Uncaught SyntaxError: Identifier 'FOO' has already been declared
          const FOO = 20;
        `}
      </CodePane>

      <Notes>
        Las constantes pueden ser declaradas con mayúsculas o minúsculas, pero generalmente se definen con todas sus letras en mayúscula a modo de convención.
      </Notes>
    </Slide>
  </>
);
