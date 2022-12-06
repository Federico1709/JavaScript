// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
// programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
// todos ellos.
var contador = 0;
var auxmayor = 0;
var auxmenor = 0;
var promedio = 0;
var numero= 1;

while (numero != 0);
     numero=prompt("Ingrese un numero");

     if (numero > auxmayor) {
          auxmayor = numero;
     }
     if (numero < auxmenor && numero != 0) {
          auxmenor = numero;
     }
     promedio = (numero + promedio);

     contador++;

 


alert(`El mayor numero es ${auxmayor}
El menor numero es ${auxmenor}
Y el promedio de todos los numeros ingresados es ${promedio / contador}`);