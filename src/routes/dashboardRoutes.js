import express from "express"
import {
  maioresGastosCombustivel,
  maioresGastosManutencao,
  mediasConsumo,
  dadosGrafico,
} from "../controllers/dashboardController.js"

const router = express.Router()

// Rotas de dashboard
router.get("/maiores-gastos-combustivel", maioresGastosCombustivel)
router.get("/maiores-gastos-manutencao", maioresGastosManutencao)
router.get("/medias-consumo", mediasConsumo)
router.get("/grafico", dadosGrafico)

export default router
