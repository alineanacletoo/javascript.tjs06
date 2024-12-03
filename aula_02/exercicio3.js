const leia = require("readline-sync")

let salarioBruto = leia.questionFloat("Digite o salário bruto: ")
let adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ")
let horasExtras = leia.questionFloat("Digite o numero de horas extras: ")
let desconto = leia.questionFloat("Digite o valor dos descontos: ")

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - desconto

console.log("O salário liquido é: ", salarioLiquido.toFixed(2))