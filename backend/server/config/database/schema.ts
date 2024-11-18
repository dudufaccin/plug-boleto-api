import { pgTable, serial, integer, jsonb, timestamp, varchar, numeric } from 'drizzle-orm/pg-core';

// Função para criar a definição de tabela para qualquer banco
function createConsultaTable(tableName: string) {
    return pgTable(tableName, {
        id: serial('id').primaryKey(),
        horario: timestamp('horario').defaultNow().notNull(),
        resultado: varchar('resultado', { length: 7 }).notNull(), // Sem o `check` diretamente aqui
        tempo_resposta: numeric('tempo_resposta', { precision: 6, scale: 2 }).notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    });
}

// Exportando cada tabela com o nome específico
export const BB_Consulta = createConsultaTable('BB_Consulta');
export const Itau_Consulta = createConsultaTable('Itau_Consulta');
export const Sicoob_Consulta = createConsultaTable('Sicoob_Consulta');
export const Sicredi_Consulta = createConsultaTable('Sicredi_Consulta');
export const Caixa_Consulta = createConsultaTable('Caixa_Consulta');
export const Santander_Consulta = createConsultaTable('Santander_Consulta');
export const Banrisul_Consulta = createConsultaTable('Banrisul_Consulta');
export const Inter_Consulta = createConsultaTable('Inter_Consulta');

// Definição da tabela de bancos
export const bancos = pgTable('bancos', {
    id: serial('id').primaryKey(), // Chave primária, auto-incremento
    codigo: varchar('codigo', { length: 10 }).notNull(), // Código único do banco (exemplo: "001" para Banco do Brasil)
    nome: varchar('nome', { length: 255 }).notNull(), // Nome do banco (exemplo: "Banco do Brasil")
});

// Definição da tabela de registros
export const registros = pgTable('registros', {
    id: serial('id').primaryKey(), // Chave primária, auto-incremento
    bancoId: integer('banco_id').notNull(), // ID do banco associado
    requestPayload: jsonb('request_payload').notNull(), // Dados enviados para a API do boleto
    responsePayload: jsonb('response_payload').notNull(), // Dados retornados pela API do boleto
    createdAt: timestamp('created_at').defaultNow().notNull(), // Data de criação do registro
});
