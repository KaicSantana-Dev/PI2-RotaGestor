import express from "express"
import {
  criarGastoCombustivel,
  listarGastosCombustivel,
  buscarGastoCombustivelPorId,
  atualizarGastoCombustivel,
  deletarGastoCombustivel,
  criarGastoManutencao,
  listarGastosManutencao,
  buscarGastoManutencaoPorId,
  atualizarGastoManutencao,
  deletarGastoManutencao,
} from "../controllers/gastosController.js"

const router = express.Router() 

// Rotas de gastos de combustível
router.post("/combustivel", criarGastoCombustivel)
router.get("/combustivel", listarGastosCombustivel)
router.get("/combustivel/:id", buscarGastoCombustivelPorId)
router.put("/combustivel/:id", atualizarGastoCombustivel)
router.delete("/combustivel/:id", deletarGastoCombustivel)

// Rotas de gastos de manutenção
router.post("/manutencao", criarGastoManutencao)
router.get("/manutencao", listarGastosManutencao)
router.get("/manutencao/:id", buscarGastoManutencaoPorId)
router.put("/manutencao/:id", atualizarGastoManutencao)
router.delete("/manutencao/:id", deletarGastoManutencao)

export default router
