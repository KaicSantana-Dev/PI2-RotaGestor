import express, { Request, Response } from 'express';
import * as funcionarioController from '../controllers/funcionarioController';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const filter = req.query as any;
    const funcionarios = await funcionarioController.findFuncionarios(filter);
    res.json(funcionarios);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar funcionários', details: err });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const funcionario = await funcionarioController.findFuncionarios({ id });
    res.json(funcionario);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar funcionário', details: err });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const novoFuncionario = await funcionarioController.addFuncionario(req.body);
    res.json(novoFuncionario);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao adicionar funcionário', details: err });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const funcionarioAtualizado = await funcionarioController.updateFuncionario(id, req.body);
    res.json(funcionarioAtualizado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar funcionário', details: err });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const funcionarioDeletado = await funcionarioController.deleteFuncionario(id);
    res.json(funcionarioDeletado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar funcionário', details: err });
  }
});

export default router;
