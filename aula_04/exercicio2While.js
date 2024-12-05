const leia = require("readline-sync")

let idade,
    menoresDe21 = 0,
    maioresDe50 = 0;

while(true){
    idade = leia.questionInt("Digite a idade: (Digite um numero negatico para sair) ");

    if(idade < 0){
        break;
    }

    if(idade < 21){
        menoresDe21++;
    }else if (idade > 50){
        maioresDe50++;
    }
} 

console.log(`Total de pessoas com menos de 21 anos: ${menoresDe21}`);
console.log(`Total de pessoas com mais de 50 anos: ${maioresDe50}`);