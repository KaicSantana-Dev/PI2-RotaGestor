document.addEventListener('DOMContentLoaded', () => {

    const API_CARROS_URL = '/api/carros';
    const API_COMBUSTIVEL_URL = '/api/gastos/combustivel';
    const API_MANUTENCAO_URL = '/api/gastos/manutencao';
    const API_DASHBOARD_COMBUSTIVEL = '/api/dashboard/maiores-gastos-combustivel';
    const API_DASHBOARD_MANUTENCAO = '/api/dashboard/maiores-gastos-manutencao';
    const API_DASHBOARD_CONSUMO = '/api/dashboard/medias-consumo';

    const elGastoTotal = document.querySelector('.tGasto');
    const elCombustivel = document.querySelector('.cGasto');
    const elManutencao = document.querySelector('.mGasto');
    const elTotalVeiculos = document.querySelector('.vGasto');
    const elMaioresGastosCombustivel = document.getElementById('maioresGastosCombustivel');
    const elMaioresGastosManutencao = document.getElementById('maioresGastosManutencao');
    const elMediasConsumo = document.getElementById('mediasConsumo');

    const formatarMoeda = (valor) => {
        if (isNaN(valor)) valor = 0;
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };
    const setCarregando = (el) => {
        if (el) el.innerHTML = `<h1 class="text-xl font-bold text-gray-400">...</h1>`;
    };
    const setValor = (el, valor, formatador) => {
        if (el) el.innerHTML = `<h1 class="text-2xl font-bold text-gray-800">${formatador ? formatador(valor) : valor}</h1>`;
    };
    const setErro = (el) => {
        if(el) el.innerHTML = `<p class="text-sm text-red-500">Erro!</p>`;
    };

    const safeFetch = (url) => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.warn(`Resposta não-OK (${response.status}) para ${url}`);
                    return {};
                }
                const contentLength = response.headers.get('Content-Length');
                if (contentLength === '0') {
                    return {};
                }
                return response.json().catch(parseError => {
                    console.warn(`Falha ao fazer parse do JSON de ${url}: ${parseError.message}.`);
                    return {};
                });
            })
            .catch(networkError => {
                console.error(`Erro de rede ao buscar ${url}: ${networkError.message}`);
                return {};
            });
    };

    // Função para exibir maiores gastos
    const exibirMaioresGastos = (elemento, gastos, tipo = 'moeda') => {
        if (!elemento) return;
        
        if (!gastos || gastos.length === 0) {
            elemento.innerHTML = '<div class="gastosInfo"><h1>Nenhum dado disponível</h1><h2>-</h2></div>';
            return;
        }

        elemento.innerHTML = gastos.map(gasto => {
            const valor = tipo === 'moeda' 
                ? formatarMoeda(gasto.total) 
                : gasto.consumoFormatado || `${gasto.media.toFixed(2)} km/L`;
            return `
                <div class="gastosInfo">
                    <h1>${gasto.placa}</h1>
                    <h2>${valor}</h2>
                </div>
            `;
        }).join('');
    };

    setCarregando(elGastoTotal);
    setCarregando(elCombustivel);
    setCarregando(elManutencao);
    setCarregando(elTotalVeiculos);

    const promessaCarros = safeFetch(API_CARROS_URL);
    const promessaCombustivel = safeFetch(API_COMBUSTIVEL_URL);
    const promessaManutencao = safeFetch(API_MANUTENCAO_URL);
    const promessaMaioresCombustivel = safeFetch(API_DASHBOARD_COMBUSTIVEL);
    const promessaMaioresManutencao = safeFetch(API_DASHBOARD_MANUTENCAO);
    const promessaMediasConsumo = safeFetch(API_DASHBOARD_CONSUMO);

    Promise.all([
        promessaCarros, 
        promessaCombustivel, 
        promessaManutencao,
        promessaMaioresCombustivel,
        promessaMaioresManutencao,
        promessaMediasConsumo
    ])
        .then(resultados => {
            const dadosCarros = resultados[0].carros || [];
            const dadosCombustivel = resultados[1].gastosCombustivel || [];
            const dadosManutencao = resultados[2].gastosManutencao || [];
            const maioresCombustivel = resultados[3].maioresGastos || [];
            const maioresManutencao = resultados[4].maioresGastos || [];
            const mediasConsumo = resultados[5].mediasConsumo || [];

            const totalVeiculos = dadosCarros.length;

            const totalCombustivel = dadosCombustivel.reduce((acc, gasto) => {
                return acc + parseFloat(gasto.valor || 0);
            }, 0);

            const totalManutencao = dadosManutencao.reduce((acc, gasto) => {
                return acc + parseFloat(gasto.valor || 0);
            }, 0);

            const gastoTotal = totalCombustivel + totalManutencao;

            setValor(elGastoTotal, gastoTotal, formatarMoeda);
            setValor(elCombustivel, totalCombustivel, formatarMoeda);
            setValor(elManutencao, totalManutencao, formatarMoeda);
            setValor(elTotalVeiculos, totalVeiculos);

            // Exibir rankings
            exibirMaioresGastos(elMaioresGastosCombustivel, maioresCombustivel, 'moeda');
            exibirMaioresGastos(elMaioresGastosManutencao, maioresManutencao, 'moeda');
            exibirMaioresGastos(elMediasConsumo, mediasConsumo, 'consumo');

        })
        .catch(error => {
            console.error('Houve um problema inesperado no Promise.all:', error);
            setErro(elGastoTotal);
            setErro(elCombustivel);
            setErro(elManutencao);
            setErro(elTotalVeiculos);
        });
});