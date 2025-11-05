document.addEventListener("DOMContentLoaded", () => {
  async function carregarDadosEGerarGrafico() {
    try {
      const resposta = await fetch("dados.json");
      if (!resposta.ok) {
        throw new Error("Falha ao carregar o JSON");
      }
      const dados = await resposta.json();

      const labelsDoJson = dados.labelsAnos;
      const valoresDoJson = dados.valoresVendas;
      const tituloDoGrafico = dados.titulo;

      const ctx = document.getElementById("meuGrafico").getContext("2d");

      const meuGrafico = new Chart(ctx, {
        type: "line",
        data: {
          labels: labelsDoJson,
          datasets: [
            {
              label: tituloDoGrafico,
              data: valoresDoJson,
              backgroundColor: "rgb(58, 139, 116, 0.2)",
              borderColor: "#3a8b74",
              borderWidth: 2,
              fill: true,
              tension: 0.7,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    } catch (error) {
      console.error("Erro ao gerar o gráfico:", error);
    }
  }

  carregarDadosEGerarGrafico();
});
