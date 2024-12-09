const leia = require("readline-sync")

let numeros = [12, 25, 37, 41, 58, 63, 78, 89, 90, 101];

let numeroUsuario = leia.questionInt("Digite um numero inteiro para buscar no array: ");

let indice = numeros.indexOf(numeroUsuario);

if(indice != -1){
    console.table(numeros);
    console.log(`O número ${numeroUsuario} foi encontrado na posição ${indice}.`);

}else {
    console.log(`O número ${numeroUsuario} não foi encontrado!`);
}
