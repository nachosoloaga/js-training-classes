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
        Document Object Model (DOM)
      </Heading>

      <Text fontSize={30}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">DOM</a> es una interfaz de programación para documentos HTML y XML.
      </Text>

      <Text fontSize={30}>
        Es una representación orientada a objetos de una página web. Representa a los documentos como nodos y objetos, y permite alterar su estructura, estilo y contenido programáticamente.
      </Text>

      <Text fontSize={30}>
        El DOM fue diseñado para ser independiente de cualquier lenguaje de programación. Es muy común ver o hablar de manipular el DOM con JS, pero podría hacerse tambien con Python por ejemplo.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Document API
      </Heading>

      <Text fontSize={30}>
        La <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document">document API</a> es implementada por los navegadores web para permitirnos interactuar con el DOM.
      </Text>

      <Text fontSize={30}>
        No se requiere la instalación de ninguna librería o herramienta. Con el simple hecho de incluir nuestro código JS dentro de la página HTML, ya tenemos acceso a esta API.
      </Text>

      <CodePane language="html">
        {`
          <html>
            <head>
              <script>
                // create a couple of elements in an empty HTML page
                const heading = document.createElement("h1");
                const heading_text = document.createTextNode("Big Head!");
                heading.appendChild(heading_text);
                document.body.appendChild(heading);
              </script>
            </head>
            <body>
            </body>
          </html>
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        &lt;/script&gt;
      </Heading>

      <Text fontSize={30}>
        El tag <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script">script</a> se utiliza para embeber datos o código, generalmente JS.
      </Text>

      <Text fontSize={30}>
        A este tag podemos pasarle un conjunto de atributos que permiten realizar cosas como cargar un script de manera asincrónica, ejecutar el script ni bien el documento es cargado, etc.
      </Text>
        
      <Text fontSize={30}>
        El atributo más común es <b>src</b>, que usaremos para indicarle a JavaScript la ubicación de nuestro script a cargar en el documento HTML.
      </Text>

      <CodePane language="html">
        {`
          <script src="myScript.js"></script>
        `}
      </CodePane>
    </Slide>
  </>
);
