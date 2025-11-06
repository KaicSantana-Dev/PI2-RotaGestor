import prisma from "../prisma/client.js"

// Criar novo usuário
export const criarUsuario = async (req, res) => {
  try {
    const { nome, senha, motorista, cnh } = req.body

    // Validação básica
    if (!nome || !senha) {
      return res.status(400).json({
        erro: "Nome e senha são obrigatórios",
      })
    }

    // Se for motorista, CNH é obrigatória
    if (motorista && !cnh) {
      return res.status(400).json({
        erro: "CNH é obrigatória para motoristas",
      })
    }

    const usuario = await prisma.usuario.create({
      data: {
        nome,
        senha,
        motorista: motorista || false,
        cnh: motorista ? cnh : null,
      },
    })

    res.status(201).json({
      mensagem: "Usuário criado com sucesso",
      usuario,
    })
  } catch (erro) {
    console.error("Erro ao criar usuário:", erro)
    console.error("Stack trace:", erro.stack)
    console.error("Dados recebidos:", req.body)
    
    // Verificar se é erro do Prisma
    if (erro.code) {
      console.error("Código do erro:", erro.code)
    }
    
    res.status(500).json({
      erro: "Erro ao criar usuário",
      detalhes: erro.message,
      codigo: erro.code || null,
    })
  }
}

// Listar todos os usuários
export const listarUsuarios = async (req, res) => {
  try {
    const { motorista } = req.query

    const filtro = motorista !== undefined ? { motorista: motorista === "true" } : {}

    const usuarios = await prisma.usuario.findMany({
      where: filtro,
      include: {
        carros: true,
      },
      orderBy: {
        criadoEm: "desc",
      },
    })

    res.json({ usuarios })
  } catch (erro) {
    console.error("Erro ao listar usuários:", erro)
    res.status(500).json({
      erro: "Erro ao listar usuários",
      detalhes: erro.message,
    })
  }
}

// Buscar usuário por ID
export const buscarUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params

    const usuario = await prisma.usuario.findUnique({
      where: { id: Number.parseInt(id) },
      include: {
        carros: {
          include: {
            gastosCombustivel: true,
            gastosManutencao: true,
          },
        },
      },
    })

    if (!usuario) {
      return res.status(404).json({
        erro: "Usuário não encontrado",
      })
    }

    res.json({ usuario })
  } catch (erro) {
    console.error("Erro ao buscar usuário:", erro)
    res.status(500).json({
      erro: "Erro ao buscar usuário",
      detalhes: erro.message,
    })
  }
}

// Atualizar usuário
export const atualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params
    const { nome, senha, motorista, cnh } = req.body

    // Verificar se usuário existe
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { id: Number.parseInt(id) },
    })

    if (!usuarioExistente) {
      return res.status(404).json({
        erro: "Usuário não encontrado",
      })
    }

    // Se está mudando para motorista, CNH é obrigatória
    if (motorista && !cnh && !usuarioExistente.cnh) {
      return res.status(400).json({
        erro: "CNH é obrigatória para motoristas",
      })
    }

    // Preparar dados para atualização
    const dadosAtualizacao = {}
    
    if (nome) {
      dadosAtualizacao.nome = nome
    }
    
    if (senha) {
      dadosAtualizacao.senha = senha
    }
    
    if (motorista !== undefined) {
      dadosAtualizacao.motorista = motorista
      
      // Se está mudando para não motorista, remover CNH
      if (!motorista) {
        dadosAtualizacao.cnh = null
      } else if (cnh) {
        // Se está mudando para motorista e tem CNH, atualizar
        dadosAtualizacao.cnh = cnh
      }
    } else if (cnh) {
      // Se não está mudando o status de motorista mas tem CNH, atualizar
      dadosAtualizacao.cnh = cnh
    }

    const usuario = await prisma.usuario.update({
      where: { id: Number.parseInt(id) },
      data: dadosAtualizacao,
    })

    res.json({
      mensagem: "Usuário atualizado com sucesso",
      usuario,
    })
  } catch (erro) {
    console.error("Erro ao atualizar usuário:", erro)
    res.status(500).json({
      erro: "Erro ao atualizar usuário",
      detalhes: erro.message,
    })
  }
}

// Deletar usuário
export const deletarUsuario = async (req, res) => {
  try {
    const { id } = req.params

    // Verificar se usuário existe
    const usuario = await prisma.usuario.findUnique({
      where: { id: Number.parseInt(id) },
      include: { carros: true },
    })

    if (!usuario) {
      return res.status(404).json({
        erro: "Usuário não encontrado",
      })
    }

    // Verificar se tem carros vinculados
    if (usuario.carros.length > 0) {
      return res.status(400).json({
        erro: "Não é possível deletar usuário com carros vinculados. Delete os carros primeiro.",
      })
    }

    await prisma.usuario.delete({
      where: { id: Number.parseInt(id) },
    })

    res.json({
      mensagem: "Usuário deletado com sucesso",
    })
  } catch (erro) {
    console.error("Erro ao deletar usuário:", erro)
    res.status(500).json({
      erro: "Erro ao deletar usuário",
      detalhes: erro.message,
    })
  }
}
