import express from "express"
import {
  criarCarro,
  listarCarros,
  buscarCarroPorId,
  atualizarCarro,
  deletarCarro,
} from "../controllers/carroController.js"

const router = express.Router()

// Rotas de carros
router.post("/", criarCarro)
router.get("/", listarCarros)
router.get("/:id", buscarCarroPorId)
router.put("/:id", atualizarCarro)
router.delete("/:id", deletarCarro)

export default router
