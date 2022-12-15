//Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
//de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
//programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
//Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
//ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
//0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
//de 20.

var vectorA=[]
var vectorB=[]
for (var i = 0; i <= 49; i++) {
    vectorA[i] = (Math.random() * (100 - 0) + 0);
    console.log(vectorA[i]);
} 
function compararNum(a,b) {
 if(a>b) return 1;
 if (a==b) return 0;
 if (a<b) return -1;
}
vectorA.sort(compararNum);
console.log(vectorA);

for (var i = 0; i <= 19; i++) {
    if (i<=9){
    vectorB[i] = vectorA[i];}
    else {
        vectorB[i]=0.5;
    }
} 
console.log(vectorB);