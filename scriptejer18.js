// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos


var valores = [true, 5, false, "hola", "adios", 2];
if (valores[3].length > valores[4].length) {
    console.log("La palabra ${valores[3]} es mayor a la palabra ${valores[4]}")
} else {
    console.log("La palabra ${valores[4]} es mayor a la palabra ${valores[3]}")
}
if (valores[0]==true) {
    console.log(valores[0]) 
} else {
    valores[0]==false 
}
if (valores[2]==false) {
    console.log(valores[2]) 
} else {
    valores[2]==true 
}
console.log(`La suma de los valores numericos del array es : ${valores[1] + valores[5]}`)
`La resta de los valores numericos del array es : ${valores[1] - valores[5]}`
`La multiplicación de los valores numericos del array es : ${valores[1] * valores[5]}`
`La division de los valores numericos del array es : ${valores[1] / valores[5]}`
`La potenciacion de los valores numericos del array es : ${valores[1] ** valores[5]})`
