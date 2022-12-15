// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla.

var vector1 = []
var vector2 = []

for (var i = 0; i <= 4; i++) {
vector1[i] = Math.floor(Math.random() * (100 - 0) + 0);
vector2[i] = Math.floor(Math.random() * (100 - 0) + 0);
}
console.log(vector1)
console.log(vector2)
alert(`El vector numero 1 es: ${vector1} y el vector numero 2 es: ${vector2}`)