import React from "react";
import { Slide, Heading, Text, CodePane, UnorderedList, ListItem, Notes } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Async JS
      </Heading>

      <Text fontSize={30}>
        Para solucionar algunos de los problemas que trae el código bloqueante y también las limitaciones que presentan los workers, JavaScript nos permite la ejecución de código asincrónico.
      </Text>

      <Text fontSize={30}>
        El código asincrónico se sigue ejecutando en el main thread, sin embargo, JavaScript maneja los eventos de manera tal que asegura la ejecución de una manera asincrónica sin bloquear al navegador.
      </Text>

      <Text fontSize={30}>
        Para más información ver <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop">Event loop</a>. Existen además una gran cantidad de artículos y videos que hablan sobre el tema en profundidad, por ejemplo <a href="https://dev.to/upplabs/how-asynchronous-works-in-javascript-event-loop-concept-1ddb">este</a> y <a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ">este</a>.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Promesas
      </Heading>

      <Text fontSize={30}>
        Una <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promesa</a> es un objeto que representa la eventual finalización o falla de una operación asincrónica.
      </Text>

      <Text fontSize={30}>
        Una promesa puede estar en cualquiera de estos estados.
      </Text>

      <UnorderedList fontSize={30}>
        <ListItem>
          pending: Estado inicial.
        </ListItem>
        <ListItem>
          fulfilled: La operación fue completada satisfactoriamente.
        </ListItem>
        <ListItem>
          rejected: La operación falló.
        </ListItem>
      </UnorderedList>      
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Promesas
      </Heading>

      <Text fontSize={30}>
        Las promesas cuentan con una serie de métodos de instancia que nos permiten ejecutar funciones ante cada cambio de estado.
      </Text>

      <Text fontSize={30}>
        Estos métodos reciben funciones callback y siempre retornan una nueva promesa.
      </Text>

      <UnorderedList fontSize={30}>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then">then</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch">catch</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally">finally</a>
        </ListItem>
      </UnorderedList>

      <CodePane language="js">
        {` promesa.then(successCallback).catch(errorCallback).finally(finalCallback); `}
      </CodePane>

      <Notes>
        La función then recibe 2 callbacks. El primer argumento es el callback de éxito que será llamado cuando la promesa esté en estado fulfilled, y el segundo es el callback de error que será llamado cuando la promesa pase a estado rejected. La implementación del catch no es más que un then sin el primer argumento.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Promesas
      </Heading>

      <img src={`${process.env.PUBLIC_URL}/images/promise_flow.png`} alt="Promise flow" height="60%"/>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Encadenamiento de promesas
      </Heading>

      <Text fontSize={30}>
        En algunos casos es necesario ejecutar dos o más operaciones asincrónicas de manera consecutiva. Debido a que los métodos que tenemos disponibles para trabajar con promesas, siempre devuelven una nueva promesa, es posible encadenar métodos que permitan trabajar con la promesa resultante y utilizar el resultado de la operación anterior.
      </Text>

      <Text fontSize={30}>
        Es importante descatar que los callbacks serán ejecutados en el orden en el que fueron provistos.
      </Text>

      <CodePane language="js">
        {`
          doSomething()
          .then(result => doSomethingElse(result))
          .then(newResult => doThirdThing(newResult))
          .then(finalResult => {
            console.log(\`Got the final result: \${finalResult}\`);
          })
          .catch(failureCallback);
        `}
      </CodePane>

      <Text fontSize={30}>
        En caso de que alguna de las promesas de la cadena pase al estado rejected, se ejecutará el callback de failure asociado mediante la función <b>catch</b>.
      </Text>

      <Notes>
        Este modelo de manejo de errores imita a lo que sucede con los bloques try-catch en el código sincrónico convencional, donde si se dispara una excepción dentro del bloque try, se ejecutará el código del bloque catch.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Creación de promesas
      </Heading>

      <Text fontSize={30}>
        Podemos utilizar el <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise">constructor</a> para crear promesas.
      </Text>

      <CodePane language="js">
        {`
          const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('foo');
            }, 300);
          });       
        `}
      </CodePane>

      <Text fontSize={30}>
        Si nuestra promesa siempre será resuelta de manera exitosa, podemos utilizar <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve">Promise.resolve(value)</a> para crear una nueva promesa que al resolverse retornará <b>value</b>.
      </Text>

      <Text fontSize={30}>
        Si nuestra promesa siempre será resuelta de manera erronea, podemos utilizar <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject">Promise.reject(reason)</a> para crear una nueva promesa que fallará con la razón <b>reason</b>.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Promise API
      </Heading>

      <Text fontSize={30}>
        Además, la Promise API cuenta con algunos métodos que pueden ser útiles cuando tenemos un conjunto de promesas que debemos procesar.
      </Text>

      <UnorderedList fontSize={30}>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all">Promise.all</a>: Espera a que todas las promesas sean resueltas o que alguna falle.
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled">Promise.allSettled</a>: Espere hasta que todas las promesas se hayan resuelto (cada una puede resolverse o rechazar).
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any">Promise.any</a>: Espera a que una de las promesas sea resuelta.
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race">Promise.race</a>: Espera a que una de las promesas sea resuelta o falle.
        </ListItem>
      </UnorderedList>
    </Slide>
  </>
);
