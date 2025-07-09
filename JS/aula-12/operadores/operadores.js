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

