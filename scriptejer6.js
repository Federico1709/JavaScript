// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.

var numero=prompt("Ingrese un numero");
if(numero%2==0&& numero!=0){
   
    var mensaje= `El numero ${numero} es par`;
}else if (numero%2==1){ 
    var mensaje= `El numero ${numero} es impar`;
    
}else if (numero==0){
    var mensaje= `El numero ${numero} no es par ni impar`;
}
alert(mensaje);
