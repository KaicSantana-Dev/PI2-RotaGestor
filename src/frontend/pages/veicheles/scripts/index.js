// ============================================
// SISTEMA DE GERENCIAMENTO DE VEÍCULOS
// ============================================

// Base de dados simulada (futuramente será substituída por chamadas de API)
let vehicles = [
    {
        id: 1,
        modelo: "Fiat Mobi",
        placa: "ABC-1234",
        motorista: "João Silva",
        cnh: "12345678901",
        imagem: "https://www.motoragora.com.br/wp-content/uploads/2025/06/renault-kwid-perde-para-o-mobi-2-1024x576.jpg",
        status: "ativo",
        gastoMensal: 1450,
        dataInicio: "2023-06-15",
        ativo: true
    },
    {
        id: 2,
        modelo: "Fiat Uno",
        placa: "DEF-5678",
        motorista: "Maria Santos",
        cnh: "98765432109",
        imagem: "https://plus.unsplash.com/premium_photo-1664695368767-c42483a0bda1?q=80&w=872&auto=format&fit=crop",
        status: "ativo",
        gastoMensal: 1280,
        dataInicio: "2022-03-20",
        ativo: true
    },
    {
        id: 3,
        modelo: "Fiat Fiorino",
        placa: "GHI-9012",
        motorista: "Pedro Costa",
        cnh: "55544433322",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Fiat_Fiorino_D_pick-up_front.JPG",
        status: "inativo",
        gastoMensal: 980,
        dataInicio: "2021-11-10",
        ativo: false
    },
    {
        id: 4,
        modelo: "Chevrolet Onix",
        placa: "JKL-3456",
        motorista: "Ana Oliveira",
        cnh: "44433322211",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c8/2021_Chevrolet_Onix_Plus_1.2_LT.jpg",
        status: "ativo",
        gastoMensal: 1350,
        dataInicio: "2023-01-15",
        ativo: true
    },
    {
        id: 5,
        modelo: "Volkswagen Gol",
        placa: "MNO-7890",
        motorista: "Carlos Mendes",
        cnh: "99988877766",
        imagem: "https://motorprime.com.br/wp-content/uploads/2025/02/vw-gol-bola-1997-2-67c125f8e6841.webp",
        status: "ativo", 
        gastoMensal: 1180,
        dataInicio: "2022-08-20",
        ativo: true
    },
    {
        id: 6,
        modelo: "Renault Kwid",
        placa: "PQR-1234",
        motorista: "Mariana Silva",
        cnh: "11122233344",
        imagem: "https://revistacarro.com.br/wp-content/uploads/2023/07/DSC_0833.jpg",
        status: "inativo",
        gastoMensal: 890,
        dataInicio: "2021-05-10",
        ativo: false
    },
    {
        id: 7,
        modelo: "Toyota Corolla",
        placa: "STU-5678",
        motorista: "Roberto Santos",
        cnh: "77788899900",
        imagem: "https://cdn.motor1.com/images/mgl/W8Y8Wq/s3/toyota-corolla-gr-sport-2.0-2024.jpg",
        status: "ativo",
        gastoMensal: 1680,
        dataInicio: "2023-08-15",
        ativo: true
    },
    {
        id: 8,
        modelo: "Honda Civic",
        placa: "VWX-9012",
        motorista: "Patricia Lima",
        cnh: "44455566677",
        imagem: "https://s2-autoesporte.glbimg.com/WHYnlXOVQNj5H7Z10sZZeVCbE2s=/0x0:1480x987/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/o/He4JKxSU2oanE6KpVXMA/civic-touring-3-.jpg",
        status: "inativo",
        gastoMensal: 1520,
        dataInicio: "2022-11-20",
        ativo: false
    },
    {
        id: 9,
        modelo: "Hyundai HB20",
        placa: "YZA-3456",
        motorista: "Fernando Costa",
        cnh: "11122233344",
        imagem: "https://www.kovi.com.br/hs-fs/hubfs/200.webp?width=1140&height=400&name=200.webp",
        status: "ativo",
        gastoMensal: 1150,
        dataInicio: "2023-03-10",
        ativo: true
    },
    {
        id: 10,
        modelo: "Chevrolet Spin",
        placa: "BCD-7890",
        motorista: "Amanda Oliveira",
        cnh: "88899900011",
        imagem: "https://cdn.autopapo.com.br/box/uploads/2022/12/06160030/spin-lt-mt-2023-prata-frente-parada.jpg",
        status: "ativo",
        gastoMensal: 1420,
        dataInicio: "2022-06-25",
        ativo: true
    },
    // Duplicated entries with modified data
    {
        id: 11,
        modelo: "Fiat Mobi",
        placa: "XYZ-5678",
        motorista: "Lucas Almeida",
        cnh: "12345678902",
        imagem: "https://www.motoragora.com.br/wp-content/uploads/2025/06/renault-kwid-perde-para-o-mobi-2-1024x576.jpg",
        status: "ativo",
        gastoMensal: 1500,
        dataInicio: "2023-07-01",
        ativo: true
    },
    {
        id: 12,
        modelo: "Fiat Uno",
        placa: "UVW-1234",
        motorista: "Fernanda Lima",
        cnh: "98765432110",
        imagem: "https://plus.unsplash.com/premium_photo-1664695368767-c42483a0bda1?q=80&w=872&auto=format&fit=crop",
        status: "ativo",
        gastoMensal: 1300,
        dataInicio: "2022-04-15",
        ativo: true
    },
    {
        id: 13,
        modelo: "Fiat Fiorino",
        placa: "RST-4567",
        motorista: "Gustavo Rocha",
        cnh: "55544433323",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Fiat_Fiorino_D_pick-up_front.JPG",
        status: "inativo",
        gastoMensal: 1000,
        dataInicio: "2021-12-01",
        ativo: false
    },
    {
        id: 14,
        modelo: "Chevrolet Onix",
        placa: "OPQ-6789",
        motorista: "Juliana Costa",
        cnh: "44433322212",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c8/2021_Chevrolet_Onix_Plus_1.2_LT.jpg",
        status: "ativo",
        gastoMensal: 1400,
        dataInicio: "2023-02-10",
        ativo: true
    },
    {
        id: 15,
        modelo: "Volkswagen Gol",
        placa: "LMN-2345",
        motorista: "Ricardo Martins",
        cnh: "99988877767",
        imagem: "https://motorprime.com.br/wp-content/uploads/2025/02/vw-gol-bola-1997-2-67c125f8e6841.webp",
        status: "ativo", 
        gastoMensal: 1200,
        dataInicio: "2022-09-05",
        ativo: true
    },
    {
        id: 16,
        modelo: "Renault Kwid",
        placa: "JKL-8901",
        motorista: "Sofia Almeida",
        cnh: "11122233345",
        imagem: "https://revistacarro.com.br/wp-content/uploads/2023/07/DSC_0833.jpg",
        status: "inativo",
        gastoMensal: 900,
        dataInicio: "2021-06-20",
        ativo: false
    },
    {
        id: 17,
        modelo: "Toyota Corolla",
        placa: "ABC-9876",
        motorista: "André Silva",
        cnh: "77788899901",
        imagem: "https://cdn.motor1.com/images/mgl/W8Y8Wq/s3/toyota-corolla-gr-sport-2.0-2024.jpg",
        status: "ativo",
        gastoMensal: 1700,
        dataInicio: "2023-09-10",
        ativo: true
    },
    {
        id: 18,
        modelo: "Honda Civic",
        placa: "DEF-5432",
        motorista: "Tatiane Lima",
        cnh: "44455566678",
        imagem: "https://s2-autoesporte.glbimg.com/WHYnlXOVQNj5H7Z10sZZeVCbE2s=/0x0:1480x987/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/m/o/He4JKxSU2oanE6KpVXMA/civic-touring-3-.jpg",
        status: "inativo",
        gastoMensal: 1600,
        dataInicio: "2022-12-15",
        ativo: false
    },
    {
        id: 19,
        modelo: "Hyundai HB20",
        placa: "GHI-6789",
        motorista: "Cláudio Costa",
        cnh: "11122233345",
        imagem: "https://www.kovi.com.br/hs-fs/hubfs/200.webp?width=1140&height=400&name=200.webp",
        status: "ativo",
        gastoMensal: 1200,
        dataInicio: "2023-04-20",
        ativo: true
    },
    {
        id: 20,
        modelo: "Chevrolet Spin",
        placa: "JKL-1234",
        motorista: "Beatriz Oliveira",
        cnh: "88899900012",
        imagem: "https://cdn.autopapo.com.br/box/uploads/2022/12/06160030/spin-lt-mt-2023-prata-frente-parada.jpg",
        status: "ativo",
        gastoMensal: 1500,
        dataInicio: "2022-07-30",
        ativo: true
    },
];

