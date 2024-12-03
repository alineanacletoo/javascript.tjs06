const leia = require("readline-sync")

let salario = 10000.00
const abono = 1000.00

let salarioUm = leia.questionFloat("Digite o salario: ", salario)
const abonoUm = leia.questionFloat("Digite o abono: ", abono)

let novoSalario = salarioUm + abonoUm

console.log("O salário atualizado é: ", new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(novoSalario))

