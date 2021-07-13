import React from "react";
import { Slide, Heading, ListItem, Grid, OrderedList } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="100px">
        <i>Agenda</i>
      </Heading>

      <OrderedList>
        <Grid gridTemplateColumns="1fr 1fr 1fr" gridColumnGap={15}>
          <ListItem>
            Surgimiento de JS
          </ListItem>
          <ListItem>
            Características
          </ListItem>
          <ListItem>
            ¿Qué es ECMAScript?
          </ListItem>
          <ListItem>
            Sintaxis básica
          </ListItem>
          <ListItem>
            Variables - var, let, const
          </ListItem>
          <ListItem>
            Tipos de datos
          </ListItem>
          <ListItem>
            Operadores lógicos
          </ListItem>
          <ListItem>
            Estructuras de control
          </ListItem>
          <ListItem>
            Excepciones
          </ListItem>
          <ListItem>
            Funciones
          </ListItem>
          <ListItem>
            Window API
          </ListItem>
          <ListItem>
            Debugging
          </ListItem>
        </Grid>
      </OrderedList>
    </Slide>
  </>
)
