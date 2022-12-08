// Escribir una función que reciba un String y devuelva la palabra más larga. 
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

function EncontrarPlabraMasLarga(){
var frase = prompt("Ingrese una frase");
var tamaño = 0
var palabraMasLarga ="";
var fraseArray= frase.split(" ");

for(var i = 0 ; i<fraseArray.length ; i++){
    if (fraseArray[i].length> tamaño){
        tamaño = fraseArray[i].length;
        palabraMasLarga = fraseArray[i];
    }
}
return palabraMasLarga;
}
palabraMasLarga = EncontrarPlabraMasLarga();
alert(palabraMasLarga);