const botonFetch = document.getElementById("fetch_button");

botonFetch.addEventListener('click', () => {
  const promisePerrito = fetch("https://dog.ceo/api/breeds/image/random")
  // El fetch devuelve una promesa y esa promesa tiene un primer metodo que es el then, este primer then devuelve la respuesta en formato json. 
  .then(function (respuesta) {
    console.log(respuesta);
    return respuesta.json();
    
  }
);


/* En este punto de nuestro programa, podemos hacer uso de la respuesta del servidor que ya esta en formato json */
promisePerrito.then(function (respuesta) {

  console.log(respuesta);

  const imageURL = respuesta.message;
  document.getElementById("imagen_perrito").setAttribute("src", imageURL);
});
})



