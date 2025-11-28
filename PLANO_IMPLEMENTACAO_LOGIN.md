# 📋 PLANO DE IMPLEMENTAÇÃO - SISTEMA DE LOGIN

## 📊 ANÁLISE DA SITUAÇÃO ATUAL

### ✅ O que já existe:
- Model `Usuario` no Prisma com campos `nome` e `senha`
- Página de login HTML (mas não funcional)
- Controller de usuários com CRUD completo
- Rota `/login` configurada no servidor
- Sistema de relacionamento: Usuario → Carro (via motoristaId)

### ❌ O que falta:
- Sistema de autenticação/sessão
- Middleware de autenticação
- Controller de login
- Filtro de dados por usuário logado
- Proteção de rotas
- Script de inicialização do usuário admin
- Gerenciamento de sessão no front-end

---

## 🎯 OBJETIVOS

1. **Autenticação simples**: Login com nome e senha (sem criptografia complexa)
2. **Usuário padrão**: `admin` / `12345` sempre disponível ao iniciar servidor
3. **Isolamento de dados**: Cada usuário vê apenas seus próprios dados
4. **Cadastro via interface**: Novos usuários cadastrados pela página de Pessoas
5. **Sessão persistente**: Usuário permanece logado durante navegação

---

## 📦 DEPENDÊNCIAS NECESSÁRIAS

### Pacotes NPM a instalar:
```bash
npm install express-session
```

**Por que express-session?**
- Gerenciamento de sessão server-side simples
- Não requer JWT ou tokens complexos
- Ideal para aplicação simples sem segurança reforçada
- Sessões armazenadas em memória (suficiente para o requisito)

---

## 🏗️ ARQUITETURA PROPOSTA

### Fluxo de Autenticação:
```
1. Usuário acessa /login
2. Preenche nome e senha
3. POST /api/auth/login → valida credenciais
4. Cria sessão no servidor (req.session.userId)
5. Redireciona para / (home)
6. Todas as requisições subsequentes incluem cookie de sessão
7. Middleware verifica sessão em rotas protegidas
8. Controllers filtram dados pelo userId da sessão
```

### Estrutura de Arquivos:
```
src/
├── middleware/
│   └── authMiddleware.js        [NOVO] - Verifica se usuário está logado
├── controllers/
│   ├── authController.js        [NOVO] - Login, logout, verificar sessão
│   ├── carroController.js       [MODIFICAR] - Filtrar por userId
│   ├── gastosController.js      [MODIFICAR] - Filtrar por userId
│   ├── manutencaoController.js  [MODIFICAR] - Filtrar por userId
│   └── dashboardController.js   [MODIFICAR] - Filtrar por userId
├── utils/
│   └── initAdmin.js             [NOVO] - Script de inicialização do admin
└── server.js                    [MODIFICAR] - Configurar express-session
```

---

## 📝 PLANO DE IMPLEMENTAÇÃO DETALHADO

### FASE 1: Configuração Base (Backend)

#### 1.1 Instalar Dependências
- [ ] Executar `npm install express-session`
- [ ] Verificar instalação no package.json

#### 1.2 Configurar Express-Session no server.js
**Localização**: `src/server.js`

**Mudanças necessárias**:
```javascript
import session from "express-session"

// Adicionar após app.use(express.json())
app.use(session({
  secret: process.env.SESSION_SECRET || "rotagestor-secret-key-2024",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production", // HTTPS em produção
    httpOnly: true, // Previne XSS
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
  }
}))
```

**Considerações**:
- ✅ Secret em variável de ambiente (segurança básica)
- ✅ Cookie httpOnly (proteção XSS)
- ✅ Sessão de 24 horas
- ⚠️ Em produção, usar store persistente (Redis/MongoDB) se necessário

#### 1.3 Criar Script de Inicialização do Admin
**Arquivo**: `src/utils/initAdmin.js`

**Funcionalidade**:
- Executar ao iniciar servidor
- Verificar se usuário "admin" existe
- Se não existir, criar com senha "12345"
- Se existir, garantir que senha seja "12345" (atualizar se necessário)

