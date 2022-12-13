// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo 
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El 
// radio del círculo lo proporcionará el usuario.

function Circulo(radio, area, perimetro){
    this.radio = radio;
    this.area = area;
    this.perimetro = perimetro;
    this.mostrarCirculo = mostrarCirculo;
}
const PI=3.141592653589793;
var radio = prompt("Ingrese el radio de su circulo")
var circulo= new Circulo(radio,area,perimetro)

var area=function calcularArea(PI){
    var resultado = PI*radio^2;
}
var perimetro= function calcularPerimetro(PI){
    var resultado = 2*PI*circulo.radio;
}

function mostrarCirculo(){
    var resultado= `El radio de su circulo es ${this.radio}
    El area es ${this.area}
    El perimetro es ${this.perimetro}`
    console.log(resultado);
}

circulo.mostrarCirculo();