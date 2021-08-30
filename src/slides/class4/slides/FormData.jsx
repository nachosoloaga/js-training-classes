import React from "react";
import { Slide, Heading, Text, CodePane, Notes } from "spectacle";

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        FormData
      </Heading>

      <Text fontSize={30}>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/FormData">FormData</a> es una interfaz que provee una manera sencilla de construir objetos clave-valor que puedan luego ser enviados en peticiones HTTP utilizando la fetch API o XHR. Además puede ser fácilmente iterado utilizando por ejemplo for...of.
      </Text>

      <Text fontSize={30}>
        Utiliza el mismo formato que usaría un formulario si el tipo de codificación se estableciera en "multipart/form-data". Se utiliza principalmente para el envío de archivos.
      </Text>

    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        FormData
      </Heading>

      <CodePane language="js">
        {`
          const fileField = document.querySelector('input[type="file"]');
          const formData = new FormData();

          formData.append("username", "MasterOfCoding");
          formData.append("password", 123456); // number 123456 is immediately converted to a string "123456"
          formData.append("confirm_password", 123456);
          
          // HTML file input, chosen by user
          formData.append("userfile", fileField.files[0]);
          
          const request = new XMLHttpRequest();
          request.open("POST", "http://example/users/sign_up");
          request.send(formData);
        `}
      </CodePane>
    </Slide>

    <Slide backgroundColor="#0d0d0d">
      <Heading margin="0px" fontSize="50px">
        FormData
      </Heading>

      <CodePane language="js">
        {`
          const fileField = document.querySelector('input[type="file"]');
          const formData = new FormData();

          formData.append("username", "MasterOfCoding");
          formData.append("password", 123456);
          formData.append("confirm_password", 123456);
          formData.append("userfile", fileField.files[0]);
          
          fetch('https://example.com/profile/avatar', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
          .then(result => {
            console.log('Success:', result);
          })
          .catch(error => {
            console.error('Error:', error);
          });
        `}
      </CodePane>
    </Slide>
  </>
);
