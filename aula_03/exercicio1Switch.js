const leia = require("readline-sync")

let numero1 = leia.questionFloat("Digite o primeiro numero: ");
let numero2 = leia.questionFloat("Digite o segundo numero: ");

let codigoOperacao = leia.questionInt("Digite a operação: ")
let resultado; 

switch(codigoOperacao){
    case 1: 
        resultado = numero1 + numero2;
        console.log(`Resultado da adição: ${resultado}`);
        break;
    case 2:
        resultado = numero1 - numero2;
        console.log(`Resultado da subtração: ${resultado}`)
        break;
    case 3:
        resultado = numero1 * numero2;
        console.log(`Resultado da multiplicação: ${resultado}`)
        break;
    case 4: 
        resultado = numero1 / numero2;
        console.log(`Resultado da divisão: ${resultado}`);
        break;
    default:
        console.log("Operação inválida");         
}