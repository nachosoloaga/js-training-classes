import React from "react";
import { Slide, Heading, Text, UnorderedList, ListItem } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        ECMAScript
      </Heading>

      <Text fontSize={30}>
        Como vimos en la primera clase, ECMAScript es una especificación
        estándar de JavaScript.
      </Text>

      <Text fontSize={30}>
        A la fecha existen 11 versiones publicadas de ECMAScript, siendo la
        primera de 1997, y la ultima de 2020. Una de las versiones mas
        conocidas, y que agregó cambios significativos fue la
        <strong> sexta edición (2015), conocida como ES6.</strong>
      </Text>

      <Text fontSize={30}>
        Si bien las demás versiones también agregan funcionalidades muy
        interesantes, en esta clase nos
        <strong> centraremos mayormente en ES6</strong>.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        <a href="http://es6-features.org/">ES6</a>
      </Heading>

      <Text fontSize={30}>
        Dentro de las nuevas funcionalidades y cambios que se introdujeron en
        ES6 podemos destacar:
        <UnorderedList fontSize={30}>
          <ListItem>Let y const</ListItem>
          <ListItem>Nuevos métodos de Array</ListItem>
          <ListItem>Arrow functions</ListItem>
          <ListItem>Template literals</ListItem>
          <ListItem>Operadores rest y spread</ListItem>
          <ListItem>Desestructuración de objetos</ListItem>
          <ListItem>Nuevo sistema de módulos</ListItem>
          <ListItem>Clases</ListItem>
          <ListItem>Funciones generadoras</ListItem>
          <ListItem>Promesas</ListItem>
        </UnorderedList>
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Compatibilidad hacia atrás
      </Heading>

      <Text fontSize={30}>
        Todos los sistemas que utilizan JS en cualquiera de sus versiones
        siempre serán compatibles con versiones más nuevas. Esto quiere decir
        que si se programó un sistema utilizando características de ES5, el
        mismo podrá correr perfectamente cuando el engine de JS incorpore
        características de ES6.
      </Text>

      <div style={{ alignSelf: "center" }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/babel.png`}
          width="300"
          height="150"
        />
      </div>

      <Text fontSize={30}>
        Los navegadores no siempre implementan todas las funcionalidades nuevas
        de cada version de ECMAScript de inmediato, por lo que si se desea
        utilizar funcionalidades de una version reciente de ES, para garantizar
        compatibilidad entre todos los navegadores, se puede utilizar una
        herramienta como <a href="https://babeljs.io/">Babel </a>
        que sirve para transpilar código de ESX a JavaScript puro.
      </Text>
    </Slide>
  </>
);
