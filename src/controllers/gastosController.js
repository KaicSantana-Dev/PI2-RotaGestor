import prisma from "../prisma/client.js"

// ========== GASTOS DE COMBUSTÍVEL ==========

// Criar gasto de combustível
export const criarGastoCombustivel = async (req, res) => {
  try {
    const { carroId, valor, posto, data } = req.body

    // Validação básica
    if (!carroId || !valor || !posto) {
      return res.status(400).json({
        erro: "carroId, valor e posto são obrigatórios",
      })
    }

    // Verificar se carro existe
    const carro = await prisma.carro.findUnique({
      where: { id: Number.parseInt(carroId) },
    })

    if (!carro) {
      return res.status(404).json({
        erro: "Carro não encontrado",
      })
    }

    const gasto = await prisma.gastosCombustivel.create({
      data: {
        carroId: Number.parseInt(carroId),
        valor: Number.parseFloat(valor),
        posto,
        ...(data && { data: new Date(data) }),
      },
      include: {
        carro: {
          select: {
            id: true,
            modelo: true,
            placa: true,
          },
        },
      },
    })

    res.status(201).json({
      mensagem: "Gasto de combustível criado com sucesso",
      gasto,
    })
  } catch (erro) {
    console.error("Erro ao criar gasto de combustível:", erro)
    res.status(500).json({
      erro: "Erro ao criar gasto de combustível",
      detalhes: erro.message,
    })
  }
}

// Listar gastos de combustível
export const listarGastosCombustivel = async (req, res) => {
  try {
    const { carroId } = req.query

    const filtro = carroId ? { carroId: Number.parseInt(carroId) } : {}

    const gastos = await prisma.gastosCombustivel.findMany({
      where: filtro,
      include: {
        carro: {
          select: {
            id: true,
            modelo: true,
            placa: true,
          },
        },
      },
      orderBy: {
        data: "desc",
      },
    })

    res.json({ gastos })
  } catch (erro) {
    console.error("Erro ao listar gastos de combustível:", erro)
    res.status(500).json({
      erro: "Erro ao listar gastos de combustível",
      detalhes: erro.message,
    })
  }
}

// Buscar gasto de combustível por ID
export const buscarGastoCombustivelPorId = async (req, res) => {
  try {
    const { id } = req.params

    const gasto = await prisma.gastosCombustivel.findUnique({
      where: { id: Number.parseInt(id) },
      include: {
        carro: true,
      },
    })

    if (!gasto) {
      return res.status(404).json({
        erro: "Gasto de combustível não encontrado",
      })
    }

    res.json({ gasto })
  } catch (erro) {
    console.error("Erro ao buscar gasto de combustível:", erro)
    res.status(500).json({
      erro: "Erro ao buscar gasto de combustível",
      detalhes: erro.message,
    })
  }
}

// Atualizar gasto de combustível
export const atualizarGastoCombustivel = async (req, res) => {
  try {
    const { id } = req.params
    const { valor, posto, data } = req.body

    // Verificar se gasto existe
    const gastoExistente = await prisma.gastosCombustivel.findUnique({
      where: { id: Number.parseInt(id) },
    })

    if (!gastoExistente) {
      return res.status(404).json({
        erro: "Gasto de combustível não encontrado",
      })
    }

    const gasto = await prisma.gastosCombustivel.update({
      where: { id: Number.parseInt(id) },
      data: {
        ...(valor && { valor: Number.parseFloat(valor) }),
        ...(posto && { posto }),
        ...(data && { data: new Date(data) }),
      },
      include: {
        carro: true,
      },
    })

    res.json({
      mensagem: "Gasto de combustível atualizado com sucesso",
      gasto,
    })
  } catch (erro) {
    console.error("Erro ao atualizar gasto de combustível:", erro)
    res.status(500).json({
      erro: "Erro ao atualizar gasto de combustível",
      detalhes: erro.message,
    })
  }
}

// Deletar gasto de combustível
export const deletarGastoCombustivel = async (req, res) => {
  try {
    const { id } = req.params

    // Verificar se gasto existe
    const gasto = await prisma.gastosCombustivel.findUnique({
      where: { id: Number.parseInt(id) },
    })

    if (!gasto) {
      return res.status(404).json({
        erro: "Gasto de combustível não encontrado",
      })
    }

    await prisma.gastosCombustivel.delete({
      where: { id: Number.parseInt(id) },
    })

    res.json({
      mensagem: "Gasto de combustível deletado com sucesso",
    })
  } catch (erro) {
    console.error("Erro ao deletar gasto de combustível:", erro)
    res.status(500).json({
      erro: "Erro ao deletar gasto de combustível",
      detalhes: erro.message,
    })
  }
}

