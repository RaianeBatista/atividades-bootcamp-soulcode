import express from "express";

const server = express();
const port = 3000;

server.get("/", (req, res) => {
    res.status(200).send("Sistema de Estoque");
});

server.get("/sistema", (req, res) => {
    const dados = [
        {
            author: "Raiane Batista",
            description: "Sistema de controle de estoque",
            version: "1.0.0",
        },
    ];
    res.status(200).json(dados);
});

server.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
    console.log(`Acesse em: http://localhost:${port}`);
});
