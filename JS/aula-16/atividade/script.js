// const titulo = document.createElement("h1")
// titulo.textContent = "Atividade JavaScript - Lâmpada"
// document.body.appendChild(titulo)

const lampada = document.querySelector("#lampada");
const lampadas = ["./images/lampada-apagada.png", "./images/lampada-acesa.png"];
let indice = 0;

//const lampada.src

const cor = document.querySelector("body");
const corDeFundo = ["black", "white"];

setInterval(() => {
    if (indice == 0) {
        indice = 1;
    } else {
        indice = 0;
    }
    lampada.src = lampadas[indice];
    cor.style.background = corDeFundo[indice];
}, 2000);

setInterval: clearInterval(interval);