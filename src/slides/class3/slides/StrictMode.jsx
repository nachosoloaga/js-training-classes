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
        Modo estricto
      </Heading>
      <Text fontSize={30}>
        Con ES5 llegó el{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">
          "modo estricto"
        </a>{" "}
        que permite elegir una <i>variante restringida</i> de JavaScript. Este
        modo no es sólo un subconjunto si no que tiene intencionalmente
        diferencias semánticas con el código normal.
      </Text>

      <Text fontSize={30}>
        Los navegadores que no admiten el modo estricto ejecutarán el código con
        un comportamiento diferente a los que sí lo soportan, por lo tanto no
        confíes en el modo estricto sin antes hacer pruebas de sus
        características más relevantes.
      </Text>

      <Text fontSize={30}>
        Los modos estricto y no estricto pueden coexistir, por lo tanto el
        código se puede transformar a modo estricto incrementalmente.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Modo estricto
      </Heading>

      <Text fontSize={30}>
        El modo estricto tiene varios cambios en la semántica normal de
        JavaScript:
      </Text>

      <UnorderedList fontSize={30}>
        <ListItem>
          Elimina algunos errores silenciosos de JavaScript cambiándolos para
          que lancen errores.
        </ListItem>
        <ListItem>
          Corrige errores que hacen difícil para los motores de JavaScript
          realizar optimizaciones: a veces, el código en modo estricto puede
          correr más rápido que un código idéntico pero no estricto.
        </ListItem>
        <ListItem>
          Prohíbe cierta sintaxis que probablemente sea definida en futuras
          versiones de ECMAScript.
        </ListItem>
      </UnorderedList>

      <Text fontSize={30}>
        La lista de cambios que genera el modo estricto es bastante larga y
        puede encontrarse en detalle{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode">
          aquí
        </a>
        .
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Modo estricto
      </Heading>

      <Text fontSize={30}>
        Para activar el modo estricto en un script o función debemos escribir{" "}
        <strong>"use strict"</strong> antes de definir cualquier otra expresión.
      </Text>

      <CodePane language="js">
        {`
          function strict() {
            // Function-level strict mode syntax
            'use strict';

            function nested() { return 'And so am I!'; }

            return "Hi!  I'm a strict mode function!  " + nested();
          }
        `}
      </CodePane>

      <Text fontSize={30}>
        Los módulos y las clases se encuentran por defecto definidas en modo
        estricto.
      </Text>
    </Slide>
  </>
);
