// ============================================
// CONFIGURAÇÃO DA API
// ============================================

const API_BASE_URL = "http://localhost:3000/api"
const API_CARROS = `${API_BASE_URL}/carros`

// Array local para cache dos veículos (será preenchido pela API)
let vehicles = []

// Estado dos filtros
const filtrosAtivos = {
  modelo: "",
  placa: "",
  motorista: "",
}

// Estado da ordenação
const ordenacaoAtual = {
  campo: "data",
  crescente: false,
}

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

// Calcula tempo de atividade
function calcularTempoAtividade(dataInicio) {
  const inicio = new Date(dataInicio)
  const hoje = new Date()

  let anos = hoje.getFullYear() - inicio.getFullYear()
  let meses = hoje.getMonth() - inicio.getMonth()

  if (meses < 0) {
    anos--
    meses += 12
  }

  if (anos > 0 && meses > 0) {
    return `${anos} ${anos === 1 ? "ano" : "anos"} ${meses} ${meses === 1 ? "mês" : "meses"}`
  } else if (anos > 0) {
    return `${anos} ${anos === 1 ? "ano" : "anos"}`
  } else {
    return `${meses} ${meses === 1 ? "mês" : "meses"}`
  }
}

// Formata valor monetário
function formatarMoeda(valor) {
  if (!valor || isNaN(valor)) return "R$ 0,00"
  return `R$ ${Number.parseFloat(valor).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

// Normaliza string para comparação (remove acentos e converte para minúsculas)
function normalizar(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}

function converterImagemParaBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

function converterImagemBuffer(imagemBuffer) {
  // Se não há imagem ou é null/undefined, retorna placeholder
  if (!imagemBuffer || imagemBuffer === null || imagemBuffer === undefined) {
    return "https://via.placeholder.com/400x250?text=Sem+Imagem"
  }

  // Se já é uma string base64 ou URL completa
  if (typeof imagemBuffer === "string") {
    // Se já tem o prefixo data:image, retorna direto
    if (imagemBuffer.startsWith("data:image")) {
      return imagemBuffer
    }
    // Se é uma URL http/https, retorna direto
    if (imagemBuffer.startsWith("http")) {
      return imagemBuffer
    }
    // Se é base64 puro (agora vem do backend como string base64), adiciona o prefixo
    // Tenta detectar o tipo de imagem pelo início do base64
    // PNG: iVBORw0KGgo
    // JPEG: /9j/4AAQ
    // GIF: R0lGODlh
    let mimeType = "image/jpeg" // padrão
    if (imagemBuffer.startsWith("iVBORw0KGgo")) {
      mimeType = "image/png"
    } else if (imagemBuffer.startsWith("/9j/4AAQ") || imagemBuffer.startsWith("/9j/")) {
      mimeType = "image/jpeg"
    } else if (imagemBuffer.startsWith("R0lGODlh")) {
      mimeType = "image/gif"
    }
    return `data:${mimeType};base64,${imagemBuffer}`
  }

  // Quando o Prisma retorna Bytes, vem como {type: "Buffer", data: [array]}
  if (imagemBuffer && imagemBuffer.type === "Buffer" && Array.isArray(imagemBuffer.data)) {
    try {
      // Verifica se o array não está vazio
      if (imagemBuffer.data.length === 0) {
        return "https://via.placeholder.com/400x250?text=Sem+Imagem"
      }

      // Converte array de bytes para string base64
      const uint8Array = new Uint8Array(imagemBuffer.data)
      let binary = ""
      for (let i = 0; i < uint8Array.length; i++) {
        binary += String.fromCharCode(uint8Array[i])
      }
      const base64 = btoa(binary)
      return `data:image/jpeg;base64,${base64}`
    } catch (error) {
      console.error("Erro ao converter buffer de imagem:", error)
      return "https://via.placeholder.com/400x250?text=Erro+ao+Carregar"
    }
  }

  // Fallback para formato antigo (se imagemBuffer.data existir diretamente)
  if (imagemBuffer && imagemBuffer.data && Array.isArray(imagemBuffer.data)) {
    try {
      if (imagemBuffer.data.length === 0) {
        return "https://via.placeholder.com/400x250?text=Sem+Imagem"
      }

      const uint8Array = new Uint8Array(imagemBuffer.data)
      let binary = ""
      for (let i = 0; i < uint8Array.length; i++) {
        binary += String.fromCharCode(uint8Array[i])
      }
      const base64 = btoa(binary)
      return `data:image/jpeg;base64,${base64}`
    } catch (error) {
      console.error("Erro ao converter buffer de imagem:", error)
      return "https://via.placeholder.com/400x250?text=Erro+ao+Carregar"
    }
  }

  // Se é um Uint8Array direto (não deveria acontecer no frontend, mas por segurança)
  if (imagemBuffer instanceof Uint8Array) {
    try {
      if (imagemBuffer.length === 0) {
        return "https://via.placeholder.com/400x250?text=Sem+Imagem"
      }
      let binary = ""
      for (let i = 0; i < imagemBuffer.length; i++) {
        binary += String.fromCharCode(imagemBuffer[i])
      }
      const base64 = btoa(binary)
      return `data:image/jpeg;base64,${base64}`
    } catch (error) {
      console.error("Erro ao converter buffer de imagem:", error)
      return "https://via.placeholder.com/400x250?text=Erro+ao+Carregar"
    }
  }

  // Se nenhum formato conhecido, retorna placeholder
  console.warn("Formato de imagem desconhecido:", imagemBuffer)
  return "https://via.placeholder.com/400x250?text=Formato+Inválido"
}

function transformarVeiculoAPI(carroAPI) {
  return {
    id: carroAPI.id,
    modelo: carroAPI.modelo,
    placa: carroAPI.placa,
    motorista: carroAPI.motorista?.nome || "Sem motorista",
    cnh: carroAPI.motorista?.cnh || "N/A",
    motoristaId: carroAPI.motoristaId,
    imagem: converterImagemBuffer(carroAPI.imagem),
    status: carroAPI.status,
    ativo: carroAPI.status === "ativo",
    dataInicio: carroAPI.criadoEm,
    gastoMensal: calcularGastoMensal(carroAPI),
  }
}

function calcularGastoMensal(carroAPI) {
  let total = 0

  if (carroAPI.gastosCombustivel && carroAPI.gastosCombustivel.length > 0) {
    total += carroAPI.gastosCombustivel.reduce((acc, gasto) => acc + Number.parseFloat(gasto.valor || 0), 0)
  }

  if (carroAPI.gastosManutencao && carroAPI.gastosManutencao.length > 0) {
    total += carroAPI.gastosManutencao.reduce((acc, gasto) => acc + Number.parseFloat(gasto.valor || 0), 0)
  }

  return total
}

// ============================================
// FUNÇÕES DE API
// ============================================

async function carregarVeiculos() {
  try {
    const response = await fetch(API_CARROS)

    if (!response.ok) {
      throw new Error(`Erro ao carregar veículos: ${response.status}`)
    }

    const data = await response.json()
    vehicles = data.carros.map(transformarVeiculoAPI)
    aplicarFiltros()
  } catch (error) {
    console.error("Erro ao carregar veículos:", error)
    // The Swal variable is undeclared.
    Swal.fire({
      icon: "error",
      title: "Erro ao carregar veículos",
      text: "Não foi possível carregar os veículos. Verifique se o servidor está rodando.",
      confirmButtonColor: "#52b69a",
    })
  }
}

async function buscarVeiculoPorId(id) {
  try {
    const response = await fetch(`${API_CARROS}/${id}`)

    if (!response.ok) {
      throw new Error(`Erro ao buscar veículo: ${response.status}`)
    }

    const data = await response.json()
    return transformarVeiculoAPI(data.carro)
  } catch (error) {
    console.error("Erro ao buscar veículo:", error)
    throw error
  }
}

async function criarVeiculo(dadosVeiculo) {
  try {
    const response = await fetch(API_CARROS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosVeiculo),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.erro || `Erro ao criar veículo: ${response.status}`)
    }

    const data = await response.json()
    return transformarVeiculoAPI(data.carro)
  } catch (error) {
    console.error("Erro ao criar veículo:", error)
    throw error
  }
}

async function atualizarVeiculo(id, dadosVeiculo) {
  try {
    const response = await fetch(`${API_CARROS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosVeiculo),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.erro || `Erro ao atualizar veículo: ${response.status}`)
    }

    const data = await response.json()
    return transformarVeiculoAPI(data.carro)
  } catch (error) {
    console.error("Erro ao atualizar veículo:", error)
    throw error
  }
}

