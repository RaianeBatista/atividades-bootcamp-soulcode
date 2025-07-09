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
    "anos e minha altura é",
    altura,
    "m."
);

// 2.Crie duas variáveis numero1 e numero2. Some os dois valores e exiba o resultado no console com a frase:
// "A soma é: 15" (troque 15 pelo valor real da soma).

let numero1 = 5, //Declarando na mesma instrução
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
let x = 5,
    y = 8,
    aux;
console.log(x, y);
aux = x;
x = y;
y = aux;

console.log(x, y);

//7. Crie uma variável dividendo com valor 50 e uma divisor com valor 0. Tente fazer a divisão e observe o resultado.
let dividendo = 50,
    divisor = 0;
let divisao = dividendo / divisor;
console.log(divisao);
console.log("Questão 8");
//8.Crie uma variável contador com valor 10. Use os operadores de incremento e decremento (++ e --) para somar 1 e depois subtrair 1, mostrando os valores após cada operação.
let contador = 10;
console.log(contador);
contador++; //11 Incremento depois do console
console.log(contador); //11
contador--; // 11 - 1
console.log(contador); // 10

// Não temn divisão por 0 zero e retorna infinito