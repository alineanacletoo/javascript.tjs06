const leia = require('readline-sync');

let nota1 = leia.questionFloat("Digite sua primeira nota: ");
let nota2 = leia.questionFloat("Digite sua segunda nota: ");
let nota3 = leia.questionFloat("digite sua terceira nota: ");
let nota4 = leia.questionFloat("Digite sua quarta nota: ");

let media = (nota1 + nota2 + nota3 + nota4)/4;

console.log("Sua média final é: ", media.toFixed(2));

