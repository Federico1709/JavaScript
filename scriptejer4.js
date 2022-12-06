// Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.

var mensaje= prompt("Ingrese un caracter por favor");

       if(mensaje=="S"|| mensaje=="N"){
        var correcto=`El caracter ${mensaje} es válido`
    alert(correcto);
    }else{   var incorrecto=`El caracter ${mensaje} no es válido`
    alert(incorrecto);}
 