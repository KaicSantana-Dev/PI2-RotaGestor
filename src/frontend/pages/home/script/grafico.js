document.addEventListener("DOMContentLoaded", () => {
  async function carregarDadosEGerarGrafico() {
    try {
      const resposta = await fetch("/api/dashboard/grafico");
      if (!resposta.ok) {
        throw new Error("Falha ao carregar dados do gráfico");
      }
      const dados = await resposta.json();

      const labelsDoJson = dados.labels || [];
      const valoresDoJson = dados.valores || [];
      const tituloDoGrafico = `Gastos Mensais - ${dados.ano || new Date().getFullYear()}`;

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
            title: {
              display: true,
              text: tituloDoGrafico,
              font: {
                size: 16,
                weight: 'bold'
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return 'R$ ' + value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                }
              }
            },
          },
        },
      });
    } catch (error) {
      console.error("Erro ao gerar o gráfico:", error);
      const ctx = document.getElementById("meuGrafico").getContext("2d");
      const meuGrafico = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
          datasets: [
            {
              label: "Gastos Mensais",
              data: [],
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
    }
  }

  carregarDadosEGerarGrafico();
});