// Variáveis de controle
let ordenacaoAtual = { campo: 'modelo', crescente: true };
let filtrosAtivos = { modelo: '', placa: '', motorista: '' };

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

// Calcula o tempo em atividade
function calcularTempoAtividade(dataInicio) {
    const inicio = new Date(dataInicio);
    const hoje = new Date();
    
    let anos = hoje.getFullYear() - inicio.getFullYear();
    let meses = hoje.getMonth() - inicio.getMonth();
    
    if (meses < 0) {
        anos--;
        meses += 12;
    }
    
    if (anos > 0 && meses > 0) {
        return `${anos} ${anos === 1 ? 'ano' : 'anos'} ${meses} ${meses === 1 ? 'mês' : 'meses'}`;
    } else if (anos > 0) {
        return `${anos} ${anos === 1 ? 'ano' : 'anos'}`;
    } else {
        return `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
    }
}

// Formata valor monetário
function formatarMoeda(valor) {
    return `R$ ${valor.toLocaleString('pt-BR')}`;
}

// Normaliza string para comparação (remove acentos e converte para minúsculas)
function normalizar(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// ============================================
// RENDERIZAÇÃO DOS CARDS
// ============================================

function renderizarCards(veiculosFiltrados = vehicles) {
    const container = document.querySelector('.cards-container');
    
    if (veiculosFiltrados.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
                <p style="font-size: 18px;">Nenhum veículo encontrado</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = veiculosFiltrados.map(veiculo => `
        <div class="vehicle-card" data-id="${veiculo.id}">
            <div class="image-container">
                <img src="${veiculo.imagem}" alt="${veiculo.modelo}" class="vehicle-image">

                <div class="plate-badge">${veiculo.placa}</div>
            </div>
            
            <div class="card-content">
                <div class="info-section">
                    <h3 class="driver-name">${veiculo.motorista}</h3>
                    
                    <div class="cnh-info">
                        <div class="cnh-icon">ID</div>
                        <span>CNH: ${veiculo.cnh}</span>
                    </div>
                    
                    <div class="status-container">
                        <div class="status-badge ${veiculo.ativo ? 'active' : 'maintenance'}">
                            <span class="status-dot"></span>
                            <span>${veiculo.ativo ? 'Ativo' : 'Inativo'}</span>
                        </div>
                    </div>
                </div>

                <div class="monthly-cost">
                    <div class="cost-item">
                        <span class="cost-label">Gasto/m</span>
                        <span class="cost-value">${formatarMoeda(veiculo.gastoMensal)}</span>
                    </div>
                    <div class="cost-item">
                        <span class="cost-label">Em atividade</span>
                        <span class="time-value">${calcularTempoAtividade(veiculo.dataInicio)}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Adiciona event listeners aos botões de configuração
    document.querySelectorAll('.vehicle-card').forEach(btn => {
        btn.addEventListener('click', () => visualizarVeiculo(parseInt(btn.dataset.id)));
    });
}

// ============================================
// FILTROS E ORDENAÇÃO
// ============================================

function aplicarFiltros() {
    let resultado = vehicles;
    
    // Aplica filtros
    if (filtrosAtivos.modelo) {
        resultado = resultado.filter(v => 
            normalizar(v.modelo).includes(normalizar(filtrosAtivos.modelo))
        );
    }
    
    if (filtrosAtivos.placa) {
        resultado = resultado.filter(v => 
            normalizar(v.placa).includes(normalizar(filtrosAtivos.placa))
        );
    }
    
    if (filtrosAtivos.motorista) {
        resultado = resultado.filter(v => 
            normalizar(v.motorista).includes(normalizar(filtrosAtivos.motorista))
        );
    }
    
    // Aplica ordenação
    resultado.sort((a, b) => {
        let valorA, valorB;
        
        switch(ordenacaoAtual.campo) {
            case 'modelo':
                valorA = a.modelo;
                valorB = b.modelo;
                break;
            case 'placa':
                valorA = a.placa;
                valorB = b.placa;
                break;
            case 'motorista':
                valorA = a.motorista;
                valorB = b.motorista;
                break;
            case 'data':
                valorA = new Date(a.dataInicio);
                valorB = new Date(b.dataInicio);
                break;
            default:
                return 0;
        }
        
        if (typeof valorA === 'string') {
            valorA = normalizar(valorA);
            valorB = normalizar(valorB);
        }
        
        if (valorA < valorB) return ordenacaoAtual.crescente ? -1 : 1;
        if (valorA > valorB) return ordenacaoAtual.crescente ? 1 : -1;
        return 0;
    });
    
    renderizarCards(resultado);
}

function alternarOrdenacao() {
    ordenacaoAtual.crescente = !ordenacaoAtual.crescente;
    aplicarFiltros();
    
    Swal.fire({
        icon: 'success',
        title: 'Ordenação alterada',
        text: `Ordenando por ${ordenacaoAtual.campo} (${ordenacaoAtual.crescente ? 'crescente' : 'decrescente'})`,
        timer: 1500,
        showConfirmButton: false
    });
}

// ============================================
// CADASTRO, VISUALIZACAO E EDIÇÃO DE VEÍCULOS
// ============================================

async function cadastrarVeiculo() {
    // Variável para armazenar a imagem
    let imagemSelecionada = null;
    let imagemPreview = null;

    const { value: formValues } = await Swal.fire({
        html: `
            <style>
                .vehicle-form-modal {
                    text-align: left;
                }
                
                .form-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #e2e8f0;
                }
                
                .form-header-icon {
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, #52b69a 0%, #3a8b74 100%);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .form-header-icon i {
                    font-size: 24px;
                    color: white;
                }
                
                .form-title {
                    font-size: 28px;
                    font-weight: 700;
                    color: #2D3748;
                    margin: 0;
                }
                
                .form-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    margin-bottom: 25px;
                }
                
                .form-group {
                    display: flex;
                    flex-direction: column;
                }
                
                .form-group.full-width {
                    grid-column: 1 / -1;
                }
                
                .form-label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    font-weight: 700;
                    color: #718096;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 10px;
                }
                
                .form-label i {
                    color: #52b69a;
                    font-size: 14px;
                }
                
                .form-input {
                    width: 100%;
                    padding: 16px 18px;
                    font-size: 15px;
                    color: #2D3748;
                    font-weight: 500;
                    background: #f8fafb;
                    border: 2px solid transparent;
                    border-radius: 12px;
                    outline: none;
                    transition: all 0.3s ease;
                    font-family: "Open Sans", sans-serif;
                }
                
                .form-input::placeholder {
                    color: #a0aec0;
                    opacity: 1;
                }
                
                .form-input:hover {
                    background: #f0f4f8;
                }
                
                .form-input:focus {
                    background: #ffffff;
                    border-color: #52b69a;
                    box-shadow: 0 0 0 3px rgba(82, 182, 154, 0.1);
                    transform: translateY(-1px);
                }
                
                .upload-section {
                    background: #f8fafb;
                    padding: 25px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                }
                
                .upload-label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    font-weight: 700;
                    color: #718096;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 15px;
                }
                
                .upload-label i {
                    color: #52b69a;
                    font-size: 14px;
                }
                
                .upload-area {
                    border: 2px dashed #cbd5e0;
                    border-radius: 12px;
                    padding: 40px 20px;
                    text-align: center;
                    background: #ffffff;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .upload-area:hover {
                    border-color: #52b69a;
                    background: #f0f9f6;
                    transform: translateY(-2px);
                }
                
                .upload-area.dragover {
                    border-color: #52b69a;
                    background: #e6f4ef;
                    border-style: solid;
                }
                
                .upload-icon {
                    width: 56px;
                    height: 56px;
                    background: linear-gradient(135deg, #52b69a 0%, #3a8b74 100%);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 15px;
                }
                
                .upload-icon i {
                    font-size: 26px;
                    color: white;
                }
                
                .upload-text {
                    font-size: 15px;
                    color: #2D3748;
                    font-weight: 600;
                    margin-bottom: 6px;
                }
                
                .upload-hint {
                    font-size: 13px;
                    color: #718096;
                }
                
                .image-preview {
                    display: none;
                    position: relative;
                    width: 100%;
                    height: 220px;
                    border-radius: 12px;
                    overflow: hidden;
                }
                
                .image-preview img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .remove-image {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    width: 36px;
                    height: 36px;
                    background: rgba(239, 68, 68, 0.95);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(8px);
                    font-size: 16px;
                }
                
                .remove-image:hover {
                    background: rgba(220, 38, 38, 1);
                    transform: scale(1.1) rotate(90deg);
                }
                
                .status-section {
                    background: #f8fafb;
                    padding: 20px;
                    border-radius: 12px;
                    margin-bottom: 25px;
                }
                
                .toggle-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .toggle-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .toggle-label {
                    font-size: 15px;
                    font-weight: 600;
                    color: #2D3748;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .toggle-label i {
                    color: #52b69a;
                    font-size: 16px;
                }
                
                .toggle-switch {
                    position: relative;
                    width: 52px;
                    height: 28px;
                    background: #cbd5e0;
                    border-radius: 14px;
                    transition: all 0.3s ease;
                }
                
                .toggle-switch.active {
                    background: #52b69a;
                }
                
                .toggle-slider {
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    width: 22px;
                    height: 22px;
                    background: white;
                    border-radius: 50%;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
                
                .toggle-switch.active .toggle-slider {
                    transform: translateX(24px);
                }
                
                .status-badge-preview {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 600;
                    background: #d1fae5;
                    color: #065f46;
                    transition: all 0.3s ease;
                }
                
                .status-badge-preview.inactive {
                    background: #fee2e2;
                    color: #991b1b;
                }
                
                .status-dot-preview {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #10b981;
                    animation: pulse 2s infinite;
                }
                
                .status-badge-preview.inactive .status-dot-preview {
                    background: #ef4444;
                }
                
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                
                .form-actions {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                    margin-top: 30px;
                }
                
                .form-button {
                    padding: 16px 24px;
                    border: none;
                    border-radius: 12px;
                    font-size: 15px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    transition: all 0.3s ease;
                    font-family: "Open Sans", sans-serif;
                }
                

                
                .btn-submit {
                    background: #52b69a;
                    color: white;
                }
                
                .btn-submit:hover {
                    background: #3a8b74;
                }
                
                .btn-cancel {
                    background: #e2e8f0;
                    color: #4a5568;
                }
                
                .btn-cancel:hover {
                    background: #cbd5e0;
                }
                
                @media (max-width: 640px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                    .form-actions {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="vehicle-form-modal">
                <div class="form-header">
                    <div class="form-header-icon">
                        <i class="fas fa-car"></i>
                    </div>
                    <h2 class="form-title">Cadastrar Novo Veículo</h2>
                </div>
                
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-car"></i>
                            Modelo do Veículo
                        </label>
                        <input id="modelo" class="form-input" placeholder="Ex: Fiat Mobi" maxlength="50">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-id-card"></i>
                            Placa
                        </label>
                        <input id="placa" class="form-input" placeholder="ABC-1D23" maxlength="8">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-user"></i>
                            Nome do Motorista
                        </label>
                        <input id="motorista" class="form-input" placeholder="Ex: João Silva" maxlength="100">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-id-badge"></i>
                            CNH
                        </label>
                        <input id="cnh" class="form-input" placeholder="12345678901" maxlength="11">
                    </div>
                </div>
                
                <div class="upload-section">
                    <div class="upload-label">
                        <i class="fas fa-image"></i>
                        Imagem do Veículo
                    </div>
                    <div class="upload-area" id="uploadArea">
                        <div class="upload-icon">
                            <i class="fas fa-cloud-upload-alt"></i>
                        </div>
                        <div class="upload-text">Arraste uma imagem ou clique para selecionar</div>
                        <div class="upload-hint">PNG, JPG ou JPEG até 5MB</div>
                        <input type="file" id="imagemInput" accept="image/*" style="display: none;">
                        <div class="image-preview" id="imagePreview">
                            <img id="previewImg" src="" alt="Preview">
                            <button type="button" class="remove-image" id="removeImage">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="status-section">
                    <div class="toggle-container" id="toggleContainer">
                        <div class="toggle-left">
                            <div class="toggle-label">
                                <i class="fas fa-check-circle"></i>
                                <span>Status do Veículo</span>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span class="status-badge-preview" id="statusBadge">
                                <span class="status-dot-preview"></span>
                                Ativo
                            </span>
                            <div class="toggle-switch active" id="toggleSwitch">
                                <div class="toggle-slider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="form-actions">
                    <button class="form-button btn-cancel" id="btn-cancel-form">
                        <i class="fas fa-times"></i>
                        Cancelar
                    </button>
                    <button class="form-button btn-submit" id="btn-submit-form">
                        <i class="fas fa-check"></i>
                        Cadastrar Veículo
                    </button>
                </div>
            </div>
        `,
        width: '700px',
        showConfirmButton: false,
        showCancelButton: false,
        showCloseButton: true,
        customClass: {
            popup: 'swal-form-popup',
            closeButton: 'swal-close-custom'
        },
        didOpen: () => {
            const style = document.createElement('style');
            style.textContent = `
                .swal-form-popup {
                    border-radius: 20px !important;
                    padding: 40px !important;
                }
                .swal-close-custom {
                    width: 40px !important;
                    height: 40px !important;
                    outline: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    font-size: 24px !important;
                    color: #718096 !important;
                    transition: all 0.3s ease !important;
                }
                .swal-close-custom:hover {
                    color: #ef4444 !important;
                    transform: rotate(90deg) !important;
                }
            `;
            document.head.appendChild(style);

            const uploadArea = document.getElementById('uploadArea');
            const imagemInput = document.getElementById('imagemInput');
            const imagePreview = document.getElementById('imagePreview');
            const previewImg = document.getElementById('previewImg');
            const removeImage = document.getElementById('removeImage');
            const toggleContainer = document.getElementById('toggleContainer');
            const toggleSwitch = document.getElementById('toggleSwitch');
            const statusBadge = document.getElementById('statusBadge');

            // Função para processar imagem
            function processarImagem(file) {
                if (file && file.type.startsWith('image/')) {
                    if (file.size > 5 * 1024 * 1024) {
                        Swal.showValidationMessage('A imagem deve ter no máximo 5MB');
                        return;
                    }

                    const reader = new FileReader();
                    reader.onload = (e) => {
                        imagemSelecionada = file;
                        imagemPreview = e.target.result;
                        previewImg.src = e.target.result;
                        imagePreview.style.display = 'block';
                        uploadArea.querySelector('.upload-icon').style.display = 'none';
                        uploadArea.querySelector('.upload-text').style.display = 'none';
                        uploadArea.querySelector('.upload-hint').style.display = 'none';
                    };
                    reader.readAsDataURL(file);
                }
            }

            // Click para selecionar imagem
            uploadArea.addEventListener('click', (e) => {
                if (!e.target.closest('.remove-image')) {
                    imagemInput.click();
                }
            });

            imagemInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                processarImagem(file);
            });

            // Drag and drop
            uploadArea.addEventListener('dragover', (e) => {
                e.preventDefault();
                uploadArea.classList.add('dragover');
            });

            uploadArea.addEventListener('dragleave', () => {
                uploadArea.classList.remove('dragover');
            });

            uploadArea.addEventListener('drop', (e) => {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
                const file = e.dataTransfer.files[0];
                processarImagem(file);
            });

            // Remover imagem
            removeImage.addEventListener('click', (e) => {
                e.stopPropagation();
                imagemSelecionada = null;
                imagemPreview = null;
                imagePreview.style.display = 'none';
                imagemInput.value = '';
                uploadArea.querySelector('.upload-icon').style.display = 'flex';
                uploadArea.querySelector('.upload-text').style.display = 'block';
                uploadArea.querySelector('.upload-hint').style.display = 'block';
            });

            // Toggle de status
            let ativo = true;
            toggleContainer.addEventListener('click', () => {
                ativo = !ativo;
                toggleSwitch.classList.toggle('active');
                statusBadge.classList.toggle('inactive');
                statusBadge.innerHTML = ativo 
                    ? '<span class="status-dot-preview"></span>Ativo'
                    : '<span class="status-dot-preview"></span>Inativo';
            });

            // Formatar placa automaticamente
            const placaInput = document.getElementById('placa');
            placaInput.addEventListener('input', (e) => {
                let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
                if (value.length > 3) {
                    value = value.slice(0, 3) + '-' + value.slice(3, 7);
                }
                e.target.value = value;
            });

            // Formatar CNH (apenas números)
            const cnhInput = document.getElementById('cnh');
            cnhInput.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/\D/g, '');
            });

            // Botão de cancelar
            document.getElementById('btn-cancel-form').addEventListener('click', () => {
                Swal.close();
            });

            // Botão de submeter
            document.getElementById('btn-submit-form').addEventListener('click', () => {
                const modelo = document.getElementById('modelo').value.trim();
                const placa = document.getElementById('placa').value.trim();
                const motorista = document.getElementById('motorista').value.trim();
                const cnh = document.getElementById('cnh').value.trim();

                if (!modelo || !placa || !motorista || !cnh) {
                    Swal.showValidationMessage('Por favor, preencha todos os campos obrigatórios');
                    return;
                }

                if (cnh.length !== 11) {
                    Swal.showValidationMessage('A CNH deve conter 11 dígitos');
                    return;
                }

                Swal.close();
                
                // Retornar os valores
                const result = { 
                    modelo, 
                    placa, 
                    motorista, 
                    cnh, 
                    imagem: imagemPreview, 
                    ativo 
                };
                
                // Continuar com o processo de cadastro
                cadastrarVeiculoConfirmar(result);
            });
        }
    });
}

