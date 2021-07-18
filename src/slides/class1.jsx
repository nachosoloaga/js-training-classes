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
  Notes,
  FlexBox,
  Box
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

    {/* Data types and data structures */}
    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Valores y estructuras de datos
      </Heading>

      <Text>
        Todos los lenguajes de programación tienen estructuras de datos integradas.
      </Text>

      <Text>
        Generalmente varían sus nombres o formas de utilización de un lenguaje a otro.
      </Text>
    </Slide>

    {/* Primitives */}
    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Tipos de datos primitivos
      </Heading>

      <Text margin="0px" padding="0px">
        JavaScript cuenta con un conjunto de tipos que son llamados <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values">tipos primitivos</a>. Estos tipos definen valores que son inmutables.
      </Text>

      <UnorderedList>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined">Undefined</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt">BigInt</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/symbol">Symbol</a>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Undefined
      </Heading>

      <Text>
        <b>undefined</b> es una variable global que posee como valor inicial el tipo primitivo undefined.
      </Text>

      <UnorderedList>
        <ListItem>
          Una variable que no tiene un valor asignado, es creada con el valor undefined.
        </ListItem>
        <ListItem>
          Una función que no posee una sentencia return, devuelve undefined.
        </ListItem>
      </UnorderedList>

      <CodePane language="js">
        {`
          let foo;

          console.log(foo); // undefined
          typeof foo // "undefined"
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Null
      </Heading>

      <div style={{width: '90%'}}>
        <Text>
          Este valor se utiliza para representar la no existencia o invalidez de algo, generalmente de manera intencional.
        </Text>

        <FlexBox justifyContent="space-between" style={{ width: '90%'}}>
          <CodePane language="js">
            {`
              const foo = null;

              console.log(foo); // null
              typeof foo // ?
            `}
          </CodePane>

          <iframe src="/src/slides/class1/examples/null.html"></iframe>
        </FlexBox>
      </div>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Boolean
      </Heading>

      <Text>
        Representa una entidad lógica que solo puede tomar los valores <b>true</b> o <b>false</b>.
      </Text>
      
      <Text>
        Podemos usar la función Boolean para convertir cualquier elemento a boolean.
      </Text>

      <Text>
        Si el valor es omitido o es 0, -0, null, false, NaN, undefined, o un String vacío (""), el objeto tendrá un valor inicial <b>false</b>.
      </Text>

      <Text>
        El resto de los valores, incluyendo Arrays vacíos y el String "false", crean un objeto con un valor inicial de <b>true</b>.
      </Text>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <div style={{width: '80%'}}>
        <Heading margin="0px" fontSize="50px">
          Boolean
        </Heading>

        <Grid gridTemplateRows="1fr 1fr" gridRowGap={50}>
          <FlexBox justifyContent="space-between" style={{ width: '80%'}}>
            <CodePane language="js">
              {`
                const bool = true;
                
                if (bool) {
                  console.log("Hola Snapplerxs!");
                };
                `}
            </CodePane>

            <iframe src="/src/slides/class1/examples/boolean1.html"></iframe>
          </FlexBox>

          <FlexBox justifyContent="space-between" style={{ width: '80%'}}>
            <CodePane language="js">
              {`
                const bool = false;

                if (bool) {
                  console.log("Hola Snapplerxs!");
                };
                `}
            </CodePane>

            <iframe src="/src/slides/class1/examples/boolean2.html"></iframe>
          </FlexBox>
        </Grid>
      </div>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <div style={{width: '80%'}}>

        <Heading margin="0px" fontSize="50px">
          Boolean
        </Heading>

        <Grid gridTemplateRows="1fr 1fr" gridRowGap={50}>
          <FlexBox justifyContent="space-between" style={{ width: '80%'}}>
            <CodePane language="js">
              {`
                const bool = Boolean(false);

                if (bool) {
                  console.log("Hola Snapplerxs!");
                };
                `}
            </CodePane>

            <iframe src="/src/slides/class1/examples/boolean3.html"></iframe>
          </FlexBox>

          <FlexBox justifyContent="space-between" style={{ width: '80%'}}>
            <CodePane language="js">
              {`
                const bool = new Boolean(false);

                if (bool) {
                  console.log("Hola Snapplerxs!");
                };
                `}
            </CodePane>

            <iframe src="/src/slides/class1/examples/boolean4.html"></iframe>
          </FlexBox>
        </Grid>
      </div>

      <Notes>
        No confundir el objeto Booelan con los valores primitivos Boolean ni con la función Boolean.

        La función Boolean puede ser usada para generar valores primitivos, pero al hacer un new estamos creando un objeto, que al ser evaluado tendrá un valor de verdad verdadero.
      </Notes>
    </Slide>
  </>
);
