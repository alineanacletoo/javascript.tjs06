const leia = require("readline-sync")

let n1 = leia.questionInt("Digite seu primeiro valor")
let n2 = leia.questionInt("Digite seu segundo valor")
let n3 = leia.questionInt("Digite seu terceiro valor")
let n4 = leia.questionInt("Digite seu quarto valor")

let diferencaFinal = (n1 * n2) - (n3 * n4)

console.log("A diferença é de : ". diferencaFinal)