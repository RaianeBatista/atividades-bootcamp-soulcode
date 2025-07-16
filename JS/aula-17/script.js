const imagemPrincipal = document.querySelector("#imagem-principal");
// const imagem1 = document.querySelector("#imagem-1");
// const imagem2 = document.querySelector("#imagem-2");
// const imagem3 = document.querySelector("#imagem-3");
const imagens = document.querySelectorAll(".imagens"); // Retona um objeto iteravel

//Eventos em JavaScript
//imagem1.onclick = () => {
//imagem1.onmouseenter = () => {
// imagem1.ondblclick = () => {
//     // console.log("Oi");
//     // const url =
//     //     "https://images.unsplash.com/photo-1682685797742-42c9987a2c34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     //auxilia na troca de valores
//     const imagemAtual = imagemPrincipal.src; // essa é um variavel temporaria apenas p guardar a imagem principal
//     imagemPrincipal.src = imagem1.src;
//     imagem1.src = imagemAtual;
// };

// imagemPrincipal.ondblclick = () => {
//     imagem1.src = imagemPrincipal.src;
// };

// imagem2.ondblclick = () => {
//     const imagemAtual = imagemPrincipal.src;
//     imagemPrincipal.src = imagem2.src;
//     imagem2.src = imagemAtual;
// };

// imagem3.ondblclick = () => {
//     const imagemAtual = imagemPrincipal.src;
//     imagemPrincipal.src = imagem3.src;
//     imagem3.src = imagemAtual;
// };

// imagem1.onclick = () => {
//     const imagemAtual = imagemPrincipal.src;
//     imagemPrincipal.src = imagem1.src;
//     imagem1.src = imagemAtual;
// };

// for (let imagem of imagens) {
//     imagem.onclick = () => {
//         // console.log("OI");
//         const imagemAtual  = imagemPrincipal.src
//         imagemPrincipal.src = imagem.src;
//         imagem.src = imagemAtual
//     };
// }
// for (let imagem of imagens) {
//     //recebe o nome do evento e a função callback(função dentro de função)
//     imagem.addEventListener("click", (event) => {
//       //  console.log(event)
//         const imagemAtual = imagemPrincipal.src;
//         imagemPrincipal.src = imagem.src;
//         imagem.src = imagemAtual;
//     });
// }

// debugger;

for (let imagem of imagens) {
    //recebe o nome do evento e a função callback(função dentro de função)
    imagem.addEventListener("click", (event) => {
      //  console.log(event)
        const imagemAtual = imagemPrincipal.src;
        imagemPrincipal.src = event.target.src;
        event.target.src = imagemAtual;
    });
}