**Lógica**:
```javascript
async function inicializarAdmin() {
  try {
    const admin = await prisma.usuario.findFirst({
      where: { nome: "admin" }
    })
    
    if (!admin) {
      // Criar admin
      await prisma.usuario.create({
        data: {
          nome: "admin",
          senha: "12345",
          motorista: false
        }
      })
      console.log("✅ Usuário admin criado")
    } else if (admin.senha !== "12345") {
      // Garantir senha correta
      await prisma.usuario.update({
        where: { id: admin.id },
        data: { senha: "12345" }
      })
      console.log("✅ Senha do admin atualizada")
    } else {
      console.log("✅ Usuário admin já existe")
    }
  } catch (error) {
    console.error("❌ Erro ao inicializar admin:", error)
  }
}
```

**Integração no server.js**:
- Chamar após conexão com banco de dados
- Aguardar conclusão antes de iniciar servidor

---

### FASE 2: Controller de Autenticação

#### 2.1 Criar authController.js
**Arquivo**: `src/controllers/authController.js`

**Endpoints necessários**:

1. **POST /api/auth/login**
   - Recebe: `{ nome, senha }`
   - Valida credenciais no banco
   - Cria sessão: `req.session.userId = usuario.id`
   - Retorna: `{ sucesso: true, usuario: { id, nome } }`
   - Erro: `{ erro: "Credenciais inválidas" }`

2. **POST /api/auth/logout**
   - Destroi sessão: `req.session.destroy()`
   - Retorna: `{ sucesso: true }`

3. **GET /api/auth/verificar**
   - Verifica se há sessão ativa
   - Retorna: `{ autenticado: true/false, usuario: {...} }`
   - Usado pelo front-end para verificar estado

**Validações**:
- ✅ Nome e senha obrigatórios
- ✅ Verificar se usuário existe
- ✅ Comparar senha (texto simples, sem hash)
- ✅ Retornar erro genérico (não revelar se usuário existe)

**Código exemplo**:
```javascript
export const login = async (req, res) => {
  try {
    const { nome, senha } = req.body
    
    if (!nome || !senha) {
      return res.status(400).json({
        erro: "Nome e senha são obrigatórios"
      })
    }
    
    const usuario = await prisma.usuario.findFirst({
      where: { nome }
    })
    
    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({
        erro: "Credenciais inválidas"
      })
    }
    
    // Criar sessão
    req.session.userId = usuario.id
    req.session.userNome = usuario.nome
    
    res.json({
      sucesso: true,
      usuario: {
        id: usuario.id,
        nome: usuario.nome
      }
    })
  } catch (error) {
    // Tratamento de erro
  }
}
```

#### 2.2 Criar Rotas de Autenticação
**Arquivo**: `src/routes/authRoutes.js` [NOVO]

```javascript
import express from "express"
import { login, logout, verificar } from "../controllers/authController.js"

const router = express.Router()

router.post("/login", login)
router.post("/logout", logout)
router.get("/verificar", verificar)

export default router
```

**Integração no server.js**:
```javascript
import authRoutes from "./routes/authRoutes.js"
app.use("/api/auth", authRoutes)
```

---

### FASE 3: Middleware de Autenticação

#### 3.1 Criar authMiddleware.js
**Arquivo**: `src/middleware/authMiddleware.js` [NOVO]

**Funcionalidade**:
- Verificar se `req.session.userId` existe
- Se não existir, retornar 401 ou redirecionar
- Se existir, adicionar `req.userId` para uso nos controllers
- Opcional: buscar dados do usuário e adicionar em `req.usuario`

**Código**:
```javascript
export const verificarAutenticacao = (req, res, next) => {
  if (req.session && req.session.userId) {
    req.userId = req.session.userId
    req.userNome = req.session.userNome
    next()
  } else {
    res.status(401).json({
      erro: "Não autenticado",
      redirecionar: "/login"
    })
  }
}

// Middleware opcional para rotas que podem ser públicas ou privadas
export const autenticacaoOpcional = (req, res, next) => {
  if (req.session && req.session.userId) {
    req.userId = req.session.userId
    req.userNome = req.session.userNome
  }
  next()
}
```

#### 3.2 Aplicar Middleware nas Rotas
**Estratégia**:
- Rotas de API: Proteger com `verificarAutenticacao`
- Rotas de páginas: Proteger com middleware que redireciona para /login
- Rotas públicas: `/login`, `/api/auth/*`

