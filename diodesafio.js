/* 
Faça um programa para calcular o valor de uma viagem.

Variáveis: 
 1° - Preço do Combustivel. 
 2° - Gasto médio de Combustivel por KM.
 3° - Distância em KM da Viagem.

 Imprima no Console o valor que será gasto de combustivel.


 * O valor do combustivel será uma const: r$ 5.79
 * Média por KM : 10km x litro
 * Distância em KM

* Use sempre o ; no final do valor, *junto.
 
=================================================================================================================================================
*/



const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));     // neste caso o .toFixed(2)); irá imprimir duas casas após a virgula.




