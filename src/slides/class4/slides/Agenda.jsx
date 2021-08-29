import React from 'react';
import {
  Slide,
  Heading,
  OrderedList,
  ListItem,
} from 'spectacle';

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d" className="flex-center-column">
      <Heading margin="0px" fontSize="50px">
        Agenda
      </Heading>

      <OrderedList>
        <ListItem>
          Contextos de ejecución
        </ListItem>

        <ListItem>
          Código bloqueante y JS asincrónico
        </ListItem>

        <ListItem>
          Promesas
        </ListItem>

        <ListItem>
          Async/Await
        </ListItem>

        <ListItem>
          AJAX
        </ListItem>

        <ListItem>
          XMLHttpRequest (XHR)
        </ListItem>

        <ListItem>
          Fetch API
        </ListItem>

        <ListItem>
          FormData
        </ListItem>

        <ListItem>
          Ejercicios
        </ListItem>
      </OrderedList>
    </Slide>
  </>
);
