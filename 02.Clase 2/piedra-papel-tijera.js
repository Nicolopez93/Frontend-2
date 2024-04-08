//Ejercicio de piedra papel o tijera

let eleccionUsuario = parseInt(prompt("Ingrese una opción: 1 - Piedra, 2 - Papel, 3 - Tijera"));

function funcionMaquina () {
    return parseInt(Math.random() * 3 + 1);
}

let opcionMaquina = funcionMaquina();

let resultadoPartida = "No hay resultado";

// while (eleccionUsuario != 1 || eleccionUsuario != 2 || eleccionUsuario != 3) {
//     eleccionUsuario;
// }

// let opcionMaquina = parseInt(Math.random()*3 + 1);

switch (eleccionUsuario) {
    case 1: 
    switch (opcionMaquina) {
        case 1: resultadoPartida ="Empate";
        break;
        case 2: resultadoPartida ="Perdiste";
        break;
        case 3: resultadoPartida ="Ganaste";
        break;
    }
    break;
    case 2: 
    switch (opcionMaquina) {
        case 1: resultadoPartida ="Ganaste";
        break;
        case 2: resultadoPartida ="Empate";
        break;
        case 3: resultadoPartida ="Perdiste";
        break;
    }
    break;
    case 3: 
    switch (opcionMaquina) {
        case 1: resultadoPartida ="Perdiste";
        break;
        case 2: resultadoPartida ="Ganaste";
        break;
        case 3: resultadoPartida ="Empate";
        break;
    }
    break;
}

// if (eleccionUsuario === 1) {
//     if (opcionMaquina === 1) {
//         resultadoPartida = "Empate";
//     } 
//     if (opcionMaquina === 2) {
//         resultadoPartida = "Perdiste";
//     } 
//     if (opcionMaquina === 3) {
//         resultadoPartida = "Ganaste";
//     } 
// }

// if (eleccionUsuario === 2) {
//     if (opcionMaquina === 1) {
//         resultadoPartida = "Ganaste";
//     } 
//     if (opcionMaquina === 2) {
//         resultadoPartida = "Empate";
//     } 
//     if (opcionMaquina === 3) {
//         resultadoPartida = "Perdiste";
//     } 
// }

// if (eleccionUsuario === 3) {
//     if (opcionMaquina === 1) {
//         resultadoPartida = "Perdiste";
//     } 
//     if (opcionMaquina === 2) {
//         resultadoPartida = "Ganaste";
//     } 
//     if (opcionMaquina === 3) {
//         resultadoPartida = "Empate";
//     } 
// }

console.log("Vos elegiste: " + eleccionUsuario);
console.log("La maquina eligio: " + opcionMaquina);

alert(resultadoPartida);