import React from "react";
import { Slide, Heading, Text, CodePane } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Código bloqueante
      </Heading>

      <Text fontSize={30}>
        Podemos pensar en un thread (hilo) como un proceso que los programas utilizan para ejecutar tareas, y cada thread solo puede ejecutar una tarea a la vez. JavaScript ejecuta todo el código en un solo thread (<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts#javascript_is_single_threaded">JavaScript is single-threaded</a>), llamado <b>main thread</b>.
      </Text>

      <Text fontSize={30}>
        Todo lo que vimos hasta ahora es código sincrónico. Una sentencia se ejecuta una vez que la anterior finaliza.
      </Text>

      <Text fontSize={30}>
        El código sincrónico nos impone algunas limitaciones cuando lo que debemos ejecutar es costoso, ya que JS no le devuelve el control al browser y éste puede parecer frizado, imposibilitando que maneje cualquier otra acción o tarea que el usuario solicite. A esto le llamamos código bloqueante.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Código bloqueante
      </Heading>

      <CodePane language="js">
        {`
          const result = document.querySelector("#result");
          const clickHandler = () => {
            let fecha;
            for (let i = 0; i < 20000000; i++) {
              fecha = new Date();
            }
            result.value = result.value + fecha;
          };

          document.querySelector("#startBtn").addEventListener("click", clickHandler);
        `}
      </CodePane>

      <iframe src={`${process.env.PUBLIC_URL}/snippets/class4/blockingCode.html`}></iframe>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Web Workers
      </Heading>

      <Text fontSize={30}>
        Los <a href="https://github.com/JulianPasquale/Webpack-templating/commit/2192a8391ccdb897ee806412a513227810131135">Web Workers</a> hacen posible la ejecución de código JS en background, en un hilo separado del main thread. De esta forma podemos ejecutar tareas laboriosas o costasas sin bloquear completamente el navegador.
      </Text>

      <Text fontSize={30}>
        Podemos utilizar el constructor <a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker">Worker</a> para crear un worker a partir de un script. Además un worker puede invocar a otro worker.
      </Text>

      <Text fontSize={30}>
        Los workers se comunican entre ellos y también con el main thread a través del pasaje de mensajes utilizando las directivas <a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage">Worker.postMessage</a> y <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage">Window.postMessage</a>
      </Text>

      <Text fontSize={30}>
        Sin embargo los workers cuentan con algunas limitaciones, como la imposibilidad de manipular el DOM y de acceder a varios atributos y métodos de window. Además no nos proveen una forma de esperar por un resultado, lo que suele ser una complicación cuando alguna tarea depende de otra.
      </Text>
    </Slide>
  </>
);
