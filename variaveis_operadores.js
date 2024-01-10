console.log('Orientação em JavaScrip')


let variavel = 10;       // = valor de atribuição    VALORxVARIAVÉL
console.log(variavel)

variavel = 20 + 10;
console.log(variavel)


const pi = 3.14;         // usa-se . em valores Flutuantes
console.log(pi)


// Simbolos ultilizados para definir operadores aritiméticos:
//. + . - . * . / . % ."mais-menos-vezes-dividir-porcentagem"
 


// Operadores Lógicos: soma+ | subtração- | multiplicação * | divisão / | porcentagem % |



// exemplo soma
let idade = 30
console.log(idade)
idade = 30 + 6
console.log("Valor da Variavel-" + idade)   // neste ex: mostra a concatenação de texto + variavel por intermedio do sinal de soma +



// exemplo subtração

idade = 36 - 3
console.log("Operação de Subtração " + idade)


let codigoDoProduto = 1023
let codigoExato = codigoDoProduto - 1000
console.log(codigoExato)


let primeiroNumero = 1023
let segundoNumero = 22
console.log(primeiroNumero - segundoNumero)

console.log(1000 - 58)




// exemplo multiplicação.

let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log(valorComTaxa)


let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log("Resultado da Multiplicação é: " + produto)

//  let só deve ser usado na primeira vez q a vaariavel for declarada no código.


multiplicador = 8
produto = multiplicador * multiplicando
console.log("Resultado da Multiplicação é: " + produto)




// Exemplo Divisão


let notaDoMercado = 50
let pessoasParaDividir = 2
console.log("Resultado Operação de Divisão " + notaDoMercado / pessoasParaDividir)


notaDoMercado = 50
pessoasParaDividir = 3
console.log("Resultado Operação de Divisão " + notaDoMercado / pessoasParaDividir)


let calculo = 10 / 3
console.log(calculo)



// Neste exemplo o resultado será o valor restante da divisão. é usado o sinal de "módulo" %
let calculo2 = 10 % 3
console.log("Valor Restante a divisão por 3: " + calculo2)




//                   Incremento     Decremento


let contador = 1 
// '++'  incremento
contador++
contador = contador + 1    // adiciona valor expecifico a variavel.
contador++  // adiciona o valor  1 há variavel  contador, obs método dinamico.


// '--' decremento

contador = contador - 1     //  metódo decremento valor expecifico.
contador--                  // método decremento valor 1


console.log(contador)



//       Valores de Atribuição.

let preco = 10

preco += 5   
// Nesta declaração foi atribuido o valor 5, o sinal + antes da atribuição = , 
// propõem que o valor da variavel seja somado com a nova atribuição. 

preco = preco + 5      //  metodo explicito de atribuição.

console.log(preco)




//     Expressões Matematicas         ESCOPO


let resultado = (2 * (5 + 5)  - 10)        // Declaração de escopo, prioriza a prioridade de execução

console.log(resultado)