async function deletarVeiculo(id) {
  try {
    const response = await fetch(`${API_CARROS}/${id}`, {
      method: "DELETE",
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.erro || `Erro ao deletar veículo: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Erro ao deletar veículo:", error)
    throw error
  }
}

// ============================================
// RENDERIZAÇÃO DOS CARDS
// ============================================

function renderizarCards(veiculosFiltrados = vehicles) {
  const container = document.querySelector(".cards-container")

  if (veiculosFiltrados.length === 0) {
    container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
                <p style="font-size: 18px;">Nenhum veículo encontrado</p>
            </div>
        `
    return
  }

  container.innerHTML = veiculosFiltrados
    .map(
      (veiculo) => `
        <div class="vehicle-card" data-id="${veiculo.id}">
            <div class="image-container">
                <img src="${veiculo.imagem}" alt="${veiculo.modelo}" class="vehicle-image">
                <div class="plate-badge">${veiculo.placa}</div>
            </div>
            
            <div class="card-content">
                <div class="info-section">
                    <h3 class="vehicle-model" style="font-size: 20px; font-weight: 700; color: #2D3748; margin: 0 0 8px 0; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-car" style="color: #52b69a; font-size: 18px;"></i>
                        ${veiculo.modelo}
                    </h3>
                    <h4 class="driver-name" style="font-size: 16px; font-weight: 600; color: #718096; margin: 0 0 12px 0;">
                        <i class="fas fa-user" style="color: #52b69a; margin-right: 6px;"></i>
                        ${veiculo.motorista}
                    </h4>
                    
                    <div class="cnh-info" style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 14px; color: #4A5568;">
                        <div class="cnh-icon" style="background: #e2e8f0; padding: 4px 8px; border-radius: 4px; font-weight: 600; font-size: 12px;">ID</div>
                        <span>CNH: ${veiculo.cnh}</span>
                    </div>
                    
                    <div class="status-container" style="margin-top: 12px;">
                        <div class="status-badge ${veiculo.ativo ? "active" : "maintenance"}">
                            <span class="status-dot"></span>
                            <span>${veiculo.ativo ? "Ativo" : "Inativo"}</span>
                        </div>
                    </div>
                </div>

                <div class="monthly-cost" style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
                    <div class="cost-item" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span class="cost-label" style="font-size: 12px; font-weight: 600; color: #718096; text-transform: uppercase;">Gasto/m</span>
                        <span class="cost-value" style="font-size: 16px; font-weight: 700; color: #2D3748;">${formatarMoeda(veiculo.gastoMensal)}</span>
                    </div>
                    <div class="cost-item" style="display: flex; justify-content: space-between; align-items: center;">
                        <span class="cost-label" style="font-size: 12px; font-weight: 600; color: #718096; text-transform: uppercase;">Em atividade</span>
                        <span class="time-value" style="font-size: 14px; font-weight: 600; color: #52b69a;">${calcularTempoAtividade(veiculo.dataInicio)}</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    )
    .join("")

  // Adiciona event listeners aos cards
  document.querySelectorAll(".vehicle-card").forEach((card) => {
    card.addEventListener("click", () => visualizarVeiculo(Number.parseInt(card.dataset.id)))
  })
}

// ============================================
// FILTROS E ORDENAÇÃO
// ============================================

function aplicarFiltros() {
  let resultado = vehicles

  // Aplica filtros
  if (filtrosAtivos.modelo) {
    resultado = resultado.filter((v) => normalizar(v.modelo).includes(normalizar(filtrosAtivos.modelo)))
  }

  if (filtrosAtivos.placa) {
    resultado = resultado.filter((v) => normalizar(v.placa).includes(normalizar(filtrosAtivos.placa)))
  }

  if (filtrosAtivos.motorista) {
    resultado = resultado.filter((v) => normalizar(v.motorista).includes(normalizar(filtrosAtivos.motorista)))
  }

  // Aplica ordenação
  resultado.sort((a, b) => {
    let valorA, valorB

    switch (ordenacaoAtual.campo) {
      case "modelo":
        valorA = a.modelo
        valorB = b.modelo
        break
      case "placa":
        valorA = a.placa
        valorB = b.placa
        break
      case "motorista":
        valorA = a.motorista
        valorB = b.motorista
        break
      case "data":
        valorA = new Date(a.dataInicio)
        valorB = new Date(b.dataInicio)
        break
      default:
        return 0
    }

    if (typeof valorA === "string") {
      valorA = normalizar(valorA)
      valorB = normalizar(valorB)
    }

    if (valorA < valorB) return ordenacaoAtual.crescente ? -1 : 1
    if (valorA > valorB) return ordenacaoAtual.crescente ? 1 : -1
    return 0
  })

  renderizarCards(resultado)
}

// ============================================
// CADASTRO DE VEÍCULO
// ============================================

async function cadastrarVeiculo() {
  // Variável para armazenar a imagem
  let imagemSelecionada = null
  let imagemPreview = null

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
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: #718096;
                    margin-bottom: 8px;
                }
                
                .form-label i {
                    font-size: 14px;
                    color: #52b69a;
                }
                
                .form-input {
                    padding: 14px 16px;
                    border: 2px solid #e2e8f0;
                    border-radius: 10px;
                    font-size: 15px;
                    color: #2D3748;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }
                
                .form-input:focus {
                    outline: none;
                    border-color: #52b69a;
                    box-shadow: 0 0 0 3px rgba(82, 182, 154, 0.1);
                }
                
                .form-input.error {
                    border-color: #e53e3e;
                }
                
                .error-message {
                    color: #e53e3e;
                    font-size: 12px;
                    margin-top: 4px;
                    display: none;
                }
                
                .error-message.show {
                    display: block;
                }
                
                .char-counter {
                    font-size: 11px;
                    color: #a0aec0;
                    margin-top: 4px;
                }
                
                .image-upload-area {
                    border: 2px dashed #cbd5e0;
                    border-radius: 12px;
                    padding: 30px;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    background: #f7fafc;
                }
                
                .image-upload-area:hover {
                    border-color: #52b69a;
                    background: #f0fdf4;
                }
                
                .image-upload-area.has-image {
                    padding: 0;
                    border: none;
                }
                
                .upload-icon {
                    font-size: 48px;
                    color: #cbd5e0;
                    margin-bottom: 12px;
                }
                
                .upload-text {
                    color: #718096;
                    font-size: 14px;
                    margin-bottom: 8px;
                }
                
                .upload-hint {
                    color: #a0aec0;
                    font-size: 12px;
                }
                
                .image-preview {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 12px;
                }
                
                .status-toggle {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px;
                    background: #f7fafc;
                    border-radius: 10px;
                }
                
                .toggle-switch {
                    position: relative;
                    width: 50px;
                    height: 26px;
                    background: #cbd5e0;
                    border-radius: 13px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }
                
                .toggle-switch.active {
                    background: #52b69a;
                }
                
                .toggle-slider {
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    width: 20px;
                    height: 20px;
                    background: white;
                    border-radius: 50%;
                    transition: transform 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
                
                .toggle-switch.active .toggle-slider {
                    transform: translateX(24px);
                }
                
                .toggle-label {
                    font-size: 14px;
                    color: #2D3748;
                    font-weight: 600;
                }
            </style>
            
            <div class="vehicle-form-modal">
                <div class="form-header">
                    <div class="form-header-icon">
                        <i class="fas fa-car"></i>
                    </div>
                    <h2 class="form-title">Novo Veículo</h2>
                </div>
                
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-car"></i>
                            Modelo do Veículo
                        </label>
                        <input type="text" id="modelo-input" class="form-input" placeholder="Ex: Fiat Uno">
                        <div id="modeloError" class="error-message">Mínimo 2 caracteres</div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-id-card"></i>
                            Placa
                        </label>
                        <input type="text" id="placa-input" class="form-input" placeholder="ABC1234" maxlength="8">
                        <div class="char-counter" id="placaCounter">0/8</div>
                        <div id="placaError" class="error-message">Mínimo 7 caracteres</div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-user"></i>
                            ID do Motorista
                        </label>
                        <input type="number" id="motoristaId-input" class="form-input" placeholder="Ex: 1">
                        <div id="motoristaIdError" class="error-message">ID obrigatório</div>
                    </div>
                    
                    <div class="form-group full-width">
                        <label class="form-label">
                            <i class="fas fa-image"></i>
                            Imagem do Veículo
                        </label>
                        <div class="image-upload-area" id="imageUploadArea">
                            <i class="fas fa-cloud-upload-alt upload-icon"></i>
                            <p class="upload-text">Clique para selecionar uma imagem</p>
                            <p class="upload-hint">PNG, JPG ou JPEG (máx. 5MB)</p>
                        </div>
                        <input type="file" id="imageInput-input" accept="image/*" style="display: none;">
                    </div>
                    
                    <div class="form-group full-width">
                        <label class="form-label">
                            <i class="fas fa-toggle-on"></i>
                            Status do Veículo
                        </label>
                        <div class="status-toggle">
                            <div class="toggle-switch active" id="statusToggle">
                                <div class="toggle-slider"></div>
                            </div>
                            <span class="toggle-label" id="statusLabel">Ativo</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
    width: "700px",
    showCancelButton: true,
    confirmButtonText: '<i class="fas fa-check"></i> Cadastrar',
    cancelButtonText: '<i class="fas fa-times"></i> Cancelar',
    confirmButtonColor: "#52b69a",
    cancelButtonColor: "#e2e8f0",
    customClass: {
      confirmButton: "swal-button-custom",
      cancelButton: "swal-button-cancel",
    },
    didOpen: () => {
      let statusAtivo = true

      // Toggle de status
      const statusToggle = document.getElementById("statusToggle")
      const statusLabel = document.getElementById("statusLabel")

      statusToggle.addEventListener("click", () => {
        statusAtivo = !statusAtivo
        statusToggle.classList.toggle("active")
        statusLabel.textContent = statusAtivo ? "Ativo" : "Inativo"
      })

      // Upload de imagem
      const imageUploadArea = document.getElementById("imageUploadArea")
      const imageInput = document.getElementById("imageInput-input")

      imageUploadArea.addEventListener("click", () => imageInput.click())

      imageInput.addEventListener("change", async (e) => {
        const file = e.target.files[0]
        if (file) {
          if (file.size > 5 * 1024 * 1024) {
            Swal.showValidationMessage("Imagem muito grande! Máximo 5MB")
            return
          }

          imagemSelecionada = await converterImagemParaBase64(file)
          imagemPreview = URL.createObjectURL(file)

          imageUploadArea.classList.add("has-image")
          imageUploadArea.innerHTML = `<img src="${imagemPreview}" class="image-preview" alt="Preview">`
        }
      })

      // Validações
      const modeloInput = document.getElementById("modelo-input")
      const placaInput = document.getElementById("placa-input")
      const motoristaIdInput = document.getElementById("motoristaId-input")

      function validarCampo(input, errorElement, validacao, mensagemErro) {
        const valor = input.value.trim()
        const valido = validacao(valor)

        if (!valido && valor !== "") {
          input.classList.add("error")
          errorElement.textContent = mensagemErro
          errorElement.classList.add("show")
        } else {
          input.classList.remove("error")
          errorElement.classList.remove("show")
        }

        return valido || valor === ""
      }

      modeloInput.addEventListener("input", () => {
        validarCampo(modeloInput, document.getElementById("modeloError"), (v) => v.length >= 2, "Mínimo 2 caracteres")
      })

      placaInput.addEventListener("input", (e) => {
        const valor = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "")
        e.target.value = valor
        document.getElementById("placaCounter").textContent = `${valor.length}/8`
        validarCampo(placaInput, document.getElementById("placaError"), (v) => v.length >= 7, "Mínimo 7 caracteres")
      })

      motoristaIdInput.addEventListener("input", () => {
        validarCampo(
          motoristaIdInput,
          document.getElementById("motoristaIdError"),
          (v) => v !== "" && Number.parseInt(v) > 0,
          "ID obrigatório",
        )
      })
    },
    preConfirm: () => {
      const modelo = document.getElementById("modelo-input").value.trim()
      const placa = document.getElementById("placa-input").value.trim()
      const motoristaId = document.getElementById("motoristaId-input").value.trim()
      const statusToggle = document.getElementById("statusToggle")
      const ativo = statusToggle.classList.contains("active")

      if (!modelo || modelo.length < 2) {
        Swal.showValidationMessage("Modelo deve ter no mínimo 2 caracteres")
        return false
      }

      if (!placa || placa.length < 7) {
        Swal.showValidationMessage("Placa deve ter no mínimo 7 caracteres")
        return false
      }

      if (!motoristaId || Number.parseInt(motoristaId) <= 0) {
        Swal.showValidationMessage("ID do motorista é obrigatório")
        return false
      }

      return {
        modelo,
        placa: placa.toUpperCase(),
        motoristaId: Number.parseInt(motoristaId),
        imagem: imagemSelecionada,
        ativo,
      }
    },
  })

  if (formValues) {
    await cadastrarVeiculoConfirmar(formValues)
  }
}

async function cadastrarVeiculoConfirmar(formValues) {
  try {
    // Mostra loading
    Swal.fire({
      title: "Cadastrando veículo...",
      text: "Por favor, aguarde",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
    })

    // Prepara dados para enviar à API
    const dadosVeiculo = {
      modelo: formValues.modelo,
      placa: formValues.placa,
      motoristaId: formValues.motoristaId,
      imagem: formValues.imagem || null,
      status: formValues.ativo ? "ativo" : "inativo",
    }

    // Envia para API
    const novoVeiculo = await criarVeiculo(dadosVeiculo)

    // Adiciona ao array local
    vehicles.push(novoVeiculo)
    aplicarFiltros()

    // Mostra sucesso
    await Swal.fire({
      icon: "success",
      html: `
                <div style="text-align: center; padding: 20px 10px;">
                    <h3 style="color: #2D3748; font-weight: 700; font-size: 24px; margin-bottom: 12px;">Veículo Cadastrado!</h3>
                    <p style="color: #718096; font-size: 15px; margin-bottom: 20px;">
                        O veículo foi adicionado com sucesso ao sistema.
                    </p>
                    <div style="background: #f8fafb; padding: 20px; border-radius: 12px; display: inline-block; text-align: left; min-width: 300px;">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;">
                            <i class="fas fa-car" style="font-size: 24px; color: #52b69a;"></i>
                            <div>
                                <p style="color: #718096; font-size: 12px; font-weight: 700; text-transform: uppercase; margin: 0;">Modelo</p>
                                <p style="color: #2D3748; font-size: 18px; font-weight: 700; margin: 4px 0 0 0;">${novoVeiculo.modelo}</p>
                            </div>
                        </div>
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
      confirmButtonColor: "#52b69a",
    })
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Erro ao cadastrar",
      text: error.message,
      confirmButtonColor: "#52b69a",
    })
  }
}

