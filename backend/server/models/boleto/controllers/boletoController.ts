import { Request, Response } from 'express';
import { boletoService } from '../services/boletoService';

export const boletoController = {
    async createBoleto(req: Request, res: Response) {
        try {
            const { payload, bankCode } = req.body;
            const bankDetails = await boletoService.getBankDetails(bankCode);
            const result = await boletoService.createBoleto(payload, bankDetails);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
