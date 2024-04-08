// alert("Esto se esta llamando desde el script con la etiqueta src")

// Repasamos el ejercicio de la mesa de trabajo de clase 1
const array = [1, 2, 4, 8]; 
let suma = array[0];

for (let i = 1; i < array.length; i++) {
    const element = array[i];
    suma = suma + element;
    console.log(suma);
}