import dotenv from "dotenv";
import express from "express";
import { sequelize } from "./database";

const app = express();
const port = process.env.PORT || 3000; // Usando a variável de ambiente para a porta
app.use(express.json());
dotenv.config();

// Conectar ao banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  })
  .catch((err: any) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });

// Sincronizar modelos
const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // 'alter' altera as tabelas se necessário
    console.log("Modelos sincronizados com sucesso.");
  } catch (error) {
    console.error("Erro ao sincronizar modelos:", error);
  }
};

// Iniciar o servidor
const startServer = async () => {
  await syncModels(); // Chame a função de sincronização
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
};

// Chamar a função para iniciar o servidor
startServer();