async function cadastrarVeiculoConfirmar(formValues) {
    const novoVeiculo = {
        id: vehicles.length > 0 ? Math.max(...vehicles.map(v => v.id)) + 1 : 1,
        modelo: formValues.modelo,
        placa: formValues.placa.toUpperCase(),
        motorista: formValues.motorista,
        cnh: formValues.cnh,
        imagem: formValues.imagem || 'https://via.placeholder.com/400x250?text=Sem+Imagem',
        status: formValues.ativo ? 'ativo' : 'inativo',
        ativo: formValues.ativo
    };

    // Simulação de chamada API
    vehicles.push(novoVeiculo);
    aplicarFiltros();

    await Swal.fire({
        icon: 'success',
        html: `
            <div style="text-align: center; padding: 20px 10px;">
                <div style="width: 64px; height: 64px; background: linear-gradient(135deg, #52b69a 0%, #3a8b74 100%); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                    <i class="fas fa-check" style="font-size: 32px; color: white;"></i>
                </div>
                <h3 style="color: #2D3748; font-weight: 700; font-size: 24px; margin-bottom: 12px;">Veículo Cadastrado!</h3>
                <p style="color: #718096; font-size: 15px; margin-bottom: 20px;">
                    <strong style="color: #52b69a;">${novoVeiculo.modelo}</strong> foi adicionado com sucesso ao sistema.
                </p>
                <div style="background: #f8fafb; padding: 20px; border-radius: 12px; display: inline-block; text-align: left;">
                    <p style="color: #2D3748; font-size: 14px; margin: 8px 0;">
                        <strong style="color: #718096;">Placa:</strong> ${novoVeiculo.placa}
                    </p>
                    <p style="color: #2D3748; font-size: 14px; margin: 8px 0;">
                        <strong style="color: #718096;">Motorista:</strong> ${novoVeiculo.motorista}
                    </p>
                </div>
            </div>
        `,
        confirmButtonText: '<i class="fas fa-check"></i> Entendi',
        confirmButtonColor: '#52b69a',
        customClass: {
            popup: 'swal-success-popup',
            confirmButton: 'swal-confirm-custom'
        },
        didOpen: () => {
            const style = document.createElement('style');
            style.textContent = `
                .swal-success-popup {
                    border-radius: 20px !important;
                    padding: 40px !important;
                }
                .swal-confirm-custom {
                    border-radius: 12px !important;
                    padding: 14px 28px !important;
                    font-weight: 600 !important;
                    font-size: 15px !important;
                    transition: all 0.3s ease !important;
                }
                .swal-confirm-custom:hover {
                    background-color: #3a8b74 !important;

                    box-shadow: 0 6px 20px rgba(82, 182, 154, 0.3) !important;
                }
            `;
            document.head.appendChild(style);
        }
    });
}

