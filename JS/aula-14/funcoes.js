// Funções em JavaScript
//function cumprimentar() { // Função sem parametro  sem retorno
function cumprimentar(nome, sobrenome) {
    // Função com variavel sem a palavra net
    //  console.log("Olá Mundo " + nome + " " + sobrenome);
    //  console.log("Olá " + nome + " " + sobrenome); // A virgula so funciona no console log, ja o sinal de + é nativo do javascript, é a concatenação do javascript (sinal de +)
}
//console.log("Olá Mundo")

//cumprimentar();
cumprimentar("Raiane", "Batista");
cumprimentar("Gabriel"); // sem o segundo paramentro fica undefined
cumprimentar("Ana", "Barbosa");
// cumprimentar;

//console.log(typeof cumprimentar)

// Há 4 tipos de funções
// Função sem parâmetros e sem retorno
// Função com parâmetros e sem retorno
// Função sem parâmetros e com retorno
// Função com parâmetros e com retorno

// let cumprimento = cumprimentar();
// console.log(cumprimento)// undfined

// Função com retorno
function calcularAreaRetangulo(base, altura) {
    let area = base * altura;
    return area;
    //console.log(area);
}

let resultado = calcularAreaRetangulo(4, 5);
//console.log(resultado);

function buscarTodosProdutos() {
    // consultador no banco de dados
    let produtos = ["produto1", "produto2"];
    return produtos;
}

let produtosBanco = buscarTodosProdutos();
//console.log(produtosBanco);

// Definir valor padrão para paramentros de funções
// Função com valor padrão de parâmetro
//function calcularPotencia(base, expo ) {
function calcularPotencia(base = 0, expo = 1) {
    let potencia = base ** expo;
    return potencia;
}

//let potenciaResult = calcularPotencia(2, 10);
//let potenciaResult = calcularPotencia(2); //NaN faltou o segundo parametro
let potenciaResult = calcularPotencia(5, 2);
//console.log(potenciaResult);

// Funções anônimas
//let somar = function (n1, n2) { // Função dentro de variavel
const somar = function (n1, n2) {
    // Função q não é de seta
    let soma = n1 + n2;
    return soma;
};

console.log(somar(12, 8));

// Funções de seta => (Arrow Functions)
// Cria a variavel constante e poe a funcão anonima dentro dessa constante
const subtrair = function (n1, n2) {
    // Função com seta
    const valor = n1 - n2;
    return valor;
};

//console.log(subtrair(15, 9));

// Função de seta é para função enchuta, reduzir codigo

const subtrair2 = (n1, n2) => {
    // Sem a palavra function
    // const valor = n1 - n2;
    // return valor;
    return n1 - n2;
};

let resultado3 = subtrair2(15, 9);
console.log(resultado3);

// Arrow function
const subtrair3 = (n1, n2) => n1 - n2; // Função com uma linha de código,
// omitir as chaves e po return, nesses casos, o return fica explicito apos a seta

let resultado4 = subtrair2(15, 9);
console.log(resultado4);

//Exemplo 2 - Arrow function
const quadrado = (n) => n ** 2;
console.log(quadrado(8));

// Funções Callback, função passada como argumento para outra
function delay() {
    // console.log("Acabou o tempo");
}

setTimeout(delay, 3000);

// Exemplos de callback
function saudar(callback, nome) {
    // (função e a pessoa)
    console.log("Preparando a saudação.");
    callback(nome);
}
function mostrarSaudacao(nome) {
    // função callback
    console.log("Olá", nome);
}

function boasVindas(nome) {
    // função callback
    console.log("Bem-vindo", nome);
}

saudar(mostrarSaudacao, "Raiane");
saudar(boasVindas, "Orlima");

setTimeout(() => {
    console.log("Acabou o tempo!");
}, 3000);

let interval = setInterval(() => {
    console.log("Passou 4 segundos.");
}, 4000);

clearInterval(interval); // Para parar a função setInterval

console.log("Final do código.");

// Função SIM/NAO numero Par

// function verificarPar(numero) {
//     if (numero % 2 == 0) {
//         return "SIM";
//     } else {
//         return "NÃO";
//     }
// }
function verificarPar(numero) {
    if (numero % 2 == 0) {
        return "SIM"; // Quando encontra a palavra return ele encerra a função e não retorna mais, encerra a função
    }
    return "NÃO"; // O return encerra a função
}

console.log(verificarPar(16));
