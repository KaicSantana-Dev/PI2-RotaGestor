import prisma from "../prisma/client.js"

// Obter maiores gastos de combustível por carro
export const maioresGastosCombustivel = async (req, res) => {
  try {
    const gastos = await prisma.gastosCombustivel.groupBy({
      by: ["carroId"],
      _sum: {
        valor: true,
      },
      orderBy: {
        _sum: {
          valor: "desc",
        },
      },
      take: 3,
    })

    // Buscar informações dos carros
    const carrosIds = gastos.map((g) => g.carroId)
    const carros = await prisma.carro.findMany({
      where: {
        id: { in: carrosIds },
      },
      select: {
        id: true,
        placa: true,
        modelo: true,
      },
    })

    // Combinar dados
    const resultado = gastos.map((gasto) => {
      const carro = carros.find((c) => c.id === gasto.carroId)
      return {
        placa: carro?.placa || "N/A",
        modelo: carro?.modelo || "N/A",
        total: parseFloat(gasto._sum.valor || 0),
      }
    })

    res.json({ maioresGastos: resultado })
  } catch (erro) {
    console.error("Erro ao buscar maiores gastos de combustível:", erro)
    res.status(500).json({
      erro: "Erro ao buscar maiores gastos de combustível",
      detalhes: erro.message,
    })
  }
}

// Obter maiores gastos de manutenção por carro
export const maioresGastosManutencao = async (req, res) => {
  try {
    const gastos = await prisma.gastosManutencao.groupBy({
      by: ["carroId"],
      _sum: {
        valor: true,
      },
      orderBy: {
        _sum: {
          valor: "desc",
        },
      },
      take: 3,
    })

    // Buscar informações dos carros
    const carrosIds = gastos.map((g) => g.carroId)
    const carros = await prisma.carro.findMany({
      where: {
        id: { in: carrosIds },
      },
      select: {
        id: true,
        placa: true,
        modelo: true,
      },
    })

    // Combinar dados
    const resultado = gastos.map((gasto) => {
      const carro = carros.find((c) => c.id === gasto.carroId)
      return {
        placa: carro?.placa || "N/A",
        modelo: carro?.modelo || "N/A",
        total: parseFloat(gasto._sum.valor || 0),
      }
    })

    res.json({ maioresGastos: resultado })
  } catch (erro) {
    console.error("Erro ao buscar maiores gastos de manutenção:", erro)
    res.status(500).json({
      erro: "Erro ao buscar maiores gastos de manutenção",
      detalhes: erro.message,
    })
  }
}

// Obter médias de consumo por carro (km/litro)
export const mediasConsumo = async (req, res) => {
  try {
    // Buscar todos os gastos de combustível com quilometragem e litros
    const gastos = await prisma.gastosCombustivel.findMany({
      where: {
        quilometragem: { not: null },
        litros: { not: null },
      },
      select: {
        carroId: true,
        quilometragem: true,
        litros: true,
      },
    })

    // Agrupar por carro e calcular média
    const consumoPorCarro = {}
    gastos.forEach((gasto) => {
      if (!consumoPorCarro[gasto.carroId]) {
        consumoPorCarro[gasto.carroId] = {
          totalKm: 0,
          totalLitros: 0,
          count: 0,
        }
      }
      consumoPorCarro[gasto.carroId].totalKm += parseFloat(gasto.quilometragem)
      consumoPorCarro[gasto.carroId].totalLitros += parseFloat(gasto.litros)
      consumoPorCarro[gasto.carroId].count += 1
    })

    // Calcular médias e formatar
    const medias = Object.entries(consumoPorCarro)
      .map(([carroId, dados]) => {
        const media = dados.totalLitros > 0 ? dados.totalKm / dados.totalLitros : 0
        return {
          carroId: parseInt(carroId),
          media: media,
          totalKm: dados.totalKm,
          totalLitros: dados.totalLitros,
        }
      })
      .sort((a, b) => b.media - a.media)
      .slice(0, 3)

    // Buscar informações dos carros
    const carrosIds = medias.map((m) => m.carroId)
    const carros = await prisma.carro.findMany({
      where: {
        id: { in: carrosIds },
      },
      select: {
        id: true,
        placa: true,
        modelo: true,
      },
    })

    // Combinar dados
    const resultado = medias.map((media) => {
      const carro = carros.find((c) => c.id === media.carroId)
      return {
        placa: carro?.placa || "N/A",
        modelo: carro?.modelo || "N/A",
        media: parseFloat(media.media.toFixed(2)),
        consumoFormatado: `${media.media.toFixed(2)} km/L`,
      }
    })

    res.json({ mediasConsumo: resultado })
  } catch (erro) {
    console.error("Erro ao buscar médias de consumo:", erro)
    res.status(500).json({
      erro: "Erro ao buscar médias de consumo",
      detalhes: erro.message,
    })
  }
}

// Obter dados para gráfico (gastos mensais)
export const dadosGrafico = async (req, res) => {
  try {
    const { ano } = req.query
    const anoAtual = ano ? parseInt(ano) : new Date().getFullYear()

    // Buscar todos os gastos do ano
    const inicioAno = new Date(anoAtual, 0, 1)
    const fimAno = new Date(anoAtual, 11, 31, 23, 59, 59)

    const [gastosCombustivel, gastosManutencao] = await Promise.all([
      prisma.gastosCombustivel.findMany({
        where: {
          data: {
            gte: inicioAno,
            lte: fimAno,
          },
        },
        select: {
          valor: true,
          data: true,
        },
      }),
      prisma.gastosManutencao.findMany({
        where: {
          data: {
            gte: inicioAno,
            lte: fimAno,
          },
        },
        select: {
          valor: true,
          data: true,
        },
      }),
    ])

    // Agrupar por mês
    const gastosPorMes = Array.from({ length: 12 }, () => 0)

    gastosCombustivel.forEach((gasto) => {
      const mes = new Date(gasto.data).getMonth()
      gastosPorMes[mes] += parseFloat(gasto.valor)
    })

    gastosManutencao.forEach((gasto) => {
      const mes = new Date(gasto.data).getMonth()
      gastosPorMes[mes] += parseFloat(gasto.valor)
    })

    // Formatar para resposta
    const meses = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ]

    const dados = {
      ano: anoAtual,
      labels: meses,
      valores: gastosPorMes,
    }

    res.json(dados)
  } catch (erro) {
    console.error("Erro ao buscar dados do gráfico:", erro)
    res.status(500).json({
      erro: "Erro ao buscar dados do gráfico",
      detalhes: erro.message,
    })
  }
}