async function visualizarVeiculo(id) {
    const veiculo = vehicles.find(v => v.id === id);
    if (!veiculo) return;

    const { value: action } = await Swal.fire({
        html: `
            <style>
                .vehicle-detail-modal {
                    text-align: left;
                }
                .detail-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 25px;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #e2e8f0;
                }
                .detail-title {
                    font-size: 28px;
                    font-weight: 700;
                    color: #2D3748;
                    margin: 0;
                }
                .detail-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 600;
                }
                .detail-status.active {
                    background: #d1fae5;
                    color: #065f46;
                }
                .detail-status.inactive {
                    background: #fee2e2;
                    color: #991b1b;
                }
                .detail-status-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }
                .detail-status.active .detail-status-dot {
                    background: #10b981;
                }
                .detail-status.inactive .detail-status-dot {
                    background: #ef4444;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .detail-image {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                    border-radius: 16px;
                    margin-bottom: 30px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }
                .detail-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                    margin-bottom: 30px;
                }
                .detail-item {
                    background: #f8fafb;
                    padding: 20px;
                    cursor: pointer;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }
                .detail-item:hover {
                    background: #f0f4f8;
                    transform: translateY(-2px);
                }
                .detail-label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    font-weight: 700;
                    color: #718096;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 8px;
                }
                .detail-label i {
                    color: #52b69a;
                    font-size: 14px;
                }
                .detail-value {
                    font-size: 18px;
                    font-weight: 600;
                    color: #2D3748;
                }
                .detail-actions {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                    margin-top: 30px;
                }
                .detail-button {
                    padding: 16px 24px;
                    border: none;
                    border-radius: 12px;
                    font-size: 15px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    transition: all 0.3s ease;
                    font-family: "Open Sans", sans-serif;
                }
                .btn-edit {
                    background: #52b69a;
                    color: white;
                }
                .btn-edit:hover {
                    background: #3a8b74;
                }
                .btn-delete {
                    background: #ef4444;
                    color: white;
                }
                .btn-delete:hover {
                    background: #dc2626;
                }
                .detail-item.full {
                    grid-column: 1 / -1;
                }
                @media (max-width: 640px) {
                    .detail-grid {
                        grid-template-columns: 1fr;
                    }
                    .detail-actions {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="vehicle-detail-modal">
                <div class="detail-header">
                    <h2 class="detail-title">${veiculo.modelo}</h2>
                    <div class="detail-status ${veiculo.ativo ? 'active' : 'inactive'}">
                        <span class="detail-status-dot"></span>
                        <span>${veiculo.ativo ? 'Ativo' : 'Inativo'}</span>
                    </div>
                </div>
                
                <img src="${veiculo.imagem}" alt="${veiculo.modelo}" class="detail-image" onerror="this.src='https://via.placeholder.com/600x300?text=Sem+Imagem'">
                
                <div class="detail-grid">
                    <div class="detail-item">
                        <div class="detail-label">
                            <i class="fas fa-id-card"></i>
                            Placa
                        </div>
                        <div class="detail-value">${veiculo.placa}</div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">
                            <i class="fas fa-user"></i>
                            Motorista
                        </div>
                        <div class="detail-value">${veiculo.motorista}</div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">
                            <i class="fas fa-id-badge"></i>
                            CNH
                        </div>
                        <div class="detail-value">${veiculo.cnh}</div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">
                            <i class="fas fa-dollar-sign"></i>
                            Gasto Mensal
                        </div>
                        <div class="detail-value">${formatarMoeda(veiculo.gastoMensal)}</div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">
                            <i class="fas fa-calendar-alt"></i>
                            Data de Início
                        </div>
                        <div class="detail-value">${new Date(veiculo.dataInicio).toLocaleDateString('pt-BR')}</div>
                    </div>
                    
                    <div class="detail-item">
                        <div class="detail-label">
                            <i class="fas fa-clock"></i>
                            Tempo em Atividade
                        </div>
                        <div class="detail-value">${calcularTempoAtividade(veiculo.dataInicio)}</div>
                    </div>
                </div>
                
                <div class="detail-actions">
                    <button class="detail-button btn-edit" id="btn-edit-detail">
                        <i class="fas fa-edit"></i>
                        Editar Veículo
                    </button>
                    <button class="detail-button btn-delete" id="btn-delete-detail">
                        <i class="fas fa-trash"></i>
                        Excluir Veículo
                    </button>
                </div>
            </div>
        `,
        width: '700px',
        showConfirmButton: false,
        showCloseButton: true,
        customClass: {
            popup: 'swal-detail-popup',
            closeButton: 'swal-close-custom'
        },
        didOpen: () => {
            const style = document.createElement('style');
            style.textContent = `
                .swal-detail-popup {
                    border-radius: 20px !important;
                    padding: 40px !important;
                }
                .swal-close-custom {
                    width: 40px !important;
                    height: 40px !important;
                    outline: none !important;
                    box-shadow: none !important;
                    border: none !important;
                    font-size: 24px !important;
                    color: #718096 !important;
                    transition: all 0.3s ease !important;
                }
                .swal-close-custom:hover {
                    color: #ef4444 !important;
                    transform: rotate(90deg) !important;
                }
            `;
            document.head.appendChild(style);

            document.getElementById('btn-edit-detail').addEventListener('click', () => {
                Swal.close();
                editarVeiculo(id);
            });

            document.getElementById('btn-delete-detail').addEventListener('click', () => {
                Swal.close();
                excluirVeiculo(id);
            });
        }
    });
}


