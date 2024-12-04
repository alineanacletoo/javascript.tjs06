const leia = require("readline-sync")

let A = leia.questionInt("Digite o valor de A: ");
let B = leia.questionInt("Digite o valor de B: ");
let C = leia.questionInt("digite o valor de C: ");

let soma = A + B;

if(soma > C){
    console.log("A soma de A + B é maior que C")
}else if (soma < C){
    console.log("A soma de A + B é menor que C")
}else {
    console.log("A soma de A + B é igual a C")
}