/*
Algoritimo que elabora valor com base no metodo de pagamento.

Código, condição de pagamento:
1- À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou Pix, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta, sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais 10% de juros;
*/

const precoEtiqueta = 100
const formaDePagamento = 2 

if( formaDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}


