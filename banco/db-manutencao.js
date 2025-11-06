import pkg from 'pg';
const { Pool } = pkg;

// Configuração da conexão com PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'rotagestor',
  password: '132331',
  port: 5432,
});

// Criar tabela se não existir
const criarTabelaSeNaoExistir = async () => {
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS manutencoes (
        id SERIAL PRIMARY KEY,
        modelo VARCHAR(255) NOT NULL,
        placa VARCHAR(255) NOT NULL,
        servico VARCHAR(255) NOT NULL,
        valor FLOAT NOT NULL,
        oficina VARCHAR(255) NOT NULL,
        hora VARCHAR(255) NOT NULL,
        data DATE NOT NULL
      )
    `;
    await pool.query(query);
    console.log('✅ Tabela manutencoes verificada/criada com sucesso');
  } catch (erro) {
    console.error('❌ Erro ao criar tabela manutencoes:', erro);
  }
};

// Testar conexão e criar tabela
pool.on('connect', async () => {
  console.log('✅ Conexão com banco de dados estabelecida (Manutenção)');
  await criarTabelaSeNaoExistir();
});

pool.on('error', (err) => {
  console.error('❌ Erro inesperado no pool de conexões:', err);
});

// Garantir que a tabela existe ao importar o módulo
criarTabelaSeNaoExistir();

export default pool;

