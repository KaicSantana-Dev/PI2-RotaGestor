import prisma from "../prisma/client.js"

// Listar todas as manutenções
export const listarManutencoes = async (req, res) => {
  try {
    const manutencoes = await prisma.manutencao.findMany({
      orderBy: {
        data: 'desc'
      }
    })
    
    // Se não houver dados, retornar array vazio
    if (!manutencoes || manutencoes.length === 0) {
      return res.json([])
    }
    
    // Converter dados para formato seguro
    const manutencoesJson = manutencoes.map(manutencao => ({
      id: manutencao.id,
      modelo: manutencao.modelo || '',
      placa: manutencao.placa || '',
      servico: manutencao.servico || '',
      valor: parseFloat(manutencao.valor) || 0,
      oficina: manutencao.oficina || '',
      hora: manutencao.hora || '',
      data: manutencao.data ? (typeof manutencao.data === 'string' ? manutencao.data : manutencao.data.toISOString().split('T')[0]) : ''
    }))
    
    res.json(manutencoesJson)
  } catch (erro) {
    console.error("Erro ao buscar manutenções:", erro)
    console.error("Stack trace:", erro.stack)
    res.status(500).json({ 
      erro: "Erro ao buscar manutenções",
      detalhes: erro.message,
      stack: process.env.NODE_ENV === "development" ? erro.stack : undefined
    })
  }
}

// Criar nova manutenção
export const criarManutencao = async (req, res) => {
  try {
    const { modelo, placa, servico, valor, oficina, hora, data } = req.body

    console.log("Dados recebidos:", { modelo, placa, servico, valor, oficina, hora, data })

    // Validação básica
    if (!modelo || !placa || !servico || !valor || !oficina || !hora || !data) {
      return res.status(400).json({
        erro: "Todos os campos são obrigatórios",
        camposRecebidos: { modelo, placa, servico, valor, oficina, hora, data }
      })
    }

    const novaManutencao = await prisma.manutencao.create({
      data: {
        modelo: modelo.trim(),
        placa: placa.trim(),
        servico: servico.trim(),
        valor: parseFloat(valor),
        oficina: oficina.trim(),
        hora: hora.trim(),
        data: new Date(data)
      }
    })

    // Retornar dados formatados
    const manutencaoJson = {
      id: novaManutencao.id,
      modelo: novaManutencao.modelo,
      placa: novaManutencao.placa,
      servico: novaManutencao.servico,
      valor: parseFloat(novaManutencao.valor),
      oficina: novaManutencao.oficina,
      hora: novaManutencao.hora,
      data: novaManutencao.data ? (typeof novaManutencao.data === 'string' ? novaManutencao.data : novaManutencao.data.toISOString().split('T')[0]) : novaManutencao.data
    }

    res.status(201).json(manutencaoJson)
  } catch (erro) {
    console.error("Erro ao cadastrar manutenção:", erro)
    console.error("Stack trace:", erro.stack)
    res.status(400).json({ 
      erro: "Erro ao cadastrar manutenção",
      detalhes: erro.message,
      stack: process.env.NODE_ENV === "development" ? erro.stack : undefined
    })
  }
}

// Buscar manutenção por ID
export const buscarManutencaoPorId = async (req, res) => {
  try {
    const { id } = req.params
    
    const manutencao = await prisma.manutencao.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    
    if (!manutencao) {
      return res.status(404).json({ erro: "Manutenção não encontrada" })
    }
    
    // Formatar dados
    const manutencaoJson = {
      id: manutencao.id,
      modelo: manutencao.modelo,
      placa: manutencao.placa,
      servico: manutencao.servico,
      valor: parseFloat(manutencao.valor),
      oficina: manutencao.oficina,
      hora: manutencao.hora,
      data: manutencao.data ? (typeof manutencao.data === 'string' ? manutencao.data : manutencao.data.toISOString().split('T')[0]) : manutencao.data
    }
    
    res.json(manutencaoJson)
  } catch (erro) {
    console.error("Erro ao buscar manutenção:", erro)
    res.status(500).json({ 
      erro: "Erro ao buscar manutenção",
      detalhes: erro.message 
    })
  }
}

// Atualizar manutenção
export const atualizarManutencao = async (req, res) => {
  try {
    const { id } = req.params
    const { modelo, placa, servico, valor, oficina, hora, data } = req.body

    // Verificar se a manutenção existe
    const manutencaoExistente = await prisma.manutencao.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    
    if (!manutencaoExistente) {
      return res.status(404).json({ erro: "Manutenção não encontrada" })
    }

    // Construir objeto de atualização dinamicamente
    const updateData = {}

    if (modelo !== undefined) {
      updateData.modelo = modelo.trim()
    }
    if (placa !== undefined) {
      updateData.placa = placa.trim()
    }
    if (servico !== undefined) {
      updateData.servico = servico.trim()
    }
    if (valor !== undefined) {
      updateData.valor = parseFloat(valor)
    }
    if (oficina !== undefined) {
      updateData.oficina = oficina.trim()
    }
    if (hora !== undefined) {
      updateData.hora = hora.trim()
    }
    if (data !== undefined) {
      updateData.data = new Date(data)
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ erro: "Nenhum campo para atualizar" })
    }

    const manutencao = await prisma.manutencao.update({
      where: {
        id: parseInt(id)
      },
      data: updateData
    })

    // Formatar dados
    const manutencaoJson = {
      id: manutencao.id,
      modelo: manutencao.modelo,
      placa: manutencao.placa,
      servico: manutencao.servico,
      valor: parseFloat(manutencao.valor),
      oficina: manutencao.oficina,
      hora: manutencao.hora,
      data: manutencao.data ? (typeof manutencao.data === 'string' ? manutencao.data : manutencao.data.toISOString().split('T')[0]) : manutencao.data
    }

    res.json(manutencaoJson)
  } catch (erro) {
    console.error("Erro ao atualizar manutenção:", erro)
    res.status(400).json({ 
      erro: "Erro ao atualizar manutenção",
      detalhes: erro.message 
    })
  }
}

// Deletar manutenção
export const deletarManutencao = async (req, res) => {
  try {
    const { id } = req.params
    
    // Verificar se a manutenção existe
    const manutencaoExistente = await prisma.manutencao.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    
    if (!manutencaoExistente) {
      return res.status(404).json({ erro: "Manutenção não encontrada" })
    }

    await prisma.manutencao.delete({
      where: {
        id: parseInt(id)
      }
    })
    
    res.json({ mensagem: "Removida com sucesso!" })
  } catch (erro) {
    console.error("Erro ao remover manutenção:", erro)
    res.status(400).json({ 
      erro: "Erro ao remover manutenção",
      detalhes: erro.message 
    })
  }
}