async function editarVeiculo(id) {
  const veiculo = vehicles.find((v) => v.id === id);
  if (!veiculo) return;

  let imagemSelecionada = null;
  let imagemPreview = veiculo.imagem;
  let statusAtivo = veiculo.ativo;

  const { value: formValues } = await Swal.fire({
    html: `
      <style>
        .vehicle-edit-modal {
          text-align: left;
          max-height: 85vh;
          overflow-y: auto;
          padding-right: 8px;
        }
        .vehicle-edit-modal::-webkit-scrollbar {
          width: 6px;
        }
        .vehicle-edit-modal::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .vehicle-edit-modal::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 10px;
        }
        .vehicle-edit-modal::-webkit-scrollbar-thumb:hover {
          background: #52b69a;
        }
        .edit-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 2px solid #e2e8f0;
        }
        .edit-title {
          font-size: 28px;
          font-weight: 700;
          color: #2D3748;
          margin: 0;
        }
        .edit-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          user-select: none;
        }
        .edit-status:hover {
          transform: scale(1.05);
        }
        .edit-status.active {
          background: #d1fae5;
          color: #065f46;
        }
        .edit-status.inactive {
          background: #fee2e2;
          color: #991b1b;
        }
        .edit-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        .edit-status.active .edit-status-dot {
          background: #10b981;
        }
        .edit-status.inactive .edit-status-dot {
          background: #ef4444;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .edit-image-section {
          width: 100%;
          height: 200px;
          border-radius: 16px;
          margin-bottom: 25px;
          position: relative;
          overflow: hidden;
          background: #f8fafb;
          border: 2px dashed #cbd5e0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .edit-image-section:hover {
          border-color: #52b69a;
          background: #f0f9f6;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .edit-image-section.has-image {
          border-style: solid;
          border-color: #e2e8f0;
          background: transparent;
        }
        .edit-image-section.has-image:hover {
          border-color: #52b69a;
        }
        .edit-image-preview {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .edit-image-section:hover .edit-image-preview {
          transform: scale(1.05);
        }
        .edit-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .edit-image-section:hover .edit-image-overlay {
          opacity: 1;
        }
        .edit-image-btn {
          width: 50px;
          height: 50px;
          background: white;
          border: none;
          border-radius: 50%;
          color: #2D3748;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .edit-image-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        }
        .edit-image-btn.change {
          background: #52b69a;
          color: white;
        }
        .edit-image-btn.delete {
          background: #ef4444;
          color: white;
        }
        .edit-upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 8px;
          color: #718096;
        }
        .edit-upload-placeholder i {
          font-size: 40px;
          color: #52b69a;
          opacity: 0.7;
        }
        .edit-upload-placeholder p {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
        }
        .edit-upload-placeholder span {
          font-size: 12px;
          color: #a0aec0;
        }
        
        .edit-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin-bottom: 25px;
        }
        .edit-item {
          background: #f8fafb;
          padding: 16px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        .edit-item:hover {
          background: #f0f4f8;
        }
        .edit-item:focus-within {
          background: #f0f9f6;
          box-shadow: 0 0 0 3px rgba(82,182,154,0.1);
        }
        .edit-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          color: #718096;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .edit-label i {
          color: #52b69a;
          font-size: 14px;
        }
        .edit-label .required {
          color: #ef4444;
          margin-left: 2px;
        }
        .edit-input {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          font-weight: 600;
          color: #2D3748;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          outline: none;
          transition: all 0.3s ease;
          font-family: "Open Sans", sans-serif;
        }
        .edit-input:hover {
          border-bottom-color: #cbd5e0;
        }
        .edit-input:focus {
          border-bottom-color: #52b69a;
        }
        .edit-input::placeholder {
          color: #a0aec0;
          font-weight: 500;
        }
        .edit-input.error {
          border-bottom-color: #ef4444;
          animation: shake 0.3s ease;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .edit-helper {
          display: flex;
          justify-content: space-between;
          margin-top: 4px;
          min-height: 16px;
        }
        .edit-error {
          color: #ef4444;
          font-size: 11px;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .edit-error.show {
          opacity: 1;
        }
        .edit-counter {
          font-size: 11px;
          color: #a0aec0;
          font-weight: 500;
        }
        
        .edit-actions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 25px;
          padding-top: 20px;
          border-top: 2px solid #e2e8f0;
        }
        .edit-button {
          padding: 16px 24px;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          font-family: "Open Sans", sans-serif;
        }
        .edit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
        .btn-save {
          background: #52b69a;
          color: white;
        }
        .btn-save:hover {
          background: #3a8b74;
        }
        .btn-cancel {
          background: #e2e8f0;
          color: #718096;
        }
        .btn-cancel:hover {
          background: #cbd5e0;
        }
        
        input[type="file"] {
          display: none;
        }
        
        @media (max-width: 640px) {
          .edit-grid {
            grid-template-columns: 1fr;
          }
          .edit-actions {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <div class="vehicle-edit-modal">
        <div class="edit-header">
          <h2 class="edit-title">Editar Veículo</h2>
          <div class="edit-status ${veiculo.ativo ? 'active' : 'inactive'}" id="statusToggle">
            <span class="edit-status-dot"></span>
            <span id="statusText">${veiculo.ativo ? 'Ativo' : 'Inativo'}</span>
          </div>
        </div>
        
        <div class="edit-image-section ${veiculo.imagem ? 'has-image' : ''}" id="imageSection">
          <input type="file" id="fileInput" accept="image/*">
          <img src="${veiculo.imagem}" alt="Imagem do veículo" class="edit-image-preview" id="imagePreview" style="${veiculo.imagem ? '' : 'display:none'}" onerror="this.style.display='none'; document.getElementById('uploadPlaceholder').style.display='flex'; document.getElementById('imageSection').classList.remove('has-image')">
          <div class="edit-image-overlay" id="imageOverlay" style="${veiculo.imagem ? '' : 'display:none'}">
            <button type="button" class="edit-image-btn change" id="changeImageBtn" title="Trocar imagem">
              <i class="fas fa-sync-alt"></i>
            </button>
            <button type="button" class="edit-image-btn delete" id="removeImageBtn" title="Remover imagem">
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <div class="edit-upload-placeholder" id="uploadPlaceholder" style="${veiculo.imagem ? 'display:none' : ''}">
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Clique ou arraste uma imagem</p>
            <span>PNG, JPG ou WEBP (máx. 5MB)</span>
          </div>
        </div>
        
        <div class="edit-grid">
          <div class="edit-item">
            <div class="edit-label">
              <i class="fas fa-car"></i>
              Modelo
              <span class="required">*</span>
            </div>
            <input id="modelo" class="edit-input" value="${veiculo.modelo}" placeholder="Ex: Fiat Uno">
            <div class="edit-helper">
              <span class="edit-error" id="modeloError">Campo obrigatório</span>
            </div>
          </div>
          
          <div class="edit-item">
            <div class="edit-label">
              <i class="fas fa-id-card"></i>
              Placa
              <span class="required">*</span>
            </div>
            <input id="placa" class="edit-input" maxlength="8" value="${veiculo.placa}" placeholder="ABC-1234">
            <div class="edit-helper">
              <span class="edit-error" id="placaError">Placa inválida</span>
              <span class="edit-counter" id="placaCounter">${veiculo.placa.length}/8</span>
            </div>
          </div>
          
          <div class="edit-item">
            <div class="edit-label">
              <i class="fas fa-user"></i>
              Motorista
              <span class="required">*</span>
            </div>
            <input id="motorista" class="edit-input" value="${veiculo.motorista}" placeholder="Nome completo">
            <div class="edit-helper">
              <span class="edit-error" id="motoristaError">Campo obrigatório</span>
            </div>
          </div>
          
          <div class="edit-item">
            <div class="edit-label">
              <i class="fas fa-id-badge"></i>
              CNH
              <span class="required">*</span>
            </div>
            <input id="cnh" class="edit-input" maxlength="11" value="${veiculo.cnh}" placeholder="00000000000">
            <div class="edit-helper">
              <span class="edit-error" id="cnhError">CNH deve ter 11 dígitos</span>
              <span class="edit-counter" id="cnhCounter">${veiculo.cnh.length}/11</span>
            </div>
          </div>
          
          <div class="edit-item">
            <div class="edit-label">
              <i class="fas fa-dollar-sign"></i>
              Gasto Mensal
              <span class="required">*</span>
            </div>
            <input id="gasto" class="edit-input" type="number" step="0.01" min="0" value="${veiculo.gastoMensal}" placeholder="0.00">
            <div class="edit-helper">
              <span class="edit-error" id="gastoError">Valor deve ser maior que zero</span>
            </div>
          </div>
          
          <div class="edit-item">
            <div class="edit-label">
              <i class="fas fa-calendar-alt"></i>
              Data de Início
              <span class="required">*</span>
            </div>
            <input id="dataInicio" class="edit-input" type="date" value="${veiculo.dataInicio}">
            <div class="edit-helper">
              <span class="edit-error" id="dataError">Campo obrigatório</span>
            </div>
          </div>
        </div>
        
        <div class="edit-actions">
          <button class="edit-button btn-cancel" id="btnCancel">
            <i class="fas fa-times"></i>
            Cancelar
          </button>
          <button class="edit-button btn-save" id="btnSave">
            <i class="fas fa-save"></i>
            Salvar Alterações
          </button>
        </div>
      </div>
    `,
    width: '700px',
    showConfirmButton: false,
    showCloseButton: true,
    customClass: {
      popup: 'swal-edit-popup',
      closeButton: 'swal-close-custom'
    },
    didOpen: () => {
      const style = document.createElement('style');
      style.textContent = `
        .swal-edit-popup {
          border-radius: 20px !important;
          padding: 40px !important;
        }
        .swal-close-custom {
          width: 40px !important;
          height: 40px !important;
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
          font-size: 24px !important;
          color: #718096 !important;
          transition: all 0.3s ease !important;
        }
        .swal-close-custom:hover {
          color: #ef4444 !important;
          transform: rotate(90deg) !important;
        }
      `;
      document.head.appendChild(style);
      
      // Elementos do DOM
      const statusToggle = document.getElementById('statusToggle');
      const statusText = document.getElementById('statusText');
      const imageSection = document.getElementById('imageSection');
      const fileInput = document.getElementById('fileInput');
      const imagePreview = document.getElementById('imagePreview');
      const imageOverlay = document.getElementById('imageOverlay');
      const uploadPlaceholder = document.getElementById('uploadPlaceholder');
      const changeImageBtn = document.getElementById('changeImageBtn');
      const removeImageBtn = document.getElementById('removeImageBtn');
      
      const modeloInput = document.getElementById('modelo');
      const placaInput = document.getElementById('placa');
      const motoristaInput = document.getElementById('motorista');
      const cnhInput = document.getElementById('cnh');
      const gastoInput = document.getElementById('gasto');
      const dataInput = document.getElementById('dataInicio');
      
      const btnCancel = document.getElementById('btnCancel');
      const btnSave = document.getElementById('btnSave');

      // Toggle de status
      statusToggle.addEventListener('click', () => {
        statusAtivo = !statusAtivo;
        statusToggle.classList.toggle('active');
        statusToggle.classList.toggle('inactive');
        statusText.textContent = statusAtivo ? 'Ativo' : 'Inativo';
      });

      // Upload de imagem
      function processarImagem(file) {
        if (!file || !file.type.startsWith('image/')) {
          Swal.showValidationMessage('Por favor, selecione uma imagem válida');
          return;
        }

        if (file.size > 5 * 1024 * 1024) {
          Swal.showValidationMessage('A imagem deve ter no máximo 5MB');
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          imagemPreview = e.target.result;
          imagemSelecionada = file;
          imagePreview.src = e.target.result;
          imagePreview.style.display = 'block';
          imageOverlay.style.display = 'flex';
          uploadPlaceholder.style.display = 'none';
          imageSection.classList.add('has-image');
        };
        reader.readAsDataURL(file);
      }

      imageSection.addEventListener('click', (e) => {
        if (!e.target.closest('.edit-image-btn')) {
          fileInput.click();
        }
      });

      imageSection.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      imageSection.addEventListener('drop', (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) processarImagem(file);
      });

      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) processarImagem(file);
      });

      changeImageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
      });

      removeImageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        imagemSelecionada = null;
        imagemPreview = null;
        imagePreview.style.display = 'none';
        imageOverlay.style.display = 'none';
        uploadPlaceholder.style.display = 'flex';
        imageSection.classList.remove('has-image');
        fileInput.value = '';
      });

      // Validação de campos
      function validarCampo(input, errorElement, validacao, mensagemErro) {
        const valor = input.value.trim();
        const valido = validacao(valor);

        if (!valido && valor !== '') {
          input.classList.add('error');
          errorElement.textContent = mensagemErro;
          errorElement.classList.add('show');
        } else {
          input.classList.remove('error');
          errorElement.classList.remove('show');
        }

        return valido || valor === '';
      }

      modeloInput.addEventListener('input', () => {
        validarCampo(
          modeloInput,
          document.getElementById('modeloError'),
          (v) => v.length >= 2,
          'Mínimo 2 caracteres'
        );
      });

      placaInput.addEventListener('input', (e) => {
        const valor = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
        e.target.value = valor;
        document.getElementById('placaCounter').textContent = `${valor.length}/8`;
        validarCampo(
          placaInput,
          document.getElementById('placaError'),
          (v) => v.length >= 7,
          'Mínimo 7 caracteres'
        );
      });

      motoristaInput.addEventListener('input', () => {
        validarCampo(
          motoristaInput,
          document.getElementById('motoristaError'),
          (v) => v.length >= 3,
          'Mínimo 3 caracteres'
        );
      });

      cnhInput.addEventListener('input', (e) => {
        const valor = e.target.value.replace(/\D/g, '');
        e.target.value = valor;
        document.getElementById('cnhCounter').textContent = `${valor.length}/11`;
        validarCampo(
          cnhInput,
          document.getElementById('cnhError'),
          (v) => v.length === 11,
          'Exatamente 11 dígitos'
        );
      });

      gastoInput.addEventListener('input', () => {
        validarCampo(
          gastoInput,
          document.getElementById('gastoError'),
          (v) => parseFloat(v) > 0,
          'Maior que zero'
        );
      });

      dataInput.addEventListener('change', () => {
        validarCampo(
          dataInput,
          document.getElementById('dataError'),
          (v) => v !== '',
          'Selecione uma data'
        );
      });

      // Botões de ação
      btnCancel.addEventListener('click', () => {
        Swal.close();
      });

      btnSave.addEventListener('click', () => {
        const modelo = modeloInput.value.trim();
        const placa = placaInput.value.trim();
        const motorista = motoristaInput.value.trim();
        const cnh = cnhInput.value.trim();
        const gasto = gastoInput.value;
        const dataInicio = dataInput.value;

        // Validações finais
        if (!modelo || modelo.length < 2) {
          Swal.showValidationMessage('Modelo deve ter pelo menos 2 caracteres');
          modeloInput.focus();
          return;
        }
        if (!placa || placa.length < 7) {
          Swal.showValidationMessage('Placa inválida (mínimo 7 caracteres)');
          placaInput.focus();
          return;
        }
        if (!motorista || motorista.length < 3) {
          Swal.showValidationMessage('Nome do motorista deve ter pelo menos 3 caracteres');
          motoristaInput.focus();
          return;
        }
        if (cnh.length !== 11) {
          Swal.showValidationMessage('A CNH deve conter exatamente 11 dígitos');
          cnhInput.focus();
          return;
        }
        if (!gasto || parseFloat(gasto) <= 0) {
          Swal.showValidationMessage('O gasto mensal deve ser maior que zero');
          gastoInput.focus();
          return;
        }
        if (!dataInicio) {
          Swal.showValidationMessage('Selecione a data de início');
          dataInput.focus();
          return;
        }

        // Verificar se houve alterações
        const houveMudancas = 
          modelo !== veiculo.modelo ||
          placa.toUpperCase() !== veiculo.placa ||
          motorista !== veiculo.motorista ||
          cnh !== veiculo.cnh ||
          parseFloat(gasto) !== veiculo.gastoMensal ||
          dataInicio !== veiculo.dataInicio ||
          statusAtivo !== veiculo.ativo ||
          imagemPreview !== veiculo.imagem;

        // Se não houve mudanças, apenas fechar
        if (!houveMudancas) {
          Swal.close();
          return;
        }

        // Atualizar veículo
        Object.assign(veiculo, {
          modelo: modelo,
          placa: placa.toUpperCase(),
          motorista: motorista,
          cnh: cnh,
          imagem: imagemPreview,
          gastoMensal: parseFloat(gasto),
          dataInicio: dataInicio,
          ativo: statusAtivo,
          status: statusAtivo ? 'ativo' : 'inativo'
        });

        aplicarFiltros();

        Swal.close();

        Swal.fire({
          icon: 'success',
          title: '<span style="color: #2D3748; font-weight: 700;">Veículo Atualizado!</span>',
          html: `
            <p style="color: #718096; font-size: 15px; margin: 0;">
              <strong style="color: #52b69a;">${veiculo.modelo}</strong> foi atualizado com sucesso.
            </p>
          `,
          confirmButtonText: '<i class="fas fa-check"></i> Ok',
          confirmButtonColor: '#52b69a',
          timer: 3000,
          timerProgressBar: true
        });
      });
    }
  });
}



