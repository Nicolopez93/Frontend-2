// Usamos setInterval
const elementoContador = document.getElementById('valor_contador');
let i = 0;
let contar

//Set interval recibe dos parametros --> 1) es la funcion que se va a ejecutar 2)cada cuanto se va a ejecutar la funcion.
function iniciar_contador (){
    contar = setInterval(() => {
        i++;
        elementoContador.innerText = i;
    }, 100);
}  

function parar_contador () {
    clearInterval(contar);
}

//setTimeOut --> la funcion dentro del timeOut se ejecuta una sola vez cuando pasa el tiempo que le decimos
setTimeout(() => {
    console.log("Hola");
}, 6000);