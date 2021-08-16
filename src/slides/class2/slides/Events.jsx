import React from 'react';
import {
  Slide,
  Heading,
  Text,
  CodePane,
  Notes,
  UnorderedList,
  ListItem,
} from 'spectacle';

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Eventos
      </Heading>

      <Text fontSize={30}>
        Los eventos son utilizados en JS para notificar de cambios o circunstancias que podrían afectar la ejecución del código.
      </Text>

      <Text fontSize={30}>
        Estos eventos pueden dispararse a partir de la interacción de un usuario con el sitio (click sobre un elemento, arrastar un elemento, cambiar el tamaño de una ventana) o incluso pueden ser eventos disparados por el dispositivo (batería baja, eventos del SO). También pueden ser disparados programáticamente, por ejemplo para indicar el progreso de cierta tarea, o enviar una notificación cuando una acción asincrónica sea completada.
      </Text>

      <Text fontSize={30}>
        Cada evento está representado por un objeto basado en la interfaz <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>, y puede tener propiedades o métodos adicionales que ayuden o faciliten su procesamiento. Existe una gran variedad de <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event#introduction">tipos de eventos</a> distintos, representados por interfaces que implementan Event.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Event interface
      </Heading>

      <Text fontSize={30}>
        Esta interfaz posee varias propiedades y métodos que son muy útiles al momento de manejar eventos. Algunos de los más importantes:
      </Text>

      <UnorderedList fontSize={30}>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted">Event.isTrusted</a> indica si el evento fue iniciado por el browser o por un script.
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp">Event.timestamp</a> retorna un unix timestamp que representa el momento en que el evento fue creado.
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/target">Event.target</a> retorna una referencia al elemento que disparó el evento.
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault">Event.preventDefault()</a> cancela el evento si es cancelable, evitando que se ejecute la acción propia del elemento cuando ocurre el evento. Por ejemplo podemos cancelar el envío de un formulario, o la redirección al hacer click en un link.
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Event handling
      </Heading>

      <Text fontSize={30}>
        Los eventos pueden ocurrir sobre un elemento en particular, un set de elementos o incluso la ventana del browser completa, dependiendo el tipo de evento. Tienen asociados manejadores, que son básicamente funciones JS que se ejecutan cuando el evento es disparado. Un mismo evento puede tener varios manejadores asociados
      </Text>

      <Text fontSize={30}>
        Podemos programáticamente agregar o remover manejadores utilizando las funciones <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener</a> y <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener">removeEventListener</a>. Esta es la <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#what_mechanism_should_i_use">forma moderna de hacerlo</a>, que reemplaza a <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_%E2%80%94_dont_use_these">inline event handlers</a> y provee más flexibilidad que <a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers">GlobalEventHandlers</a>.
      </Text>

      <CodePane language="js">
        {`
          function clickHandler() {
            // some code here
          }

          btn.addEventListener('click', clickHandler);
          btn.removeEventListener('click', clickHandler);
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Event handling
      </Heading>

      <Text fontSize={30}>
        Algunos de los eventos más comunes que se suelen utilizar.
      </Text>

      <img
        src={`${process.env.PUBLIC_URL}/images/common_events.png`}
        alt="common events"
        height="60%"
      />
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Creando eventos
      </Heading>

      <Text fontSize={30}>
        Se pueden crear eventos utilizando el constructor <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event">Event</a>.
      </Text>

      <Text fontSize={30}>
        Podemos utilizar la función <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent">dispatchEvent</a> para disparar el evento.
      </Text>      

      <CodePane language="js">
        {`
          function handler(e) {
            console.log(e.type);
            console.log(e.detail);
          }

          const event = new Event('build');
          
          // Listen for the event.
          elem.addEventListener('build', handler);
          
          // Dispatch the event.
          elem.dispatchEvent(event);
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Creando eventos
      </Heading>

      <Text fontSize={30}>
        En el caso de necesitar pasarle información adicional a un evento, podemos usar el constructor <a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent">CustomEvent</a>, que además de las propiedades que podemos pasarle a Event, permite una clave <b>detail</b>.
      </Text>

      <CodePane language="js">
        {`
          function handler(e) {
            console.log(e.type);
            console.log(e.detail);
          }
          
          // Listen for the event.
          elem.addEventListener('build', handler);
          
          const event = new CustomEvent('build', { detail: 'Success' });
          
          // Dispatch the event.
          elem.dispatchEvent(event);
        `}
      </CodePane>

      <Notes>
        Podemos asociar un manejador a un elemento aún cuando el evento aún no fue creado.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Propagación de eventos
      </Heading>

      <Text fontSize={30}>
        <a href="https://www.w3.org/TR/DOM-Level-3-Events/#event-flow">Event dispatch and DOM event flow</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation">Event.stopPropagation</a>.
      </Text>

      <div style={{ textAlign: 'center' }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/dom_event_flow.png`}
          alt="common events"
          height="70%"
          width="50%"
        />
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Propagación de eventos
      </Heading>

      <CodePane language="html">
        {`
          <form id="form">FORM
            <div id="div">DIV
              <p id="p">
                P
              </p>
            </div>
          </form>
        
          <script>
            const form = document.querySelector("#form");
            const div = document.querySelector("#div");
            const p = document.querySelector("#p");
        
            function clickHandler(e) {
              alert(e.currentTarget.tagName);
            }
        
            form.addEventListener('click', clickHandler);
            div.addEventListener('click', clickHandler);
            p.addEventListener('click', clickHandler);
          </script>
        `}
      </CodePane>
      
      <iframe src={`${process.env.PUBLIC_URL}/snippets/class2/bubbling.html`}></iframe>
    </Slide>
  </>
);
