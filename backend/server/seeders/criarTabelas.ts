// async function createTables() {
//     try {
//         // Criando as tabelas
//         await db.execute(sql`
//             CREATE TABLE IF NOT EXISTS BB_Consulta (
//                 id SERIAL PRIMARY KEY,
//                 horario TIMESTAMP NOT NULL DEFAULT NOW(),
//                 resultado VARCHAR(7) NOT NULL,
//                 tempo_resposta NUMERIC(6, 2) NOT NULL,
//                 created_at TIMESTAMP NOT NULL DEFAULT NOW()
//             )
//         `);

//         await db.execute(sql`
//             CREATE TABLE IF NOT EXISTS Itau_Consulta (
//                 id SERIAL PRIMARY KEY,
//                 horario TIMESTAMP NOT NULL DEFAULT NOW(),
//                 resultado VARCHAR(7) NOT NULL,
//                 tempo_resposta NUMERIC(6, 2) NOT NULL,
//                 created_at TIMESTAMP NOT NULL DEFAULT NOW()
//             )
//         `);

//         await db.execute(sql`
//             CREATE TABLE IF NOT EXISTS Sicoob_Consulta (
//                 id SERIAL PRIMARY KEY,
//                 horario TIMESTAMP NOT NULL DEFAULT NOW(),
//                 resultado VARCHAR(7) NOT NULL,
//                 tempo_resposta NUMERIC(6, 2) NOT NULL,
//                 created_at TIMESTAMP NOT NULL DEFAULT NOW()
//             )
//         `);

//         await db.execute(sql`
//             CREATE TABLE IF NOT EXISTS Sicredi_Consulta (
//                 id SERIAL PRIMARY KEY,
//                 horario TIMESTAMP NOT NULL DEFAULT NOW(),
//                 resultado VARCHAR(7) NOT NULL,
//                 tempo_resposta NUMERIC(6, 2) NOT NULL,
//                 created_at TIMESTAMP NOT NULL DEFAULT NOW()
//             )
//         `);

//         await db.execute(sql`
//             CREATE TABLE IF NOT EXISTS Caixa_Consulta (
//                 id SERIAL PRIMARY KEY,
//                 horario TIMESTAMP NOT NULL DEFAULT NOW(),
//                 resultado VARCHAR(7) NOT NULL,
//                 tempo_resposta NUMERIC(6, 2) NOT NULL,
//                 created_at TIMESTAMP NOT NULL DEFAULT NOW()
//             )
//         `);

//         await db.execute(sql`
//             CREATE TABLE IF NOT EXISTS Santander_Consulta (
//                 id SERIAL PRIMARY KEY,
//                 horario TIMESTAMP NOT NULL DEFAULT NOW(),
//                 resultado VARCHAR(7) NOT NULL,
//                 tempo_resposta NUMERIC(6, 2) NOT NULL,
//                 created_at TIMESTAMP NOT NULL DEFAULT NOW()
//             )
//         `);

//         await db.execute(sql`
//             CREATE TABLE IF NOT EXISTS Banrisul_Consulta (
//                 id SERIAL PRIMARY KEY,
//                 horario TIMESTAMP NOT NULL DEFAULT NOW(),
//                 resultado VARCHAR(7) NOT NULL,
//                 tempo_resposta NUMERIC(6, 2) NOT NULL,
//                 created_at TIMESTAMP NOT NULL DEFAULT NOW()
//             )
//         `);

//         await db.execute(sql`
//             CREATE TABLE IF NOT EXISTS Inter_Consulta (
//                 id SERIAL PRIMARY KEY,
//                 horario TIMESTAMP NOT NULL DEFAULT NOW(),
//                 resultado VARCHAR(7) NOT NULL,
//                 tempo_resposta NUMERIC(6, 2) NOT NULL,
//                 created_at TIMESTAMP NOT NULL DEFAULT NOW()
//             )
//         `);

//         console.log('Tabelas criadas com sucesso- MATHEUS vai dar tudo certo.');
//     } catch (error) {
//         console.error('Erro ao criar tabelas:', error);
//     }
// }
// createTables();
