import React from "react";
import { Slide, Heading, Text, CodePane, Notes } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Async/Await
      </Heading>

      <Text fontSize={30}>
        Async/Await es un sugar syntax agregado en ECMAScript 2017 que funciona con promesas y hace más fácil de leer y escribir el código asincrónico.
      </Text>

      <Text fontSize={30}>
        La palabra clave <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">async</a> permite declarar funciones asincrónicas. Estas funciones al ser invocadas retornan una promesa.
      </Text>

      <Text fontSize={30}>
        La palabra clave <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await">await</a> es utilizada para esperar por promesas y solo puede ser utilizada dentro de una función asincrónica. Hace que la ejecución del código asincrónico se detenga hasta que la promesa tenga un estado fulfilled. Si la promesa pasa a estado rejected, se lanzará un error con la razón del fallo.
      </Text>

      <Notes>
        Si la expresión que sigue a la palabra clave await no es una promesa, se convierte a resolved Promise (Promise.resolve(expression)).
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Async/Await
      </Heading>

      <CodePane language="js">
        {`
          function resolveAfter2Seconds(x) {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve(x);
              }, 2000);
            });
          }

          async function main() {
            const result = await resolveAfter2Seconds(10);
            console.log(result); // 10
          }

          main();
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Async/Await
      </Heading>

      <Text fontSize={30}>
        A diferencia de los métodos convencionales <b>then</b> y <b>catch</b>, no existe un mecanismo particular para el manejo de errores (promesas en estado rejected). Para ese tipo de casos debemos utilizar un bloque try-catch como lo haríamos con código sincrónico.
      </Text>

      <CodePane language="js">
        {`
          async function main() {
            try {
              const result = await Promise.reject(30);
            } catch(e) {
              console.error(e); // 30
            }
          }

          main();
        `}
      </CodePane>
    </Slide>
  </>
);
