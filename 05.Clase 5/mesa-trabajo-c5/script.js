let tema = prompt("Indique el tema que quiere usar: 1)Claro, 2)Oscuro");

if (tema ==1) {
    let bodyClaro = document.querySelector('body');
    bodyClaro.classList.remove("dark");
}

if (tema ==2) {
    let tituloOscuro = document.querySelector('h1');
    tituloOscuro.classList.add("oscuro");
    let itemsOscuros = document.querySelectorAll('div.item');
    for (let i = 0; i < itemsOscuros.length; i++) {
        itemsOscuros[i].classList.toggle("-oscuros");
        
    }
    let textosOscuros = document.querySelectorAll('p');
    for (let i = 0; i < textosOscuros.length; i++) {
        textosOscuros[i].classList.add("textos-oscuros");
        
    }
    let titulosOscuros = document.querySelectorAll('h2');
    for (let i = 0; i < titulosOscuros.length; i++) {
        titulosOscuros[i].classList.add("textos-oscuros");
        
    }
}