const leia = require("readline-sync")

let vetorStrings = ["boxer", "Pasto Alemão", "Pinscher", "usky Siberiano", "Corgi"];

let vetorInteiros = new Array(5);

let vetorNumeros = [7, 5, 9, 4, 6, 2, 8, 1, 3, 10];

for(let contador = 0; contador < vetorStrings.length; contador++){
    console.log(vetorStrings[contador]);
}

console.log("O tamanho do verto de string é: ", vetorStrings.length);

//for(let contador = 0; contador < vetorInteiros.length; contador++){
 //   vetorInteiros[contador] = leia.questionInt("Digite um numero: ");
//}

console.table(vetorInteiros);

console.table(vetorStrings.sort);

console.table(vetorNumeros.sort((a,b) => a - b));