**Exemplo no server.js**:
```javascript
import { verificarAutenticacao } from "./middleware/authMiddleware.js"

// Rotas públicas
app.use("/api/auth", authRoutes)
app.get("/login", ...)

// Rotas protegidas
app.use("/api", verificarAutenticacao) // Todas as APIs protegidas
app.use("/api/usuarios", usuarioRoutes)
app.use("/api/carros", carroRoutes)
// etc...

// Páginas protegidas
app.get("/", verificarAutenticacao, (req, res) => {
  res.sendFile("index.html", { root: "./src/frontend/pages/home" })
})
```

---

### FASE 4: Modificar Controllers para Filtrar por Usuário

#### 4.1 Estratégia de Filtro

**Regra de Negócio**:
- Cada usuário vê apenas seus próprios dados
- Relacionamento: Usuario → Carro (via motoristaId)
- Carro → GastosCombustivel, GastosManutencao, Manutencao

**Filtro em cascata**:
```
Usuario logado (userId)
  ↓
Carros onde motoristaId = userId
  ↓
Gastos onde carroId IN (carros do usuário)
```

#### 4.2 Modificar carroController.js

**Função `listarCarros`**:
```javascript
export const listarCarros = async (req, res) => {
  try {
    const userId = req.userId // Do middleware
    
    const carros = await prisma.carro.findMany({
      where: {
        motoristaId: userId // FILTRO POR USUÁRIO
      },
      include: {
        motorista: { ... },
        gastosCombustivel: true,
        gastosManutencao: true,
      }
    })
    
    // Resto do código...
  }
}
```

**Função `criarCarro`**:
- Garantir que `motoristaId` seja sempre `req.userId`
- Não permitir criar carro para outro usuário

**Função `atualizarCarro`**:
- Verificar se carro pertence ao usuário antes de atualizar
- Não permitir mudar motoristaId para outro usuário

**Função `deletarCarro`**:
- Verificar se carro pertence ao usuário antes de deletar

#### 4.3 Modificar gastosController.js

**Função `listarGastosCombustivel`**:
```javascript
export const listarGastosCombustivel = async (req, res) => {
  try {
    const userId = req.userId
    
    // Buscar carros do usuário
    const carrosUsuario = await prisma.carro.findMany({
      where: { motoristaId: userId },
      select: { id: true }
    })
    
    const carrosIds = carrosUsuario.map(c => c.id)
    
    const gastos = await prisma.gastosCombustivel.findMany({
      where: {
        carroId: { in: carrosIds } // FILTRO POR CARROS DO USUÁRIO
      },
      include: { carro: { ... } }
    })
    
    // Resto do código...
  }
}
```

**Aplicar mesmo padrão para**:
- `criarGastoCombustivel`: Verificar se carroId pertence ao usuário
- `listarGastosManutencao`: Filtrar por carros do usuário
- `criarGastoManutencao`: Verificar se carroId pertence ao usuário

#### 4.4 Modificar manutencaoController.js

**Mesma lógica**:
- Listar: Filtrar por carros do usuário
- Criar: Verificar se carroId pertence ao usuário
- Atualizar/Deletar: Verificar se manutenção pertence a carro do usuário

#### 4.5 Modificar dashboardController.js

**Todos os endpoints**:
- Filtrar dados apenas dos carros do usuário logado
- `maioresGastosCombustivel`: Apenas carros do usuário
- `maioresGastosManutencao`: Apenas carros do usuário
- `mediasConsumo`: Apenas carros do usuário
- `dadosGrafico`: Apenas gastos dos carros do usuário

**Exemplo**:
```javascript
export const maioresGastosCombustivel = async (req, res) => {
  try {
    const userId = req.userId
    
    // Buscar carros do usuário
    const carrosUsuario = await prisma.carro.findMany({
      where: { motoristaId: userId },
      select: { id: true }
    })
    
    const carrosIds = carrosUsuario.map(c => c.id)
    
    const gastos = await prisma.gastosCombustivel.groupBy({
      by: ["carroId"],
      where: {
        carroId: { in: carrosIds } // FILTRO
      },
      // Resto do código...
    })
  }
}
```

#### 4.6 Modificar usuarioController.js

**Função `listarUsuarios`**:
- Admin vê todos os usuários
- Usuário comum vê apenas a si mesmo
- Ou: Todos veem todos (depende do requisito)

**Decisão necessária**: 
- Se admin deve ter privilégios especiais
- Se usuários comuns podem ver outros usuários

