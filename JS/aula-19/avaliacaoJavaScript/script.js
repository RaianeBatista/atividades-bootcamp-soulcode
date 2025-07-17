// Seleção dos elementos do DOM
const inputTarefa = document.querySelector("#tarefa");
const selectPrioridade = document.querySelector("#prioridade");
const form = document.querySelector("#form");

const tbodyListaTarefas = document.querySelector("#lista-tarefas"); // Onde as tarefas serão adicionadas na tabela

// Array para armazenar as tarefas.
// Vamos simular um "banco de dados" temporário.
let tarefas = [];

// 1. Função para adicionar uma nova tarefa ao array 'tarefas'
function adicionarTarefa(nomeTarefa, prioridadeTarefa, badgeColor) {
    const novaTarefa = {
        nome: nomeTarefa,
        prioridade: prioridadeTarefa,
        badgeColor: badgeColor, // Cor do badge (danger, warning, success)
        concluida: false, // Propriedade para controlar se a tarefa está concluída
    };
    tarefas.push(novaTarefa); // Adiciona a nova tarefa ao array
    renderizarTarefas(); // Chama a função para redesenhar a tabela
    form.reset(); // Limpa os campos do formulário após adicionar
}

// 2. Função para renderizar (desenhar/atualizar) a lista de tarefas na tabela
function renderizarTarefas() {
    // Limpa qualquer conteúdo existente no tbody para evitar duplicatas ao redesenhar
    tbodyListaTarefas.innerHTML = "";

    // Itera sobre cada tarefa no array 'tarefas'
    tarefas.forEach((tarefa) => {
        // Cria uma nova linha (<tr>) para a tabela
        const novaLinha = document.createElement("tr");

        // Coluna 1: Nome da Tarefa
        const tdTarefa = document.createElement("td");
        tdTarefa.textContent = tarefa.nome; // Define o texto da célula como o nome da tarefa

        // Aplica negrito apenas se a tarefa não estiver concluída
        if (!tarefa.concluida) {
            tdTarefa.classList.add("fw-bold");
        }

        novaLinha.appendChild(tdTarefa);

        // Coluna 2: Prioridade (com a badge do Bootstrap)
        const tdPrioridade = document.createElement("td");
        const spanPrioridade = document.createElement("span");

        // Mapeamento correto das prioridades com acentos
        const prioridadeTexto = {
            alta: "Alta",
            media: "Média",
            baixa: "Baixa",
        };

        spanPrioridade.textContent =
            prioridadeTexto[tarefa.prioridade] || tarefa.prioridade;
        // Adiciona as classes do Bootstrap para o badge e a cor
        spanPrioridade.classList.add("badge", `text-bg-${tarefa.badgeColor}`);
        tdPrioridade.appendChild(spanPrioridade);
        novaLinha.appendChild(tdPrioridade);

        // Coluna 3: Ação (Botão Concluir)
        const tdAcao = document.createElement("td");
        const btnConcluir = document.createElement("button");

        // Verifica se a tarefa já foi concluída para aplicar o estado correto
        if (tarefa.concluida) {
            btnConcluir.textContent = "Concluída";
            btnConcluir.disabled = true;
            btnConcluir.classList.add("btn", "btn-secondary", "btn-sm");
            novaLinha.classList.add(
                "text-decoration-line-through",
                "text-muted"
            );
        } else {
            btnConcluir.textContent = "Concluir";
            btnConcluir.classList.add("btn", "btn-success", "btn-sm");
        }

        // Adiciona um evento de clique ao botão Concluir
        btnConcluir.addEventListener("click", () => {
            // Mostra o alert de confirmação
            const confirmar = confirm(
                "Tem certeza que deseja concluir a tarefa?"
            );
            if (confirmar) {
                // Se o usuário confirmar, marcamos a tarefa como concluída
                tarefa.concluida = true;
                novaLinha.classList.add(
                    "text-decoration-line-through",
                    "text-muted"
                ); // Adiciona estilo de "riscado"
                // Remove o negrito da tarefa concluída
                tdTarefa.classList.remove("fw-bold");
                btnConcluir.disabled = true; // Desabilita o botão após concluir
                btnConcluir.textContent = "Concluída"; // Muda o texto do botão
                btnConcluir.classList.remove("btn-success");
                btnConcluir.classList.add("btn-secondary");
            }
        });
        tdAcao.appendChild(btnConcluir);
        novaLinha.appendChild(tdAcao);

        // Adiciona a nova linha (tr) ao tbody da tabela
        tbodyListaTarefas.appendChild(novaLinha);
    });
}

// 3. Event Listener para o formulário (quando o botão "Adicionar" é clicado)
form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Impede o recarregamento da página

    const nomeTarefa = inputTarefa.value.trim(); // Pega o valor do campo de tarefa e remove espaços em branco
    const prioridadeSelecionada = selectPrioridade.value; // Pega o valor da prioridade selecionada

    // Validação básica: verifica se os campos não estão vazios
    if (nomeTarefa === "" || prioridadeSelecionada === "") {
        alert(
            "Por favor, preencha o nome da tarefa e selecione uma prioridade."
        );
        return; // Sai da função se a validação falhar
    }

    // Pega a cor do badge do atributo data-badge da option selecionada
    const selectedOption =
        selectPrioridade.options[selectPrioridade.selectedIndex];
    const badgeColor = selectedOption.dataset.badge; // Ex: 'danger', 'warning', 'success'

    // Chama a função para adicionar a tarefa
    adicionarTarefa(nomeTarefa, prioridadeSelecionada, badgeColor);
});

renderizarTarefas();
