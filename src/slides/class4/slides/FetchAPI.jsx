import React from "react";
import { Slide, Heading, Text, CodePane, Notes } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Fetch API
      </Heading>

      <Text fontSize={30}>
        La <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a> provee una interfaz para obtener recursos a través de peticiones HTTP.
      </Text>

      <Text fontSize={30}>
        Para realizar una petición utilizamos la function <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">fetch</a>, que como primer parámetro recibe la URL del recurso o servidor (o un objeto <a href="https://developer.mozilla.org/en-US/docs/Web/API/Request">Request</a>) y luego retorna una promesa que se resuelve a un objeto de tipo <a href="https://developer.mozilla.org/en-US/docs/Web/API/Response">Response</a>. Además podemos proveerle un objeto con propiedades adicionales como segundo parámetro, donde podemos agregar headers, el body de la request, especificar el verbo HTTP, etc.
      </Text>

      <Text fontSize={30}>
        La promesa resultante solo fallará (estado rejected) cuando la petición no pueda ser enviada por algún problema de red o algo que haya causado que la petición no pueda ser enviada. Aún cuando el servidor responda con un estado HTTP 500 o 404, la promesa estará en estado fulfilled y tendremos disponible el objeto Response para chequear manualmente la respuesta.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Fetch API
      </Heading>

      <Text fontSize={30}>
        En caso de no especificar el verbo HTTP, por defecto se realizará una peticion GET.
      </Text>

      <CodePane language="js">
        {`
          fetch('http://example.com/movies.json')
          .then(response => response.json())
          .then(data => console.log(data));

          // or with async/await

          const fetchData = async () => {
            const response = await fetch('http://example.com/movies.json');
            const data = await response.json();
            console.log(data);
          }
        `}
      </CodePane>

      <Notes>
        Notar en el ejemplo el uso del método json del objeto response, el cual nuevamente retorna una promesa y por eso se hace el encadenamiento con otro then.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Fetch API
      </Heading>

      <Text fontSize={30}>
        Para enviar un JSON con información al servidor podemos hacer lo siguiente.
      </Text>

      <CodePane language="js">
        {`
          const data = { username: 'example' };

          fetch('https://example.com/profile', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });          
        `}
      </CodePane>
    </Slide>
  </>
);