// ============================================
// VISUALIZAÇÃO DE VEÍCULO
// ============================================

async function visualizarVeiculo(id) {
  try {
    // Mostra loading
    Swal.fire({
      title: "Carregando...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
    })

    const veiculo = await buscarVeiculoPorId(id)

    Swal.fire({
      html: `
                <style>
                    .vehicle-detail-modal {
                        text-align: left;
                    }
                    
                    .detail-header {
                        position: relative;
                        margin-bottom: 30px;
                    }
                    
                    .detail-image {
                        width: 100%;
                        height: 300px;
                        object-fit: cover;
                        border-radius: 16px;
                        margin-bottom: 20px;
                    }
                    
                    .detail-title {
                        font-size: 32px;
                        font-weight: 700;
                        color: #2D3748;
                        margin-bottom: 8px;
                    }
                    
                    .detail-plate {
                        display: inline-block;
                        background: #2D3748;
                        color: white;
                        padding: 8px 16px;
                        border-radius: 8px;
                        font-weight: 700;
                        font-size: 18px;
                        letter-spacing: 2px;
                    }
                    
                    .detail-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                        margin: 30px 0;
                    }
                    
                    .detail-item {
                        background: #f7fafc;
                        padding: 20px;
                        border-radius: 12px;
                    }
                    
                    .detail-label {
                        font-size: 12px;
                        font-weight: 700;
                        text-transform: uppercase;
                        color: #718096;
                        margin-bottom: 8px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    
                    .detail-value {
                        font-size: 18px;
                        font-weight: 600;
                        color: #2D3748;
                    }
                    
                    .status-badge-detail {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        padding: 8px 16px;
                        border-radius: 20px;
                        font-weight: 600;
                        font-size: 14px;
                    }
                    
                    .status-badge-detail.active {
                        background: #d4f4dd;
                        color: #22543d;
                    }
                    
                    .status-badge-detail.maintenance {
                        background: #fed7d7;
                        color: #742a2a;
                    }
                    
                    .action-buttons {
                        display: flex;
                        gap: 12px;
                        margin-top: 30px;
                    }
                    
                    .action-btn {
                        flex: 1;
                        padding: 14px;
                        border: none;
                        border-radius: 10px;
                        font-weight: 600;
                        font-size: 15px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                    }
                    
                    .btn-edit {
                        background: #52b69a;
                        color: white;
                    }
                    
                    .btn-edit:hover {
                        background: #3a8b74;
                        transform: translateY(-2px);
                        box-shadow: 0 4px 12px rgba(82, 182, 154, 0.3);
                    }
                    
                    .btn-delete {
                        background: #fc8181;
                        color: white;
                    }
                    
                    .btn-delete:hover {
                        background: #f56565;
                        transform: translateY(-2px);
                        box-shadow: 0 4px 12px rgba(252, 129, 129, 0.3);
                    }
                </style>
                
                <div class="vehicle-detail-modal">
                    <div class="detail-header">
                        <img src="${veiculo.imagem}" alt="${veiculo.modelo}" class="detail-image">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <i class="fas fa-car" style="font-size: 32px; color: #52b69a;"></i>
                            <h2 class="detail-title" style="margin: 0;">${veiculo.modelo}</h2>
                        </div>
                        <div class="detail-plate">${veiculo.placa}</div>
                    </div>
                    
                    <div class="detail-grid">
                        <div class="detail-item" style="grid-column: 1 / -1; background: linear-gradient(135deg, #52b69a15 0%, #3a8b7415 100%); border: 2px solid #52b69a30;">
                            <div class="detail-label">
                                <i class="fas fa-car" style="color: #52b69a;"></i>
                                Modelo do Veículo
                            </div>
                            <div class="detail-value" style="font-size: 22px; color: #2D3748; font-weight: 700;">
                                ${veiculo.modelo}
                            </div>
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
                                <i class="fas fa-id-card"></i>
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
                                <i class="fas fa-calendar"></i>
                                Em Atividade
                            </div>
                            <div class="detail-value">${calcularTempoAtividade(veiculo.dataInicio)}</div>
                        </div>
                        
                        <div class="detail-item" style="grid-column: 1 / -1;">
                            <div class="detail-label">
                                <i class="fas fa-info-circle"></i>
                                Status
                            </div>
                            <div class="status-badge-detail ${veiculo.ativo ? "active" : "maintenance"}">
                                <span>${veiculo.ativo ? "✓ Ativo" : "⚠ Inativo"}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="action-btn btn-edit" id="editBtn">
                            <i class="fas fa-edit"></i>
                            Editar
                        </button>
                        <button class="action-btn btn-delete" id="deleteBtn">
                            <i class="fas fa-trash"></i>
                            Excluir
                        </button>
                    </div>
                </div>
            `,
      width: "700px",
      showConfirmButton: false,
      showCloseButton: true,
      didOpen: () => {
        document.getElementById("editBtn").addEventListener("click", () => {
          Swal.close()
          editarVeiculo(id)
        })

        document.getElementById("deleteBtn").addEventListener("click", () => {
          Swal.close()
          excluirVeiculo(id)
        })
      },
    })
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Erro ao carregar veículo",
      text: error.message,
      confirmButtonColor: "#52b69a",
    })
  }
}

