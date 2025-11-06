import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// ✅ GET - Lista todas as manutenções (com filtros opcionais)
router.get("/", async (req, res) => {
  try {
    const { modelo, placa, servico, local, data, sort } = req.query;

    const manutencoes = await prisma.gastosManutencao.findMany({
      where: {
        servico: servico || undefined,
        local: local ? { contains: local, mode: "insensitive" } : undefined,
        data: data ? new Date(data) : undefined,
        carro: {
          modelo: modelo ? { contains: modelo, mode: "insensitive" } : undefined,
          placa: placa ? { contains: placa, mode: "insensitive" } : undefined,
        },
      },
      include: { carro: true },
      orderBy: sort === "asc" || sort === "desc" ? { valor: sort } : undefined,
    });

    const resposta = manutencoes.map((m) => ({
      modelo: m.carro.modelo,
      placa: m.carro.placa,
      servico: m.servico,
      valor: m.valor.toString(),
      oficina: m.local,
      hora: m.hora,
      data: new Date(m.data).toLocaleDateString("pt-BR"),
    }));

    res.json(resposta);
  } catch (erro) {
    console.error("Erro ao buscar manutenções:", erro);
    res.status(500).json({ erro: "Erro ao buscar manutenções" });
  }
});

// ✅ POST - Cadastra uma nova manutenção
router.post("/", async (req, res) => {
  try {
    const { carroId, servico, valor, local, hora, data } = req.body;

    if (!carroId || !servico || !valor || !local) {
      return res.status(400).json({ erro: "Campos obrigatórios ausentes." });
    }

    const nova = await prisma.gastosManutencao.create({
      data: {
        carroId: parseInt(carroId),
        servico,
        valor,
        local,
        hora: hora || new Date().toLocaleTimeString("pt-BR"),
        data: data ? new Date(data) : new Date(),
      },
    });

    res.status(201).json(nova);
  } catch (erro) {
    console.error("Erro ao criar manutenção:", erro);
    res.status(500).json({ erro: "Erro ao criar manutenção" });
  }
});

export default router;