**Sugestão**: Manter simples - todos veem todos os usuários (página de pessoas)

---

### FASE 5: Modificar Front-End

#### 5.1 Atualizar Página de Login
**Arquivo**: `src/frontend/pages/login/index.html`

**Mudanças**:
- Adicionar IDs aos inputs (nome, senha)
- Remover links quebrados
- Implementar função de login via fetch
- Redirecionar para `/` após login bem-sucedido
- Mostrar mensagens de erro

**Código JavaScript**:
```javascript
async function fazerLogin() {
  const nome = document.getElementById('inputNome').value
  const senha = document.getElementById('inputSenha').value
  
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', // IMPORTANTE: Incluir cookies
      body: JSON.stringify({ nome, senha })
    })
    
    const data = await res.json()
    
    if (res.ok) {
      window.location.href = '/'
    } else {
      alert(data.erro || 'Erro ao fazer login')
    }
  } catch (error) {
    alert('Erro de conexão')
  }
}
```

**Considerações**:
- ✅ `credentials: 'include'` é ESSENCIAL para cookies de sessão
- ✅ Verificar autenticação ao carregar página
- ✅ Redirecionar para /login se não autenticado

#### 5.2 Adicionar Verificação de Autenticação nas Páginas

**Padrão para todas as páginas**:
```javascript
// No início de cada página (home, combustivel, manutencao, etc.)
async function verificarAutenticacao() {
  try {
    const res = await fetch('/api/auth/verificar', {
      credentials: 'include'
    })
    
    const data = await res.json()
    
    if (!data.autenticado) {
      window.location.href = '/login'
    }
  } catch (error) {
    window.location.href = '/login'
  }
}

// Chamar ao carregar página
document.addEventListener('DOMContentLoaded', verificarAutenticacao)
```

#### 5.3 Adicionar Botão de Logout

**Em todas as páginas** (header):
- Substituir link "Sair" por função de logout
- Implementar função que chama `/api/auth/logout`
- Redirecionar para `/login` após logout

**Código**:
```javascript
async function fazerLogout() {
  try {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    })
    window.location.href = '/login'
  } catch (error) {
    window.location.href = '/login'
  }
}
```

#### 5.4 Atualizar Todas as Requisições Fetch

**Padrão a aplicar**:
- Adicionar `credentials: 'include'` em TODAS as requisições fetch
- Garantir que cookies de sessão sejam enviados

**Exemplo**:
```javascript
// ANTES
fetch('/api/carros')

// DEPOIS
fetch('/api/carros', {
  credentials: 'include'
})
```

**Arquivos a modificar**:
- `src/frontend/pages/home/script/script.js`
- `src/frontend/pages/home/script/grafico.js`
- `src/frontend/pages/combustivel/index.html` (script)
- `src/frontend/pages/manutencao/index.html` (script)
- `src/frontend/pages/pessoas/index.html` (script)
- `src/frontend/pages/veicheles/scripts/index.js`

---

### FASE 6: Proteção de Rotas no Servidor

#### 6.1 Proteger Rotas de Páginas HTML

**No server.js**:
```javascript
import { verificarAutenticacao } from "./middleware/authMiddleware.js"

// Middleware para redirecionar se não autenticado
const protegerPagina = (req, res, next) => {
  if (req.session && req.session.userId) {
    next()
  } else {
    res.redirect('/login')
  }
}

// Aplicar em todas as rotas de páginas (exceto /login)
app.get("/", protegerPagina, (req, res) => {
  res.sendFile("index.html", { root: "./src/frontend/pages/home" })
})

app.get("/combustivel", protegerPagina, (req, res) => {
  res.sendFile("index.html", { root: "./src/frontend/pages/combustivel" })
})

// etc...
```

#### 6.2 Proteger Rotas de API

**Estratégia**:
- Aplicar middleware em todas as rotas `/api/*` (exceto `/api/auth/*`)
- Retornar JSON com erro 401 se não autenticado

---

### FASE 7: Tratamento de Erros e Edge Cases

#### 7.1 Cenários a Tratar

1. **Sessão expirada**:
   - Middleware detecta sessão inválida
   - Retorna 401
   - Front-end redireciona para /login

2. **Usuário deletado durante sessão**:
   - Verificar se usuário ainda existe no banco
   - Invalidar sessão se usuário não existir

