// Escribir una función que reciba un String y devuelva la palabra más larga.
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

var frase="Guia de JavaScript";

function findLongestWord(frase) {
    var longestWord = frase.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord;
  }
  var masLarga=findLongestWord("Guia de JavaScript");
  console.log(masLarga);
  