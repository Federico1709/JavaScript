// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
// solicite números al usuario hasta que la suma de los números introducidos supere el
// límite inicial.
var numerolimite=prompt("Ingrese un numero como valor limite");
var aux=0;
while(aux<=numerolimite){
    var numero=parseInt(prompt("Ingrese un numero"));
  aux=(aux+numero);
    
}
alert("Ha superado el limite");