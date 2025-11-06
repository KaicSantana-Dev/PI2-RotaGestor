document.addEventListener('DOMContentLoaded', () => {

    const apiUrl = '';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            const total = document.getElementById('cGasto');
            const combustivel = document.getElementById('cGasto');
            const manutencao = document.getElementById('mGasto');

            const gastoTotal = data.GastosCombustivel.valor + data.GastosManutencao.valor;
            const gastoCombustivel = data.GastosCombustivel.valor;
            const gastoManutencao = data.GastosManutencao.valor;

            total.innerHTML = `
            <h1>${gastoTotal}
            `;

            combustivel.innerHTML = `
            <h1>${gastoTotal}
            `;

            manutencao.innerHTML = `
            <h1>${gastoTotal}
            `;
        })
        .catch(error => {
            console.error('Houve um problema com a requisição fetch:', error);
            const container = document.getElementById('dados-api');
            container.innerHTML = '<p>Não foi possível carregar os dados.</p>';
        });
});