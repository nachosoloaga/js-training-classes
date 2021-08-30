import React from "react";
import { Slide, Heading, Text, UnorderedList, ListItem, OrderedList, Notes } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        <a href="https://www.javascripttutorial.net/javascript-execution-context/">Execution context</a>
      </Heading>

      <Text fontSize={30}>
        Cuando el motor de JavaScript ejecuta un script, crea "contextos de ejecución". Podemos ver al contexto de ejecución como el entorno en el que JS es ejecutado.
      </Text>

      <UnorderedList fontSize={30}>
        <ListItem>
          Global execution context (GEC): Contexto de ejecución por defecto. Es creado cuando el archivo es cargado en el navegador. Todo el código que no se encuentra dentro de funciones u objetos se ejecuta en el GEC. Solo existe un GEC.
        </ListItem>

        <ListItem>
          Functional execution context (FEC): Este contexto es creado por JS cada vez que encuentra una invocación a una función. Cada función tiene su propio FEC y además tiene acceso a todo el código definido en el GEC. Si el código es ejecutado en modo estricto, el valor de this es undefinded, sino es window.
        </ListItem>

        <ListItem>
          Eval: Contexto de ejecución dentro de la función <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval">eval</a>.
        </ListItem>
      </UnorderedList>

      <Text fontSize={30}>
        Cada contexto consta de 2 fases: creation phase y execution phase.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Creation phase
      </Heading>

      <OrderedList fontSize={30}>
        <ListItem>
          Se crea el objeto global.
          <UnorderedList fontSize={30}>
            <ListItem>
              En el caso del GEC, si se ejecuta en un navegador web se crea el objeto <b>window</b>, y si se ejecuta en Node se crea el objeto <b>global</b>. 
            </ListItem>

            <ListItem>
              En el caso del FEC, se crea el objeto arguments que contiene una referencia a todos los parámetros pasados a la función.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          Se crea la asociación de <b>this</b> con el objeto global.
          <UnorderedList fontSize={30}>
            <ListItem>
              En el caso del FEC, si se está ejecutando el script en modo estricto, el valor de this será undefined. Sino será el objeto global (window o global).
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          Se crea una heap en memoria para almacenar las variables y funciones.
        </ListItem>

        <ListItem>
          Se almacenan las declaraciones de funciones y variables en la heap, con un valor inicial de undefined.
        </ListItem>
      </OrderedList>
      
      <Notes>
        Cada vez que se crea un contexto de ejecución, antes de que el código se ejecute, el contexto pasa por esta fase.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Execution phase
      </Heading>

      <Text fontSize={30}>
        Durante esta fase el motor de JS ejecuta el script línea por línea. Se asignan los valores a las variables y se ejecutan los llamados a funciones.
      </Text>

      <Text fontSize={30}>
        Para monitorear los contextos de ejecución, JS usa una <a href="https://www.javascripttutorial.net/javascript-call-stack/">call stack</a> (pila LIFO). Más info <a href="https://javascript.plainenglish.io/node-call-stack-explained-fd9df1c49d2e">aquí</a>.
      </Text>

      <div className="align-center">
        <img
          src={`${process.env.PUBLIC_URL}/images/call_stack.png`}
          alt="Call Stack"
          height="75%"
          width="60%"
        />
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        This
      </Heading>

      <Text fontSize={30}>
        Como vimos, el valor de this depende de muchas factores, entre ellos la forma en la que una funcion es invocada, si se utiliza modo estricto o no, arrow functions, clases, etc.
      </Text>

      <Text fontSize={30}>
        En JS tenemos disponible tambien el objeto <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis">globalThis</a>, el cual siempre apunta al objeto global, sin importar el contexto de ejecución.
      </Text>

      <Text fontSize={30}>
        En <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"> este artículo</a> se detallan una gran variedad de escenarios distintos donde cambia también el valor asignado a this.
      </Text>
    </Slide>
  </>
);
