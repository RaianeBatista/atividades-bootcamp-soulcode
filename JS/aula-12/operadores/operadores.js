//console.log("Ola mundo!");

// Para abrir o terminal control + j

// Atalho para a pasta desejada no terminal
//  cd js/aula-12/operadores e
// com o botão direito Open in Integrated Terminal, na pasta desejada,
// ja abri direto no terminal o atalho desejada
// para executar o arquivo pelo terminal:
// C:\Bootcamp_SoulCode\web-dev-studies\JS\aula-12\operadores>node operadores.js
//Ola mundo!
// da pra arrastar e soltar no terminal tbm gente
//'use strict' obriga a ter o ponto a virgula ; no final
// Para limpar o terminal digite o cls
// let nome = "Raiane Batista";
// let idade = 36;

// nome = "José Davi";

//console.log(nome, idade);
//console.log(idade)

// const PI = 3.14;

// PI = 3.10 // erro

//console.log(PI);

// Tipagem
// let hoje = "08/07/2025";
// hoje = 872025;
// hoje = true;
// //console.log(hoje);

// let sobrenome = "Batista";
// let altura = 1.65;
// let peso = 68;
// let ensinoSuperior = false;
// let telefone;
// let cpf = null;
// let linguagens = ["Java", "JavaScript", "PHP"];
// let endereco = { cidade: "Itaituba", estado: "PA" };

//console.log(sobrenome, altura, peso, telefone, cpf, linguagens, endereco);

// console.log(typeof sobrenome);
// console.log(typeof altura);
// console.log(typeof peso);
// console.log(typeof ensinoSuperior);
// console.log(typeof telefone);
// console.log(typeof cpf);
// console.log(typeof linguagens);
// console.log(typeof endereco);

// Operadores - aritmeticos, atribuição, incremento, decremento, logicos
//Operadores aritméticos

// let numero1 = 4;
// // let numero2 = 5;
// let numero1 = 6,
//     numero2 = 3;
// //console.log(numero1, numero2);

// let soma = numero1 + numero2; // Operador de Adição, soma
//console.log(soma);
// console.log(numero1 + numero2);

// console.log(numero1 - numero2); // Operador de Subtração

// console.log(numero1 * numero2); // Operador de Multiplicação

// console.log(numero1 / numero2); // Operador de Divisão

// console.log(numero1 ** numero2); // Operador de Exponenciação

//console.log(numero1 % numero2); // Operador Modulo, Resto da divisão

//console.log((4 * 3) / (2 + 9)); // Os parenteses tem prioridade,
//  apos vem a exponenciação, multiplicação, divisão,
// e os demais da esquerda p direita

//console.log(7 + 3 * 5 - 10 + 2 ** 4);

//Operadores de Atribuição => =; += ele mantem a variavel pega o valor atual e soma com o novo valor e acumula o valor
// atribuição acumulativa ;
// let numero3 = 3

// numero3 = 4;
// let numero3 = 3;

// numero3 += 4; // 7 incremento

// numero3 -= 2; // decremento

// numero3 *= 4;

// numero3 /= 10;

// //console.log(numero3)

// let numero4 = 8;

// console.log(numero4);
// console.log(numero4++); // Pós incrementoExecuta primeiro antes de executar o console, so executa no final da instrtução
// console.log(++numero4); // Pré incremento ele exuta antes e depois o console
// console.log(numero4--) // só faz o decremento depois de exibir no console
// console.log(--numero4)

// numero4++;

// console.log(numero4)

// nessa instrução da linha 70 ele ainda irá imprimir o 8...
// na contagem da instrução 71 ele irá imprimir o incremento, 9

// 9 + 1 mostrado direto na linha 72, pq é pré incremento

// no pós, sendo incremento / decremento sempre vai precisar
// de 1 linha a mais de instrução console.log pra mostrar, pelo que eu entendi

//Operadores de Comparação
// let a = 2,
//     b = 3; // declara 2 variaveis com a mesma instrução
// console.log(a == b); // verifica se são iguais
// console.log(a != b); // verifica se são diferentes
// console.log(a > b); // Verifica se a > b
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a === b);
// console.log(2 == "2"); // Só verifica os valores
// console.log(2 === "2"); // Veririca a tipagem e valores
// console.log(0 == ""); // Conceito unboxing e outbox, converter implictamente os tipos, o JS converte a strig vazia para 0, não visiveis
// console.log(0 == false);

// console.log("Raiane" == "raiane");
// console.log("ANA" == "ANA");

//Operador de conjunção E &&, Disjunção OU ||, Negaçao NAO !
// Tabela Verdade
// let x = true, y = false;

// console.log(x && y) // false
// console.log(x || y) // true
// console.log(x && x) // true
// console.log(!x)
// console.log(!y && x)

// console.log(5 * 3 == 21 || 60 < 34 * 2)
//15 == 21 || 60 < 68
// false || true
// true
// aritmeticas > comparação > logicas

// Atividade - JavaScript (Aula 12)

// 1. Declare três variáveis chamadas nome, idade e altura. Atribua valores a elas e exiba uma frase como:
// "Meu nome é João, tenho 25 anos e minha altura é 1.75m."
let nome = "Raiane",
    idade = 36,
    altura = 1.64;
console.log(
    "Meu nome é",
    nome,
    ",tenho",
    idade,
    "anos e minha altura é ",
    altura,
    "m."
);

// 2.Crie duas variáveis numero1 e numero2. Some os dois valores e exiba o resultado no console com a frase:
// "A soma é: 15" (troque 15 pelo valor real da soma).

let numero1 = 5,
    numero2 = 3,
    resultado = numero1 + numero2;

console.log("A soma é:", resultado);

//3. Declare três variáveis com números decimais e calcule a média entre eles.

let numero3 = 3.6,
    numero4 = 5.8,
    numero5 = 1.9;
let media = (numero3 + numero4 + numero5) / 3;

console.log("A média é: ", media);

//4. Dado os valores a = 10, b = 5 e c = 2, calcule o resultado da expressão: (a + b) * c / 2
let a = 10,
    b = 5,
    c = 2;
let resultExpressao = ((a + b) * c) / 2;

console.log("O resultado é:", resultExpressao);

//5. Crie uma variável idade e verifique se o valor é maior ou igual a 18 usando o operador de comparação.
//Exiba uma mensagem: "É maior de idade: true/false".
let idade2 = 12;
let verificaIdade = idade2 >= 18;
console.log("É maior de idade:", verificaIdade);

// 6. Declare duas variáveis com valores diferentes. Troque os valores entre elas e mostre os novos valores no console.
let valor1 = 14,
    valor2 = 18;

valor1 = valor2; //14 v1 = 18
valor2 = valor1; //

console.log(valor1, valor2);

//7. Crie uma variável dividendo com valor 50 e uma divisor com valor 0. Tente fazer a divisão e observe o resultado.
let dividendo = 50,
    divisor = 0;
let divisao = dividendo / divisor;
console.log(divisao);
console.log("Questão 8");
//8.Crie uma variável contador com valor 10. Use os operadores de incremento e decremento (++ e --) para somar 1 e depois subtrair 1, mostrando os valores após cada operação.
let contador = 10;
console.log(contador);
contador++;
console.log(contador);
contador--;
console.log(contador);
