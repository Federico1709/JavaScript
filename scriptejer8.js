// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
// programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
// todos ellos.
var contador= 0;
var auxmayor=0;
var auxmenor=0;
var promedio=0;
do {
    var numero=parseInt(prompt("Ingrese un numero"));
    
    if(numero>auxmayor){
         auxmayor=numero;
    }
    if(numero<auxmenor && numero!=0){
         auxmenor=numero;
    }
     promedio=(numero + promedio);
    
    contador ++;

} while (numero!=0);


alert(`El mayor numero es ${auxmayor}
El menor numero es ${auxmenor}
Y el promedio de todos los numeros ingresados es ${promedio/contador}`);