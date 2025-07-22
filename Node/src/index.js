import express from "express";
import produtosRouter from "./routers/produtosRouter.js";

const server = express();
server.use(express.json());
const port = 3000;

server.use(produtosRouter);

server.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
  console.log(`Acesse em: http://localhost:${port}`);
});