// ============================================
// EDIÇÃO DE VEÍCULO
// ============================================

async function editarVeiculo(id) {
  try {
    // Busca o veículo atualizado do backend para garantir dados atualizados
    const veiculo = await buscarVeiculoPorId(id)
    if (!veiculo) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Veículo não encontrado",
        confirmButtonColor: "#52b69a",
      })
      return
    }

    let imagemSelecionada = null
    let imagemPreview = veiculo.imagem
    let statusAtivo = veiculo.ativo

    const { value: formValues } = await Swal.fire({
    html: `
            <style>
                .vehicle-edit-modal {
                    text-align: left;
                    max-height: 85vh;
                    overflow-y: auto;
                    padding-right: 8px;
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
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: #718096;
                    margin-bottom: 8px;
                }
                
                .form-input {
                    padding: 14px 16px;
                    border: 2px solid #e2e8f0;
                    border-radius: 10px;
                    font-size: 15px;
                    color: #2D3748;
                    transition: all 0.3s ease;
                }
                
                .form-input:focus {
                    outline: none;
                    border-color: #52b69a;
                    box-shadow: 0 0 0 3px rgba(82, 182, 154, 0.1);
                }
                
                .form-input.error {
                    border-color: #e53e3e;
                }
                
                .error-message {
                    color: #e53e3e;
                    font-size: 12px;
                    margin-top: 4px;
                    display: none;
                }
                
                .error-message.show {
                    display: block;
                }
                
                .char-counter {
                    font-size: 11px;
                    color: #a0aec0;
                    margin-top: 4px;
                }
                
                .image-upload-area {
                    border: 2px dashed #cbd5e0;
                    border-radius: 12px;
                    padding: 30px;
                    text-align: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    background: #f7fafc;
                }
                
                .image-upload-area:hover {
                    border-color: #52b69a;
                    background: #f0fdf4;
                }
                
                .image-upload-area.has-image {
                    padding: 0;
                    border: none;
                }
                
                .image-preview {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 12px;
                }
                
                .status-toggle {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px;
                    background: #f7fafc;
                    border-radius: 10px;
                }
                
                .toggle-switch {
                    position: relative;
                    width: 50px;
                    height: 26px;
                    background: #cbd5e0;
                    border-radius: 13px;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }
                
                .toggle-switch.active {
                    background: #52b69a;
                }
                
                .toggle-slider {
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    width: 20px;
                    height: 20px;
                    background: white;
                    border-radius: 50%;
                    transition: transform 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
                
                .toggle-switch.active .toggle-slider {
                    transform: translateX(24px);
                }
                
                .toggle-label {
                    font-size: 14px;
                    color: #2D3748;
                    font-weight: 600;
                }
            </style>
            
            <div class="vehicle-edit-modal">
                <div class="edit-header">
                    <h2 class="edit-title">Editar Veículo</h2>
                </div>
                
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-car"></i>
                            Modelo do Veículo
                        </label>
                        <input type="text" id="edit-vehicle-modelo-input" class="form-input" value="${veiculo.modelo}">
                        <div id="edit-vehicle-modelo-error" class="error-message" style="display: none; color: #e53e3e; font-size: 12px; margin-top: 4px;">Mínimo 2 caracteres</div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-id-card"></i>
                            Placa
                        </label>
                        <input type="text" id="edit-vehicle-placa-input" class="form-input" value="${veiculo.placa}" maxlength="8">
                        <div class="char-counter" id="edit-vehicle-placa-counter">${veiculo.placa.length}/8</div>
                        <div id="edit-vehicle-placa-error" class="error-message" style="display: none; color: #e53e3e; font-size: 12px; margin-top: 4px;">Mínimo 7 caracteres</div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-user"></i>
                            ID do Motorista
                        </label>
                        <input type="number" id="edit-vehicle-motorista-id-input" class="form-input" value="${veiculo.motoristaId}">
                        <div id="edit-vehicle-motorista-id-error" class="error-message" style="display: none; color: #e53e3e; font-size: 12px; margin-top: 4px;">ID obrigatório</div>
                    </div>
                    
                    <div class="form-group full-width">
                        <label class="form-label">
                            <i class="fas fa-image"></i>
                            Imagem do Veículo
                        </label>
                        <div class="image-upload-area has-image" id="edit-vehicle-image-upload-area">
                            <img src="${imagemPreview}" class="image-preview" alt="Preview">
                        </div>
                        <input type="file" id="edit-vehicle-image-input" accept="image/*" style="display: none;">
                    </div>
                    
                    <div class="form-group full-width">
                        <label class="form-label">
                            <i class="fas fa-toggle-on"></i>
                            Status do Veículo
                        </label>
                        <div class="status-toggle">
                            <div class="toggle-switch ${statusAtivo ? "active" : ""}" id="edit-vehicle-status-toggle">
                                <div class="toggle-slider"></div>
                            </div>
                            <span class="toggle-label" id="edit-vehicle-status-label">${statusAtivo ? "Ativo" : "Inativo"}</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
    width: "700px",
    showCancelButton: true,
    confirmButtonText: '<i class="fas fa-save"></i> Salvar',
    cancelButtonText: '<i class="fas fa-times"></i> Cancelar',
    confirmButtonColor: "#52b69a",
    cancelButtonColor: "#e2e8f0",
    didOpen: () => {
      // Toggle de status
      const statusToggle = document.getElementById("edit-vehicle-status-toggle")
      const statusLabel = document.getElementById("edit-vehicle-status-label")

      if (statusToggle && statusLabel) {
        statusToggle.addEventListener("click", () => {
          statusAtivo = !statusAtivo
          statusToggle.classList.toggle("active")
          statusLabel.textContent = statusAtivo ? "Ativo" : "Inativo"
        })
      }

      // Upload de imagem
      const imageUploadArea = document.getElementById("edit-vehicle-image-upload-area")
      const imageInput = document.getElementById("edit-vehicle-image-input")

      if (imageUploadArea && imageInput) {
        imageUploadArea.addEventListener("click", () => imageInput.click())

        imageInput.addEventListener("change", async (e) => {
          const file = e.target.files[0]
          if (file) {
            if (file.size > 5 * 1024 * 1024) {
              Swal.showValidationMessage("Imagem muito grande! Máximo 5MB")
              return
            }

            try {
              imagemSelecionada = await converterImagemParaBase64(file)
              imagemPreview = URL.createObjectURL(file)

              imageUploadArea.innerHTML = `<img src="${imagemPreview}" class="image-preview" alt="Preview">`
            } catch (error) {
              console.error("Erro ao processar imagem:", error)
              Swal.showValidationMessage("Erro ao processar a imagem. Tente novamente.")
            }
          }
        })
      }

      // Validações em tempo real
      const modeloInput = document.getElementById("edit-vehicle-modelo-input")
      const placaInput = document.getElementById("edit-vehicle-placa-input")
      const motoristaIdInput = document.getElementById("edit-vehicle-motorista-id-input")

      // Validação de modelo
      if (modeloInput) {
        modeloInput.addEventListener("input", () => {
          const valor = modeloInput.value.trim()
          const errorElement = document.getElementById("edit-vehicle-modelo-error")
          
          if (valor.length > 0 && valor.length < 2) {
            modeloInput.classList.add("error")
            if (errorElement) {
              errorElement.style.display = "block"
            }
          } else {
            modeloInput.classList.remove("error")
            if (errorElement) {
              errorElement.style.display = "none"
            }
          }
        })
      }

      // Validação de placa
      if (placaInput) {
        placaInput.addEventListener("input", (e) => {
          const valor = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "")
          e.target.value = valor
          
          const counterElement = document.getElementById("edit-vehicle-placa-counter")
          const errorElement = document.getElementById("edit-vehicle-placa-error")
          
          if (counterElement) {
            counterElement.textContent = `${valor.length}/8`
          }
          
          if (valor.length > 0 && valor.length < 7) {
            placaInput.classList.add("error")
            if (errorElement) {
              errorElement.style.display = "block"
            }
          } else {
            placaInput.classList.remove("error")
            if (errorElement) {
              errorElement.style.display = "none"
            }
          }
        })
      }

      // Validação de motorista ID
      if (motoristaIdInput) {
        motoristaIdInput.addEventListener("input", () => {
          const valor = motoristaIdInput.value.trim()
          const errorElement = document.getElementById("edit-vehicle-motorista-id-error")
          
          if (valor.length > 0 && (Number.parseInt(valor) <= 0 || isNaN(Number.parseInt(valor)))) {
            motoristaIdInput.classList.add("error")
            if (errorElement) {
              errorElement.style.display = "block"
            }
          } else {
            motoristaIdInput.classList.remove("error")
            if (errorElement) {
              errorElement.style.display = "none"
            }
          }
        })
      }
    },
    preConfirm: () => {
      const modeloInput = document.getElementById("edit-vehicle-modelo-input")
      const placaInput = document.getElementById("edit-vehicle-placa-input")
      const motoristaIdInput = document.getElementById("edit-vehicle-motorista-id-input")

      if (!modeloInput || !placaInput || !motoristaIdInput) {
        Swal.showValidationMessage("Erro ao acessar os campos do formulário")
        return false
      }

      const modelo = modeloInput.value.trim()
      const placa = placaInput.value.trim().toUpperCase()
      const motoristaId = motoristaIdInput.value.trim()

      // Validação de modelo
      if (!modelo || modelo.length < 2) {
        Swal.showValidationMessage("Modelo deve ter no mínimo 2 caracteres")
        modeloInput.classList.add("error")
        modeloInput.focus()
        return false
      }

      // Validação de placa
      if (!placa || placa.length < 7) {
        Swal.showValidationMessage("Placa deve ter no mínimo 7 caracteres")
        placaInput.classList.add("error")
        placaInput.focus()
        return false
      }

      // Validação de motorista ID
      const motoristaIdNum = Number.parseInt(motoristaId)
      if (!motoristaId || isNaN(motoristaIdNum) || motoristaIdNum <= 0) {
        Swal.showValidationMessage("ID do motorista é obrigatório e deve ser um número válido")
        motoristaIdInput.classList.add("error")
        motoristaIdInput.focus()
        return false
      }

      // Remove classes de erro se tudo estiver válido
      modeloInput.classList.remove("error")
      placaInput.classList.remove("error")
      motoristaIdInput.classList.remove("error")

      return {
        modelo,
        placa,
        motoristaId: motoristaIdNum,
        imagem: imagemSelecionada,
        ativo: statusAtivo,
      }
    },
  })

    if (formValues) {
      await editarVeiculoConfirmar(id, formValues)
    }
  } catch (error) {
    console.error("Erro ao abrir modal de edição:", error)
    Swal.fire({
      icon: "error",
      title: "Erro",
      text: "Não foi possível carregar os dados do veículo para edição.",
      confirmButtonColor: "#52b69a",
    })
  }
}

async function editarVeiculoConfirmar(id, formValues) {
  try {
    // Mostra loading
    Swal.fire({
      title: "Atualizando veículo...",
      text: "Por favor, aguarde",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
    })

    // Prepara dados para enviar à API
    const dadosVeiculo = {
      modelo: String(formValues.modelo || "").trim(),
      placa: String(formValues.placa || "").trim().toUpperCase(),
      motoristaId: Number.parseInt(formValues.motoristaId),
      status: formValues.ativo ? "ativo" : "inativo",
    }

    // Validação final antes de enviar
    if (!dadosVeiculo.modelo || dadosVeiculo.modelo.length < 2) {
      throw new Error("Modelo deve ter no mínimo 2 caracteres")
    }

    if (!dadosVeiculo.placa || dadosVeiculo.placa.length < 7) {
      throw new Error("Placa deve ter no mínimo 7 caracteres")
    }

    if (!dadosVeiculo.motoristaId || dadosVeiculo.motoristaId <= 0) {
      throw new Error("ID do motorista é obrigatório e deve ser um número válido")
    }

    // Só envia imagem se foi alterada (não é null e não é undefined)
    // Se imagemSelecionada for null, não envia o campo, mantendo a imagem atual no backend
    if (formValues.imagem !== null && formValues.imagem !== undefined && formValues.imagem !== "") {
      // Remove o prefixo data:image se existir (o backend já trata isso, mas é bom garantir)
      let imagemBase64 = formValues.imagem
      if (typeof imagemBase64 === "string" && imagemBase64.includes(",")) {
        imagemBase64 = imagemBase64.split(",").pop()
      }
      dadosVeiculo.imagem = imagemBase64
    }

    // Envia para API
    const veiculoAtualizado = await atualizarVeiculo(id, dadosVeiculo)

    // Atualiza no array local
    const index = vehicles.findIndex((v) => v.id === id)
    if (index !== -1) {
      vehicles[index] = veiculoAtualizado
    } else {
      // Se não encontrou no array, adiciona (caso tenha sido filtrado)
      vehicles.push(veiculoAtualizado)
    }
    
    // Recarrega os veículos para garantir sincronização
    await carregarVeiculos()

    // Mostra sucesso
    await Swal.fire({
      icon: "success",
      html: `
        <div style="text-align: center; padding: 20px 10px;">
          <h3 style="color: #2D3748; font-weight: 700; font-size: 24px; margin-bottom: 12px;">Veículo Atualizado!</h3>
          <p style="color: #718096; font-size: 15px; margin-bottom: 20px;">
            O veículo foi atualizado com sucesso.
          </p>
          <div style="background: #f8fafb; padding: 20px; border-radius: 12px; display: inline-block; text-align: left; min-width: 300px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0;">
              <i class="fas fa-car" style="font-size: 24px; color: #52b69a;"></i>
              <div>
                <p style="color: #718096; font-size: 12px; font-weight: 700; text-transform: uppercase; margin: 0;">Modelo</p>
                <p style="color: #2D3748; font-size: 18px; font-weight: 700; margin: 4px 0 0 0;">${veiculoAtualizado.modelo}</p>
              </div>
            </div>
            <p style="color: #2D3748; font-size: 14px; margin: 8px 0;">
              <strong style="color: #718096;">Placa:</strong> ${veiculoAtualizado.placa}
            </p>
            <p style="color: #2D3748; font-size: 14px; margin: 8px 0;">
              <strong style="color: #718096;">Motorista:</strong> ${veiculoAtualizado.motorista}
            </p>
            <p style="color: #2D3748; font-size: 14px; margin: 8px 0;">
              <strong style="color: #718096;">Status:</strong> ${veiculoAtualizado.ativo ? "Ativo" : "Inativo"}
            </p>
          </div>
        </div>
      `,
      confirmButtonText: '<i class="fas fa-check"></i> Entendi',
      confirmButtonColor: "#52b69a",
    })
  } catch (error) {
    console.error("Erro ao atualizar veículo:", error)
    Swal.fire({
      icon: "error",
      title: "Erro ao atualizar",
      text: error.message || "Não foi possível atualizar o veículo. Verifique os dados e tente novamente.",
      confirmButtonColor: "#52b69a",
    })
  }
}

// ============================================
// EXCLUSÃO DE VEÍCULO
// ============================================

async function excluirVeiculo(id) {
  const veiculo = vehicles.find((v) => v.id === id)

  const result = await Swal.fire({
    title: "Confirmar exclusão",
    html: `Deseja realmente excluir o veículo <strong>${veiculo.modelo}</strong> (${veiculo.placa})?<br><br><small style="color: #e53e3e;">Esta ação não pode ser desfeita e todos os gastos associados serão removidos.</small>`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sim, excluir",
    cancelButtonText: "Cancelar",
  })

  if (result.isConfirmed) {
    try {
      // Mostra loading
      Swal.fire({
        title: "Excluindo veículo...",
        text: "Por favor, aguarde",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })

      // Deleta via API
      await deletarVeiculo(id)

      // Remove do array local
      vehicles = vehicles.filter((v) => v.id !== id)
      aplicarFiltros()

      // Mostra sucesso
      Swal.fire({
        icon: "success",
        title: "Excluído!",
        text: "O veículo foi removido com sucesso.",
        confirmButtonColor: "#52b69a",
      })
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro ao excluir",
        text: error.message,
        confirmButtonColor: "#52b69a",
      })
    }
  }
}

// ============================================
// EVENT LISTENERS
// ============================================

// Adicionar evento ao botão de cadastro
document.getElementById("cadastrar-btn")?.addEventListener("click", cadastrarVeiculo)

document.addEventListener("DOMContentLoaded", () => {
  carregarVeiculos()

  // Filtros
  document.getElementById("modelo")?.addEventListener("input", (e) => {
    filtrosAtivos.modelo = e.target.value
    aplicarFiltros()
  })

  document.getElementById("placa")?.addEventListener("input", (e) => {
    filtrosAtivos.placa = e.target.value
    aplicarFiltros()
  })

  document.getElementById("motorista")?.addEventListener("input", (e) => {
    filtrosAtivos.motorista = e.target.value
    aplicarFiltros()
  })

  // Ordenação
  document.querySelectorAll(".sort-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const campo = btn.dataset.sort

      if (ordenacaoAtual.campo === campo) {
        ordenacaoAtual.crescente = !ordenacaoAtual.crescente
      } else {
        ordenacaoAtual.campo = campo
        ordenacaoAtual.crescente = true
      }

      // Atualiza visual dos botões
      document.querySelectorAll(".sort-btn").forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      aplicarFiltros()
    })
  })
})
