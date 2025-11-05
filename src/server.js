// Importa o Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para permitir JSON no body das requisições
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor Express rodando com sucesso 🚀');
});

// Exemplo de rota com parâmetro
app.get('/saudacao/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Olá, ${nome}! Seja bem-vindo 😄`);
});

// Exemplo de rota POST
app.post('/dados', (req, res) => {
  const dados = req.body;
  res.json({ mensagem: 'Dados recebidos com sucesso!', dados });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
