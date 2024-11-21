import 'dotenv/config';
import express, { Request, Response } from 'express';
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
// const monitorBankAPI = async (bank: any) => {
//     const url = `https://homologacao.plugboleto.com.br/api/v1/boletos/lote`;
//     try {
//         const startTime = Date.now();
//         const response = await axios.get(url);
//         const responseTime = (Date.now() - startTime) / 1000;

//         // Inserir o resultado no banco de dados
//         await pool.query(`INSERT INTO ${bank.code}_Consulta (status_code, response_time, result) VALUES ($1, $2, $3)`, [
//             response.status,
//             responseTime,
//             JSON.stringify(response.data),
//         ]);

//         console.log(`[SUCCESS] Bank: ${bank.name}, Status: ${response.status}`);
//     } catch (error: any) {
//         const startTime = Date.now();
//         const responseTime = (Date.now() - startTime) / 1000;
//         const errorMessage = error.response ? error.response.statusText : error.message;

//         // Inserir erro no banco de dados
//         await pool.query(`INSERT INTO ${bank.code}_Consulta (status_code, response_time, result) VALUES ($1, $2, $3)`, [
//             error.response?.status || 0,
//             responseTime,
//             errorMessage,
//         ]);
//         console.error(`[ERROR] Bank: ${bank.name}, Error: ${errorMessage}`);
//     }
// };

// Função para monitorar todos os bancos
// const monitorAllBanks = () => {
//     banks.forEach((bank) => monitorBankAPI(bank));
// };

// Configurar o cron para executar a cada 5 minutos
// cron.schedule('*/5 * * * *', monitorAllBanks);

app.post('/api/send', async (req: Request, res: Response) => {
    { const dynamicData = [{ "SacadoCPFCNPJ": "10185448000180", "SacadoNome": "Boleto Postman", "SacadoEnderecoLogradouro": "Av. Postman Boleto", "SacadoEnderecoNumero": "222", "SacadoEnderecoBairro": "Centro", "SacadoEnderecoCep": "22222000", "SacadoEnderecoCidade": "Maringá", "SacadoEnderecoComplemento": "Apto. 222", "SacadoEnderecoPais": "Brasil", "SacadoEnderecoUf": "PR", "SacadoEmail": "postman@gmail.com", "SacadoTelefone": "(44)2222-0000", "SacadoCelular": "(44)9 2222-2222", "CedenteContaCodigoBanco": "341", "CedenteContaNumero": "34134", "CedenteContaNumeroDV": "1", "CedenteConvenioNumero": "3413341341", "CedenteConvenioCarteira": "109", "TituloNossoNumero": "30", "TituloValor": "50,00", "TituloNumeroDocumento": "20202", "TituloDataEmissao": "01/10/2024", "TituloDataVencimento": "31/10/2024", "TituloAceite": "S", "TituloDocEspecie": "05", "TituloLocalPagamento": "Pagável em qualquer banco até o vencimento." }];

    try {
        const response = await axios.post(
            'https://homologacao.plugboleto.com.br/api/v1/boletos/lote', dynamicData, {
            headers: {
                'Content-Type': 'application/json',
                'token-sh': 'a60c428fbfcafa73bc8eda5e9b7fee4e',
                'cnpj-cedente': '27887942000190',
                'cnpj-sh': '12067625000150',
            },
        });
        res.status(200).json(response.data);
    } catch (error: any) {
        console.error(error.message);
        res.status(error.response?.status || 500).json({
            error: error.response?.data || 'Erro interno no servidor',
            // const statusCode = response.status
        });
    }

// Salva o status code retornado res.json({ message: 'Requisição enviada com sucesso', statusCode: statusCode }); } catch (error) { console.error('Erro ao enviar requisição', error); res.status(500).json({ message: 'Erro ao enviar requisição', error: error.message }); }


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
