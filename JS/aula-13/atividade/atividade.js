// Crie um programa que declare uma variável número e verifique se o valor é par ou ímpar usando if/else.
let numero = 3;
if (numero % 2 == 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

// Crie uma variável mes que recebe um número de 1 a12. Use switch para imprimir o nome do mes da ano correspondente (1 = Janeiro, 2 = Fevereiro, etc).
let mes = 12;
switch (mes) {
    case 1:
        console.log("O mês é Janeiro");
        break;
    case 2:
        console.log("O mês é Fevereiro");
        break;
    case 3:
        console.log("O mês é Março");
        break;
    case 4:
        console.log("O mês é Abril");
        break;
    case 5:
        console.log("O mês é Maio");
        break;
    case 6:
        console.log("O mês é Junho");
        break;
    case 7:
        console.log("O mês é Julho");
        break;
    case 8:
        console.log("O mês é Agosto");
        break;
    case 9:
        console.log("O mês é Setembro");
        break;
    case 10:
        console.log("O mês é Outubro");
        break;
    case 11:
        console.log("O mês é Novembro");
        break;
    case 12:
        console.log("O mês é Dezembro");
        break;
    default:
        console.log("Opção inválida!");
}
// Utilize um laço for para imprimir os números de 20 a 10 no console.
for (y = 20; y >= 10; y--) {
    console.log("Número : ", y);
}
// Use um laço while para mostrar todos os números pares de 0 a 20.
let i = 20;
while (i <= 0) {
    console.log(i);
    i++;
}
// Use for...in para exibir no console cada propriedade do objeto.
let endereco = { cidade: "São Paulo", estado: "SP", cep: "12345-67" };
for (let logradouro in endereco) {
    console.log(logradouro);
}

// Use for...of para percorrer o vetor e exibir cada fruta no console.
let frutas = ["Goiaba", "Morango", "Abacaxi", "Manga", "Abacate"];
for (let indice of frutas) {
    console.log(indice);
}

// Usando for, exiba no console a tabuada do número 5 (de 5x1 até 5x10).
let tabuada = 5;
for (i = 1; i <= 10; i++) {
    let resultado = tabuada * i;
    console.log(tabuada + " x " + i + " = " + resultado);
}

// Crie uma variável nota com valor de 0 a 10. Use if/else para exibir:
// "Reprovado" se nota < 5
// "Recuperação" se nota >= 5 e < 7
// "Aprovado" se nota >= 7
let nota = 4;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
// Crie um programa que calcule a soma dos números de 1 a 100 usando um laço while.
let contador = 1;
let soma = 0;
while (contador <= 100) {
    soma = soma + contador;
    contador++;
}
console.log("A soma dos números de 1 a 100 é: " + soma);
