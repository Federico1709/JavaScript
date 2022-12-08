// Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
// espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
// funcionamiento de la función Substring().

var mensaje = prompt("Ingrese una frase");
var cadenafinal=[];
for (var i = 0 ; i < mensaje.length; i++) {
   var cadena = mensaje.substring(i,i+1)+"   ";
    cadenafinal=[cadenafinal+cadena];
    console.log(cadenafinal);
    console.log(cadena); 
}
alert(cadenafinal);