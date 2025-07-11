// Abstrair informações, nome das propriedades.. chave: valor
const pessoa = {
    /*chave propridades */ nome: "Raiane Batista" /*valor da propriedade*/,
    idade: 36,
    genero: "Feminino",
    email: "raianebatistasc@gmail.com",
    pcd: false, // cor azul
    // falar() {
    //     console.log("oi") fica na cor roxo
    // }
};

console.log(pessoa.nome, pessoa.email);
console.log(pessoa);

pessoa.idade = 37;
console.log(pessoa.idade);

console.log(pessoa["nome"]);

const obj1 = {
    a: 1,
    b: 2,
};

const obj2 = obj1; // cópia do obj1
obj2.a = 3; // Aqui modifica todos os objetos, muda a referencia da prop do objeto

//console.log(obj1, obj2)

let n1 = 4;
let n2 = n1;

n2 += 1;
//console.log(n1, n2)

// Alterando a referencia do Objeto
const livro = {
    titulo: "Sem limites",
    autor: "Jim Kwik",
    paginas: 400,
};

//Para copiar um obejeto e matriz usa-se o Spread,
// q daí da de vc mudar a exata propriedade que você quiser

console.table(livro);
const copia = { ...livro, titulo: "O senhor do Aneis" }; // spread operator

console.table(copia);

// Com o Spread Operator, mudados os elementos do array sem alterar o primeiro array
const mat1 = [1, 2, 3];
const mat2 = [...mat1];
mat2[0] = 4;

console.log(mat1, mat2);

const venda = {
    total: 150.6,
    data: "11/07/2025",
    pago: true,
    cliente: { // objeto
        nome: "Raiane",
        codigo: 123,
    },
    produtos: ["Pão Francês", "Panela de Pressão", "Guarda-Chuva"], // lista
};

console.log(venda.cliente.nome) // acessando um objeto usa o ponto
console.log(venda.produtos[0]) // Acessando um array []


const contatos = [
    {tel: "99999999", nome: "Fulano"},
    {tel: "98888888", nome: "Ciclano"},
    {tel: "97777777", nome: "Beltrano"},
];

console.table(contatos)
console.log(contatos[0].nome)
console.log(contatos[2].tel)