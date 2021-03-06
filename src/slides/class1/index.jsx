import React from "react";
import {
  Slide,
  Heading,
  ListItem,
  Grid,
  OrderedList,
  Text,
  UnorderedList,
  CodePane,
  Notes,
  FlexBox
} from "spectacle";
import '../../styles/styles.css';

export default () => (
  <>
    {/* Intro to JS */}
    <Slide backgroundColor="#0d0d0d" className="flex-center-column">
      <Heading margin="0px" className="font-size-heading">
        <i>Agenda</i>
      </Heading>

      <OrderedList>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15} fontSize={30}>
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

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" padding="0px" className="font-size-heading">
        <i>Javascript</i>
      </Heading>

      <Text fontSize={30}>
        JavaScript fue creado inicialmente con un único propósito, "traer vida a las páginas web" - <i>make web pages alive</i>. Hoy en día se utiliza en muchos otros entornos también.
      </Text>
      <Text fontSize={30}>
        Fue desarrollado originalmente por Brendan Eich de Netscape con el nombre de Mocha, el cual fue renombrado posteriormente a LiveScript, para finalmente quedar como JavaScript. Este último cambio de nombre se realizó en diciembre de 1995.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" padding="0px" className="font-size-heading">
        <i>Javascript</i>
      </Heading>

      <Text fontSize={30}>
        Los programas escritos en JavaScript son llamados scripts y no necesitan de ningún tipo de procesamiento especial o compilación para ser ejecutados. De hecho, pueden ser escritos directamente en el código HTML de una página web y se ejecutará cuando ésta sea cargada.
      </Text>

      <Text fontSize={30}>
        Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" padding="0px" className="font-size-heading">
        <i>Javascript</i>
      </Heading>

      <Text fontSize={30}>
        Podemos destacar varias cosas únicas del lenguaje
      </Text>

      <UnorderedList fontSize={30}>
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
          Existe una gran variedad de frameworks JS, tanto Frontend como Backend.
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" padding="0px" className="font-size-heading">
        <i>ECMAScript</i>
      </Heading>

      <Text fontSize={30}>
        <a href="https://en.wikipedia.org/wiki/ECMAScript">
          ECMAScript
        </a> es un estándar que define un lenguaje de tipos dinámicos ligeramente inspirado en Java y otros lenguajes del estilo de C. Soporta algunas características de la programación orientada a objetos mediante objetos basados en prototipos y pseudoclases.
      </Text>
      <Text fontSize={30}>
        El objetivo de este estandar es asegurar la interoperabilidad de las páginas web entre diferentes navegadores web.
      </Text>
      <Text fontSize={30}>
        JavaScript es un lenguaje de programación que implementa este estandar - ECMAScript está basado en JavaScript.
      </Text>
    </Slide>

    {/* let and const */}
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" className="font-size-heading">
        Variables
      </Heading>

      <Text fontSize={30}>
        Las variables son contenedores que nos permiten almacenar valores para su posterior uso y/o manipulación.
      </Text>

      <Text fontSize={30}>
        Para declarar una variable podemos utilizar la palabra clave <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"><b>let</b></a>.
      </Text>

      <CodePane language="js">
        {`
          let myVariable;
          // Initialize with an initial value
          let myVariable = 'Hola Snapplerxs!';
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" className="font-size-heading">
        Variables
      </Heading>

      <Text fontSize={30}>
        JavaScript es un lenguaje dinámico y de tipado flexible. En parte esto significa que las variables no están asociadas directamente con ningún tipo de valor en particular y se les pueden asignar o reasignar valores de todos los tipos.
      </Text>

      <CodePane language="js">
        {`
          let foo = 42; // foo is a number
          foo = 'bar';  // foo is a string
          foo = true;   // foo is a boolean

          // Uncaught SyntaxError: Identifier 'foo' has already been declared
          let foo = 10;
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" className="font-size-heading">
        Variables
      </Heading>

      <Text fontSize={30}>
        Para definir variables también podemos utilizar la palabra clave <b>var</b>.
      </Text>

      <Text fontSize={30}>
        <b>var</b> se comporta distinto a <b>let</b> y su uso actualmente no es muy recomendado. Explicaremos las razones más adelante.
      </Text>

      <CodePane language="js">
        {`
          var foo = 42; // foo is a number
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" className="font-size-heading">
        Constantes
      </Heading>

      <Text fontSize={30}>
        A diferencia de las variables, las constantes no pueden cambiar su valor posteriormente. Se debe especificar el valor al momento de su declaración.
      </Text>

      <Text fontSize={30}>
        Para definir una constante, usamos la palabra clave <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a>.
      </Text>

      <CodePane language="js">
        {`
          const FOO = "bar";

          // this will throw an error - Uncaught TypeError: Assignment to constant variable.
          FOO = 20;

          // trying to redeclare a constant throws an error
          // Uncaught SyntaxError: Identifier 'FOO' has already been declared
          const FOO = 20;
        `}
      </CodePane>

      <Notes>
        Las constantes pueden ser declaradas con mayúsculas o minúsculas, pero generalmente se definen con todas sus letras en mayúscula a modo de convención.
      </Notes>
    </Slide>

    {/* Comments */}
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" padding="0px" className="font-size-heading">
        Comentarios
      </Heading>

      <Text fontSize={30}>
        En JavaScript, al igual que en todos los lenguajes, tenemos la posibilidad de agregar comentarios en nuestro código.
      </Text>

      <Text fontSize={30}>
        Podemos agregar comentarios single line o multi line.
      </Text>

      <CodePane language="js">
        {`
          // This is a single line comment.

          /*
          You can use this kind of comments
          for documentation or to explain
          any complex sentence.
          */
        `}
      </CodePane>

    </Slide>

    {/* Data types and data structures */}
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" className="font-size-heading">
        Valores y estructuras de datos
      </Heading>

      <Text fontSize={30}>
        Todos los lenguajes de programación tienen estructuras de datos integradas.
      </Text>

      <Text fontSize={30}>
        Generalmente varían sus nombres o formas de utilización de un lenguaje a otro.
      </Text>
    </Slide>

    {/* Primitives */}
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" className="font-size-heading">
        Tipos de datos primitivos
      </Heading>

      <Text className="align-center" fontSize={30} margin="0px" padding="0px">
        JavaScript cuenta con un conjunto de tipos que son llamados <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values">tipos primitivos</a>. Estos tipos definen valores que son inmutables.
      </Text>

      <UnorderedList className="flex-center-column" fontSize={30}>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined">Undefined</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt">BigInt</a>
        </ListItem>
        <ListItem>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/symbol">Symbol</a>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" className="font-size-heading">
        Undefined
      </Heading>

      <Text className="align-center" fontSize={30}>
        <b>undefined</b> es una variable global que posee como valor inicial el tipo primitivo undefined.
      </Text>

      <UnorderedList fontSize={30}>
        <ListItem>
          Una variable que no tiene un valor asignado, es creada con el valor undefined.
        </ListItem>
        <ListItem>
          Una función que no posee una sentencia return, devuelve undefined.
        </ListItem>
      </UnorderedList>

      <CodePane language="js">
        {`
          let foo;

          console.log(foo); // undefined
          typeof foo // "undefined"
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" className="font-size-heading align-center" style={{ width: "80%" }}>
        Null
      </Heading>

      <div style={{ width: '80%' }}>
        <Text fontSize={30}>
          Este valor se utiliza para representar la no existencia o invalidez de algo, generalmente de manera intencional.
        </Text>

        <FlexBox justifyContent="space-between" style={{ width: '80%' }}>
          <CodePane language="js">
            {`
              const foo = null;

              console.log(foo); // null
              typeof foo // ?
            `}
          </CodePane>

          <iframe src={`${process.env.PUBLIC_URL}/snippets/class1/null.html`}></iframe>
        </FlexBox>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Null vs Undefined
      </Heading>

      <Text fontSize={30}>
        Null y undefined son dos tipos primitivos diferentes y no existe un comportamiento intuitivo cuando estos tipos se comparan con otros. Para más info ver este <a href="https://javascript.info/comparison#comparison-with-null-and-undefined">link</a>.
      </Text>

      <Text fontSize={30}>
        Generalmente el valor null es algo que se utiliza de manera intencional para indicar la no existencia de algo, mientras que undefined no suele usarse tanto de manera intencional, y representa que una variable fue declarada pero aún no tiene un valor definido.
      </Text>

      <CodePane language="js">
        {`
          const logHi = (str = 'hi') => console.log(str);

          logHi(undefined); // 'hi'

          logHi(null); // null
        `}
      </CodePane>

      <Notes>
        logHi(undefined); // imprime hi

        logHi(null); // imprime null
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Boolean
      </Heading>

      <Text fontSize={30}>
        Representa una entidad lógica que solo puede tomar los valores <b>true</b> o <b>false</b>.
      </Text>

      <Text fontSize={30}>
        Podemos usar la función Boolean para convertir cualquier elemento a boolean.
      </Text>

      <Text fontSize={30}>
        Si el valor es omitido o es 0, -0, null, false, NaN, undefined, o un String vacío (""), el objeto tendrá un valor inicial <b>false</b>.
      </Text>

      <Text fontSize={30}>
        El resto de los valores, incluyendo Arrays vacíos y el String "false", crean un objeto con un valor inicial de <b>true</b>.
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div style={{ width: '80%' }}>
        <Heading margin="0px" className="font-size-heading">
          Boolean
        </Heading>

        <Grid gridTemplateRows="1fr 1fr" gridRowGap={50}>
          <FlexBox justifyContent="space-between" style={{ width: '80%' }}>
            <CodePane language="js">
              {`
                const bool = true;
                
                if (bool) {
                  console.log("Hola Snapplerxs!");
                };
                `}
            </CodePane>

            <iframe src={`${process.env.PUBLIC_URL}/snippets/class1/boolean1.html`}></iframe>
          </FlexBox>

          <FlexBox justifyContent="space-between" style={{ width: '80%' }}>
            <CodePane language="js">
              {`
                const bool = false;

                if (bool) {
                  console.log("Hola Snapplerxs!");
                };
                `}
            </CodePane>

            <iframe src={`${process.env.PUBLIC_URL}/snippets/class1/boolean2.html`}></iframe>
          </FlexBox>
        </Grid>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div style={{ width: '80%' }}>

        <Heading margin="0px" className="font-size-heading">
          Boolean
        </Heading>

        <Grid gridTemplateRows="1fr 1fr" gridRowGap={50}>
          <FlexBox justifyContent="space-between" style={{ width: '80%' }}>
            <CodePane language="js">
              {`
                const bool = Boolean(false);

                if (bool) {
                  console.log("Hola Snapplerxs!");
                };
                `}
            </CodePane>

            <iframe src={`${process.env.PUBLIC_URL}/snippets/class1/boolean3.html`}></iframe>
          </FlexBox>

          <FlexBox justifyContent="space-between" style={{ width: '80%' }}>
            <CodePane language="js">
              {`
                const bool = new Boolean(false);

                if (bool) {
                  console.log("Hola Snapplerxs!");
                };
                `}
            </CodePane>

            <iframe src={`${process.env.PUBLIC_URL}/snippets/class1/boolean4.html`}></iframe>
          </FlexBox>
        </Grid>
      </div>

      <Notes>
        No confundir el objeto Booelan con los valores primitivos Boolean ni con la función Boolean.

        La función Boolean puede ser usada para generar valores primitivos, pero al hacer un new estamos creando un objeto, que al ser evaluado tendrá un valor de verdad verdadero.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Number
      </Heading>

      <Text fontSize={30}>
        ECMAScript posee dos tipos distintos de números: <b>Number</b> y <b>BigInt</b>.
      </Text>

      <Text fontSize={30}>
        Number es un valor binario de 64 bits de doble precisión. Representa números entre <b>- (2 ^ 53 - 1)</b> y <b>2 ^ 53 - 1</b>.
      </Text>

      <Text fontSize={30}>
        Además de representar números de punto flotante, el tipo de número tiene tres valores simbólicos: + Infinito, -Infinito y NaN ("No es un número").
      </Text>

    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Number
      </Heading>

      <Text fontSize={30}>
        Para verificar el valor más grande o el valor más pequeño disponible dentro de ± Infinito, se pueden usar las constantes <b>Number.MAX_VALUE</b> o <b>Number.MIN_VALUE</b>
      </Text>

      <Text fontSize={30}>
        El 0 que puede ser representado como +0 y -0. En la práctica esto no tiene mucho impacto ya que -0 === +0, sin embargo se puede notar algunas diferencias al dividir por 0.
      </Text>

      <CodePane language="js">
        {`
          42 / +0 == Infinity
          42 / -0 == -Infinity
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        BigInt
      </Heading>

      <Text fontSize={30}>
        El tipo BigInt permite representar números con una precisión arbitraria, es decir que permite operar con números que superen los límites planteados por el tipo Number.
      </Text>

      <Text fontSize={30}>
        Un BigInt se crea agregando n al final de un número entero o llamando al constructor.
      </Text>

      <CodePane language="js">
        {`
          const x = 2n ** 53n; // 9007199254740992n

          const y = BigInt(23) // 23n
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Symbol
      </Heading>

      <Text fontSize={30}>
        Es un valor primitivo único e inmutable y se puede utilizar como clave de una propiedad de objeto.
      </Text>

      <Text fontSize={30}>
        Se crea invocando la función Symbol, que produce dinámicamente un valor único y anónimo.
      </Text>

      <CodePane language="js">
        {`
          let Sym1 = Symbol("Sym")
          let Sym2 = Symbol("Sym")
          
          console.log(Sym1 === Sym2) // returns "false"
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        String
      </Heading>

      <Text fontSize={30}>
        Sirve para representar una cadena de caracteres. La longitud del string está dada por la cantidad de elementos que lo componen.
      </Text>

      <Text fontSize={30}>
        El primer elemento está en el índice 0, el siguiente en el índice 1, y así sucesivamente. La longitud de una cadena es el número de elementos que contiene.
      </Text>

      <CodePane language="js">
        {`
          const foo = 'Hello'

          foo.length // 5
          foo[0]     // H
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        String
      </Heading>

      <Text fontSize={30}>
        Existe una gran cantidad de métodos que permiten manipular Strings, al igual que en la mayoría de los lenguajes
      </Text>

      <Text fontSize={30}>
        Algunos ejemplos se pueden encontrar <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods">aquí</a>.
      </Text>

      <Notes>
        Mencionar split, slice, splice, indexOf, replace, toLowercase, toUppercase, etc.
      </Notes>
    </Slide>

    {/* Type Conversions */}
    
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Conversión de tipos
      </Heading>

      <Text fontSize={30}>
        Muchas veces los operadores y las funciones convierten automáticamente los valores recibidos al tipo correcto.
        Por ejemplo, la función alert convierte automáticamente cualquier valor recibido a string, y las operaciones matemáticas convierten cualquier tipo
        a number.
      </Text>
      <Text fontSize={30}>
        Sin embargo, a veces necesitamos explícitamente hacer una <a href="https://javascript.info/type-conversions">conversion de tipos.</a>
      </Text>
      <Text fontSize={30}>
        En otros lenguajes este proceso es también conocido como <b>casteo de tipos.</b>
      </Text>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Conversión a String
      </Heading>

      <CodePane language="js">
        {`
          // String conversion

          let value = true;
          console.log(typeof value); // boolean
          
          value = String(value); // now value is a string "true"
          console.log(typeof value); // string
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Conversión a Number
      </Heading>

      <CodePane language="js">
        {`
          // Number conversion

          let str = "123";
          console.log(typeof str); // string
          
          let num = Number(str); // becomes a number 123
          
          console.log(typeof num)
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Conversión a Boolean
      </Heading>
      <Text fontsize={30}>
        Las reglas de conversión son simples:
        <UnorderedList fontSize={30}>
          <ListItem>Valores que son intuitivamente "vacios", como por ejemplo 0, un string vacío, null, undefined y NaN se convierten en <b>false.</b></ListItem>
          <ListItem>El resto se convierten a <b>true.</b></ListItem>
        </UnorderedList>
      </Text>
      <CodePane language="js">
        {`
          // Boolean Conversion

          console.log(Boolean(1)); // true
          console.log(Boolean(0)); // false
          
          console.log(Boolean("hello")); // true
          console.log(Boolean("")); // false
        `}
      </CodePane>
    </Slide>

    {/* Array */}
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Arreglos
      </Heading>

      <Text fontSize={30}>
        Son objetos en forma de lista que poseen una asociación particular entre claves númericas enteras y la longitud de la lista. Podemos decir que son estructuras indexadas.
      </Text>

      <Text fontSize={30}>
        Para definir un arreglo podemos usar corchetes ([]) o generar una instancia utilizando la función <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array">Array()</a>.
      </Text>

      <CodePane language='js'>
        {`
          const fruits = ['Apple', 'Banana'];

          const moreFruits = new Array('Orange', 'Watermelon');
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Arreglos
      </Heading>

      <Text fontSize={30}>
        Para acceder a los elementos podemos utilizar un índice numérico indicando la posición.
      </Text>

      <Text fontSize={30}>
        También existe una gran variedad de métodos que nos permiten iterar, duplicar, partir y manipular los arreglos de múltiples formas distintas. Algunos ejemplos <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">aquí</a>.
      </Text>

      <CodePane language='js'>
        {`
          const fruits = ['Apple', 'Banana'];

          console.log(fruits.length); // 2
          console.log(fruits[0]); // Apple

          fruits.push('Pear'); ['Apple', 'Banana', 'Pear'];
          fruits.pop(); 'Pear';
          fruits.shift(); 'Apple';
        `}
      </CodePane>
    </Slide>

    {/* Object */}
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Objetos
      </Heading>

      <Text fontSize={30}>
        Podemos ver a los objetos como una colección de propiedades, cada una de los cuales posee un valor asociado. Las propiedades de un objeto son identificadas por "claves".
      </Text>

      <Text fontSize={30}>
        Las claves de un objeto pueden ser de tipo String o Symbol, pero los valores pueden ser de cualquier tipo, incluso otros objetos.
      </Text>

      <Notes>
        Notar que se describe a los objetos como collección de propiedades, no simplemente de claves y valores. Las propiedades tienen un valor, pero además de eso existen otros atributos.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Objetos
      </Heading>

      <Text fontSize={30}>
        Podemos crear objetos utilizando la <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals">object literal syntax</a> o a través de la instanciación de Object.
      </Text>

      <CodePane language='js'>
        {`
          let car = new Object();
          car.brand = 'Ford';
          car.model = 'Mustang';
          car.year = 1969;
          
          let car2 = {
            brand: 'Ford',
            model: 'Mustang',
            year: 1969
          };
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Objetos
      </Heading>

      <Text fontSize={30}>
        Es muy fácil acceder, borrar o actualizar los valores de cualquiera de sus claves.
      </Text>

      <CodePane language='js'>
        {`
          let car = {
            brand: 'Ford',
            model: 'Mustang',
            year: 1969
          };

          car.brand = 'Chevrolet';
          
          console.log(car.brand); // Chevrolet

          delete(car.year);
          console.log(car); // { brand: 'Chevrolet', model: 'Mustang' }
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Objetos
      </Heading>

      <Text fontSize={30}>
        Además del valor, las propiedades poseen otros atributos. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects">Más info</a>.
      </Text>

      <div style={{ textAlign: 'center' }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/property_attributes.png`}
          alt="property_attributes"
          width="80%"
          height="80%"
        />
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Objetos
      </Heading>

      <Text fontSize={30}>
        Para poder modificar alguno de los otros atributos de una propiedad de un objeto podemos utilizar el método <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty()</a>.
      </Text>

      <CodePane language='js'>
        {`
          let car = {
            brand: 'Ford'
          };

          Object.defineProperty(car, 'model', {
            value: 'Mustang',
            writable: false
          });

          car.brand = 'Chevrolet';
          car.model = 'Camaro';
          
          console.log(car); // { brand: 'Chevrolet', model: 'Mustang' }
        `}
      </CodePane>
    </Slide>

    {/* Falsy and truthy values */}

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Valores "falsy" y "truthy"
        </Heading>
        <Text fontSize={30}>
          En JavaScript, un valor verdadero (truthy) es un valor que se
          considera <b>true</b> cuando es evaluado en un contexto Booleano. Todos los
          valores son verdaderos excepto aquellos que evaluan a <b>false: </b>
          <strong style={{ color: "lightseagreen"}} >false, 0, "", null, undefined, y NaN</strong>.
        </Text>
        <CodePane language="js">
          {`
            // For example, these conditions will enter the if statement
            if (true)
            if ({})
            if ([])
            if (42)
            if ("foo")
            if (new Date())
            if (-42)
            if (3.14)
            if (-3.14)
            if (Infinity)
            if (-Infinity)
          `}
        </CodePane>
      </div>
    </Slide>

    {/* Logical Operators */}

    <Slide backgroundColor="#0d0d0d">
      <div className="flex-center-column">
        <Heading margin="0px" fontSize="50px">
          Operadores lógicos
        </Heading>

        <Text fontSize={30}>
          En JavaScript existen 4 operadores lógicos:
        </Text>
        <UnorderedList fontSize={30}>
          <ListItem>
            || (OR)
          </ListItem>
          <ListItem>
            && (AND)
          </ListItem>
          <ListItem>
            ! (NOT)
          </ListItem>
          <ListItem>
            ?? (Nullish Coalescing)
          </ListItem>
        </UnorderedList>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div className="flex-center-column">
        <Heading margin="0px" fontSize={50}>
          || (OR)
        </Heading>

        <Text fontSize={30}>
          El operador lógico OR evalua a False cuando ambos operandos son False.
          Caso contrario, siempre evalua a True.
        </Text>
        <Text fontSize={30}>
          En JS la evaluación del OR es de <b>circuito corto</b>.
        </Text>

        <CodePane language="js">
          {`
            let result = value1 || value2 || value3;
          `}
        </CodePane>
        <Text fontSize={30}>
          El operador OR hará lo siguiente:

          <OrderedList>
            <ListItem fontSize={30}>Evaluará los operandos de izquierda a derecha.</ListItem>
            <ListItem fontSize={30}>Dependiendo el valor de verdad del operando actual: si el resultado es true, se detiene y retorna el valor original de ese operando.</ListItem>
            <ListItem fontSize={30}>Si se evaluaron todos los operandos (y todos eran False), retorna el último operando.</ListItem>
          </OrderedList>
        </Text>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div className="flex-center-column">
        <Heading fontSize={50}>
          || (OR)
        </Heading>
        <Text fontSize={30}>
          Siguiendo el ejemplo anterior...
        </Text>
        <CodePane language="js">
          {`
            let firstName = "";
            let lastName = "";
            let nickName = "Bob";

            console.log(firstName || lastName || nickName || "Anonymous"); // Bob
          `}
        </CodePane>
        <br></br>
        <CodePane language="js">
          {`
            let groupOne = [];
            let groupTwo = [];

            console.log(groupOne || groupTwo || ["Bob", "Ana", "Cam"]); // [];
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div className="flex-center-column">
        <Heading margin="0px" fontSize={50}>
          && (AND)
        </Heading>

        <Text fontSize={30}>
          El operador lógico AND evalua a True cuando ambos operandos son True.
          Caso contrario, siempre evalua a False.
        </Text>
        <Text fontSize={30}>
          En JS la evaluación del AND es de <b>circuito corto</b>.
        </Text>

        <CodePane language="js">
          {`
            let result = value1 && value2 && value3;
          `}
        </CodePane>
        <Text fontSize={30}>
          El operador AND hará lo siguiente:

          <OrderedList>
            <ListItem fontSize={30}>Evaluará los operandos de izquierda a derecha.</ListItem>
            <ListItem fontSize={30}>Dependiendo el valor de verdad del operando actual: si el resultado es false, se detiene y retorna el valor original de ese operando.</ListItem>
            <ListItem fontSize={30}>Si se evaluaron todos los operandos (y todos eran True), retorna el último operando.</ListItem>
          </OrderedList>
        </Text>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div className="flex-center-column">
        <Heading fontSize={50}>
          && (AND)
        </Heading>
        <Text fontSize={30}>
          Siguiendo el ejemplo anterior...
        </Text>
        <CodePane language="js">
          {`
            // Si el primer operando es "truthy", el AND retornará el segundo operando:
            console.log(1 && 0); // 0
            console.log(1 && 5); // 5
            
            // Si el primer operando es "falsy", AND lo retorna. El segundo operando es ignorado.
            console.log(null && 5); // null
            console.log(0 && "no matter what"); // 0
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div className="flex-center-column">
        <Heading margin="0px" fontSize={50}>
          ! (NOT)
        </Heading>

        <Text fontSize={35}>
          El operador lógico NOT es utilizado para invertir el valor de verdad de un valor cualquiera.
        </Text>
        <OrderedList>
          <ListItem fontSize={30}>
            Convierte el operando a su tipo booleano: <b>true</b> / <b>false</b>.
          </ListItem>
          <ListItem fontSize={30}>
            Retorna el valor inverso.
          </ListItem>
        </OrderedList>

        <CodePane language="js">
          {`
            console.log(!true); // false
            console.log(!0); // true
          `}
        </CodePane>

        <Text fontSize={30}>
          Un doble NOT !! se utiliza a veces para convertir valores a su tipo booleano:
        </Text>

        <CodePane language="js">
          {`
            console.log(!!"non-empty string"); // true
            console.log(!!null); // false
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div className="flex-center-column">
        <Heading fontSize={50}>
          ?? (Nullish Coalescing)
        </Heading>

        <Text fontSize={30}>
          El operador de Nullish Coalescing se escribe con dos signos <b>?</b>.
          Si evaluamos <b>a ?? b</b> lo que sucede es lo siguiente:
          <UnorderedList fontSize={30}>
            <ListItem fontSize={30}>Si la variable <b>a</b> está definida, entonces se devuelve <b>a</b></ListItem>
            <ListItem fontSize={30}>Si la variable <b>a</b> no está definida, entonces se devuelve <b>b</b>.</ListItem>
          </UnorderedList>
        </Text>

        <Text fontSize={30}>
          Es importante notar que este operador trata a <b>undefined</b> y <b>Null</b> de igual manera, por lo que decimos
          que una variable esta definida si no es ni undefined ni Null.
        </Text>

        <CodePane language="js">
          {`
            let user;

            console.log(user ?? "Anonymous"); // Anonymous (user not defined)
          `}
        </CodePane>
      </div>
    </Slide>

    {/* Basic Control Structures */}

    <Slide backgroundColor="#0d0d0d">
      <div className="flex-center-column">
        <Heading margin="0px" fontSize="50px">
          Estructuras de control
        </Heading>

        <Text fontSize={30}>
          En JavaScript existen 5 estructuras de control básicas:
        </Text>
        <UnorderedList fontSize={30}>
          <ListItem>
            If / else
          </ListItem>
          <ListItem>
            While
          </ListItem>
          <ListItem>
            Do - while
          </ListItem>
          <ListItem>
            For
          </ListItem>
          <ListItem>
            Switch
          </ListItem>
        </UnorderedList>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div className="flex-center-column">
        <Heading margin="0px" fontSize="50px">
          If / else
        </Heading>

        <Text fontSize={30}>
          La sintáxis de la sentencia if es la siguiente (la cláusula <b>else</b> es opcional):
        </Text>
        <CodePane language="js">
          {`
            if (condition) {
              // if block statements
            } else {
              // else block statements
            }
          `}
        </CodePane>
        <Text fontSize={30}>
          La sentencia if evalúa la expresión entre paréntesis y luego utiliza el valor de verdad del resultado de dicha evaluación.
          Por ejemplo, la siguiente condición nunca ejecutará el bloque de código <b>block1.</b>
        </Text>
        <CodePane language="js">
          {
            `
                if (0) { // 0 is a falsy value
                  // block1
                }
              `
          }
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div className="flex-center-column">
        <Heading margin="0px" fontSize="50px">
          Conditional operator (?)
        </Heading>

        <Text fontSize={30}>
          Existe también el operador condicional <b>?</b> que nos permite escribir una sentencia if de manera
          mucho más corta y simple.
        </Text>
        <CodePane language="js">
          {`
            let result = condition ? value1 : value2;
          `}
        </CodePane>
        <Text fontSize={30}>
          En caso que <b>condition</b> evalue a true, entonces se asignará <b>value1</b> a la variable <b>result</b>,
          caso contrario se asignará <b>value2</b>.
        </Text>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Conditional operator (?) (cont...)
        </Heading>
        <Text fontSize={30}>
          El <b>?</b> puede combinarse múltiples veces simulando sentencias <b>if/else</b>:
        </Text>
        <CodePane language="js">
          {`
              let carBrand = "Peugeot";

              let message = (carBrand == "Suzuki") ? "Nice Suzuki!" :
                (carBrand == "Fiat") ? 'Nice Fiat!' :
                (carBrand == "Peugeot") ? 'Nice Peugeot!' :
                'I don't know that brand, nice car!';
              
              console.log(message);
            `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          While
        </Heading>
        <Text fontSize={30}>
          La sintáxis del loop <b>while</b> es la siguiente:
        </Text>
        <CodePane language="js">
          {`
              while (condition) {
                // statements
              }
            `}
        </CodePane>
        <Text fontSize={30}>
          El bloque de código que se encuentra dentro del loop while se ejecutará mientras
          la evaluación de la condición sea <b>true</b>.
        </Text>
        <Text fontSize={30}>
          Para finalizar la ejecución del loop antes que se cumpla la condición podemos utilizar la sentencia <b>break</b>.
        </Text>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Do - while
        </Heading>
        <Text fontSize={30}>
          El loop do-while es muy similar al loop while, excepto que en este caso primero se ejecuta el bloque
          de código contenido dentro del mismo y luego se evalua la condición. Su sintáxis es la siguiente:
        </Text>
        <CodePane language="js">
          {`
              do {
                // statements
              } while (condition);
            `}
        </CodePane>
        <Text fontSize={30}>
          Para finalizar la ejecución del loop antes que se cumpla la condición podemos utilizar la sentencia <b>break</b>.
        </Text>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          For
        </Heading>
        <Text fontSize={30}>
          La sintáxis del loop <b>For</b> es la siguiente:
        </Text>
        <CodePane language="js">
          {`
              for (begin; condition; step) {
                // ... loop body ...
              }
            `}
        </CodePane>
        <Text fontSize={30}>
          Por ejemplo, para ejecutar un bloque de código 30 veces deberíamos declarar la condición
          del for de la siguiente manera:
        </Text>
        <CodePane language="js">
          {`
            for (let i = 0; i < 30; i++) { // shows 0, then 1, then 2
              console.log(i);
            }
          `}
        </CodePane>
        <Text fontSize={30}>
          Para saltar a la siguiente iteración, podemos utilizar la sentencia <b>continue</b> y para finalizar
          la ejecución del loop antes que se cumpla la condición podemos utilizar la sentencia <b>break</b>.
        </Text>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          for..in & for..of
        </Heading>
        <Text fontSize={30}>
          Existen otros tipos de loop <b>for</b> que sirven a distintos casos de uso:
        </Text>
        <UnorderedList fontSize={30}>
          <ListItem>
            for..in
            <Text fontSize={30}>La instrucción <b>for ... in</b> itera sobre todas las propiedades enumerables de un objeto.
              Generalmente se utiliza para recorrer las "claves" o propiedades de un objeto.</Text>
          </ListItem>
          <ListItem>
            for..of
            <Text fontSize={30}>La instrucción <b>for ... of</b> crea un loop que itera sobre objetos iterables,
              incluidos: String, Array, objetos similares a arreglos (por ejemplo, argumentos o NodeList),
              TypedArray, Map, Set e iterables definidos por el usuario.</Text>
          </ListItem>
        </UnorderedList>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Ejemplo de uso for..in
        </Heading>
        <CodePane language="js">
          {`
            const car = {
              brand: "Peugeot",
              model: "208",
              year: 2019
            }

            for (const prop in car) {
              console.log(prop);
            }

            // brand
            // model
            // year
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Ejemplo de uso for..of
        </Heading>
        <CodePane language="js">
          {`
            const array1 = ['a', 'b', 'c'];

            for (const element of array1) {
              console.log(element);
            }
            
            // expected output: "a"
            // expected output: "b"
            // expected output: "c"
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          for..in vs for..of
        </Heading>
        <CodePane language="js">
          {`
            const array1 = ['a', 'b', 'c'];

            for (const element of array1) {
              console.log(element);
            }
            
            // expected output: "a"
            // expected output: "b"
            // expected output: "c"

            for (const element in array1) {
              console.log(element);
            }

            // expected output: "0"
            // expected output: "1"
            // expected output: "2"
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Switch
        </Heading>
        <Text fontSize={30}>
          El <b>switch</b> puede utilizarse para reemplazar múltiples sentencias <b>if</b> y su sintáxis es la siguiente:
        </Text>
        <CodePane language="js">
          {`
              switch(x) {
                case 'value1':  // if (x === 'value1')
                  ...
                  break; // break clause is optional, in case it's not present, following conditions are evaluated.
                case 'value2':  // if (x === 'value2')
                  ...
                  break;
                default:
                  ...
              }
            `}
        </CodePane>
      </div>
    </Slide>

    {/* Error handling */}

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Manejo de errores
        </Heading>
        <Text fontSize={30}>
          JavaScript nos provee los bloques <b>try..catch</b> para capturar errores en tiempo de ejecución que pueden
          provocar la finalización de nuestro script.
        </Text>
        <CodePane language="js">
            {`
              try {
                null = "this is a null variable";
              } catch (err) {
                console.log(err); // Syntax Error
                console.log('Hey! Something went wrong...');
              }
            `}
        </CodePane>
        <Text fontSize={30}>
          Como se puede ver en el snippet anterior, el bloque catch recibe siempre un objeto error como parámetro.
          Este objeto error tiene 2 propiedades principales:
          <UnorderedList fontSize={30}>
            <ListItem>
              name: el nombre del error (SyntaxError, TypeError, etc...)
            </ListItem>
            <ListItem>
              message: un mensaje descriptivo que brinda un poco (no tanto) más de detalle sobre el error
            </ListItem>
          </UnorderedList>
        </Text>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Manejo de errores (cont.)
        </Heading>
        <Text fontSize={30}>
          Si no necesitamos detalles sobre el error podemos <b>omitir el parámetro error en el bloque catch. </b>
          Además, pueden existir casos donde deseemos lanzar un error de manera intencional por comportamiento imprevisto
          en el código. Para esto utilizamos la palabra clave <b>throw</b>.
        </Text>
        <CodePane language="js">
            {`
              let json = '{ "age": 30 }'; // incomplete data

              try {
                let user = JSON.parse(json); // <-- no errors
                if (!user.name) {
                  throw new SyntaxError("Incomplete data: no name");
                }
                console.log(user.name);
              } catch (err) {
                console.log("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
              }
            `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Manejo de errores (cont.)
        </Heading>
        <Text fontSize={30}>
          Para lanzar errores propios JavaScript nos provee varios constructores para errores comúnes: Error, SyntaxError, ReferenceError, TypeError y otros.
          Su sintáxis es la siguiente:
        </Text>
        <CodePane language="js">
            {`
              let error = new Error(message);
              // or
              let error = new SyntaxError(message);
              let error = new ReferenceError(message);
              // ...
            `}
        </CodePane>
        <Text fontSize={30}>
          En estos casos, la propiedad <b>name</b> tendrá como valor el nombre del constructor (ej. SyntaxError) y la propiedad <b>message</b> tendrá como valor lo que hayamos pasado como parámetro al constructor.
        </Text>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Manejo de errores (cont.)
        </Heading>
        <Text fontSize={30}>
          Los bloques <b>try..catch</b> pueden contar con una cláusula extra (opcional) llamada <b>finally</b>.
          Si está presente, el código contenido dentro de ese bloque se ejecutará siempre:
          <UnorderedList fontSize={30}>
            <ListItem>Después del <b>try</b> si no hubo errores.</ListItem>
            <ListItem>Después del <b>catch</b> si hubo errores.</ListItem>
          </UnorderedList>
        </Text>
        <CodePane language="js">
            {`
              try {
                ... try to execute the code ...
             } catch (err) {
                ... handle errors ...
             } finally {
                ... execute always ...
             }
            `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Creando nuestro propio error
        </Heading>
        <Text fontSize={30}>
          Cuando estamos desarrollando es probable que querramos tener nuestras propias clases de errores
          para reflejar situaciones específicas que pueden fallar durante la ejecución de nuestros programas.
          Para esto, JavaScript nos permite definir clases que extienden de la clase base <b>Error</b>.
        </Text>
        <CodePane language="js">
          {`
            class ValidationError extends Error {
              constructor(message) {
                super(message); // (1)
                this.name = "ValidationError"; // (2)
              }
            }
          
            function test() {
              throw new ValidationError("Whoops!");
            }
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Creando errores custom (cont.)
        </Heading>
        <Text fontSize={30}>
          En el ejemplo anterior, definimos un nuevo tipo de error para reflejar fallos en validaciones. Si bien al
          extender de la clase <b>Error</b> nuestra clase hereda las 3 propiedades básicas <b>message, name y stack</b>,
          podriamos definir todas las props extras que querramos.
        </Text>
        <CodePane language="js">
          {`
            class HttpError extends Error {
              constructor(message, statusCode) {
                super(message); // (1)
                this.name = "HttpError"; // (2)
                this.statusCode = statusCode;
              }
            }
          
            function test() {
              throw new HttpError("User not found", 404);
            }
          `}
        </CodePane>
      </div>
    </Slide>

    {/* Functions */}

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Funciones
      </Heading>

      <Text fontSize={30}>
        Javascript nos permite definir funciones para modularizar y evitar repetir nuestro código.
      </Text>

      <Text fontSize={30}>
        Para esto, podemos utilizar la palabra clave <b>function</b>.
      </Text>

      <CodePane language="js">
        {`
          function myFunction(arg_1, arg_2) {
            console.log("This is a function with two arguments!")
          }
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Funciones
      </Heading>

      <Text fontSize={30}>
        En caso de pasar un parámetro de tipo primitivo, por ejemplo un número, este parámetro será pasado por valor.
      </Text>

      <Text fontSize={30}>
        En caso de pasar un objeto o array por parámetro, éste será pasado por referencia.
      </Text>

      <CodePane language="js">
        {`
          function myFunction(theObject) {
            theObject.brand = 'Toyota';
          }

          let mycar = { brand: 'Honda', model: 'Accord', year: 1998 };
          console.log(mycar.brand); // "Honda"

          myFunc(mycar);
          console.log(mycar.brand); // "Toyota"
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Expresiones
      </Heading>

      <Text fontSize={30}>
        Las funciones también pueden ser definidas como <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function">expresiones</a>.
      </Text>

      <Text fontSize={30}>
        Podemos definir funciones anónimas, sin proveer un nombre en su declaración.
      </Text>

      <CodePane language="js">
        {`
          // This is an expression.
          const square = function square(number) { return number * number }

          // This is an anonymous function declared as an expression.
          const square2 = function(number) { return number * number }
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Lexical scoping
      </Heading>

      <Text fontSize={30}>
        En JavaScript una función puede definirse dentro de otra. De esta forma, la función de adentro tiene acceso al contexto de la función que la contiene, pudiendo acceder a todo lo que está en su alcance.
      </Text>

      <CodePane language="js">
        {`
          function init() {
            var name = 'Mozilla'; // name is a local variable created by init
            function displayName() { // displayName() is the inner function, a closure
              console.log(name); // use variable declared in the parent function
            }
            displayName();
          }
          init();
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Closures
      </Heading>

      <Text fontSize={30}>
        Un closure es la combinación de una función y el entorno léxico dentro del cual se declaró esa función. Este entorno consta de las variables locales que estaban dentro del alcance en el momento en que se creó el closure.
      </Text>

      <CodePane language="js">
        {`
          function makeFunc() {
            var name = 'Mozilla';
            function displayName() {
              console.log(name);
            }
            return displayName;
          }

          var myFunc = makeFunc();
          myFunc();
        `}
      </CodePane>

      <Notes>
        <p>
          En este ejemplo, la función makeFunc no retorna un valor sino que retorna displayName, que es la función que se define dentro de makeFunc.
        </p>

        <p>
          Debido a que la función displayName utiliza una variable local a makeFunc, al invocarla luego displayName sigue mostrando el nombre Mozilla, a pesar de que ese valor ya no forme parte del contexto de ejecución (formó parte del contexto de declaración).
        </p>
      </Notes>
    </Slide>

    {/* Hoisting */}

    <Slide backgroundColor="#0d0d0d">
      <div style={{width: '80%'}}>
        <Heading margin="0px" fontSize="50px">
          Hoisting
        </Heading>

        <Text fontSize={30}>
          Si bien el código en JS se ejecuta de manera secuencial (se ejecuta una línea y al terminar se ejecuta la que está debajo), el motor de JS procesa la declaración de funciones y variables previo a la ejecución del código.
        </Text>

        <Text fontSize={30}>
          Para obtener más información, ver <a href="https://www.javascripttutorial.net/javascript-execution-context/">Javascript execution Context</a>.
        </Text>

        <FlexBox justifyContent="space-between">
          <CodePane language="js">
            {`
              catName("Chloe");

              function catName(name) {
                console.log("My cat's name is " + name);
              }
            `}
          </CodePane>

          <iframe src={`${process.env.PUBLIC_URL}/snippets/class1/hoisting1.html`}></iframe>
        </FlexBox>
      </div>

      <Notes>
        Podríamos pensar como que JS "mueve las declaraciones de variables y funciones al principio de los archivos" y por eso éstas pueden ser utilizadas previo a su declaración.
      </Notes>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        Hoisting
      </Heading>

      <Text fontSize={30}>
        El hoisting de funciones, solo funciona con "function declarations" y no con "function expressions".
      </Text>

      <CodePane language="js">
        {`
          console.log(square);    // square is hoisted with an initial value undefined.
          console.log(square(5)); // Uncaught TypeError: square is not a function

          const square = function(n) {
            return n * n;
          }
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div style={{width: '80%'}}>

        <Heading margin="0px" fontSize="50px">
          Hoisting
        </Heading>

        <Text fontSize={30}>
          En el caso de las variables definidas con <b>var</b>, éstas serán declaradas e inicializadas con el valor <b>undefined</b>.
        </Text>

        <Text fontSize={30}>
          En el caso de variables definidas con <b>let</b> o constantes utilizando <b>const</b>, cualquier referencia a ellas previa a la línea donde son declaradas lanzará una excepción.
        </Text>

        <FlexBox justifyContent="space-between">
          <CodePane language="js">
            {`
              console.log(num_var); // Returns 'undefined' from hoisted var declaration (not 6)
              var num_var; // Declaration
              num_var = 6; // Initialization

              console.log(num_const) // ReferenceError
              console.log(num_let) // ReferenceError
              const num_const = 6;
              let num_let;
            `}
          </CodePane>

          <iframe src={`${process.env.PUBLIC_URL}/snippets/class1/hoisting2.html`}></iframe>
        </FlexBox>
      </div>

      <Notes>
        El motor de JavaScript solo hace el "hoisting" de la declaración de las variables, es decir que no tiene en cuenta su inicialización.
      </Notes>
    </Slide>

    { /* Blocks and scopes */ }

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Bloques
        </Heading>
        <Text fontSize={30}>
          Los bloques se utilizan para agrupar cero o más sentencias y están delimitados por llaves {'{'} {'}'}.
          Por ejemplo, las sentencias if y los loops vistos declaran un bloque para agrupar a las sentencias afectadas.
        </Text>
        <CodePane language="js">
          {`
            var x = 1;
            let y = 1;
            
            if (true) {  // start of the block
              var x = 2;
              let y = 2;
            }            // end of the block
            
            console.log(x); // expected output: 2

            console.log(y); // expected output: 1
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Alcance de las variables
        </Heading>
        <Text fontSize={30}>
          El alcance de una variable hace referencia a la región del programa donde la misma puede utilizarse.
          En JavaScript los distintos tipos de variables vistos (var, let y const) tienen distintos alcances.
          <UnorderedList fontSize={30}>
            <ListItem><b>var:</b> podemos decir que tiene alcance "global".</ListItem>
            <ListItem><b>let y const:</b> podemos decir que ambas tienen alcance de bloque. Las variables declaradas
            con let y const podrán ser referenciadas dentro del bloque en que fueron declaradas.</ListItem>
          </UnorderedList>
        </Text>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Temporal Dead Zone <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz">(TDZ)</a>
        </Heading>
        <Text fontSize={30}>
          Las variables declaradas con <b>let</b> no pueden ser accedidas ni escritas hasta que hayan
          sido completamente inicializadas, lo cual sucede en la declaración de las mismas. Acceder a 
          esa variable antes de haber sido inicializada resultará en <b>ReferenceError.</b>
        </Text>
        <Text fontSize={30}>
          Se dice que la variable está en una "zona muerta temporal" desde el inicio del bloque hasta
          que la inicialización de la misma se haya completado.
        </Text>
        <CodePane language="js">
          {`
            { // TDZ starts at beginning of scope
              console.log(bar); // undefined
              console.log(foo); // ReferenceError
              var bar = 1;
              let foo = 2; // End of TDZ (for foo)
            }
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Alcance de las variables (cont.)
        </Heading>
        <CodePane language="js">
          {`
            var x = 1;
            {
              var x = 2;
            }
            console.log(x); // logs 2

            let x = 1;
            {
              let x = 2;
            }
            console.log(x); // logs 1
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Alcance dentro de funciones
        </Heading>
        <Text fontSize={30}>
          Las variables declaradas dentro de una función no pueden ser accedidas fuera de la misma. 
          Sin embargo, una función SI puede acceder a todas las variables declaradas dentro del alcance 
          donde la función misma fue declarada.
        </Text>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div style={{ width: '80%'}}>
        <Heading margin="0px" fontSize="50px">
          Alcance dentro de funciones (cont.)
        </Heading>

        <div style={{ display: 'flex' }}>
          <CodePane language="js">
            {`
              // The following variables are defined in the global scope
              var num1 = 10,
                  num2 = 5,
                  name = 'Juan';

              // A nested function example
              function getScore() {
                var num1 = 2,
                    num2 = 3;
                  
                function add() {
                  return name + ' scored ' + (num1 + num2);
                }

                return add();
              }

              getScore();
            `}
          </CodePane>

          <iframe src={`${process.env.PUBLIC_URL}/snippets/class1/scopes2.html`}></iframe>
        </div>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div style={{ width: '80%'}}>
        <Heading margin="0px" fontSize="50px">
          Alcance dentro de funciones (cont.)
        </Heading>

        <div style={{ display: 'flex' }}>
          <CodePane language="js">
            {`
            function addFive(num) {
                var numberFive = 5;
                return num + numberFive;
            }

            addFive(3); // expected output: 8

            console.log(numberFive);
            `}
          </CodePane>

          <iframe src={`${process.env.PUBLIC_URL}/snippets/class1/scopes1.html`}></iframe>
        </div>
      </div>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Alcance de declaraciones de funciones
        </Heading>
        <Text fontSize={30}>
          Las declaraciones de funciones son siempre locales al alcance actual. Esto quiere decir que si son
          definidas en el contexto global, serán alcanzables por todo el script, y si son definidas dentro de otro bloque
          seran solo alcanzables dentro de ese bloque.
        </Text>
        <CodePane language="js">
          {`
            // global scope

            // foo is a global function
            function foo() {
                // bar is local to foo
                function bar() {
                }
            }
          `}
        </CodePane>
      </div>
    </Slide>

    {/* Typeof */}

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          Operador typeof
        </Heading>
        <Text fontSize={30}>
          Para inspeccionar el tipo de un valor podemos utilizar el operador <b>typeof</b>. Este operador retorna el
          tipo de un valor en formato string. Puede utilizarse con o sin paréntesis alrededor del valor por el cual se está consultando:
          <strong style={{ color: "lightseagreen" }}> typeof(true)</strong> ó <strong style={{ color: "lightseagreen" }}>typeof false</strong>.
        </Text>
        <CodePane language="js">
          {`
            typeof(false);              // expected output: “boolean”
            typeof({});                 // expected output: “object”
            typeof(1);                  // expected output: “number”

            let aString = “Un string”;
            typeof(aString);            // expected output: “string”

            typeof([]);                 // expected output: ???
            typeof(null);               // expected output: ???
            typeof(undefined);          // expected output: ???
            typeof(function hey(){});   // expected output: ???
          `}
        </CodePane>
      </div>
    </Slide>

    {/* CodeSandbox */}

    <Slide backgroundColor="#0d0d0d">
      <div>
        <Heading margin="0px" fontSize="50px">
          CodeSandbox
        </Heading>
        <Text className="flex-center-column" fontSize={30}>
          <a href="https://codesandbox.io/s/boring-haze-h36gd?file=/src/index.js:168-247">Ejercicios</a>
        </Text>
      </div>
    </Slide>
  </>
);
