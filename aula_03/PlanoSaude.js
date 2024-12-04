const leia = require('readline-sync')

let nome = leia.question("Digite seu nome: ");
let idade = leia.questionInt("Digite sua idade: ");
let valor;

if(idade > 0 && idade <= 10){
     valor = 100.00;
}else if (idade > 11 && idade <= 29){
    valor = 200.00;
}else if (idade > 29 && idade <= 45){
    valor = 300.00;
}else if(idade > 45 && idade<= 59){
    valor = 500.00;
}else if (idade > 59 && idade <= 65){
    valor = 600.00;
}else {
    valor = 1000.00;
}

console.log(`O valor do Plao de saúde do(a) ${nome} é: ${valor.toFixed(2)}`)
