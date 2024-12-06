const leia = require("readline-sync")

//linha da matriz
let matrizInteiros = new Array(3);

//coluna da matriz
for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(3);
}

// percorrendo a matriz e preenchendo com dados
//for( let indiceLinha = 0; indiceLinha > matrizInteiros.length, indiceLinha++){
   // for(let indiceColuna = 0; indiceColuna < matrizInteiros[indiceColuna].length, indiceColuna++){
      //  matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ");
  //  }
//}

//visualizando os dados inserido na matriz
console.table(matrizInteiros);