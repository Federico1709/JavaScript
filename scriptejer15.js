// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo 
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El 
// radio del círculo lo proporcionará el usuario.

function Circulo(radio){
    this.radio = radio;
    this.area = () => Math.PI*this.radio**2
    this.perimetro= ()=> 2*Math.PI*this.radio
    this.mostrarCirculo = mostrarCirculo;
    
}

var radio = parseInt(prompt("Ingrese el radio de su circulo"))
var circulo = new Circulo(radio)


function mostrarCirculo(){
    var resultado= `El radio de su circulo es ${this.radio}
    El area es ${circulo.area()}
    El perimetro es ${circulo.perimetro()}`
    console.log(resultado)
}

circulo.mostrarCirculo();