3. **Múltiplas abas**:
   - Sessão compartilhada entre abas (comportamento padrão)
   - Logout em uma aba invalida todas (comportamento padrão)

4. **Navegação direta por URL**:
   - Middleware protege todas as rotas
   - Redireciona para /login se não autenticado

5. **Requisições AJAX sem autenticação**:
   - Retornar 401
   - Front-end pode tratar e redirecionar

#### 7.2 Validações Adicionais

**No authController.login**:
- ✅ Limitar tentativas de login (opcional, para evitar brute force básico)
- ✅ Log de tentativas de login (opcional)

**Nos controllers**:
- ✅ Verificar se userId existe antes de filtrar
- ✅ Tratar casos onde usuário não tem carros (retornar array vazio)

---

## 🔒 CONSIDERAÇÕES DE SEGURANÇA (Básicas)

### ✅ Implementar:
1. **Senhas em texto plano**: Aceitável para requisito (sem segurança reforçada)
2. **Sessões httpOnly**: Previne XSS básico
3. **Validação de entrada**: Prevenir SQL injection (Prisma já protege)
4. **CSRF**: Não necessário para requisito simples

### ⚠️ Limitações Aceitas:
1. Sem hash de senhas (requisito)
2. Sem tokens JWT (sessões server-side são suficientes)
3. Sem rate limiting avançado
4. Sem 2FA ou autenticação forte

### 🚨 Pontos de Atenção:
1. **Sessões em memória**: Perdidas ao reiniciar servidor
   - Solução: Usar store persistente se necessário (Redis/MongoDB)
2. **Senhas em texto**: Vulnerável a vazamento de banco
   - Aceitável para requisito, mas documentar limitação
3. **Sem HTTPS em dev**: Cookies podem ser interceptados
   - Em produção, usar HTTPS obrigatório

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

### Backend:
- [ ] Instalar express-session
- [ ] Configurar express-session no server.js
- [ ] Criar initAdmin.js
- [ ] Integrar initAdmin no server.js
- [ ] Criar authController.js
- [ ] Criar authRoutes.js
- [ ] Integrar authRoutes no server.js
- [ ] Criar authMiddleware.js
- [ ] Aplicar middleware em rotas de API
- [ ] Aplicar middleware em rotas de páginas
- [ ] Modificar carroController.js (filtro por userId)
- [ ] Modificar gastosController.js (filtro por userId)
- [ ] Modificar manutencaoController.js (filtro por userId)
- [ ] Modificar dashboardController.js (filtro por userId)
- [ ] Testar criação de carro (garantir motoristaId = userId)
- [ ] Testar filtros em todos os endpoints

### Frontend:
- [ ] Atualizar página de login (HTML + JS)
- [ ] Adicionar verificação de autenticação em todas as páginas
- [ ] Adicionar `credentials: 'include'` em todas as requisições fetch
- [ ] Implementar função de logout
- [ ] Atualizar botão "Sair" em todas as páginas
- [ ] Testar fluxo completo de login
- [ ] Testar redirecionamento quando não autenticado
- [ ] Testar isolamento de dados entre usuários

### Testes:
- [ ] Login com admin/12345 funciona
- [ ] Login com usuário inválido retorna erro
- [ ] Dados filtrados corretamente por usuário
- [ ] Usuário não vê dados de outros usuários
- [ ] Logout funciona corretamente
- [ ] Sessão persiste entre requisições
- [ ] Redirecionamento funciona quando não autenticado
- [ ] Admin é criado automaticamente ao iniciar servidor

---

## 🧪 CENÁRIOS DE TESTE

### Teste 1: Login Básico
1. Acessar `/login`
2. Inserir `admin` / `12345`
3. Verificar redirecionamento para `/`
4. Verificar que dados são carregados

### Teste 2: Isolamento de Dados
1. Criar usuário A e cadastrar carro
2. Fazer logout
3. Criar usuário B e fazer login
4. Verificar que usuário B não vê carro do usuário A

### Teste 3: Proteção de Rotas
1. Fazer logout
2. Tentar acessar `/` diretamente
3. Verificar redirecionamento para `/login`

### Teste 4: Sessão Persistente
1. Fazer login
2. Navegar entre páginas
3. Verificar que não precisa fazer login novamente

### Teste 5: Inicialização do Admin
1. Deletar usuário admin do banco
2. Reiniciar servidor
3. Verificar que admin é criado automaticamente
4. Fazer login com admin/12345

