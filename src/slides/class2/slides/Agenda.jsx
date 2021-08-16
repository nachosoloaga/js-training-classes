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
          Funciones built-in
        </ListItem>

        <ListItem>
          Introducción al DOM
        </ListItem>

        <ListItem>
          Window API
        </ListItem>

        <ListItem>
          Debugging
        </ListItem>

        <ListItem>
          Callbacks
        </ListItem>

        <ListItem>
          Eventos
        </ListItem>

        <ListItem>
          Ejercicios
        </ListItem>
      </OrderedList>
    </Slide>
  </>
);
