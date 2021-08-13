import React from 'react';
import {
  Slide,
  Heading,
  Text,
  CodePane,
  FlexBox,
  UnorderedList,
  ListItem,
  Notes
} from 'spectacle';

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Window API
      </Heading>

      <Text fontSize={30}>
        La <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window">Window API</a> es una interfaz que representa a una ventana que contiene un documento HTML.
      </Text>

      <Text fontSize={30}>
        En JS tenemos disponible el objeto global <b>window</b>, que representa a la ventana que está ejecutando el script.
      </Text>

      <Text fontSize={30}>
        En un navegador que posee pestañas, cada una está representada por su propio <b>window</b> object, sin embargo, aún algunas propiedades o funciones aún aplican al navegador completo.
      </Text>
    </Slide>
    
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Window API
      </Heading>

      <Text fontSize={30}>
        Muchas funciones que solemos utilizar desde el código son expuestas por esta API.
      </Text>
      
      <Text fontSize={30}>
        Algunos ejemplos:
      </Text>

      <UnorderedList>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/alert">alert</a>
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm">confirm</a>
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt">prompt</a>
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll">scroll</a>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        window.console
      </Heading>

      <Text fontSize={30}>
        La propiedad <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/console"><b>window.console</b></a> retorna una referencia al objeto <a href="https://developer.mozilla.org/en-US/docs/Web/API/console">console</a>, que provee una serie de métodos para loguear información en la consola de desarrollo del navegador.
      </Text>
      
      <Text fontSize={30}>
        Permite loguear información con distintos niveles de importancia(<a href="https://developer.mozilla.org/en-US/docs/Web/API/console/debug">debug</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/error">error</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/info">info</a> o <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/log">log</a> que es más general), y además permite <a href="https://developer.mozilla.org/en-US/docs/Web/API/console#using_groups_in_the_console">agrupar los logs en distintos grupos</a> y no solo loguear texto sino cualquier tipo de objetos.
      </Text>

      <Text fontSize={30}>
        Permite incluso <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/count">contar la cantidad de veces</a> que una línea fue ejecutada y también <a href="https://developer.mozilla.org/en-US/docs/Web/API/console#timers">calcular la duración</a> de una operación específica.
      </Text>

      <CodePane language="js">
        {`
          console.log("Hello");
        `}
      </CodePane>

      <Notes>
        Notar que para acceder a cualquier propiedad o función del objeto window no es necesario hacer "window.method".
      </Notes>
    </Slide>
  </>
);
