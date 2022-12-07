// Escribir una función flecha que reciba una palabra y la devuelva al revés.

var mensaje = prompt("Ingrese una frase para colocarla alreves");
var cadenafinal="";

   cadena = mensaje.substring(0,mensaje.length);
    console.log(cadena);
  for(var i = mensaje.length; i=0 ; i--){
   cadenafinal=cadena.substring(i,cadena.length-1);
console.log(cadenafinal);
    
}
alert(cadenafinal);