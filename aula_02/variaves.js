let nome = "Aline";
let profissao = "pessoa desenvolvedora";
let salarioBruto = 3500.44;
const bonus = 0.05;

console.log("nome: ", nome)
console.log("profissão: ", profissao)

let salario = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(salarioBruto + (bonus * salarioBruto))

console.log("o Salario bruto da colaboradora " + nome + " é " + salarioBruto);

//console.log(´o salario brunto da desenvolvedora ${nome} é ${salarioBruto}´);

//console.log("tipo de variavel: ", typeof nome)

//nome = 12

//console.log("nome: ", nome)

//console.log("tipo de variavel : ", typeof nome)