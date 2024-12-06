const leia = require("readline-sync")

let numeros = [12, 7, 19, 3, 25, 8, 14, 20, 5, 11];

let entrada = leia.questionInt("Digite um numero para pesquisar no vetor: ");
let numero = entrada;

if(isNaN(numero)){
    console.log("Por favor, digite um numero válido!");
    return;
}

let posicao = numeros.indexOf(numero);

if(posicao !== -1){
    console.log(`O numero ${numero} está na posição ${posicao} do vetor.`);

}else {
    console.log(`O numero ${numero} não foi encontrado no vetor`);
}