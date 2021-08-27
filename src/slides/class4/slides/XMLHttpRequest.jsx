import React from "react";
import { Slide, Heading, Text, CodePane, Notes } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        XMLHttpRequest
      </Heading>

      <Text fontSize={30}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">XHR</a> es una API que se utiliza para interactuar con servidores web, a través del envío de peticiones HTTP. Aunque su nombre pueda parecer confuso, XHR no solo sirve para obtener documentos XML, sino cualquier tipo de datos. Además permite realizar peticiones sincrónicas y asincrónicas, sin embargo se recomienda la utilizar la forma asincrónica. <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests">Synchronous and Asynchronous Requests</a>.
      </Text>

      <Text fontSize={30}>
        XHR provee la posibilidad de escuchar por varios eventos, a los cuáles les podemos asociar manejadores de la misma forma que hacemos con los elementos del DOM e incluso utilizando el mismo método <b>addEventListener</b>. La lista completa de eventos se puede ver <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#events">aquí</a>.
      </Text>

      <CodePane language="js">
        {`
          const request = new XMLHttpRequest();
          
          request.addEventListener("progress", updateProgress);
          request.addEventListener("load", transferComplete);
          request.addEventListener("error", transferFailed);
          request.addEventListener("abort", transferCanceled);
          `}
      </CodePane>

      <Notes>
        Los manejadores de eventos deben ser asociados antes de ejecutar la petición, de lo contrario el progreso no podrá ser monitoreado.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        XMLHttpRequest
      </Heading>

      <Text fontSize={30}>
        El método de instancia <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open">open</a> es utilizado para incializar una request, y luego <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send">send</a> es utilizado para efectivamente enviar la petición al servidor.
      </Text>

      <Text fontSize={30}>
        Además podemos utilizar otros métodos de instancia disponibles para, por ejemplo, <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader">agregar headers a la petición</a>.
      </Text>

      <CodePane language="js">
        {`
          const xhr = new XMLHttpRequest();
          xhr.open('GET', '/server', true);
          
          xhr.addEventListener('load', (event) => {
            // Request finished. Do processing here.
          });
          
          xhr.send(null);
        `}
      </CodePane>
    </Slide>
  </>
);
