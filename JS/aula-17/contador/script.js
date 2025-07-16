const form = document.querySelector("#form");
const input = document.querySelector("#texto");
const painel = document.querySelector("#resultados");

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // para o envio do formulario
    //console.log("oi")
    // console.log(input.value)
    const texto = input.value;
    const tamanho = texto.length; // tamanho em quantidade de letras
    //console.log(tamanho);
    //painel.innerHTML = tamanho;
   // painel.innerHTML = tamanho;
    painel.innerHTML = `
    <div class="alert alert-primary mt-3">
        ${tamanho} letras.
    </div>
    `;
});
