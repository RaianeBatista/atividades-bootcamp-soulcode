let idade = 12;

if (idade >= 18) {
    // escopo é tudo que esta dentro das chaves, bloco conteudo interno
    // console.log("Maior de idade.");
} else {
    //console.log("Menor de idade.");
}

// entrar em parque de diversões
let altura = 145;
let funcionario = true;

if (altura >= 150 || funcionario) {
    // console.log("Catraca aberta.");
} else {
    // console.log("Catraca fechada.");
}

// Else if
// aprovação de alunos em uma disciplina
let nota = 10;

if (nota == 10) {
    // console.log("Aprovado. Parabéns!");
} else if (nota >= 7) {
    // console.log("Aprovado.");
} else if (nota >= 5) {
    //  console.log("Prova final.");
} else {
    //  console.log("Reprovado.");
}

// Estrutura Condicional - Operador Ternário
//3 + 4 operador
//! false -> Operador unilateral
// expressao ? valor x : valor y

let estoque = 1;
// Faz a verificação inicial
// ? => se if
// : senao else
console.log(estoque > 0 ? "Estoque disponível" : "Estoque Indiponível");

// Exemplo, converte true, false, para sim e não
let ativo = false; // true
let texto = ativo ? "SIM" : "NÂO";
console.log("Usuário está ativo?", texto);

// Estrutura de Seleção switch case:
// Selecionar dia da smana
let dia = 4;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default: // Por ser o  último não precisa de break
        console.log("Opção inválida!");
}

let cor = "roxo";

switch (cor) {
    case "azul":
    case "vermelho":
    case "amarelo":
        console.log("Cor Primária");
        break;
    case "verde":
    case "laranja":
    case "roxo":
        console.log("Cor Secundária");
        break;
    default:
        console.log("Opção Inválida");
}

// Estrutura de Repetição
// for (expressao1, expressao2; expressao3) {
//     bloco de código
// } Para cada valor de i executa
// for (let i = 0; i < 5; i++) { i = iteração iterator, repetição
// console.log("O número é", i)
// }
for (let cont = 0; cont <= 5; cont++) {
    // cont <= 5;
    console.log("O número atual é", cont);
}

// contagem regressiva
for (let i = 10; i >= 1; i--) {
    console.log("Lançamento em", i);
}

//
let resultado = 4 + "4"; //Concatenação
console.log(resultado);

for (let i = 0; i < 5; i++) {
    let asteriscos = "";
    for (j = 0; j < 5; j++) {
        asteriscos += "*";
    }
    console.log(asteriscos);
}

// Estruturas de Repetição for in, chaves representam objetos
let aluno = { nome: "Raiane", idade: 36, curso: "Computação" }; // Possio 3 propriedades

for (let propriedade in aluno) {
    // console.log(propriedade);
    //  console.log(aluno[propriedade]);
    console.log(propriedade);
}

let nomes = ["Caio", "Ana", "João", "Maria"]; // Percorre as posições do array
for (let indice in nomes) {
    console.log(indice);
}

for (let nome of nomes) {
    // for each Pecorre os valores do array, não funciona com objetos, somente o for in
    // forEach
    console.log(nome);
}

let aula = "JavaScript";
let count = 0;
for (let letra of aula) {
    console.log(letra);
    count++;
}
console.log(count);

// Laço de Repetição While
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

let z = 0;
while (z < 10) {
    console.log(z);
    z += 2;
}

// Usando o DOM do navegador
// while (true) {
//     let numero = window.prompt("Digite um número:");
//     let sorteado = 10;

//     if (numero == sorteado) {
//         break;
//     }
// }
