function preencherNaTela(dados) {
    cidades.innerHTML = "";
    for (let item of dados) {
        cidades.innerHTML += `<li>${item.nome}</li>`;
    }
}

const cidades = document.querySelector("#cidades");
const urlCidades =
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados/PA/municipios";

async function buscarDadosIBGE() {
    try {
        cidades.innerHTML = " <div class='spinner-border'></div>"; //// carregando Buscando cidades...
        const resposta = await fetch(urlCidades);
        // console.log(resposta)
        const dados = await resposta.json();
        // console.log(dados)
        preencherNaTela(dados);
    } catch (erro) {
        console.log(erro);
        cidades.innerHTML = "Houve um erro!";
    }
}

buscarDadosIBGE();

// const promessa = fetch(urlCidades);

// console.log(promessa)

// promessa.then((resposta) => {
//     console.log(resposta);
// promessa
//     .then((resposta) => {
//         const promessa = resposta.json();

//         promessa.then((dados) => {
//             // console.log(dados);
//             preencherNaTela(dados);
//         });
//     })
//     .catch((erro) => {
//         console.error(erro);
//         cidades.innerHTML = "Houve um erro!";
//     });

//JSON - JavaScript Object Notation
