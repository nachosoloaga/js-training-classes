import React from 'react';
import {
  Slide,
  Heading,
  Text,
  CodePane,
  FlexBox,
  UnorderedList,
  ListItem,
} from 'spectacle';

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Document Object Model (DOM)
      </Heading>

      <Text fontSize={30}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">DOM</a> es una interfaz de programación para documentos HTML y XML.
      </Text>

      <Text fontSize={30}>
        Es una representación orientada a objetos de una página web. Representa a los documentos como nodos y objetos, y permite alterar su estructura, estilo y contenido programáticamente.
      </Text>

      <Text fontSize={30}>
        El DOM fue diseñado para ser independiente de cualquier lenguaje de programación. Es muy común ver o hablar de manipular el DOM con JS, pero podría hacerse tambien con Python por ejemplo.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Document API
      </Heading>

      <Text fontSize={30}>
        La <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document">document API</a> es implementada por los navegadores web para permitirnos interactuar con el DOM.
      </Text>

      <Text fontSize={30}>
        No se requiere la instalación de ninguna librería o herramienta. Con el simple hecho de incluir nuestro código JS dentro de la página HTML, ya tenemos acceso a esta API.
      </Text>

      <CodePane language="html">
        {`
          <html>
            <head>
              <script>
                // create a couple of elements in an empty HTML page
                const heading = document.createElement("h1");
                const heading_text = document.createTextNode("Big Head!");
                heading.appendChild(heading_text);
                document.body.appendChild(heading);
              </script>
            </head>
            <body>
            </body>
          </html>
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        &lt;/script&gt;
      </Heading>

      <Text fontSize={30}>
        El tag <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script">script</a> se utiliza para embeber datos o código, generalmente JS.
      </Text>

      <Text fontSize={30}>
        A este tag podemos pasarle un conjunto de atributos que permiten realizar cosas como cargar un script de manera asincrónica, ejecutar el script ni bien el documento es cargado, etc.
      </Text>
        
      <Text fontSize={30}>
        El atributo más común es <b>src</b>, que usaremos para indicarle a JavaScript la ubicación de nuestro script a cargar en el documento HTML.
      </Text>

      <CodePane language="html">
        {`
          <script src="myScript.js"></script>
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Node
      </Heading>

      <Text fontSize={30}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node">Node</a> es una clase abstracta en la que se basan muchos otros objetos de la DOM API.
      </Text>

      <Text fontSize={30}>
        Todo elemento dentro del documento es un nodo de algún tipo. Puede ser, por ejemplo, un <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element">Element node</a>, Text node o Attribute node. Incluso <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document">Document</a> extiende de esta clase.
      </Text>

      <Text fontSize={30}>
        Esta clase posee una gran cantidad de <a href="https://developer.mozilla.org/en-US/docs/Web/API/Node#methods">métodos</a> que podemos utilizar para manipular el documento entero, incluso obtener otros nodos a partir de uno (sus hijos, hermanos, padre, etc.).
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Element
      </Heading>

      <Text fontSize={30}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element">Element</a> es la clase base de la que todos los objetos en el documento heredan. Son objetos que representan elementos.
      </Text>

      <Text fontSize={30}>
        También posee una gran cantidad de métodos y atributos. Es el objeto más común con el que vamos a interactuar al manipular el DOM.
      </Text>

      <CodePane language="js">
        {`
          // search for an element by id
          const element = document.getElementById('item');
          // or
          const element = document.querySelector('#item');

          if (element.className === 'active'){
            element.className = 'inactive';
          } else {
            element.className = 'active';
          }
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        HTML global attributes
      </Heading>

      <Text fontSize={30}>
        Son <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#list_of_global_attributes">atributos comunes a todos los elementos HTML</a>, aunque puede que no tengan efecto sobre algunos.
      </Text>

      <Text fontSize={30}>
        Algunos ejemplos comúnes son <b><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-class">class</a></b> que permite a CSS y JS acceder al elemento, <b><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-style">style</a></b> que personaliza el CSS de ese elemento en particular, <b><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id">id</a></b> que asigna un identificador único al elemento, entre otros.
      </Text>

      <Text fontSize={30}>
        Podemos obtener, modificar o borrar cualquier atributo de los elementos HTML utilizando <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute">element.setAttribute</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute">element.getAttribute</a> y <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute">element.removeAttribute</a>
      </Text>
    </Slide>
   
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Cambiar estilos de un elemento
      </Heading>

      <FlexBox justifyContent="space-between" style={{ width: '80%' }}>
        <CodePane language="html">
          {`
            <body>
              <button id="btn">Cambiar color</button>
              
              <p id="paragraph">
                Contiene texto <b style="color: red;">Rojo</b>
              </p>
              
              <script>
                const coloredElem = document.querySelector("#paragraph b");
            
                function clickHandler() {
                  coloredElem.style.color = "green"
                  coloredElem.innerHTML = "Verde";
                };
            
                document.querySelector("#btn").addEventListener("click", clickHandler);
              </script>
            </body>
          `}
        </CodePane>

        <iframe src={`${process.env.PUBLIC_URL}/snippets/class2/changeStyles.html`}></iframe>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Cambiar clase de un elemento
      </Heading>

      <FlexBox justifyContent="space-between" style={{ width: '80%' }}>
        <CodePane language="html">
          {`
            <body>
              <button id="btn">Cambiar color</button>
              
              <p>
                Contiene texto <b class="coloredText coloredTextRed">Rojo</b>
              </p>
              
              <script>
                const coloredElem = document.querySelector(".coloredText");
            
                function clickHandler() {
                  if (coloredElem.classList.contains('coloredTextRed')) {
                    coloredElem.classList.add('coloredTextGreen');
                    coloredElem.classList.remove('coloredTextRed');
                    coloredElem.innerHTML = "Verde";
                  } else {
                    coloredElem.classList.add('coloredTextRed');
                    coloredElem.classList.remove('coloredTextGreen');
                    coloredElem.innerHTML = "Rojo";
                  }
                };
            
                document.querySelector("#btn").addEventListener("click", clickHandler);
              </script>
            </body>
          `}
        </CodePane>

        <iframe src={`${process.env.PUBLIC_URL}/snippets/class2/changeClass.html`}></iframe>
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        InnerHTML y outherHTML
      </Heading>

      <Text fontSize={30}>
        Atributos de Element que nos permiten obtener una representación del elemento o modificarlo. Ambos atributos nos permiten obtener un string con la representación HTML del elemento.
      </Text>

      <Text fontSize={30}>
        La diferencia básica es que <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML">innerHTML</a> nos devuelve la representación de los elementos descendientes, mientras que <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML">outherHTML</a> también devuelve el elemento mismo como parte de la presentación.
        Lo mismo sucede al intentar modificar estos atributos. Si utilizamos <b>innerHTML</b> solo sobreescribiremos el contenido del elemento, mientras que si usamos <b>outherHTML</b> también estaríamos sobreescribiendo el elemento mismo.
      </Text>

      <CodePane language="js">
        {`
          // <p id="example">Paragraph</p>

          const elem = document.querySelector(#example);
          console.log(elem.innerHTML); // "Paragraph"
          console.log(elem.outherHTML); // <p id="example">Paragraph</p>
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Buscar elementos
      </Heading>

      <Text fontSize={30}>
        Existe una gran variedad de métodos para obtener elementos del DOM. Notar que algunos devuelven un único elemento mientras que otros devuelven una colección (array).
        Algunos ejemplos: 
      </Text>

      <UnorderedList>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">document.querySelector</a>
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll">document.querySelectorAll</a>
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName">document.getElementsByClassName</a>
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById">document.getElementById</a>
        </ListItem>

        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName">document.getElemenstByTagName</a>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Creación de nuevos elementos
      </Heading>

      <Text fontSize={30}>
        Utilizando la document API, podemos crear nuevos elementos HTML, los cuales podemos luego agregar al documento. Para esto debemos usar la funcion <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement">document.createElement</a>.
      </Text>

      <CodePane language="js">
        {`
          function addElement () {
            // create a new div element
            const newDiv = document.createElement("div");

            // and give it some content
            const newContent = document.createTextNode("Hi there and greetings!");

            // add the text node to the newly created div
            newDiv.appendChild(newContent);

            // add the newly created element and its content into the DOM
            document.body.appendChild(newDiv);
          }
        `}
      </CodePane>
    </Slide>
  </>
);
