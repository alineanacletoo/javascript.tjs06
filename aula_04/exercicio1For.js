const leia = require("readline-sync")

let numero1 = leia.questionInt("Digite o primeiro numero: ");
let numero2 = leia.questionInt("Digite o segundo numero: ");

if (numero1 >= numero2){
    console.log("Intervalo inválido, o primeiro numero deve ser menor que o segundo numero")
    return;
}

console.log(`Número múltiplos de 3 e 5 no intervalo de ${numero1} a ${numero2}: `);
let encontroMultiplo = false;

for(let i = numero1; i <= numero2; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
        encontroMultiplo = true;
    }

}

if(!encontroMultiplo){
    console.log("Nenhum número múltiplo de 3 e 5 encontrado nesse intervalo");
}