/*
-  Faça um algoritimo que dado 3 valores, calculam a média geral e classifica: Reprovação- Recuperação-Média Aceita.
média = (nota1 + nota2 + nota3)   / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, média aceita;

*/

const valor1 = 6.5;
const valor2 = 7;
const valor3 = 8;

const media = (valor1 + valor2 + valor3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovação');
} else if (media >= 5 && media <= 7)  {
    console.log('Recuperação');
} else {
    console.log('Média Aceita');
}
