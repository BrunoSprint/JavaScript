/*
2) OIMC - Indice de Massa Corporal é um criterio da Organização Mundial da Saúde para dar um indicação
sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em Adultos, Condições:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso Normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;

*/

const peso = 70;
const altura = 1.70;
const imc = peso / Math.pow(altura, 2);
console.log(imc);

if(imc < 18.5){
    console.log('Abaixo do Peso');
}else if (imc >= 18.5 && imc < 25){
    console.log('Peso Normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}









