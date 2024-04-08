const ingresante = {
  nombre: "",
  correo: "",
  contrasenia: "",
  telefono: "",
  hobbies: [],
  paisNacimiento: "",
};

const form = document.getElementById("form_hogwarts");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formInscripcion = new FormData(form);

  ingresante.nombre = formInscripcion.get("nombre");
  ingresante.correo = formInscripcion.get("correo");
  ingresante.contrasenia = formInscripcion.get("password");
  ingresante.hobbies = formInscripcion.getAll("hobbies");
  ingresante.paisNacimiento = formInscripcion.get("nacionalidad");

  console.table(ingresante);

});

const nombre = document.getElementById("nombre");
nombre.addEventListener("blur", (e) => {
  e.preventDefault();
  const valor = e.target.value;
  if (valor.split(" ").length < 2 && !document.querySelector('input[name="nombre"]+span.error')) {
    let errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = "Por favor, el nombre debe contener como minimo 2 palabras";
    nombre.insertAdjacentElement("afterend", errorElement);
  }
});

const nacionalidad = document.getElementsByName('nacionalidad');
nacionalidad.addEventListener("blur", (e) => {
  e.preventDefault();
  const valor = e.target.value;
  if (valor === "argentina" && !document.querySelector('input[name="nacionalidad"]+span.error')) {
    let errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = "Lo sentimos, aún no estamos reclutando magos en Argentina, pero pronto llegaremos";
    nacionalidad.insertAdjacentElement("afterend", errorElement);
  }
});



