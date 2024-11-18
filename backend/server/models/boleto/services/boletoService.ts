import axios from 'axios';
import { boletoRepository } from '../repositores/boletoRepository';

type BoletoPayload = {
    CedenteContaCodigoBanco: string;
    CedenteContaNumero: string;
    CedenteContaNumeroDV: string;
    CedenteConvenioNumero: string;
    CedenteConvenioCarteira: string;
};

type BankDetails = {
    id: number;
    code: string;
    accountNumber: string;
    accountDV: string;
    convenioNumber: string;
    convenioCarteira: string;
};

class BoletoService {
    async createBoleto(payload: BoletoPayload, bankDetails: BankDetails) {
        try {
            const requestPayload = { ...payload, ...bankDetails };
            const response = await axios.post('https://boleto-api.example.com/create', requestPayload);
            const success = response.data.success || [];

            await boletoRepository.insertTransaction({
                bankId: bankDetails.id,
                requestPayload,
                responsePayload: response.data,
            });

            return success.length > 0 ? { status: 'success', data: success } : { status: 'failure' };
        } catch (error) {
            console.error('Erro na criação do boleto:', error);
            throw new Error('Erro ao criar o boleto');
        }
    }

    async getBankDetails(bankCode: string) {
        const bank = await boletoRepository.findBankByCode(bankCode);
        if (!bank) throw new Error('Banco não encontrado');
        return bank;
    }
}

export const boletoService = new BoletoService();
