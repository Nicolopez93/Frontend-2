for (var i=0; i<10; i++){
    var count =0;
    for(var j=0; j < Math.floor(Math.random()*10);j++){
        count++;
    }
    console.log(count);
}

let frase="Hola que tal gente?";
let array = frase.split(" ");
array.splice(3,1);
frase = array.join(" ");
console.log(frase);