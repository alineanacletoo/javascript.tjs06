const leia = require("readline-sync")

let soma = 0,
    numero;
    
do{
    numero = leia.questionInt("Digite um numero inteiro (digite 0 para encerrar): ");

    if(numero > 0){
        soma += numero;
    }
}while (numero !== 0);

console.log(`A soma de todos os numeros positivos digitados é: ${soma}`);
