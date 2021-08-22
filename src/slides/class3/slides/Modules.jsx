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
        Módulos
      </Heading>

      <Text fontSize={30}>
        Los programas escritos en JavaScript comenzaron siendo bastante pequeños
        (tareas de scripting aisladas o adición de interactividad a páginas web)
        por lo que generalmente no se necesitaban grandes scripts.
      </Text>

      <Text fontSize={30}>
        El uso de JavaScript ha ido evolucionando, y ahora tenemos aplicaciones
        completas que se ejecutan en navegadores utilizando librerías como
        ReactJS o frameworks como Angular. Además, JS ahora se usa en otros
        contextos (Node.js por ejemplo).
      </Text>

      <Text fontSize={30}>
        En los últimos años se ha comenzado a pensar en proporcionar mecanismos
        para dividir programas JavaScript en módulos separados que se puedan
        importar cuando sea necesario. Hay una serie de librerías y sistemas que
        permiten el uso de módulos, siendo una de las más adoptadas{" "}
        <strong>CommonJS.</strong>
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        CommonJS
      </Heading>

      <Text fontSize={30}>
        Es el sistema de módulos utilizado por defecto por{" "}
        <strong>Node.js</strong> y consta de dos directivas:
        <UnorderedList fontSize={30}>
          <ListItem>
            <strong>require()</strong>
          </ListItem>
          <ListItem>
            <strong>module.exports</strong>
          </ListItem>
        </UnorderedList>
      </Text>

      <CodePane language="js">
        {`
          const circle = require('./circle.js');
          console.log("The area of a circle of radius 4 is " + circle.area(4));
          
          const { PI } = Math;
          
          function area(r){
            return PI * r ** 2;
          } 
          
          function circumference(r){
            2 * PI * r;
          }

          module.exports = { area, circumference };
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        ES6 Modules
      </Heading>

      <Text fontSize={30}>
        Sin embargo, con la llegada de ES6 se implementó un sistema de módulos
        nativo al navegador que le permite al mismo optimizar la carga de
        módulos sin tener que utilizar una librería.
      </Text>

      <Text fontSize={30}>
        Ahora, las directivas utilizadas para importar y exportar funcionalidad
        desde distintos módulos son las siguientes:
        <UnorderedList fontSize={30}>
          <ListItem>
            <strong>import</strong>
          </ListItem>
          <ListItem>
            <strong>export</strong>
          </ListItem>
        </UnorderedList>
        <Text fontSize={30}>
          La <strong>principal diferencia</strong> que existe entre CommonJS y
          el sistema implementado en ES6 es que este último pre-parsea los
          módulos para resolver las importaciones antes de que el código sea
          ejecutado. Mientras que en CommonJS, los módulos cargan dependencias
          bajo demanda en tiempo de ejecución.
        </Text>
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        ES6 Modules
      </Heading>
      <CodePane language="js">
        {`
          //  lib/math.js
          export function sum (x, y) { return x + y }
          export const pi = 3.141593
          
          //  someApp.js
          import * as math from "lib/math"
          console.log("2π = " + math.sum(math.pi, math.pi))
          
          //  otherApp.js
          import { sum, pi } from "lib/math"
          console.log("2π = " + sum(pi, pi))
        `}
      </CodePane>

      <Notes>Mencionar export default.</Notes>
    </Slide>
  </>
);
