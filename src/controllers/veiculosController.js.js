import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// Listar todos os veículos
export const listarVeiculos = async (req, res) => {
  try {
    const veiculos = await prisma.carro.findMany({
      include: {
        Motorista: true,
      },
      orderBy: {
        cadastro: "desc",
      },
    })

    // Formata os dados para o frontend
    const veiculosFormatados = veiculos.map((veiculo) => ({
      id: veiculo.id,
      modelo: veiculo.modelo,
      placa: veiculo.placa,
      motorista: veiculo.Motorista.Nome,
      cnh: veiculo.cnh,
      imagem: veiculo.URL_Imagem,
      status: veiculo.status,
      gastoMensal: veiculo.gastoMensal,
      dataInicio: veiculo.cadastro.toISOString().split("T")[0],
      ativo: veiculo.status === "ativo",
      motoristaId: veiculo.motoristaId,
    }))

    res.json(veiculosFormatados)
  } catch (error) {
    console.error("Erro ao listar veículos:", error)
    res.status(500).json({ error: "Erro ao listar veículos" })
  }
}

// Buscar veículo por ID
export const buscarVeiculoPorId = async (req, res) => {
  try {
    const { id } = req.params

    const veiculo = await prisma.carro.findUnique({
      where: { id: Number.parseInt(id) },
      include: {
        Motorista: true,
      },
    })

    if (!veiculo) {
      return res.status(404).json({ error: "Veículo não encontrado" })
    }

    // Formata os dados para o frontend
    const veiculoFormatado = {
      id: veiculo.id,
      modelo: veiculo.modelo,
      placa: veiculo.placa,
      motorista: veiculo.Motorista.Nome,
      cnh: veiculo.cnh,
      imagem: veiculo.URL_Imagem,
      status: veiculo.status,
      gastoMensal: veiculo.gastoMensal,
      dataInicio: veiculo.cadastro.toISOString().split("T")[0],
      ativo: veiculo.status === "ativo",
      motoristaId: veiculo.motoristaId,
    }

    res.json(veiculoFormatado)
  } catch (error) {
    console.error("Erro ao buscar veículo:", error)
    res.status(500).json({ error: "Erro ao buscar veículo" })
  }
}

// Criar novo veículo
export const criarVeiculo = async (req, res) => {
  try {
    const { modelo, placa, cnh, imagem, status, gastoMensal, motoristaId } = req.body

    // Verifica se o motorista existe
    const motorista = await prisma.funcionario.findUnique({
      where: { id: motoristaId },
    })

    if (!motorista) {
      return res.status(404).json({ error: "Motorista não encontrado" })
    }

    // Verifica se o motorista já tem um veículo
    const veiculoExistente = await prisma.carro.findUnique({
      where: { motoristaId },
    })

    if (veiculoExistente) {
      return res.status(400).json({ error: "Este motorista já possui um veículo cadastrado" })
    }

    // Cria o veículo
    const novoVeiculo = await prisma.carro.create({
      data: {
        modelo,
        placa: placa.toUpperCase(),
        cnh,
        URL_Imagem: imagem || "https://via.placeholder.com/400x250?text=Sem+Imagem",
        status: status || "ativo",
        gastoMensal: Number.parseFloat(gastoMensal) || 0,
        cadastro: new Date(),
        motoristaId,
      },
      include: {
        Motorista: true,
      },
    })

    // Formata os dados para o frontend
    const veiculoFormatado = {
      id: novoVeiculo.id,
      modelo: novoVeiculo.modelo,
      placa: novoVeiculo.placa,
      motorista: novoVeiculo.Motorista.Nome,
      cnh: novoVeiculo.cnh,
      imagem: novoVeiculo.URL_Imagem,
      status: novoVeiculo.status,
      gastoMensal: novoVeiculo.gastoMensal,
      dataInicio: novoVeiculo.cadastro.toISOString().split("T")[0],
      ativo: novoVeiculo.status === "ativo",
      motoristaId: novoVeiculo.motoristaId,
    }

    res.status(201).json(veiculoFormatado)
  } catch (error) {
    console.error("Erro ao criar veículo:", error)

    if (error.code === "P2002") {
      return res.status(400).json({ error: "Placa já cadastrada" })
    }

    res.status(500).json({ error: "Erro ao criar veículo" })
  }
}

// Atualizar veículo
export const atualizarVeiculo = async (req, res) => {
  try {
    const { id } = req.params
    const { modelo, placa, cnh, imagem, status, gastoMensal, motoristaId } = req.body

    // Verifica se o veículo existe
    const veiculoExistente = await prisma.carro.findUnique({
      where: { id: Number.parseInt(id) },
    })

    if (!veiculoExistente) {
      return res.status(404).json({ error: "Veículo não encontrado" })
    }

    // Se está mudando o motorista, verifica se o novo motorista existe e não tem veículo
    if (motoristaId && motoristaId !== veiculoExistente.motoristaId) {
      const motorista = await prisma.funcionario.findUnique({
        where: { id: motoristaId },
      })

      if (!motorista) {
        return res.status(404).json({ error: "Motorista não encontrado" })
      }

      const veiculoDoMotorista = await prisma.carro.findUnique({
        where: { motoristaId },
      })

      if (veiculoDoMotorista) {
        return res.status(400).json({ error: "Este motorista já possui um veículo cadastrado" })
      }
    }

    // Atualiza o veículo
    const veiculoAtualizado = await prisma.carro.update({
      where: { id: Number.parseInt(id) },
      data: {
        ...(modelo && { modelo }),
        ...(placa && { placa: placa.toUpperCase() }),
        ...(cnh && { cnh }),
        ...(imagem && { URL_Imagem: imagem }),
        ...(status && { status }),
        ...(gastoMensal !== undefined && { gastoMensal: Number.parseFloat(gastoMensal) }),
        ...(motoristaId && { motoristaId }),
      },
      include: {
        Motorista: true,
      },
    })

    // Formata os dados para o frontend
    const veiculoFormatado = {
      id: veiculoAtualizado.id,
      modelo: veiculoAtualizado.modelo,
      placa: veiculoAtualizado.placa,
      motorista: veiculoAtualizado.Motorista.Nome,
      cnh: veiculoAtualizado.cnh,
      imagem: veiculoAtualizado.URL_Imagem,
      status: veiculoAtualizado.status,
      gastoMensal: veiculoAtualizado.gastoMensal,
      dataInicio: veiculoAtualizado.cadastro.toISOString().split("T")[0],
      ativo: veiculoAtualizado.status === "ativo",
      motoristaId: veiculoAtualizado.motoristaId,
    }

    res.json(veiculoFormatado)
  } catch (error) {
    console.error("Erro ao atualizar veículo:", error)

    if (error.code === "P2002") {
      return res.status(400).json({ error: "Placa já cadastrada" })
    }

    res.status(500).json({ error: "Erro ao atualizar veículo" })
  }
}

// Excluir veículo
export const excluirVeiculo = async (req, res) => {
  try {
    const { id } = req.params

    // Verifica se o veículo existe
    const veiculo = await prisma.carro.findUnique({
      where: { id: Number.parseInt(id) },
    })

    if (!veiculo) {
      return res.status(404).json({ error: "Veículo não encontrado" })
    }

    // Exclui o veículo
    await prisma.carro.delete({
      where: { id: Number.parseInt(id) },
    })

    res.json({ message: "Veículo excluído com sucesso" })
  } catch (error) {
    console.error("Erro ao excluir veículo:", error)
    res.status(500).json({ error: "Erro ao excluir veículo" })
  }
}
