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