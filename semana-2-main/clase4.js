// 👇Acá vemos que el document nos dá acceso a todo el DOM, ese arbol que contiene todos los nodos de nuestro sitio
console.log(document);

// Ahora vamos a utilizar 2 métodos propios de document que nos facilitan "pescar" elementos en el sitio:
// - querySelector()
// - querySelectorAll()

// Obtenemos el titulo principal
const titulo = document.querySelector('h1');
// Ahora vayamos a la consola y despleguemos la flecha que nos muestra todas las propiedades del nodo
console.log(titulo);

// nos traemos ahora un listado de nodos 👇
const itemsMenu = document.querySelectorAll('li');
console.log(itemsMenu);

// hacemos un selector más específico👇
const infoExtra = document.querySelector('.info .clima')
console.log(infoExtra);

/* ------------------------------- Practicando ------------------------------ */
// Seleccionamos la lista de noticias y revisamos su informacion interna.
// Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
// 🚩 No es un Array.
const articulos = document.querySelectorAll('article');

for (let i = 0; i < articulos.length; i++) {
    console.log(articulos[i]);
}

// Ahora hacemos la misma practica pero con ForEach, y accedemos a propiedades de los nodos.
articulos.forEach( articulo =>{
    const titulo = articulo.querySelector('h2').innerText;
    console.log(titulo);
    // 💡 si quisieramos,acá podemos mutar los nodos, o cambiar algunas de sus propiedades
});

/*let themeChanged = false //false = light --- true = dark

const  changeTheme = () => {
    themeChanged = !themeChanged
    const body = document.querySelector("body")
    const main = document.querySelector("main")
    const articles  = document.querySelectorAll(".noticias article")
    if(themeChanged){
        body.style.backgroundColor = 'black'
        main.style.backgroundColor = '#333333'
        articles.forEach((article) => {
            article.querySelector('h2').style.color = "white"
            article.style.backgroundColor = "black"
            article.querySelector('p').style.color = "white"
        })
    }else{
        body.style.backgroundColor = 'white'
        main.style.backgroundColor = 'rgb(238, 238, 238)'
        articles.forEach((article) => {
            article.querySelector('h2').style.color = "black"
            article.style.backgroundColor = "white"
            article.querySelector('p').style.color = "black"
        })
    }
}

const themeButton = document.querySelector('.tema button')
themeButton.addEventListener("click", changeTheme)
*/

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna: https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview


