import express, { Request, Response } from 'express';
import * as carroController from '../controllers/carroController';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const filter = req.query as any;
    const carros = await carroController.findCarros(filter);
    res.json(carros);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar carros', details: err });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const carro = await carroController.findCarros({ id });
    res.json(carro);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar carro', details: err });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const novoCarro = await carroController.addCarro(req.body);
    res.json(novoCarro);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao adicionar carro', details: err });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const carroAtualizado = await carroController.updateCarro(id, req.body);
    res.json(carroAtualizado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar carro', details: err });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const carroDeletado = await carroController.deleteCarro(id);
    res.json(carroDeletado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar carro', details: err });
  }
});

export default router;
