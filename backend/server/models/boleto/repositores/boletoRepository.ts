import { db } from '../../../config/database/database';
import { registros, bancos } from '../../../config/database/schema'; // Importando tabelas
import { eq } from 'drizzle-orm';

// database/types.ts
export type Transaction = {
    id?: number;
    bankId: number;
    requestPayload: object;
    responsePayload: object;
    createdAt?: Date;
};

export type Bank = {
    id: number;
    code: string;
    name: string;
};

export const boletoRepository = {
    /**
     * Insere uma nova transação no banco de dados.
     * @param data - Dados da transação a serem inseridos.
     * @returns Promise com o resultado da inserção.
     */
    async insertTransaction(data: Transaction) {
        try {
            const result = await db.insert(registros).values(data);
            result;
        } catch (error) {
            console.error('Erro ao inserir transação:', error);
            throw new Error('Erro ao salvar transação no banco de dados.');
        }
    },

    /**
     * Busca informações do banco pelo código.
     * @param bankCode - Código do banco (string).
     * @returns Objeto com os dados do banco ou `null` se não encontrado.
     */
    
    async findBankByCode(bankCode: string): Promise<Bank | null> {
      try {
          const [bancos] = await db.select().from(bancos).where(eq(bancos.codigo, bankCode));
          return bancos || null;  // Aqui, retornamos explicitamente 'bank' ou 'null'
      } catch (error) {
          console.error('Erro ao buscar banco por código:', error);
          throw new Error('Erro ao buscar banco no banco de dados.');
      }
  }
  
};
