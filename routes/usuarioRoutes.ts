import express, { Request, Response } from 'express';
import * as usuarioController from '../controllers/usuarioController';

const router = express.Router();

// ✅ Buscar todos os usuários (com filtro opcional)
router.get('/', async (req: Request, res: Response) => {
  try {
    const filter = req.query as any;
    const usuarios = await usuarioController.findUsuarios(filter);
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários', details: err });
  }
});

// ✅ Buscar usuário por ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const usuario = await usuarioController.findUsuarios({ id });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuário', details: err });
  }
});

// ✅ Criar novo usuário
router.post('/', async (req: Request, res: Response) => {
  try {
    const novoUsuario = await usuarioController.addUsuario(req.body);
    res.json(novoUsuario);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao adicionar usuário', details: err });
  }
});

// ✅ Atualizar usuário existente
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const usuarioAtualizado = await usuarioController.updateUsuario(id, req.body);
    res.json(usuarioAtualizado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar usuário', details: err });
  }
});

// ✅ Deletar usuário
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const usuarioDeletado = await usuarioController.deleteUsuario(id);
    res.json(usuarioDeletado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar usuário', details: err });
  }
});

export default router;
