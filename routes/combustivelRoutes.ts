import express, { Request, Response } from 'express';
import * as combustivelController from '../controllers/combustivelController';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const filter = req.query as any;
    const list = await combustivelController.findCombustiveis(filter);
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar combustíveis', details: err });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const item = await combustivelController.findCombustiveis({ id });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar combustível', details: err });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const novo = await combustivelController.addCombustivel(req.body);
    res.json(novo);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao adicionar combustível', details: err });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const atualizado = await combustivelController.updateCombustivel(id, req.body);
    res.json(atualizado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar combustível', details: err });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletado = await combustivelController.deleteCombustivel(id);
    res.json(deletado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar combustível', details: err });
  }
});

export default router;
