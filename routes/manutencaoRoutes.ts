import express, { Request, Response } from 'express';
import * as manutencaoController from '../controllers/manutencaoController';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const filter = req.query as any;
    const list = await manutencaoController.findManutencoes(filter);
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar manutenções', details: err });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const item = await manutencaoController.findManutencoes({ id });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar manutenção', details: err });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const novo = await manutencaoController.addManutencao(req.body);
    res.json(novo);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao adicionar manutenção', details: err });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const atualizado = await manutencaoController.updateManutencao(id, req.body);
    res.json(atualizado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar manutenção', details: err });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletado = await manutencaoController.deleteManutencao(id);
    res.json(deletado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar manutenção', details: err });
  }
});

export default router;
