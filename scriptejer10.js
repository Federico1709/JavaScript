// Escribir una función flecha que reciba una palabra y la devuelva al revés.

var cad = prompt ("Ingrese una palabra a invertir");
let invertirCadena= (cad) => cad.split("").reverse().join("");
alert(invertirCadena(cad));

    // Paso 1. Usa el método split() para devolver un nuevo arreglo
    // var separarCadena = cad.split(""); // var separarCadena = "hola".split(""); // ["h", "o", "l", "a"]
    // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
    // var invertirArreglo = separarCadena.reverse(); // var invertirArreglo = ["h", "o", "l", "a"].reverse(); 
    // ["a", "l", "o", "h"]
    // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
    // var unirArreglo = invertirArreglo.join(""); // var unirArreglo = ["a", "l", "o", "h"].join("");
    // "aloh"
    // Paso 4. Devolver la cadena invertida
    // return unirArreglo; 
    // "aloh"

