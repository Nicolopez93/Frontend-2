//Ejercicio de piedra papel o tijera

let eleccionUsuario = funcionUsuario();
let opcionMaquina = funcionMaquina();

let resultadoPartida = "No hay resultado";

function funcionUsuario () {
    let opcionUsuario;

    do {
        opcionUsuario = parseInt(prompt("Ingrese una opción: 1 - Piedra, 2 - Papel, 3 - Tijera"))
    } while (isNaN(opcionUsuario) || opcionUsuario < 1 || opcionUsuario > 3);

    return opcionUsuario;
}

function funcionMaquina () {
    return parseInt(Math.random() * 3 + 1);
}

//Operador Ternario
resultadoPartida = (opcionMaquina === eleccionUsuario) ? "Empate" : resultadoPartida;

if (eleccionUsuario === 1) {
    if (opcionMaquina === 2) {
        resultadoPartida = "Perdiste";
    } 
    if (opcionMaquina === 3) {
        resultadoPartida = "Ganaste";
    } 
}

if (eleccionUsuario === 2) {
    if (opcionMaquina === 1) {
        resultadoPartida = "Ganaste";
    } 
    if (opcionMaquina === 3) {
        resultadoPartida = "Perdiste";
    } 
}

if (eleccionUsuario === 3) {
    if (opcionMaquina === 1) {
        resultadoPartida = "Perdiste";
    } 
    if (opcionMaquina === 2) {
        resultadoPartida = "Ganaste";
    } 
}

console.log("Vos elegiste: " + eleccionUsuario);
console.log("La maquina eligio: " + opcionMaquina);

alert(resultadoPartida);

