import express from "express"
import {
  listarManutencoes,
  criarManutencao,
  buscarManutencaoPorId,
  atualizarManutencao,
  deletarManutencao
} from "../controllers/manutencaoController.js"

const router = express.Router()

// GET - listar todas as manutenções
router.get("/", listarManutencoes)

// GET - buscar manutenção por ID
router.get("/:id", buscarManutencaoPorId)

// POST - cadastrar nova manutenção
router.post("/", criarManutencao)

// PUT - atualizar manutenção
router.put("/:id", atualizarManutencao)

// DELETE - remover manutenção por ID
router.delete("/:id", deletarManutencao)

export default router
