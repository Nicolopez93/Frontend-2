// https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1200px-Eiche_bei_Graditz.jpg

// https://s1.significados.com/foto/shutterstock-273030704_sm.jpg

// https://www.elagoradiario.com/wp-content/uploads/2021/04/Pino-Castrej%C3%B3n-1140x600.jpg

const imagenes = document.querySelectorAll('.tarjeta img');
const urlImagenes = [];

// for (let i = 0; i < imagenes.length; i++) {
//     const url = prompt('Ingrese la url para la imagen n° ' + (i+1));
//     urlImagenes.push(url);
// }

// for (let i = 0; i < imagenes.length; i++) {
//     const imagen = imagenes[i];
//     imagen.setAttribute('src', urlImagenes[i]);
// }


imagenes.forEach((imagen, index) => {
    const url = prompt('Ingrese la url para la imagen n° ' + (index+1));
    urlImagenes.push(url);
    
});

imagenes.forEach((imagen,index) => {
    imagen.setAttribute('src', urlImagenes[index]);
});