// ========== GASTOS DE MANUTENÇÃO ==========

// Criar gasto de manutenção
export const criarGastoManutencao = async (req, res) => {
  try {
    const { carroId, valor, local, data } = req.body

    // Validação básica
    if (!carroId || !valor || !local) {
      return res.status(400).json({
        erro: "carroId, valor e local são obrigatórios",
      })
    }

    // Verificar se carro existe
    const carro = await prisma.carro.findUnique({
      where: { id: Number.parseInt(carroId) },
    })

    if (!carro) {
      return res.status(404).json({
        erro: "Carro não encontrado",
      })
    }

    const gasto = await prisma.gastosManutencao.create({
      data: {
        carroId: Number.parseInt(carroId),
        valor: Number.parseFloat(valor),
        local,
        ...(data && { data: new Date(data) }),
      },
      include: {
        carro: {
          select: {
            id: true,
            modelo: true,
            placa: true,
          },
        },
      },
    })

    res.status(201).json({
      mensagem: "Gasto de manutenção criado com sucesso",
      gasto,
    })
  } catch (erro) {
    console.error("Erro ao criar gasto de manutenção:", erro)
    res.status(500).json({
      erro: "Erro ao criar gasto de manutenção",
      detalhes: erro.message,
    })
  }
}

// Listar gastos de manutenção
export const listarGastosManutencao = async (req, res) => {
  try {
    const { carroId } = req.query

    const filtro = carroId ? { carroId: Number.parseInt(carroId) } : {}

    const gastos = await prisma.gastosManutencao.findMany({
      where: filtro,
      include: {
        carro: {
          select: {
            id: true,
            modelo: true,
            placa: true,
          },
        },
      },
      orderBy: {
        data: "desc",
      },
    })

    res.json({ gastos })
  } catch (erro) {
    console.error("Erro ao listar gastos de manutenção:", erro)
    res.status(500).json({
      erro: "Erro ao listar gastos de manutenção",
      detalhes: erro.message,
    })
  }
}

// Buscar gasto de manutenção por ID
export const buscarGastoManutencaoPorId = async (req, res) => {
  try {
    const { id } = req.params

    const gasto = await prisma.gastosManutencao.findUnique({
      where: { id: Number.parseInt(id) },
      include: {
        carro: true,
      },
    })

    if (!gasto) {
      return res.status(404).json({
        erro: "Gasto de manutenção não encontrado",
      })
    }

    res.json({ gasto })
  } catch (erro) {
    console.error("Erro ao buscar gasto de manutenção:", erro)
    res.status(500).json({
      erro: "Erro ao buscar gasto de manutenção",
      detalhes: erro.message,
    })
  }
}

// Atualizar gasto de manutenção
export const atualizarGastoManutencao = async (req, res) => {
  try {
    const { id } = req.params
    const { valor, local, data } = req.body

    // Verificar se gasto existe
    const gastoExistente = await prisma.gastosManutencao.findUnique({
      where: { id: Number.parseInt(id) },
    })

    if (!gastoExistente) {
      return res.status(404).json({
        erro: "Gasto de manutenção não encontrado",
      })
    }

    const gasto = await prisma.gastosManutencao.update({
      where: { id: Number.parseInt(id) },
      data: {
        ...(valor && { valor: Number.parseFloat(valor) }),
        ...(local && { local }),
        ...(data && { data: new Date(data) }),
      },
      include: {
        carro: true,
      },
    })

    res.json({
      mensagem: "Gasto de manutenção atualizado com sucesso",
      gasto,
    })
  } catch (erro) {
    console.error("Erro ao atualizar gasto de manutenção:", erro)
    res.status(500).json({
      erro: "Erro ao atualizar gasto de manutenção",
      detalhes: erro.message,
    })
  }
}

// Deletar gasto de manutenção
export const deletarGastoManutencao = async (req, res) => {
  try {
    const { id } = req.params

    // Verificar se gasto existe
    const gasto = await prisma.gastosManutencao.findUnique({
      where: { id: Number.parseInt(id) },
    })

    if (!gasto) {
      return res.status(404).json({
        erro: "Gasto de manutenção não encontrado",
      })
    }

    await prisma.gastosManutencao.delete({
      where: { id: Number.parseInt(id) },
    })

    res.json({
      mensagem: "Gasto de manutenção deletado com sucesso",
    })
  } catch (erro) {
    console.error("Erro ao deletar gasto de manutenção:", erro)
    res.status(500).json({
      erro: "Erro ao deletar gasto de manutenção",
      detalhes: erro.message,
    })
  }
}
