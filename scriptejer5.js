// Construir un programa que simule un menú de opciones para realizar las cuatro
// operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
// numéricos enteros. El usuario, además, debe especificar la operación con el primer
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.
var valor1 = parseInt(prompt("Elija un numero"));
var valor2 = parseInt(prompt("Elija otro numero"));
var opciones = prompt`Elija una de las 4 operciones aritmeticas con las que quiera trabajar 
suma=S o s
resta=R o r
multiplicacion=M o m
division=D o d`;
switch (opciones) {
    case "S":
    case "s":
        var suma = `${valor1}+ ${valor2}=${valor1 + valor2}`;
        alert("El resultado de la suma es " + suma);
        break;
    case "R":
    case "r":
        var resta = `${valor1}- ${valor2}=${valor1 - valor2}`;
        alert(`El resultado de la resta es ${resta}`);
        break;
    case "M":
    case "m":
        var multiplicacion = valor1 * valor2;
        alert(`El resultado del producto es ${multiplicacion}`);
        break;
    case "D":
    case "d":
        var division = valor1 / valor2;
        alert(`El resultado del resto es ${division}`);
        break;
}