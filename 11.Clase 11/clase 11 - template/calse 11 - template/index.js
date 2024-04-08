let persona = {
    nombre: '',
    telefono: '',
    contrasenia: '',
    hobbies: [],
    nacionalidad: ''
}

const form = document.querySelector('form')
form.addEventListener('submit', event => {
    event.preventDefault()
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('tel').value;
    const contrasenia = document.getElementById('pass').value;
    const hobbies = document.getElementsByName('hobbies');
    const nacionalidades = document.getElementsByName('nacionalidad');

    hobbies.forEach(hobbie => {
        if(hobbie.checked === true) {
            persona.hobbies.push(hobbie.value);
        }
    });

    nacionalidades.forEach(nacionalidad => {
        if(nacionalidad.checked === true) {
            persona.nacionalidad = nacionalidad.value
        }
    });

    persona.nombre = nombre;
    persona.telefono = telefono;
    persona.contrasenia = contrasenia;
    console.log(persona);
})

const input = document.querySelector('input[name="nombre"]');
let errorMostrado = false;

input.addEventListener('invalid', event => {
    event.preventDefault()
    if (event.target.validity.valueMissing && !document.querySelector('input[name="nombre"]+span.error')){
        let errorElement = document.createElement('span');
        errorElement.classList.add('error')
        errorElement.innerText = "Por favor, ingrese un valor valido"
        input.insertAdjacentElement('afterend', errorElement);
    }

    // event.target.setCustomValidity('Por favor ingrese un nombre valido') --> para agregar texto al cartel que aparece 
    
})