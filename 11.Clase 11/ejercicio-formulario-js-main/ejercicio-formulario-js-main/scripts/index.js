const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", (event) => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  event.preventDefault();
  // 1. Obtenemos el valor ingresado en el input de email
  const email = document.getElementById('email-input').value;
  console.log(email);

  // 2. Obtenemos los datos ingresados en el input de password
  const password = document.getElementById('password-input').value;
  console.log(password);

  // 3. Obtenemos el valor del input radio
  let radioInput = document.getElementsByName('legalAge');
  radioInput.forEach(function(opcion) {
    if(opcion.checked === true && opcion.value === "false")
    console.log(alert("Debes ser mayor de edad para registrarte en el sitio"));
  });

  // 4. Obtenemos el valor del input checkbox
  var radioCheckbox = document.getElementById('tyc-input');
  if (radioCheckbox.checked == false) {
    console.log(alert("Debes aceptar los TyCs para registrarte en el sitio"));
  };


  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  // 6 Validamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  

  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.
  let persona = {
    email:'',
    password:'',
    mayorEdad:'',
  }

  persona.email = email;
  persona.password = password;
  persona.mayorEdad = radioInput.value;

  console.log(persona);

});
