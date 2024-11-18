// async function deleteTables() {
//     try {
//         // Deletando as tabelas
//         await db.execute(sql`DROP TABLE IF EXISTS ${BB_Consulta}`);
//         await db.execute(sql`DROP TABLE IF EXISTS ${Itau_Consulta}`);
//         await db.execute(sql`DROP TABLE IF EXISTS ${Sicoob_Consulta}`);
//         await db.execute(sql`DROP TABLE IF EXISTS ${Sicredi_Consulta}`);
//         await db.execute(sql`DROP TABLE IF EXISTS ${Caixa_Consulta}`);
//         await db.execute(sql`DROP TABLE IF EXISTS ${Santander_Consulta}`);
//         await db.execute(sql`DROP TABLE IF EXISTS ${Banrisul_Consulta}`);
//         await db.execute(sql`DROP TABLE IF EXISTS ${Inter_Consulta}`);

//         console.log('Tabelas deletadas com sucesso.');
//     } catch (error) {
//         console.error('Erro ao deletar tabelas:', error);
//     }
// }
// deleteTables();