---

## 🐛 POSSÍVEIS PROBLEMAS E SOLUÇÕES

### Problema 1: Cookies não são enviados
**Sintoma**: Sessão não persiste entre requisições
**Solução**: 
- Verificar `credentials: 'include'` em todas as requisições
- Verificar configuração CORS (deve permitir credentials)
- Verificar se cookie está sendo criado (DevTools → Application → Cookies)

### Problema 2: Sessão perdida ao reiniciar servidor
**Sintoma**: Usuário precisa fazer login novamente após restart
**Solução**: 
- Comportamento esperado com sessões em memória
- Se necessário, implementar store persistente (Redis)

### Problema 3: Filtro não funciona corretamente
**Sintoma**: Usuário vê dados de outros usuários
**Solução**:
- Verificar se `req.userId` está sendo passado corretamente
- Verificar lógica de filtro nos controllers
- Adicionar logs para debug

### Problema 4: Loop de redirecionamento
**Sintoma**: Página fica redirecionando infinitamente
**Solução**:
- Verificar se rota `/login` não está protegida
- Verificar se middleware não está sendo aplicado duas vezes
- Verificar se verificação no front-end não está conflitando

### Problema 5: Admin não é criado
**Sintoma**: Erro ao fazer login com admin
**Solução**:
- Verificar logs do servidor ao iniciar
- Verificar se initAdmin está sendo chamado
- Verificar conexão com banco de dados
- Verificar permissões do banco

---

## 📊 DIAGRAMA DE FLUXO

```
┌─────────────┐
│   Usuário   │
└──────┬──────┘
       │
       ▼
┌─────────────┐     Não autenticado     ┌─────────────┐
│  Acessa /   │ ──────────────────────► │   /login    │
└──────┬──────┘                          └──────┬──────┘
       │                                        │
       │ Autenticado                            │
       │                                        │
       ▼                                        ▼
┌─────────────┐                          ┌─────────────┐
│ Middleware  │                          │  POST /api  │
│   Auth      │                          │  /auth/login│
└──────┬──────┘                          └──────┬──────┘
       │                                        │
       │                                        ▼
       │                                  ┌─────────────┐
       │                                  │ Valida      │
       │                                  │ Credenciais │
       │                                  └──────┬──────┘
       │                                        │
       │                                        ▼
       │                                  ┌─────────────┐
       │                                  │ Cria        │
       │                                  │ Sessão      │
       │                                  └──────┬──────┘
       │                                        │
       │                                        ▼
       │                                  ┌─────────────┐
       │                                  │ Redireciona │
       │                                  │ para /      │
       │                                  └─────────────┘
       │
       ▼
┌─────────────┐
│ Controllers │
│ Filtram por │
│   userId    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Retorna    │
│  Dados      │
│  Filtrados  │
└─────────────┘
```

---

## 🎯 ORDEM DE IMPLEMENTAÇÃO RECOMENDADA

1. **Fase 1**: Configuração base (session + initAdmin)
2. **Fase 2**: Controller de autenticação (login/logout)
3. **Fase 3**: Middleware de autenticação
4. **Fase 4**: Proteção de rotas (testar login primeiro)
5. **Fase 5**: Modificar controllers (filtro por usuário)
6. **Fase 6**: Atualizar front-end (login + verificação)
7. **Fase 7**: Testes e ajustes finais

---

## 📝 NOTAS IMPORTANTES

1. **Senhas em texto plano**: Documentar que é requisito do projeto
2. **Sessões em memória**: Perdidas ao reiniciar (comportamento esperado)
3. **Isolamento de dados**: Crítico - testar extensivamente
4. **Admin sempre disponível**: Garantir que script de inicialização funcione
5. **Credentials em todas as requisições**: Essencial para funcionamento

---

## ✅ VALIDAÇÃO FINAL

Após implementação, verificar:
- [ ] Login funciona com admin/12345
- [ ] Admin é criado automaticamente
- [ ] Cada usuário vê apenas seus dados
- [ ] Rotas protegidas redirecionam corretamente
- [ ] Logout funciona
- [ ] Sessão persiste durante navegação
- [ ] Novos usuários podem ser cadastrados
- [ ] Novos usuários podem fazer login

---

**Este plano garante uma implementação sólida, testável e livre de falhas críticas.**
