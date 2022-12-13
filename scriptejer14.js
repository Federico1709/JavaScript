// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario 
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el 
// numero de páginas

var ISBN = prompt("Ingrese el ISBN")
var titulo = prompt("Ingrese el titulo")
var autor = prompt("Ingrese el autor")
var numPag = prompt("Ingrese el numPag")
var libro = new Libro(ISBN, titulo , autor, numPag);

function Libro(ISBN, titulo, autor, numPag){
    this.ISBN =ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPag = numPag;
    this.mostrarLibro = mostrarLibro;
}

function mostrarLibro(){
    var resultado = `El ISBN del libro es ${this.ISBN} el titulo es ${this.titulo} su autor es ${this.autor} 
    y tiene ${this.numPag} paginas`
    console.log(resultado);
}

libro.mostrarLibro();
