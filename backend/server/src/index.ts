import 'dotenv/config';
import express from 'express';
import { Pool } from 'pg';
import axios from 'axios';
import cron from 'node-cron';
import { db } from '../config/database/database';
import { sql } from 'drizzle-orm';

const app = express();
const port = process.env.PORT || 3000;

// Configuração do pool de conexão com o PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Middleware para tratar JSON
app.use(express.json());

// Lista dos bancos e suas URLs de consulta
const banks = [
    { code: 'BB', name: 'Banco do Brasil' },
    { code: 'Itau', name: 'Itaú' },
    { code: 'Sicoob', name: 'Sicoob' },
    { code: 'Sicredi', name: 'Sicredi' },
    { code: 'Caixa', name: 'Caixa Econômica' },
    { code: 'Santander', name: 'Santander' },
    { code: 'Banrisul', name: 'Banrisul' },
    { code: 'Inter', name: 'Banco Inter' },
];

// Função para monitorar a API de um banco
const monitorBankAPI = async (bank: any) => {
    const url = `http://homologacao.plugboleto.com.br/${bank.code}`;
    try {
        const startTime = Date.now();
        const response = await axios.get(bank.url);
        const responseTime = (Date.now() - startTime) / 1000;

        // Inserir o resultado no banco de dados
        await pool.query(`INSERT INTO ${bank.code}_Consulta (status_code, response_time, result) VALUES ($1, $2, $3)`, [
            response.status,
            responseTime,
            JSON.stringify(response.data),
        ]);

        console.log(`[SUCCESS] Bank: ${bank.name}, Status: ${response.status}`);
    } catch (error: any) {
        const startTime = Date.now();
        const responseTime = (Date.now() - startTime) / 1000;
        const errorMessage = error.response ? error.response.statusText : error.message;

        // Inserir erro no banco de dados
        await pool.query(`INSERT INTO ${bank.code}_Consulta (status_code, response_time, result) VALUES ($1, $2, $3)`, [
            error.response?.status || 0,
            responseTime,
            errorMessage,
        ]);

        console.error(`[ERROR] Bank: ${bank.name}, Error: ${errorMessage}`);
    }
};

// Função para monitorar todos os bancos
const monitorAllBanks = () => {
    banks.forEach((bank) => monitorBankAPI(bank));
};

// Configurar o cron para executar a cada 5 minutos
cron.schedule('*/5 * * * *', monitorAllBanks);

// Endpoint para consultar os registros de um banco específico
app.get('/api/requests/:bankCode', async (req, res) => {
    const { bankCode } = req.params;

    try {
        const { rows } = await pool.query(`SELECT * FROM ${bankCode}_Consulta ORDER BY created_at DESC`);
        res.json(rows);
    } catch (error: any) {
        console.error(error);
        res.status(500).send('Erro ao buscar registros');
    }
});

app.get('/api/requests', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM requests ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar registros');
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
