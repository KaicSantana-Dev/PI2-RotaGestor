import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import usuarioRoutes from "./routes/usuarioRoutes.js"
import carroRoutes from "./routes/carroRoutes.js"
import gastosRoutes from "./routes/gastosRoutes.js"
import manutencaoRoutes from "./routes/manutencaoRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"

// Carregar variáveis de ambiente
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(cors())
// Aumentar limite para 10MB para suportar imagens em base64
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))

// Log de requisições (desenvolvimento)
if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
  })
}


// PÁGINA HOME
app.use("/", express.static("./src/frontend/pages/home"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./src/frontend/pages/home" });
});

// PÁGINA LOGIN
app.use("/login", express.static("./src/frontend/pages/login"));
app.get("/login", (req, res) => {
  res.sendFile("index.html", { root: "./src/frontend/pages/login" });
});

// PÁGINA COMBUSTÍVEL
app.use("/combustivel", express.static("./src/frontend/pages/combustivel"));
app.get("/combustivel", (req, res) => {
  res.sendFile("index.html", { root: "./src/frontend/pages/combustivel" });
});

// PÁGINA MANUTENÇÃO
app.use("/manutencao", express.static("./src/frontend/pages/manutencao"));
app.get("/manutencao", (req, res) => {
  res.sendFile("index.html", { root: "./src/frontend/pages/manutencao" });
});

// PÁGINA PESSOAS
app.use("/pessoas", express.static("./src/frontend/pages/pessoas"));
app.get("/pessoas", (req, res) => {
  res.sendFile("index.html", { root: "./src/frontend/pages/pessoas" });
});

// PÁGINA VEÍCULOS
app.use("/veiculos", express.static("./src/frontend/pages/veicheles"));
app.get("/veiculos", (req, res) => {
  res.sendFile("index.html", { root: "./src/frontend/pages/veicheles" });
});

app.use("/api/usuarios", usuarioRoutes)
app.use("/api/carros", carroRoutes)
app.use("/api/gastos", gastosRoutes)
app.use("/api/manutencoes", manutencaoRoutes)
app.use("/api/dashboard", dashboardRoutes)

// Tratamento de rotas não encontradas
app.use((req, res) => {
  res.status(404).json({
    erro: "Rota não encontrada",
  })
})

// Tratamento de erros global
app.use((err, req, res, next) => {
  console.error("Erro não tratado:", err)
  
  // Tratamento específico para payload muito grande
  if (err.type === "entity.too.large") {
    return res.status(413).json({
      erro: "Payload muito grande",
      mensagem: "A imagem enviada é muito grande. Tente uma imagem menor (máximo 5MB).",
      detalhes: process.env.NODE_ENV === "development" ? err.message : undefined,
    })
  }
  
  res.status(500).json({
    erro: "Erro interno do servidor",
    detalhes: process.env.NODE_ENV === "development" ? err.message : undefined,
  })
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
  console.log(`📍 Ambiente: ${process.env.NODE_ENV || "development"}`)
  console.log(`🔗 URL: http://localhost:${PORT}`)
})

export default app
