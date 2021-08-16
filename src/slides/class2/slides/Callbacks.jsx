import React from 'react';
import {
  Slide,
  Heading,
  Text,
  CodePane,
  FlexBox
} from 'spectacle';

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Callbacks
      </Heading>

      <Text fontSize={30}>
        Se denomina <a href="https://developer.mozilla.org/en-US/docs/Glossary/Callback_function">callback</a> a una función que fue pasada a otra como parámetro para luego ser invocada.
      </Text>

      <CodePane language="js">
        {`
          function greeting(name) {
            alert('Hello ' + name);
          }
          
          function processUserInput(callback) {
            var name = prompt('Please enter your name.');
            callback(name);
          }
          
          processUserInput(greeting);
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        setTimeout
      </Heading>

      <Text fontSize={30}>
        La función <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout">setTimeout</a> establece un timer que ejecutará un callback cuando éste expire.
      </Text>

      <Text fontSize={30}>
        Recibe como primer argumento un callback y como segundo argumento el tiempo en milisegundos luego de los cuales la función debe ser llamada y ambos son obligatorios.
        Los argumentos pasados luego de estos, serán argumentos que recibirá la función al ser invocada.
      </Text>

      <Text fontSize={30}>
        Esta función retorna un <b>timeoutID</b>, que es un entero que representa al timer creado. Este valor puede ser usado luego para cancelar la ejecución del timer utilizando la función <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout">clearTimeout</a>.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        setTimeout
      </Heading>

      <FlexBox justifyContent="space-between" style={{ width: '80%' }}>
        <CodePane language="js">
          {`
            const resultContainer = document.querySelector("#result");

            function startTimer() {
              setTimeout(function () {
                resultContainer.value = resultContainer.value + "Timer expired after 1 second";
              }, 1000)
            };

            function clearResult() {
              result.value = '';
            }
        
            document.querySelector("#startBtn").addEventListener("click", startTimer);
            document.querySelector("#clearBtn").addEventListener("click", clearResult)
          `}
        </CodePane>

        <iframe src={`${process.env.PUBLIC_URL}/snippets/class2/setTimeout.html`}></iframe>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        setInterval
      </Heading>

      <Text fontSize={30}>
        La función <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval">setInterval</a> establece un timer que ejecutará un callback <b>cada vez</b> que se cumpla el tiempo especificado.
      </Text>

      <Text fontSize={30}>
        Recibe como primer argumento un callback y como segundo argumento el intervalo en milisegundos que debe cumplirse para invocar a la función y ambos son obligatorios.
        Los argumentos pasados luego de estos, serán argumentos que recibirá la función al ser invocada.
      </Text>

      <Text fontSize={30}>
        Esta función retorna un <b>timeoutID</b>, que es un entero que representa al timer creado. Este valor puede ser usado luego para cancelar la ejecución del timer utilizando la función <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval">clearInterval</a>.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        setInterval
      </Heading>

      <FlexBox justifyContent="space-between" style={{ width: '80%' }}>
        <CodePane language="js">
          {`
            let intervalId;
            function startInterval() {
              intervalId = setInterval(flashText, 500);
            }
        
            function flashText() {
              const container = document.querySelector('#container');
        
              if (container.style.color === 'red') {
                container.style.color = 'blue'
              } else {
                container.style.color = 'red'
              }
            }
        
            function stopTextColor() {
              clearInterval(intervalId);
            }
          `}
        </CodePane>

        <iframe src={`${process.env.PUBLIC_URL}/snippets/class2/setInterval.html`}></iframe>
      </FlexBox>
    </Slide>
  </>
);
