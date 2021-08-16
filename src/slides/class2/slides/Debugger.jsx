import React from 'react';
import {
  Slide,
  Heading,
  Text,
  CodePane,
} from 'spectacle';

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Debugger
      </Heading>

      <Text fontSize={30}>
        La instrucción <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger"><b>debugger</b></a> invoca a cualquier funcionalidad de debugging que se encuentre disponible (si no existe ninguna, la instrucción no tiene efecto).
      </Text>
      
      <Text fontSize={30}>
        En el contexto de un navegador web, la instrucción <b>debugger</b> funciona como un breakpoint en la línea del script donde fue colocada, deteniendo la ejecución del programa y dejando disponible todo el contexto (variables, constantes y funciones), accesible desde la consola del navegador.
      </Text>

      <CodePane language="js">
        {`
          const bar = 'foo';
          debugger;
        `}
      </CodePane>
    </Slide>
  </>
);
