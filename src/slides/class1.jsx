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
import '../styles/styles.css';

export default () => (
  <>
    {/* Intro to JS */}
    <Slide className="flex-center-column">
      <Heading margin="0px" className="font-size-heading">
        <i>Agenda</i>
      </Heading>

      <OrderedList>
        <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15} className="font-size-medium">
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

    <Slide>
      <Heading margin="0px" padding="0px" className="font-size-heading">
        <i>Javascript</i>
      </Heading>

      <Text className="font-size-medium">
        JavaScript fue creado inicialmente con un único propósito, "traer vida a las páginas web" - <i>make web pages alive</i>. Hoy en día se utiliza en muchos otros entornos también.
      </Text>
      <Text className="font-size-medium">
        Fue desarrollado originalmente por Brendan Eich de Netscape con el nombre de Mocha, el cual fue renombrado posteriormente a LiveScript, para finalmente quedar como JavaScript. Este último cambio de nombre se realizó en diciembre de 1995.
      </Text>
    </Slide>

    <Slide>
      <Heading margin="0px" padding="0px" className="font-size-heading">
        <i>Javascript</i>
      </Heading>

      <Text className="font-size-medium">
        Los programas escritos en JavaScript son llamados scripts y no necesitan de ningún tipo de procesamiento especial o compilación para ser ejecutados. De hecho, pueden ser escritos directamente en el código HTML de una página web y se ejecutará cuando ésta sea cargada.
      </Text>

      <Text className="font-size-medium">
        Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.
      </Text>
    </Slide>

    <Slide>
      <Heading margin="0px" padding="0px" className="font-size-heading">
        <i>Javascript</i>
      </Heading>

      <Text className="font-size-medium">
        Podemos destacar varias cosas únicas del lenguaje
      </Text>

      <UnorderedList className="font-size-medium">
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

    <Slide>
      <Heading margin="0px" padding="0px" className="font-size-heading">
        <i>ECMAScript</i>
      </Heading>

      <Text className="font-size-medium">
        <a className="link" href="https://en.wikipedia.org/wiki/ECMAScript">
          ECMAScript
        </a> es un estándar que define un lenguaje de tipos dinámicos ligeramente inspirado en Java y otros lenguajes del estilo de C. Soporta algunas características de la programación orientada a objetos mediante objetos basados en prototipos y pseudoclases.
      </Text>
      <Text className="font-size-medium">
        El objetivo de este estandar es asegurar la interoperabilidad de las páginas web entre diferentes navegadores web.
      </Text>
      <Text className="font-size-medium">
        JavaScript es un lenguaje de programación que implementa este estandar - ECMAScript está basado en JavaScript.
      </Text>
    </Slide>

    {/* let and const */}
    <Slide>
      <Heading margin="0px" className="font-size-heading">
        Variables
      </Heading>

      <Text className="font-size-medium">
        Las variables son contenedores que nos permiten almacenar valores para su posterior uso y/o manipulación.
      </Text>

      <Text className="font-size-medium">
        Para declarar una variable podemos utilizar la palabra clave <a className="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"><b>let</b></a>.
      </Text>

      <CodePane language="js">
        {`
          let myVariable;
          // Initialize with an initial value
          let myVariable = 'Hola Snapplerxs!';
        `}
      </CodePane>
    </Slide>

    <Slide>
      <Heading margin="0px" className="font-size-heading">
        Variables
      </Heading>

      <Text className="font-size-medium">
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

    <Slide>
      <Heading margin="0px" className="font-size-heading">
        Constantes
      </Heading>

      <Text className="font-size-medium">
        A diferencia de las variables, las constantes no pueden cambiar su valor posteriormente. Se debe especificar el valor al momento de su declaración.
      </Text>

      <Text className="font-size-medium">
        Para definir una constante, usamos la palabra clave <a className="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const">const</a>.
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

    {/* Data types and data structures */}
    <Slide>
      <Heading margin="0px" className="font-size-heading">
        Valores y estructuras de datos
      </Heading>

      <Text className="font-size-medium">
        Todos los lenguajes de programación tienen estructuras de datos integradas.
      </Text>

      <Text className="font-size-medium">
        Generalmente varían sus nombres o formas de utilización de un lenguaje a otro.
      </Text>
    </Slide>

    {/* Primitives */}
    <Slide>
      <Heading margin="0px" className="font-size-heading">
        Tipos de datos primitivos
      </Heading>

      <Text className="font-size-medium align-center" margin="0px" padding="0px">
        JavaScript cuenta con un conjunto de tipos que son llamados <a className="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values">tipos primitivos</a>. Estos tipos definen valores que son inmutables.
      </Text>

      <UnorderedList className="flex-center-column font-size-medium">
        <ListItem>
          <a className="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined">Undefined</a>
        </ListItem>
        <ListItem>
          <a className="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean</a>
        </ListItem>
        <ListItem>
          <a className="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number">Number</a>
        </ListItem>
        <ListItem>
          <a className="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a>
        </ListItem>
        <ListItem>
          <a className="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt">BigInt</a>
        </ListItem>
        <ListItem>
          <a className="link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/symbol">Symbol</a>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading margin="0px" className="font-size-heading">
        Undefined
      </Heading>

      <Text className="font-size-medium align-center">
        <b>undefined</b> es una variable global que posee como valor inicial el tipo primitivo undefined.
      </Text>

      <UnorderedList className="font-size-medium">
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

    <Slide>
      <Heading margin="0px" className="font-size-heading align-center" style={{width: "80%"}}>
        Null
      </Heading>

      <div style={{width: '80%'}}>
        <Text className="font-size-medium">
          Este valor se utiliza para representar la no existencia o invalidez de algo, generalmente de manera intencional.
        </Text>

        <FlexBox justifyContent="space-between" style={{ width: '80%'}}>
          <CodePane language="js">
            {`
              const foo = null;

              console.log(foo); // null
              typeof foo // ?
            `}
          </CodePane>

          <iframe src="/src/slides/class1/examples/null.html"></iframe>
        </FlexBox>
      </div>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Null vs Undefined
      </Heading>

      <Text>
        Null y undefined son dos tipos primitivos diferentes y no existe un comportamiento intuitivo cuando estos tipos se comparan con otros. Para más info ver este <a href="https://javascript.info/comparison#comparison-with-null-and-undefined">link</a>.
      </Text>

      <Text>
        Generalmente el valor null es algo que se utiliza de manera intencional para indicar la no existencia de algo, mientras que undefined no suele usarse tanto de manera intencional, y representa que una variable fue declarada pero aún no tiene un valor definido.
      </Text>

      <CodePane language="js">
        {`
          const logHi = (str = 'hi') => console.log(str);
        `}
      </CodePane>

      <Notes>
        logHi(undefined); // imprime hi
      
        logHi(null); // imprime null
      </Notes>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Boolean
      </Heading>

      <Text>
        Representa una entidad lógica que solo puede tomar los valores <b>true</b> o <b>false</b>.
      </Text>

      <Text>
        Podemos usar la función Boolean para convertir cualquier elemento a boolean.
      </Text>

      <Text>
        Si el valor es omitido o es 0, -0, null, false, NaN, undefined, o un String vacío (""), el objeto tendrá un valor inicial <b>false</b>.
      </Text>

      <Text>
        El resto de los valores, incluyendo Arrays vacíos y el String "false", crean un objeto con un valor inicial de <b>true</b>.
      </Text>
    </Slide>

    <Slide>
      <div style={{width: '80%'}}>
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

            <iframe src="/src/slides/class1/examples/boolean1.html"></iframe>
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

            <iframe src="/src/slides/class1/examples/boolean2.html"></iframe>
          </FlexBox>
        </Grid>
      </div>
    </Slide>

    <Slide>
      <div style={{width: '80%'}}>

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

            <iframe src="/src/slides/class1/examples/boolean3.html"></iframe>
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

            <iframe src="/src/slides/class1/examples/boolean4.html"></iframe>
          </FlexBox>
        </Grid>
      </div>

      <Notes>
        No confundir el objeto Booelan con los valores primitivos Boolean ni con la función Boolean.

        La función Boolean puede ser usada para generar valores primitivos, pero al hacer un new estamos creando un objeto, que al ser evaluado tendrá un valor de verdad verdadero.
      </Notes>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Number
      </Heading>

      <Text>
        ECMAScript posee dos tipos distintos de números: <b>Number</b> y <b>BigInt</b>.
      </Text>

      <Text>
        Number es un valor binario de 64 bits de doble precisión. Representa números entre <b>- (2 ^ 53 - 1)</b> y <b>2 ^ 53 - 1</b>.
      </Text>

      <Text>
        Además de representar números de punto flotante, el tipo de número tiene tres valores simbólicos: + Infinito, -Infinito y NaN ("No es un número").
      </Text>

    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Number
      </Heading>

      <Text>
        Para verificar el valor más grande o el valor más pequeño disponible dentro de ± Infinito, se pueden usar las constantes <b>Number.MAX_VALUE</b> o <b>Number.MIN_VALUE</b>
      </Text>

      <Text>
        El 0 que puede ser representado como +0 y -0. En la práctica esto no tiene mucho impacto ya que -0 === +0, sin embargo se puede notar algunas diferencias al dividir por 0.
      </Text>

      <CodePane language="js">
        {`
          42 / +0 == Infinity
          42 / -0 == -Infinity
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        BigInt
      </Heading>

      <Text>
        El tipo BigInt permite representar números con una precisión arbitraria, es decir que permite operar con números que superen los límites planteados por el tipo Number.
      </Text>

      <Text>
        Un BigInt se crea agregando n al final de un número entero o llamando al constructor.
      </Text>

      <CodePane language="js">
        {`
          const x = 2n ** 53n; // 9007199254740992n

          const y = BigInt(23) // 23n
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Symbol
      </Heading>

      <Text>
        Es un valor primitivo único e inmutable y se puede utilizar como clave de una propiedad de objeto.
      </Text>

      <Text>
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

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        String
      </Heading>

      <Text>
        Sirve para representar una cadena de caracteres. La longitud del string está dada por la cantidad de elementos que lo componen.
      </Text>

      <Text>
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

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        String
      </Heading>

      <Text>
        Existe una gran cantidad de métodos que permiten manipular Strings, al igual que en la mayoría de los lenguajes
      </Text>

      <Text>
        Algunos ejemplos se pueden encontrar <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods">aquí</a>.
      </Text>

      <Notes>
        Mencionar split, slice, splice, indexOf, replace, toLowercase, toUppercase, etc.
      </Notes>
    </Slide>

    {/* Array */}
    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Arreglos
      </Heading>

      <Text>
        Son objetos en forma de lista que poseen una asociación particular entre claves númericas enteras y la longitud de la lista. Podemos decir que son estructuras indexadas.
      </Text>

      <Text>
        Para definir un arreglo podemos usar corchetes ([]) o generar una instancia utilizando la función <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array">Array()</a>.
      </Text>

      <CodePane language='js'>
        {`
          const fruits = ['Apple', 'Banana'];

          const moreFruits = new Array('Orange', 'Watermelon');
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Arreglos
      </Heading>

      <Text>
        Para acceder a los elementos podemos utilizar un índice numérico indicando la posición.
      </Text>

      <Text>
        También existe una gran variedad de métodos que nos permiten iterar, duplicar, partir y manipular los arreglos de múltiples formas distintas. Algunos ejemplos <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">aquí</a>.
      </Text>

      <CodePane language='js'>
        {`
          const fruits = ['Apple', 'Banana'];

          console.log(fruits.length); // 2
          console.log(fruits[0]); // Apple
        `}
      </CodePane>
    </Slide>
  
    {/* Object */}
    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Objetos
      </Heading>

      <Text>
        Podemos ver a los objetos como una colección de propiedades, cada una de los cuales posee un valor asociado. Las propiedades de un objeto son identificadas por "claves".
      </Text>

      <Text>
        Las claves de un objeto pueden ser de tipo String o Symbol, pero los valores pueden ser de cualquier tipo, incluso otros objetos.
      </Text>

      <Notes>
        Notar que se describe a los objetos como collección de propiedades, no simplemente de claves y valores. Las propiedades tienen un valor, pero además de eso existen otros atributos.
      </Notes>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Objetos
      </Heading>

      <Text>
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

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Objetos
      </Heading>

      <Text>
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

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Objetos
      </Heading>

      <Text>
        Además del valor, las propiedades poseen otros atributos. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects">Más info</a>.
      </Text>

      <div style={{textAlign: 'center'}}>
        <img
          src="/src/slides/images/property_attributes.png"
          alt="property_attributes"
          width="80%"
          height="80%"
        />
      </div>
    </Slide>

    <Slide backgroundColor="#ffd84d">
      <Heading margin="0px" fontSize="50px">
        Objetos
      </Heading>

      <Text>
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

    {/* Logical Operators */}

    <Slide backgroundColor="#000000">
      <div className="flex-center-column">
        <Heading margin="0px" fontSize="50px">
          Operadores lógicos
        </Heading>

        <Text>
          En JavaScript existen 4 operadores lógicos:
        </Text>
        <UnorderedList>
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

    <Slide backgroundColor="#000000">
      <div className="flex-center-column">
        <Heading margin="0px" fontSize={50}>
          || (OR)
        </Heading>

        <Text fontSize={40}>
          El operador lógico OR evalua a False cuando ambos operandos son False.
          Caso contrario, siempre evalua a True.
        </Text>
        <Text fontSize={40}>
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

    <Slide backgroundColor="#000000">
      <div className="flex-center-column">
        <Heading fontSize={50}>
          || (OR)
        </Heading>
        <Text fontSize={50}>
          Siguiendo el ejemplo anterior...
        </Text>
        <CodePane language="js">
          {`
            let firstName = "";
            let lastName = "";
            let nickName = "Bob";

            alert( firstName || lastName || nickName || "Anonymous"); // Bob
          `}
        </CodePane>
        <br></br>
        <CodePane language="js">
          {`
            let groupOne = [];
            let groupTwo = [];

            alert( groupOne || groupTwo || ["Bob", "Ana", "Cam"]); // ["Bob", "Ana", "Cam"]
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#000000">
      <div className="flex-center-column">
        <Heading margin="0px" fontSize={50}>
          && (AND)
        </Heading>

        <Text fontSize={40}>
          El operador lógico AND evalua a True cuando ambos operandos son True.
          Caso contrario, siempre evalua a False.
        </Text>
        <Text fontSize={40}>
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

    <Slide backgroundColor="#000000">
      <div className="flex-center-column">
        <Heading fontSize={50}>
          && (AND)
        </Heading>
        <Text fontSize={50}>
          Siguiendo el ejemplo anterior...
        </Text>
        <CodePane language="js">
          {`
            // Si el primer operando es "truthy", el AND retornará el segundo operando:
            alert( 1 && 0 ); // 0
            alert( 1 && 5 ); // 5
            
            // Si el primer operando es "falsy", AND lo retorna. El segundo operando es ignorado.
            alert( null && 5 ); // null
            alert( 0 && "no matter what" ); // 0
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#000000">
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
            alert( !true ); // false
            alert( !0 ); // true
          `}
        </CodePane>

        <Text fontSize={30}>
          Un doble NOT !! se utiliza a veces para convertir valores a su tipo booleano:
        </Text>

        <CodePane language="js">
          {`
            alert( !!"non-empty string" ); // true
            alert( !!null ); // false
          `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#000000">
      <div className="flex-center-column">
        <Heading fontSize={50}>
          ?? (Nullish Coalescing)
        </Heading>

        <Text fontSize={30}>
          El operador de Nullish Coalescing se escribe con dos signos <b>?</b>.
          Si evaluamos <b>a ?? b</b> lo que sucede es lo siguiente:
          <UnorderedList>
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

            alert(user ?? "Anonymous"); // Anonymous (user not defined)
          `}
        </CodePane>
      </div>
    </Slide>

    {/* Basic Control Structures */}

    <Slide backgroundColor="#000000">
      <div className="flex-center-column">
        <Heading margin="0px" fontSize="50px">
          Estructuras de control
        </Heading>

        <Text>
          En JavaScript existen 5 estructuras de control básicas:
        </Text>
        <UnorderedList>
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

    <Slide backgroundColor="#000000">
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

    <Slide backgroundColor="#000000">
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

    <Slide backgroundColor="#000000">
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
              
              alert(message);
            `}
        </CodePane>
      </div>
    </Slide>

    <Slide backgroundColor="#000000">
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
    
    <Slide backgroundColor="#000000">
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

    <Slide backgroundColor="#000000">
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
              alert(i);
            }
          `}
        </CodePane>
        <Text fontSize={30}>
          Para saltar a la siguiente iteración, podemos utilizar la sentencia <b>continue</b> y para finalizar
          la ejecución del loop antes que se cumpla la condición podemos utilizar la sentencia <b>break</b>.
        </Text>
      </div>
    </Slide>

    <Slide backgroundColor="#000000">
      <div>
        <Heading margin="0px" fontSize="50px">
          for..in & for..of
        </Heading>
        <Text fontSize={30}>
          Existen otros tipos de loop <b>for</b> que sirven a distintos casos de uso:
        </Text>
        <UnorderedList>
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

    <Slide backgroundColor="#000000">
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

    <Slide backgroundColor="#000000">
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

    <Slide backgroundColor="#000000">
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

    <Slide backgroundColor="#000000">
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
  </>
);
