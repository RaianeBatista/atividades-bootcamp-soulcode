// const titulo = document.createElement("h1")
// titulo.textContent = "Atividade JavaScript - Lâmpada"
// document.body.appendChild(titulo)

const lampadas = [
"./images/lampada-apagada.png",
"./images/lampada-acesa.png",
]
const lampada = document.querySelector("#lampada");
let indice = 0;


const corDeFundo = ["black", "white"]
const cor = document.querySelector("body")
let i = 0;



setInterval(() => {
    if (indice == 0 && i == 0 ) {
        indice = 1, i = 1, texto = 1
    } else {
        indice = 0, i = 0, indiceTexto = 0
    }
    lampada.src = lampadas[indice]
    cor.style.background = corDeFundo[i]

},2000)