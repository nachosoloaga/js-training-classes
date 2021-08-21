import React from "react";
import {
  Slide,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  CodePane,
  Notes,
} from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Template literals
      </Heading>
      <Text fontSize={30}>
        Los
        <a href=""> template literals</a> nos proveen una nueva forma de crear
        strings con algunas características interesantes:{" "}
        <UnorderedList fontSize={30}>
          <ListItem>
            Nos permiten tener un mayor control sobre la creación de strings
            dinámicos.
          </ListItem>
          <ListItem>
            Facilitan y hacen más legible la concatenación de strings.
          </ListItem>
          <ListItem>Nos permiten generar “Tagged Templates”</ListItem>
        </UnorderedList>
      </Text>

      <Text fontSize={30}>
        En vez de utilizar comillas simples o dobles, para definir un template
        literal utilizamos <strong>comillas invertidas `</strong>.
      </Text>

      <CodePane language="js">
        {`
          let example = \`This is a new string\`;
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Template literals
      </Heading>

      <Text fontSize={30}>
        Dentro de un template literal podemos incluir “expresiones”. Una
        expresión siempre retorna un valor, y en este contexto cada expresión
        será evaluada y reemplazada por el valor correspondiente.
      </Text>

      <CodePane language="js">
        {`
          let name = “John”; 
          let greeting = \`Hey \${name}! How are you doing?\` // Hey John! How are you doing?

          let num = 32;
          
          let result = \`The number \${num} is \${ num % 2 === 0 ? "even" : "odd"}\`; // The number 32 is even.
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Tagged templates
      </Heading>

      <Text fontSize={30}>
        Los <a href="">tagged templates</a> permiten parsear un template literal
        con una función. El primer parámetro de la función contiene un array con
        los strings y los parámetros restantes están asociados a las
        expresiones. La <strong>tag function</strong> puede realizar cualquier
        tipo de operación sobre estos parámetros y retornar el string procesado.
      </Text>

      <CodePane language="js">
        {`
          let person = 'Mike';
          let age = 28;
          
          function myTag(strings, personExp, ageExp) {
            let str0 = strings[0]; // "That "
            let str1 = strings[1]; // " is a "
            let str2 = strings[2]; // "."
          
            let ageStr;
            if (ageExp > 99){
              ageStr = 'centenarian';
            } else {
              ageStr = 'youngster';
            }
          
            // We can even return a string built using a template literal
            return \`\${str0}\${personExp}\${str1}\${ageStr}\${str2}\`;
          }
          
          let output = myTag\`That \${ person } is a \${ age }.\`;
          
          console.log(output); // That Mike is a youngster
        `}
      </CodePane>
    </Slide>
  </>
);
