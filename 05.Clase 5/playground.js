let hola = document.querySelector('h1');
hola.innerHTML += 'Hola Mundo';
console.log(hola.innerHTML);



// const template = `<h1>Hola Mundo!</h1>`;
// //Agregá la propiedad id=’body’ a tu elemento body en HTML
// const body = document.getElementById("body");
// body.innerText = template;
// console.log(body.innerText);
// body.innerHTML = template;
// console.log(body.innerHTML);

// const nombre= 'Flor';
// const miTemplate = `Mi nombre es ${nombre}`;
// console.log(miTemplate);

// function escribirHTML(titulo, texto) {
//     const body1 = document.getElementById("body");
//     const miTemplate = `
//     <h1>${titulo}</h1>
//     <p>${texto}</p>
//     `;
//     body1.innerHTML += miTemplate;
// }

// console.log(escribirHTML('Hola', 'Esto es un ejemplo de template string en html.'));

// escribirHTML('Es dinámico', 'Podemos insertar elementos HTML mediante <b>JavaScript</b>');
// escribirHTML('Facilita la programación', 'Evita escribir mucho código y reutilizar el que si escribamos.');
// escribirHTML('En este ejemplo', 'Hemos utilizado una única función para poder escribir 4 veces en HTML, ¿te imaginás lo que sería esto sin esta función?');