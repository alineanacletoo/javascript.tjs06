const leia = require("readline-sync")

let numeros = new Set ([12, 25, 27, 41, 88, 76, 90, 14, 100]);
let numeroUsuario = leia.questionInt("Digite um numero inteiro para buscar ma array: ");

if(numeros.has(numeroUsuario)){
    console.log(`O numero ${numeroUsuario} foi encontrado!`);
}else {
    console.log(`O numero ${numeroUsuario} não foi encontrado!`)
}

