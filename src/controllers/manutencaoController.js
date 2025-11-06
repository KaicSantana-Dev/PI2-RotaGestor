import Manutencao from "../models/manutencaoModel.js"
import { sequelize } from "../../banco/db.js"

// Listar todas as manutenções
export const listarManutencoes = async (req, res) => {
  try {
    // Garantir que a tabela existe
    await Manutencao.sync({ alter: true })
    
    // Usar raw: true para evitar problemas de serialização
    const manutencoes = await Manutencao.findAll({
      order: [['data', 'DESC']],
      raw: true
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
      valor: manutencao.valor || 0,
      oficina: manutencao.oficina || '',
      hora: manutencao.hora || '',
      data: manutencao.data ? (typeof manutencao.data === 'string' ? manutencao.data : manutencao.data.toISOString().split('T')[0]) : ''
    }))
    
    res.json(manutencoesJson)
  } catch (erro) {
    console.error("Erro ao buscar manutenções:", erro)
    console.error("Stack trace:", erro.stack)
    console.error("Detalhes do erro:", {
      message: erro.message,
      name: erro.name,
      original: erro.original
    })
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

    const novaManutencao = await Manutencao.create({
      modelo: modelo.trim(),
      placa: placa.trim(),
      servico: servico.trim(),
      valor: parseFloat(valor),
      oficina: oficina.trim(),
      hora: hora.trim(),
      data: data // DATEONLY aceita string no formato YYYY-MM-DD
    })

    // Retornar dados formatados
    const manutencaoJson = {
      id: novaManutencao.id,
      modelo: novaManutencao.modelo,
      placa: novaManutencao.placa,
      servico: novaManutencao.servico,
      valor: novaManutencao.valor,
      oficina: novaManutencao.oficina,
      hora: novaManutencao.hora,
      data: novaManutencao.data ? novaManutencao.data.toString() : novaManutencao.data
    }

    res.status(201).json(manutencaoJson)
  } catch (erro) {
    console.error("Erro ao cadastrar manutenção:", erro)
    console.error("Stack trace:", erro.stack)
    console.error("Detalhes do erro:", {
      message: erro.message,
      name: erro.name,
      original: erro.original
    })
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
    const manutencao = await Manutencao.findByPk(id)
    
    if (!manutencao) {
      return res.status(404).json({ erro: "Manutenção não encontrada" })
    }
    
    res.json(manutencao)
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

    const manutencao = await Manutencao.findByPk(id)
    
    if (!manutencao) {
      return res.status(404).json({ erro: "Manutenção não encontrada" })
    }

    await manutencao.update({
      ...(modelo && { modelo }),
      ...(placa && { placa }),
      ...(servico && { servico }),
      ...(valor && { valor: parseFloat(valor) }),
      ...(oficina && { oficina }),
      ...(hora && { hora }),
      ...(data && { data })
    })

    res.json(manutencao)
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
    const manutencao = await Manutencao.findByPk(id)
    
    if (!manutencao) {
      return res.status(404).json({ erro: "Manutenção não encontrada" })
    }

    await manutencao.destroy()
    res.json({ mensagem: "Removida com sucesso!" })
  } catch (erro) {
    console.error("Erro ao remover manutenção:", erro)
    res.status(400).json({ 
      erro: "Erro ao remover manutenção",
      detalhes: erro.message 
    })
  }
}

