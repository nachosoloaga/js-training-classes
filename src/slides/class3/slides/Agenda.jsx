import React from "react";
import { Slide, Heading, OrderedList, ListItem } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d" className="flex-center-column">
      <Heading margin="0px" fontSize="50px">
        Agenda
      </Heading>

      <OrderedList fontSize={30}>
        <ListItem>Introducción a ES6</ListItem>

        <ListItem>Nuevos métodos de Array</ListItem>

        <ListItem>Operador spread</ListItem>

        <ListItem>Destructuring</ListItem>

        <ListItem>Encadenamiento opcional</ListItem>

        <ListItem>Módulos</ListItem>

        <ListItem>Clases</ListItem>

        <ListItem>Arrow functions</ListItem>

        <ListItem>Template literals</ListItem>

        <ListItem>Modo estricto</ListItem>

        <ListItem>Nuevas estructuras de datos</ListItem>
      </OrderedList>
    </Slide>
  </>
);
