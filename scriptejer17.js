// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
// resultado
var vector1 = []


for (var i = 0; i <= 6; i++) {
vector1[i] = Math.floor(Math.random() * (100 - 0) + 0);
}


console.log(vector1)
alert(`El vector numero 1 es: ${vector1}`)
vector1.splice(vector1.length-2,2)

alert(`El vector numero 1 es: ${vector1}`)