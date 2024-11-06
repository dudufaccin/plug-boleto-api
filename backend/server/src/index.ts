import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import { sequelize } from './database';
// import { Where } from 'sequelize/types/utils';
import { BB_Consulta } from '../models/RequisicaoBase';
import { Itau_Consulta } from '../models/RequisicaoBase';
import { Sicoob_Consulta } from '../models/RequisicaoBase';
import { Sicredi_Consulta } from '../models/RequisicaoBase';
import { Caixa_Consulta } from '../models/RequisicaoBase';
import { Santander_Consulta } from '../models/RequisicaoBase';
import { Banrisul_Consulta } from '../models/RequisicaoBase';
import { Inter_Consulta } from '../models/RequisicaoBase';

// Função assíncr

dotenv.config();
const app = express();
const port = process.env.PORT || 3000; // Usando a variável de ambiente para a porta
app.use(express.json());

// Conectar ao banco de dados
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch((err: any) => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

// Sincronizar modelos
const syncModels = async () => {
    try {
        await sequelize.sync({ alter: true }); // 'alter' altera as tabelas se necessário
        console.log('Modelos sincronizados com sucesso.');
    } catch (error) {
        console.error('Erro ao sincronizar modelos:', error);
    }
};

app.get('/consultas/:nomeTabela', async (req: Request, res: Response, next: NextFunction) => {
    const { nomeTabela } = req.params;
    try {
        let consulta;
        if (nomeTabela === 'BB_Consulta') {
            consulta = await BB_Consulta.findOne({
                order: [['createdAt', 'DESC']],
            });
        } else if (nomeTabela === 'Itau_Consulta') {
            consulta = await Itau_Consulta.findAll({
                limit: 8640,
                order: [['createdAt', 'DESC']],
            });
        } else if (nomeTabela === 'Sicoob_Consulta') {
            consulta = await Sicoob_Consulta.findAll({
                limit: 8640,
                order: [['createdAt', 'DESC']],
            });
        } else if (nomeTabela === 'Sicredi_Consulta') {
            consulta = await Sicredi_Consulta.findAll({
                limit: 8640,
                order: [['createdAt', 'DESC']],
            });
        } else if (nomeTabela === 'Caixa_Consulta') {
            consulta = await Caixa_Consulta.findAll({
                limit: 8640,
                order: [['createdAt', 'DESC']],
            });
        } else if (nomeTabela === 'Santander_Consulta') {
            consulta = await Santander_Consulta.findAll({
                limit: 8640,
                order: [['createdAt', 'DESC']],
            });
        } else if (nomeTabela === 'Banrisul_Consulta') {
            consulta = await Banrisul_Consulta.findAll({
                limit: 8640,
                order: [['createdAt', 'DESC']],
            });
        } else if (nomeTabela === 'Inter_Consulta') {
            consulta = await Inter_Consulta.findAll({
                limit: 8640,
                order: [['createdAt', 'DESC']],
            });
        }
        if (!consulta) {
            res.status(404).json({ error: 'Nenhuma consulta encontrada' });
        }
        res.status(200).json(consulta);
    } catch (error) {
        // Passa o erro para o `nextFunction`
        next(error);
    }
});

// Importa o modelo BB_Consulta e o sequelize
// async function insertBBConsultaData() {
//     try {
//         await sequelize.sync(); // Garante que a conexão com o banco está ativa

//         const data = [
//             { horario: new Date(), resultado: 'online', tempo_resposta: 1.25 },
//             { horario: new Date(), resultado: 'offline', tempo_resposta: 2.8 },
//             { horario: new Date(), resultado: 'online', tempo_resposta: 1.5 },
//             { horario: new Date(), resultado: 'offline', tempo_resposta: 3.1 },
//             { horario: new Date(), resultado: 'online', tempo_resposta: 1.75 },
//         ];

//         for (const entry of data) {
//             await BB_Consulta.BB_Consulta.create(entry);
//         }

//         console.log('Dados inseridos com sucesso!');
//     } catch (error) {
//         console.error('Erro ao inserir dados:', error);
//     }
// }

// // Chama a função para inserir os dados
// insertBBConsultaData();

const bancos = {
    BB_Consulta,
    Itau_Consulta,
    Sicoob_Consulta,
    Sicredi_Consulta,
    Caixa_Consulta,
    Santander_Consulta,
    Banrisul_Consulta,
    Inter_Consulta,
};

app.get('/registros/:nomeTabela', async (req: Request, res: Response, next: NextFunction) => {
    const { nomeTabela } = req.params;
    const consultaBanco = bancos[nomeTabela as keyof typeof bancos];

    if (!consultaBanco) {
        res.status(404).json({ error: 'Banco não encontrado' });
    }
});

// Iniciar o servidor
const startServer = async () => {
    await syncModels(); // Chame a função de sincronização
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
};

// Chamar a função para iniciar o servidor
startServer();
