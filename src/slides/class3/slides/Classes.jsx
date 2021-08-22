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
        Clases
      </Heading>
      <Text fontSize={30}>
        Las clases en JavaScript son una mejora sintáctica sobre la herencia
        basada en prototipos. La sintáxis de las clases 
        <strong>
          no introduce un nuevo modelo de herencia orientada a objetos
        </strong>
        . Las clases de JavaScript proveen una sintáxis mucho más clara y simple
        para crear objetos y lidiar con la herencia.
      </Text>

      <CodePane language="js">
        {`
          class Rectangle {
            constructor(height, width) {
              this.height = height;
              this.width = width;
            }
          }
        `}
      </CodePane>

      <Text fontSize={30}>
        Para <strong>declarar una clase</strong> utilizamos la palabra clave
        <i> class</i>.
        <Text fontSize={30}>
          Es importante notar que la declaración de clases no se ve afectada por
          el hoisting en JS. Por lo tanto, si queremos hacer referencia a una
          clase, esta debe haber sido declarada previamente en el código.
        </Text>
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Expresiones de clases
      </Heading>
      <Text fontSize={30}>
        También podemos definir clases utilizando{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#class_expressions">
          expresiones de clases
        </a>
        . Las expresiones de clase pueden ser anónimas o nombradas. El nombre
        asignado a una clase definida con esta notación se encuentra disponible
        al acceder a la propiedad name.
      </Text>

      <CodePane language="js">
        {`
          // Anonymous
          let Rectangle = class {
            constructor(height, width) {
              this.height = height;
              this.width = width;
            }
          };
          
          console.log(Rectangle.name);
          // output: "Rectangle"
          
          // Named
          let Rectangle = class Rectangle2 {
            constructor(height, width) {
              this.height = height;
              this.width = width;
            }
          };
          console.log(Rectangle.name);
          // output: "Rectangle2"
        `}
      </CodePane>

      <Notes>
        Las expresiones de clase tampoco son elevadas durante el proceso de
        hoisting.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Class body
      </Heading>

      <Text fontSize={30}>
        El contenido de una clase es la parte que se encuentra entre llaves y es
        aquí donde se definen los miembros de clase, como los métodos, variables
        o constructores.
      </Text>

      <Text fontSize={30}>
        El método <strong>constructor</strong> es un método especial para crear
        e inicializar un objeto creado con una clase. Solo puede haber un método
        especial con el nombre "constructor" en una clase.
        <Text fontSize={30}>
          Un constructor puede usar la palabra reservada super para llamar al
          constructor de una superclase.
        </Text>
      </Text>

      <Text fontSize={30}>
        <i>
          Dentro de un método de una clase <strong>this</strong> hace referencia
          al objeto actual. Es decir, a la instancia de clase donde el método
          fue invocado.
        </i>
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Métodos de instancia
      </Heading>

      <CodePane language="js">
        {`
          class Rectangle {
            constructor(height, width) {
              this.height = height;
              this.width = width;
            }
            // Getter
            get area() {
              return this.calcArea();
            }

            // Setter
            set height(h) {
              if (h > 0) {
                this.height = h;
              }
            }

            // Method
            calcArea() {
              return this.height * this.width;
            }
          }
          
          const square = new Rectangle(10, 10);
          
          console.log(square.area); // 100
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Getters and setters
      </Heading>

      <Text fontSize={30}>
        Como vimos en el ejemplo anterior, se pueden definir métodos getters y
        setters con las palabras claves <strong>get</strong> y{" "}
        <strong>set</strong> respectivamente, seguidas del nombre de la variable
        a la que afectan.
      </Text>

      <Text fontSize={30}>
        El método setter correspondiente se ejecutará cuando se quiera asignar
        un valor a una propiedad del objeto.
      </Text>

      <Text fontSize={30}>
        Podemos definir{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields">
          variables y métodos privados
        </a>{" "}
        utilizando el prefijo <strong>#</strong>. Si se quiere acceder a un
        método o variable privada desde fuera de la clase, se recibirá un
        SyntaxError.
      </Text>

      <Notes>
        Comentar que cuando se definen campos estáticos y privados la herencia
        de clases se comporta de manera extraña, y hacer hincapié en ir al link
        de la diapo.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Métodos y variables estáticas
      </Heading>

      <Text fontSize={30}>
        La palabra clave 
        <strong>
          <i>static </i>
        </strong>
        define un método o variable estática para una clase. Los métodos y
        variables estáticas son llamadas sin instanciar a la clase y no pueden
        ser llamadas mediante una instancia de clase.
        <Text fontSize={30}>
          Se utilizan generalmente para crear funciones helpers o servicios.
        </Text>
      </Text>

      <CodePane language="js">
        {`
          class Point {
            constructor(x, y) {
              this.x = x;
              this.y = y;
            }
          
            static displayName = "Point";
            static distance(a, b) {
              const dx = a.x - b.x;
              const dy = a.y - b.y;
          
              return Math.hypot(dx, dy);
            }
          }
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d" style={{ display: "flex" }}>
      <Heading margin="0px" fontSize="50px">
        Herencia
      </Heading>

      <Text fontSize={30}>
        Podemos utilizar la palabra clave <strong>extends</strong> para crear
        subclases.
      </Text>

      <CodePane language="js">
        {`
          class Animal {
            constructor(name) {
              this.name = name;
            }
          
            speak() {
              console.log(\`\${this.name} makes a noise.\`);
            }
          }
          
          class Dog extends Animal {
            constructor(name) {
              super(name); // call the super class constructor and pass in the name parameter
            }
          
            speak() {
              console.log(\`\${this.name} barks.\`);
            }
          }
          
          let d = new Dog('Mitzie');
          d.speak(); // Mitzie barks.
        `}
      </CodePane>

      <Notes>
        Si la subclase define un constructor entonces debe primero invocar a
        super() usando "this".
      </Notes>
    </Slide>
  </>
);
