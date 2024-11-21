import express, { Request, Response, NextFunction } from "express";
import {
  BB_Consulta,
  Itau_Consulta,
  Sicoob_Consulta,
  Sicredi_Consulta,
  Caixa_Consulta,
  Santander_Consulta,
  Banrisul_Consulta,
  Inter_Consulta,
} from "../models/RequisicaoBase";
import { Consulta } from "../models/interface";

const router = express.Router();

const consultasMap: { [key: string]: any } = {
  BB_Consulta,
  Itau_Consulta,
  Sicoob_Consulta,
  Sicredi_Consulta,
  Caixa_Consulta,
  Santander_Consulta,
  Banrisul_Consulta,
  Inter_Consulta,
};

router.get(
  "/consultas/:nomeTabela",
  async (req: Request, res: Response, next: NextFunction) => {
    const { nomeTabela } = req.params;
    const consultaModel = consultasMap[nomeTabela];

    if (!consultaModel) {
      res.status(404).json({ error: "Tabela não encontrada" });
      return;
    }

    try {
      const consulta: Consulta[] = await consultaModel.findAll({
        limit: 8640,
        order: [["horario", "DESC"]],
      });

      if (!consulta.length) {
        res.status(404).json({ error: "Nenhuma consulta encontrada" });
        return;
      }

      res.status(200).json(consulta);
      return;
    } catch (error) {
      next(error);
    }
  }
);

export default router;
