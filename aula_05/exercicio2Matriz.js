const leia = require("readline-sync")

let matriz = [
    [1, 12, 23],
    [45, 5, 16],
    [37, 8, 9]
];

let diagonalPrincipal = [];
let diagonalSecudaria = [];
let somaDiagPrin = 0;
let somaDiagSec = 0;

for( let i = 0; i < 3; i++){
    diagonalPrincipal.push(matriz[i][i]);
    somaDiagPrin += matriz[i][i];

    diagonalSecudaria.push(matriz[i][2 - i]);
    somaDiagSec += matriz[i][2 - i];
}

console.table(matriz);

console.log("Elementos da Diagonal principal: ", diagonalPrincipal.join(", "));
console.log("Elementos da Diagonal secundária: ", diagonalSecudaria.join(", "));
console.log("soma da diagonal principal: ", somaDiagPrin);
console.log("soma da diagonal secundaria: ", somaDiagSec);

