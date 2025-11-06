-- Script SQL para criar a tabela manutencoes
-- Execute este script no banco de dados PostgreSQL se a tabela não existir

CREATE TABLE IF NOT EXISTS manutencoes (
    id SERIAL PRIMARY KEY,
    modelo VARCHAR(255) NOT NULL,
    placa VARCHAR(255) NOT NULL,
    servico VARCHAR(255) NOT NULL,
    valor FLOAT NOT NULL,
    oficina VARCHAR(255) NOT NULL,
    hora VARCHAR(255) NOT NULL,
    data DATE NOT NULL
);

