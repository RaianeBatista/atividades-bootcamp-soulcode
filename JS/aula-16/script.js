//console.log("Olá novamente navegador");
console.log(document); //objeto que representa o html

// document.body.innerHTML = "<h1>Conteúdo alterado com JS</h1>"

const imgs = document.getElementsByTagName("img");
const cards = document.getElementsByClassName("card");
const carrossel = document.getElementById("carrossel");

console.log(imgs);
console.log(cards);
console.log(carrossel);

const linksFooter = document.querySelectorAll("footer .nav-link"); // retorna uma lsita de objetos
const main = document.querySelector("main"); // retorna o objeto referente a primeira aparição primeiro que encontrar

console.log(linksFooter);
console.log(main);

const titulo = document.querySelector(".navbar-brand");

console.log(titulo);
console.log(titulo.innerHTML);
//itulo.innerHTML += "Novo <b>Título</b>";
titulo.innerHTML += " Plataforma<b> Educacional</b>";
titulo.href = "https://soulcode.com";
titulo.style.color = "#336ee3";
titulo.style.fontsize = "2rem";
titulo.setAttribute("target", "_blank");

// setTimeout(() => {
//     titulo.style.color = "#33e362"
// },5000)

const patrocinadores = document.querySelector("#patrocinadores");
const lista = [
    "TechSolutions",
    "CodeMaster Academy",
    "InovaTech",
    "DigitalBoost",
    "CloudNinja",
    "WebDevPro",
    "StartUp Power",
    "DevTools Co.",
    "FullStack Partner",
    "NextGen Learning",
];

for (let item of lista) {
    //  const card = "<div class = 'card p-3'>";
    //patrocinadores.innerHTML += card
    patrocinadores.innerHTML += "<div class = 'card p-3'>" + item + "</div>";
}

const semaforos = [
    "./images/semaforo-1.png", // vermelho
    "./images/semaforo-2.png", // amarelo
    "./images/semaforo-3.png", // verde
];

let indice = 0;
const semaforo = document.querySelector("#semaforo")

setInterval(() => {
    if (indice == 0) {
        // mudar para amarelo
        indice++;
       // indice = 1;
       // semaforo.src = semaforos[indice]
    } else if (indice == 1) {
        // mudar para verde
        indice++;
        // indice = 2;
       //  semaforo.src = semaforos[indice];
    } else {
        //mudar para vermelho
        indice = 0;
        // indice = 0;
    }
    semaforo.src = semaforos[indice];
}, 1000);
