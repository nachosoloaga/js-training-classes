import React from "react";
import { Slide, Heading, Text, CodePane, Notes } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        AJAX
      </Heading>

      <Text fontSize={30}>
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/AJAX">AJAX</a> es una técnica de programación que permite actualizar partes de un documento HTML sin la necesidad de refrescar la página completa.
      </Text>

      <Text fontSize={30}>
        Permite trabajar asincrónicamente, es decir, el código continua ejecutandose mientras que una parte del documento es actualizada.
      </Text>

      <Text fontSize={30}>
        Inicialmente AJAX era un acrónimo para Asynchronous JavaScript And XML.
      </Text>

      <Text fontSize={30}>
        Para construir sitios complejos que requerían el uso de esta técnica se utilizaba <a href="https://developer.mozilla.org/en-US/docs/Glossary/XHR_(XMLHttpRequest)">XHR</a>, sin embargo esta API no es tan utilizada actualmente.
      </Text>
    </Slide>
  </>
);
