import React from "react";
import { Slide, Heading, ListItem, Grid, OrderedList, FlexBox, Text, UnorderedList } from "spectacle";

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

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" padding="0px" fontSize="50px">
        <i>Javascript</i>
      </Heading>

      <Text>
        JavaScript fue creado inicialmente con un único propósito, "traer vida a las páginas web" - <i>make web pages alive</i>. Hoy en día se utiliza en muchos otros entornos también.
      </Text>
      <Text>
        Los programas escritos en JavaScript son llamados scripts y no necesitan de ningún tipo de proceso especial o compilación para ser ejecutados. De hecho, pueden ser escritos directamente en el código HTML de una página web y se ejecutará cuando ésta sea cargada.
      </Text>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" padding="0px" fontSize="50px">
        <i>Javascript</i>
      </Heading>

      <Text>
        Podemos destacar varias cosas únicas del lenguaje
      </Text>
      <UnorderedList>
        <ListItem>
          Es el lenguaje con integración completa con HTML y CSS más adoptado de la web.
        </ListItem>
        <ListItem>
          Simple de usar.
        </ListItem>
        <ListItem>
          Muy utilizado en la industria y actualmente en toda la web.
        </ListItem>
        <ListItem>
          En la actualidad existen muchos lenguajes construidos que se "transpilan" luego a JS y extienden o proveen nuevas funcionalidades.
        </ListItem>
        <ListItem>
          Es un lenguaje multi-paradigma.
        </ListItem>
        <ListItem>
          Existen una gran variedad de frameworks JS tanto Frontend como Backend.
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" padding="0px" fontSize="50px">
        <i>ECMAScript</i>
      </Heading>

      <Text>
        <a href="https://en.wikipedia.org/wiki/ECMAScript">
          ECMAScript
        </a> es un estándar que define un lenguaje de tipos dinámicos ligeramente inspirado en Java y otros lenguajes del estilo de C. Soporta algunas características de la programación orientada a objetos mediante objetos basados en prototipos y pseudoclases.
      </Text>
      <Text>
         El objetivo de este estandar es asegurar la interoperabilidad de las páginas web entre diferentes navegadores web.
      </Text>
      <Text>
        JavaScript es un lenguaje de programación que implementa este estandar - ECMAScript está basado en JavaScript.
      </Text>
    </Slide>
  </>
)
