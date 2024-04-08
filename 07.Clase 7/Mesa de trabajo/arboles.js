// https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1200px-Eiche_bei_Graditz.jpg

// https://s1.significados.com/foto/shutterstock-273030704_sm.jpg

// https://www.elagoradiario.com/wp-content/uploads/2021/04/Pino-Castrej%C3%B3n-1140x600.jpg

const imagenes = document.querySelectorAll('.tarjeta img');
const links = document.querySelectorAll('.tarjeta a');
const urlImagenes = [];

imagenes.forEach((imagen, index) => {
    const url = prompt('Ingrese la url para la imagen n° ' + (index+1));
    urlImagenes.push(url);
    imagen.setAttribute('src', urlImagenes[index]);
    links[index].setAttribute('href', urlImagenes[index]);
    links[index].setAttribute('target','_blank');
    
});

// links.forEach((link,index) => {
//     link.setAttribute('href', urlImagenes[index]);
//     link.setAttribute('target','_blank');
// });