async function excluirVeiculo(id) {
    const veiculo = vehicles.find(v => v.id === id);
    
    const result = await Swal.fire({
        title: 'Confirmar exclusão',
        html: `Deseja realmente excluir o veículo <strong>${veiculo.modelo}</strong> (${veiculo.placa})?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sim, excluir',
        cancelButtonText: 'Cancelar'
    });
    
    if (result.isConfirmed) {
        vehicles = vehicles.filter(v => v.id !== id);
        aplicarFiltros();
        
        Swal.fire({
            icon: 'success',
            title: 'Excluído!',
            text: 'O veículo foi removido com sucesso.',
            confirmButtonColor: '#3085d6'
        });
    }
}


// ============================================
// EVENT LISTENERS
// ============================================

// Adicionar evento ao botão de cadastro
document.getElementById('cadastrar-btn').addEventListener('click', cadastrarVeiculo);

document.addEventListener('DOMContentLoaded', () => {
    // Renderiza cards iniciais
    renderizarCards();
    
    // Filtros
    document.getElementById('modelo').addEventListener('input', (e) => {
        filtrosAtivos.modelo = e.target.value;
        aplicarFiltros();
    });
    
    document.getElementById('placa').addEventListener('input', (e) => {
        filtrosAtivos.placa = e.target.value;
        aplicarFiltros();
    });
    
    document.getElementById('motorista').addEventListener('input', (e) => {
        filtrosAtivos.motorista = e.target.value;
        aplicarFiltros();
    });
    
    // Select de ordenação
    document.getElementById('ordenar').addEventListener('change', (e) => {
        ordenacaoAtual.campo = e.target.value;
        aplicarFiltros();
    });
    
    // Botão de ordenação (alterna crescente/decrescente)
    document.getElementById('ordenar-btn').addEventListener('click', alternarOrdenacao);
    
    // Botão de cadastro
    document.getElementById('cadastrar-btn').addEventListener('click', cadastrarVeiculo);
});

// ============================================
// FUNÇÕES PARA INTEGRAÇÃO FUTURA COM BACKEND
// ============================================

// Exemplo de função para carregar veículos da API
async function carregarVeiculosDaAPI() {
    try {
        // const response = await fetch('https://sua-api.com/veiculos');
        // vehicles = await response.json();
        // aplicarFiltros();
        console.log('Função preparada para integração com backend');
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Erro ao carregar veículos',
            text: error.message
        });
    }
}

// Exemplo de função para salvar veículo na API
async function salvarVeiculoNaAPI(veiculo) {
    try {
        // const response = await fetch('https://sua-api.com/veiculos', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(veiculo)
        // });
        // return await response.json();
        console.log('Função preparada para integração com backend', veiculo);
    } catch (error) {
        throw error;
    }
}