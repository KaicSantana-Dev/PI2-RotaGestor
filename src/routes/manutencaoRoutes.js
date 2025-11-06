import express from "express"
import Manutencao from "../models/Manutencao.js"

const router = express.Router()

// GET - listar todas as manutenções
router.get("/", async (req, res) => {
  try {
    const manutencoes = await Manutencao.find()
    res.json(manutencoes)
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao buscar manutenções" })
  }
})

// POST - cadastrar nova manutenção
router.post("/", async (req, res) => {
  try {
    const novaManutencao = new Manutencao(req.body)
    await novaManutencao.save()
    res.status(201).json(novaManutencao)
  } catch (erro) {
    res.status(400).json({ erro: "Erro ao cadastrar manutenção" })
  }
})

// DELETE - remover manutenção por ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const removida = await Manutencao.findByIdAndDelete(id)
    if (!removida) return res.status(404).json({ erro: "Manutenção não encontrada" })
    res.json({ mensagem: "Removida com sucesso!" })
  } catch (erro) {
    res.status(400).json({ erro: "Erro ao remover manutenção" })
  }
})

export default router
