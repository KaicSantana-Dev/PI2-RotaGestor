import prisma from "../prisma/client.js"

// Criar novo carro
export const criarCarro = async (req, res) => {
  try {
    const { modelo, placa, motoristaId, imagem, status } = req.body

    // Validação básica
    if (!modelo || !placa || !motoristaId) {
      return res.status(400).json({
        erro: "Modelo, placa e motoristaId são obrigatórios",
      })
    }

    // Verificar se motorista existe
    const motorista = await prisma.usuario.findUnique({
      where: { id: Number(motoristaId) },
    })

    if (!motorista) {
      return res.status(404).json({ erro: "Motorista não encontrado" })
    }

    if (!motorista.motorista) {
      return res.status(400).json({ erro: "Usuário não é um motorista" })
    }

    // Verificar se placa já existe
    const placaExistente = await prisma.carro.findUnique({
      where: { placa },
    })

    if (placaExistente) {
      return res.status(400).json({ erro: "Placa já cadastrada" })
    }

    // Converter imagem base64 em Buffer (se existir)
    let imagemBuffer = null
    if (imagem) {
      // Se vier com prefixo data:image/png;base64,...
      const base64Data = imagem.includes(",") ? imagem.split(",").pop() : imagem
      imagemBuffer = Buffer.from(base64Data, "base64")
    } else {
      // Se não há imagem, cria um placeholder (imagem 1x1 transparente em PNG)
      // Base64 de uma imagem PNG 1x1 transparente
      const placeholderBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
      imagemBuffer = Buffer.from(placeholderBase64, "base64")
    }

    const carro = await prisma.carro.create({
      data: {
        modelo,
        placa,
        motoristaId: Number(motoristaId),
        imagem: imagemBuffer, // agora é um Buffer
        status: status || "ativo",
      },
      include: {
        motorista: true,
      },
    })

    res.status(201).json({
      mensagem: "Carro criado com sucesso",
      carro,
    })
  } catch (erro) {
    console.error("Erro ao criar carro:", erro)
    res.status(500).json({
      erro: "Erro ao criar carro",
      detalhes: erro.message,
    })
  }
}


// Listar todos os carros
export const listarCarros = async (req, res) => {
  try {
    const { motoristaId, status } = req.query

    const filtro = {}
    if (motoristaId) filtro.motoristaId = Number.parseInt(motoristaId)
    if (status) filtro.status = status

    const carros = await prisma.carro.findMany({
      where: filtro,
      include: {
        motorista: {
          select: {
            id: true,
            nome: true,
            cnh: true,
          },
        },
        gastosCombustivel: true,
        gastosManutencao: true,
      },
      orderBy: {
        criadoEm: "desc",
      },
    })

    res.json({ carros })
  } catch (erro) {
    console.error("Erro ao listar carros:", erro)
    res.status(500).json({
      erro: "Erro ao listar carros",
      detalhes: erro.message,
    })
  }
}

// Buscar carro por ID
export const buscarCarroPorId = async (req, res) => {
  try {
    const { id } = req.params

    const carro = await prisma.carro.findUnique({
      where: { id: Number.parseInt(id) },
      include: {
        motorista: {
          select: {
            id: true,
            nome: true,
            cnh: true,
          },
        },
        gastosCombustivel: {
          orderBy: { data: "desc" },
        },
        gastosManutencao: {
          orderBy: { data: "desc" },
        },
      },
    })

    if (!carro) {
      return res.status(404).json({
        erro: "Carro não encontrado",
      })
    }

    res.json({ carro })
  } catch (erro) {
    console.error("Erro ao buscar carro:", erro)
    res.status(500).json({
      erro: "Erro ao buscar carro",
      detalhes: erro.message,
    })
  }
}

// Atualizar carro
export const atualizarCarro = async (req, res) => {
  try {
    const { id } = req.params
    const { modelo, placa, status, imagem, motoristaId } = req.body

    // Verificar se carro existe
    const carroExistente = await prisma.carro.findUnique({
      where: { id: Number.parseInt(id) },
    })

    if (!carroExistente) {
      return res.status(404).json({
        erro: "Carro não encontrado",
      })
    }

    // Se está mudando a placa, verificar se nova placa já existe
    if (placa && placa !== carroExistente.placa) {
      const placaExistente = await prisma.carro.findUnique({
        where: { placa },
      })

      if (placaExistente) {
        return res.status(400).json({
          erro: "Placa já cadastrada",
        })
      }
    }

    // Se está mudando o motorista, verificar se existe
    if (motoristaId) {
      const motorista = await prisma.usuario.findUnique({
        where: { id: Number.parseInt(motoristaId) },
      })

      if (!motorista || !motorista.motorista) {
        return res.status(400).json({
          erro: "Motorista inválido",
        })
      }
    }

    // Converter imagem base64 em Buffer (se existir e for diferente de null)
    let imagemBuffer = undefined
    if (imagem !== undefined && imagem !== null) {
      // Se vier com prefixo data:image/png;base64,...
      const base64Data = imagem.includes(",") ? imagem.split(",").pop() : imagem
      imagemBuffer = Buffer.from(base64Data, "base64")
    }

    const dadosAtualizacao = {
      ...(modelo && { modelo }),
      ...(placa && { placa }),
      ...(status && { status }),
      ...(motoristaId && { motoristaId: Number.parseInt(motoristaId) }),
    }

    // Só adiciona imagem se foi fornecida
    if (imagemBuffer !== undefined) {
      dadosAtualizacao.imagem = imagemBuffer
    }

    const carro = await prisma.carro.update({
      where: { id: Number.parseInt(id) },
      data: dadosAtualizacao,
      include: {
        motorista: true,
      },
    })

    res.json({
      mensagem: "Carro atualizado com sucesso",
      carro,
    })
  } catch (erro) {
    console.error("Erro ao atualizar carro:", erro)
    res.status(500).json({
      erro: "Erro ao atualizar carro",
      detalhes: erro.message,
    })
  }
}

// Deletar carro
export const deletarCarro = async (req, res) => {
  try {
    const { id } = req.params

    // Verificar se carro existe
    const carro = await prisma.carro.findUnique({
      where: { id: Number.parseInt(id) },
    })

    if (!carro) {
      return res.status(404).json({
        erro: "Carro não encontrado",
      })
    }

    // Deletar carro (gastos serão deletados automaticamente por cascade)
    await prisma.carro.delete({
      where: { id: Number.parseInt(id) },
    })

    res.json({
      mensagem: "Carro e seus gastos deletados com sucesso",
    })
  } catch (erro) {
    console.error("Erro ao deletar carro:", erro)
    res.status(500).json({
      erro: "Erro ao deletar carro",
      detalhes: erro.message,
    })
  }
}
