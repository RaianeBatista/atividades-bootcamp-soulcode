// Crie uma função chamada saudacao que recebe um nome como parâmetro e imprime no console:
// "Olá, [nome]!"

function saudacao(nome) {
    return "Olá, " + nome;
}
console.log(saudacao("Raiane."));

// Crie uma função soma que recebe dois números como parâmetros e retorna o resultado da soma.
const somar = (n1, n2) => n1 + n2;

console.log(somar(2, 8));

// Crie uma função ehPar que recebe um número e retorna true se for par, ou false caso contrário.
function ehPar(numero) {
    if (numero % 2 == 0) {
        return "É Par";
    } else {
        return "É Impar";
    }
}
console.log(ehPar(9));

// Crie uma função que receba um número e retorne o seu fatorial (ex: 5! = 120).
function fatorial(numero) {
    let resultado = 1;

    while (numero > 1) {
        resultado = resultado * numero;
        numero = numero - 1;
    }
    return resultado;
}
console.log(fatorial(5));
// Crie uma função que receba dois números e retorne o maior deles.
function maiorQue(n1, n2) {
    if (n1 > n2) {
        return "O primeiro é maior que o segundo";
    } else {
        return "O segundo é maior que o primeiro";
    }
}
console.log(maiorQue(1, 2));

// Crie uma função que recebe um vetor de números e retorna a média aritmética dos valores.
function calculaMedia(numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    let media = soma / numeros.length;
    return media;
}
let lista = [15, 95, 17];
console.log(calculaMedia(lista));

// Crie uma função que recebe uma string e retorna ela invertida (ex: "JavaScript" → "tpircSavaJ").

const inverteString = (str) => {
    return str.split("").reverse().join("");
};

const stringOriginal = "JavaScript";
const stringInvertida = inverteString(stringOriginal);

console.log(stringOriginal);
console.log(stringInvertida);

// Crie um array com 5 nomes. Mostre o primeiro e o último nome no console.
const nomes = ["João", "Maria", "Ana", "Luiz", "Carmem"];

const primeiroNome = nomes[0];
const ultimoNome = nomes[nomes.length - 1];
console.log("Primeiro nome: " + primeiroNome);
console.log("Último nome: " + ultimoNome);

// Crie um array de frutas. Adicione duas novas fruta.

const frutas = ["Kwui", "Melancia", "Banana"];
console.log(frutas);

frutas.push("Uva", "Maçã");
console.log(frutas);

// Crie um vetor com nomes e use o método sort() para ordená-los em ordem crescente.
const linguagens = ["JavaScript", "Phyton", "Golang", "Java", "Ruby"];

const ordenaNome = linguagens.sort();
console.log(ordenaNome);

// Dado um array de números, verifique se o número 10 está presente.
const numeros = [1, 5, 9, 7, 10, 8, 5];
function verificaNumero() {
    if (numeros.includes(10)) {
        return "Está presente";
    } else {
        return "Não está presente";
    }
}

console.log(verificaNumero());

// Crie um array de números e use um laço for para calcular e exibir a soma total dos valores.
const numAleatorio = [9, 8, 5, 4, 7, 6, 2];

function somaNumeros(numAleatorio) {
    soma = 0;
    for (let numero of numAleatorio) {
        soma += numero;
    }
    return soma;
}
console.log(somaNumeros(numAleatorio));

// Dado um array de números, crie um novo array com apenas os números pares.
const numeros1 = [89, 74, 10, 25, 46, 11];
const numerosPares = numeros1.filter((num) => num % 2 == 0);
console.log(numerosPares);

// Crie um objeto pessoa com as propriedades nome, idade e cidade. Exiba cada uma das propriedades no console.
const pessoa = {
    nome: "Mariana Chaves",
    idade: 8,
    cidade: "Itaituba",
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);
// A partir do objeto pessoa, adicione dinamicamente a propriedade profissao.
const pessoa2 = { ...pessoa };
pessoa2.profissao = "Engenheira de Software";
console.log(pessoa2);

// Crie um array com 3 objetos representando alunos. Cada objeto deve conter nome, nota1 e nota2.
alunos = [
    {
        nome: "João",
        nota1: 8,
        nota2: 9.6,
    },
    {
        nome: "Ana",
        nota1: 10,
        nota2: 9,
    },
    {
        nome: "Sara",
        nota1: 9.8,
        nota2: 9.4,
    },
];

// Percorra o array da questão anterior com um laço e calcule a média das notas de cada aluno. Exiba o nome e a média.
alunos.forEach((aluno) => {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log("Nome:" + aluno.nome + ", Média: " + media.toFixed(2));
});

// Crie uma função que recebe um objeto carro com as propriedades marca e modelo, e retorna a frase:
// "Carro: [marca] [modelo]"

const carro = {
    marca: "Fiat",
    modelo: "Uno",
};
console.log(carro);

function exibeCarro(carro) {
    return "Carro: " + carro.marca + " " + carro.modelo;
}
console.log(exibeCarro(carro));
