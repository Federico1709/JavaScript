// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio

var radiocircunsferencia=prompt("Ingrese el valor del radio de la circunsferencia");
const PI=3.141592653589793;
var area=PI*radiocircunsferencia^2;
var perimetro=2*PI*radiocircunsferencia;
var respuesta=`El area de tu circunferencia es ${area}
El perimetro de tu cirncunferencia ${perimetro}`;
alert(respuesta);