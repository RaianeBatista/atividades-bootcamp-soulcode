//let cidades = ["São Paulo", "Itaituba", "Santa Catarina"];
const cidades = ["São Paulo", "Itaituba", "Santa Catarina"]; // Recomendado usar a const, não pode alterar o valor va variavel

console.log(cidades[2]);

cidades[2] = "Recife";

console.log(cidades);

//node --watch matriz.js => Deixa o server atento a alterações, para quem quiser
//node --watch arrays.js
const nuncaFacaIsso = ["Fulano", 15, true, [1, 2, 3]];
console.log(nuncaFacaIsso);

// Matiz bidimensional

const matriz = [
    [1, 2, 3, 7],
    [4, 5, 6, 3],
    [7, 8, 9, 1],
];
console.log(matriz[1][2]);

// Principais métodos
//length, push, pop, forEach, map, filter, find, includes

const alunos = ["Fernanda", "Raiane", "Alessandro"];
alunos.length;

console.log(alunos[alunos.length - 1]); // retorna o ultimo elemento do array
console.log("Tamanho do array:", alunos.length);

// Muita atenção no Método push
alunos.push("Jacqueline"); // Adiciona elemento no array
console.log(alunos);

alunos.pop(); // remove o ultimo elemento
console.log(alunos);

let nome = "JavaScript"; // String se comporta como uma lista
console.log(nome[4]); // boxing
console.log(nome.replace("Java", "Type")); // boxing, metodo da string

// Métodos que recebem callbacks: forEach, map, find

alunos.forEach((aluno, indice) => {
    // (aluno, indice) callback
    console.log(aluno, indice);
});

alunos.forEach(() => {
    //console.log("ola") // aqui ele vai retornar 3 vezes por conta o tamaho do array
});

// Método map(), gera uma nova lista
// const novosAlunos = alunos.map((callback) => {
//     console.log(callback);
// });

// Muita atenção para o método Map, muito usado em React
const novosAlunos = alunos.map((callback) => {
    return callback + " Brasil";
});

console.log(novosAlunos);

const numeros = [5, 7, 2, 9, 0];
const dobro = numeros.map((n) => n * 2); // map com callback

console.log(numeros);
console.log(dobro);

function triplo(n) {
    return n * 3;
}

console.log(numeros.map(triplo));

// Filter, callback retorna a expressao logica
const filtro = numeros.filter((n) => n % 2 == 1);

console.log(numeros.filter((n) => n % 2 == 1));
console.log(filtro);

const quadrados = filtro.map((n) => n ** 2);
console.log(quadrados);

// Find -> busca se tem o elemento
const buscarNum = numeros.find((n) => n > 6);
console.log(buscarNum);

const todos = numeros.filter(() => true);

// Metodo includes(), sem callback
console.log(alunos);

const presente = alunos.includes("Lucy");

console.log(presente ? "SIM" : "NÃO");

// sort (), função que não tem paâmetro
const nums = [10, 7, 4, 12, 6];
console.log(nums.sort());

const frutas = ["Banana", "Abacaxi", "Morango"];

console.log("Usando for tradicional");
for (let i = 0; i < frutas.length; i++) {
    console.log("Vou comer " + frutas[i]);
}

console.log("***Usando forEach***");
frutas.forEach((fr) => {
    console.log("Vou comer " + fr);
});

console.log("***Usando for of***");
for (let fruta of frutas) {
    console.log("Vou comer " + fruta);
}
