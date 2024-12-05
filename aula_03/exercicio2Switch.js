const leia = require("readline-sync")

console.log("Tabela de Preço")
console.log(" 1 - Cachorro Quente R$10.00")
console.log(" 2 - X-Salada  R$15.00")
console.log(" 3 - X-Bacon  R$18.00")
console.log(" 4 - Bauru R$12.00")
console.log(" 5 - Refrigerante R$8.00")
console.log(" 6 - Suco de Laranja R$13.00")

let codigoItem = leia.questionInt("Digite o produto desejado: ");
let quantidade = leia.questionInt("digite a quantidade que deseja comprar: ");

let nomeProduto;
let precoUnitario;

switch(codigoItem){
    case 1:
        nomeProduto = "Cachorro Quente";
        precoUnitario = 10.00;
        break;
    case 2:
        nomeProduto = "X-Salada";
        precoUnitario = 15.00;
        break;
    case 3:
        nomeProduto = "X-Bacon";
        precoUnitario = 18.00;
        break;
    case 4:
        nomeProduto = "Bauru";
        precoUnitario = 12.00;
        break;
    case 5:
        nomeProduto = "Refrigerante";
        precoUnitario = 8.00;
        break;
    case 6:
        nomeProduto = "Suco de Laranja";
        precoUnitario = 13.00;
        break;
    default:
        console.log(" codigo do item inválido");
        nomeProduto = null;                        
}

if(nomeProduto){
    var valorToral = precoUnitario * quantidade;
    console.log(` Produto:  ${nomeProduto}`);
    console.log(`Quantidade:  ${quantidade}`);
    console.log(`Valor Total:  ${valorToral.toFixed(2)}`); 
}