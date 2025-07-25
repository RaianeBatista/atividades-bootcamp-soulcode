import "dotenv/config";
import express from "express";
import produtosRouter from "./routers/produtosRouter.js";
import usuariosRouter from "./routers/usuariosRouter.js";

const server = express();
server.use(express.json());

const port = process.env.PORT || 3000;

server.use(produtosRouter);
server.use(usuariosRouter);

server.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
  console.log(`Acesse em: http://localhost:${port}`);
});
