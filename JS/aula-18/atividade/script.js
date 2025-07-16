const num1Input = document.querySelector("#num1");
const num2Input = document.querySelector("#num2");
const botaoSomar = document.querySelector("#btnSomar");
const resultadoDiv = document.querySelector("#resultado");

botaoSomar.addEventListener("click", () => {
    const valorNum1 = Number(num1Input.value);
    const valorNum2 = Number(num2Input.value);
    const soma = valorNum1 + valorNum2;

    resultadoDiv.innerHTML = `
    <div class="col-3">
        <div class="alert alert-primary mt-3">
        O resultado da soma é ${soma}.
        </div>
    </div>
    `;
});
