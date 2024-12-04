const leia = require("readline-sync")

let nome = leia.question("Digite o nome do doador: ");
let idade = leia.questionInt("Digite a idade do doador: ");
let jaDoou = leia.question("Ja fez outras doeações de sangue? (sim/nao)").toLowerCase() === "sim";

if(idade >= 18 && idade <=69){
    console.log(`${nome}, você está apto para doar sangue.`);
}else if (jaDoou){
    console.log(`${nome}, você está apto para doar sangue.`);
}else {
    console.log(`${nome}, você não está apto para doar sangue.`);
}