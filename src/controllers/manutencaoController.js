import pool from "../../banco/db-manutencao.js"

// Listar todas as manutenções
export const listarManutencoes = async (req, res) => {
  try {
    const query = `
      SELECT 
        id,
        modelo,
        placa,
        servico,
        valor,
        oficina,
        hora,
        data
      FROM manutencoes
      ORDER BY data DESC
    `
    
    const result = await pool.query(query)
    
    // Se não houver dados, retornar array vazio
    if (!result.rows || result.rows.length === 0) {
      return res.json([])
    }
    
    // Converter dados para formato seguro
    const manutencoesJson = result.rows.map(manutencao => ({
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

    const query = `
      INSERT INTO manutencoes (modelo, placa, servico, valor, oficina, hora, data)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `
    
    const values = [
      modelo.trim(),
      placa.trim(),
      servico.trim(),
      parseFloat(valor),
      oficina.trim(),
      hora.trim(),
      data
    ]

    const result = await pool.query(query, values)
    const novaManutencao = result.rows[0]

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
    
    const query = `
      SELECT 
        id,
        modelo,
        placa,
        servico,
        valor,
        oficina,
        hora,
        data
      FROM manutencoes
      WHERE id = $1
    `
    
    const result = await pool.query(query, [id])
    
    if (result.rows.length === 0) {
      return res.status(404).json({ erro: "Manutenção não encontrada" })
    }
    
    const manutencao = result.rows[0]
    
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
    const checkQuery = `SELECT id FROM manutencoes WHERE id = $1`
    const checkResult = await pool.query(checkQuery, [id])
    
    if (checkResult.rows.length === 0) {
      return res.status(404).json({ erro: "Manutenção não encontrada" })
    }

    // Construir query de atualização dinamicamente
    const updates = []
    const values = []
    let paramIndex = 1

    if (modelo !== undefined) {
      updates.push(`modelo = $${paramIndex}`)
      values.push(modelo.trim())
      paramIndex++
    }
    if (placa !== undefined) {
      updates.push(`placa = $${paramIndex}`)
      values.push(placa.trim())
      paramIndex++
    }
    if (servico !== undefined) {
      updates.push(`servico = $${paramIndex}`)
      values.push(servico.trim())
      paramIndex++
    }
    if (valor !== undefined) {
      updates.push(`valor = $${paramIndex}`)
      values.push(parseFloat(valor))
      paramIndex++
    }
    if (oficina !== undefined) {
      updates.push(`oficina = $${paramIndex}`)
      values.push(oficina.trim())
      paramIndex++
    }
    if (hora !== undefined) {
      updates.push(`hora = $${paramIndex}`)
      values.push(hora.trim())
      paramIndex++
    }
    if (data !== undefined) {
      updates.push(`data = $${paramIndex}`)
      values.push(data)
      paramIndex++
    }

    if (updates.length === 0) {
      return res.status(400).json({ erro: "Nenhum campo para atualizar" })
    }

    values.push(id)
    const updateQuery = `
      UPDATE manutencoes
      SET ${updates.join(', ')}
      WHERE id = $${paramIndex}
      RETURNING *
    `

    const result = await pool.query(updateQuery, values)
    const manutencao = result.rows[0]

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
    const checkQuery = `SELECT id FROM manutencoes WHERE id = $1`
    const checkResult = await pool.query(checkQuery, [id])
    
    if (checkResult.rows.length === 0) {
      return res.status(404).json({ erro: "Manutenção não encontrada" })
    }

    const deleteQuery = `DELETE FROM manutencoes WHERE id = $1`
    await pool.query(deleteQuery, [id])
    
    res.json({ mensagem: "Removida com sucesso!" })
  } catch (erro) {
    console.error("Erro ao remover manutenção:", erro)
    res.status(400).json({ 
      erro: "Erro ao remover manutenção",
      detalhes: erro.message 
    })
  }
}

