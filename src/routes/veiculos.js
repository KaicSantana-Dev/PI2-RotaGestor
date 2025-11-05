import express from "express"
import {
  listarVeiculos,
  buscarVeiculoPorId,
  criarVeiculo,
  atualizarVeiculo,
  excluirVeiculo,
} from "../controllers/veiculosController.js"

const router = express.Router()

// GET /api/veiculos - Listar todos os veículos
router.get("/", listarVeiculos)

// GET /api/veiculos/:id - Buscar veículo por ID
router.get("/:id", buscarVeiculoPorId)

// POST /api/veiculos - Criar novo veículo
router.post("/", criarVeiculo)

// PUT /api/veiculos/:id - Atualizar veículo
router.put("/:id", atualizarVeiculo)

// DELETE /api/veiculos/:id - Excluir veículo
router.delete("/:id", excluirVeiculo)

export default router
