# Instruções de Migration do Prisma

## Mudanças Realizadas no Schema

As seguintes alterações foram feitas no schema do Prisma:

1. **Model `GastosCombustivel`**:
   - Adicionado campo `quilometragem` (Decimal, opcional)
   - Adicionado campo `litros` (Decimal, opcional)

2. **Model `Manutencao`**:
   - Removidos campos `modelo` e `placa` (duplicados)
   - Adicionado campo `carroId` (Int, obrigatório)
   - Adicionado relacionamento com `Carro`
   - Alterado campo `valor` de `Float` para `Decimal`
   - Adicionado campo `criadoEm` (DateTime)

3. **Model `Carro`**:
   - Adicionado relacionamento `manutencoes` com `Manutencao`

## Como Executar a Migration

### Passo 1: Gerar a Migration

Execute o seguinte comando no terminal:

```bash
npx prisma migrate dev --name atualizar_schema_completo
```

Este comando irá:
- Criar um arquivo de migration com todas as alterações
- Aplicar as mudanças no banco de dados
- Regenerar o Prisma Client

### Passo 2: Verificar se a Migration foi Aplicada

Após executar a migration, verifique se tudo está correto:

```bash
npx prisma migrate status
```

### Passo 3: Regenerar o Prisma Client (se necessário)

Se o Prisma Client não foi regenerado automaticamente:

```bash
npx prisma generate
```

## ⚠️ ATENÇÃO: Dados Existentes

Se você já possui dados no banco de dados:

1. **Tabela `manutencoes`**: 
   - Os registros existentes perderão os campos `modelo` e `placa`
   - Será necessário migrar os dados manualmente ou criar um script de migração
   - Sugestão: Antes de executar a migration, faça backup dos dados

2. **Tabela `gastos_combustivel`**:
   - Os novos campos `quilometragem` e `litros` serão opcionais (NULL)
   - Dados existentes não serão afetados

## Script de Migração de Dados (Opcional)

Se você precisa migrar dados existentes da tabela `manutencoes` para usar `carroId`, você pode criar um script SQL:

```sql
-- Exemplo de script para migrar dados existentes
-- ATENÇÃO: Execute apenas se necessário e após fazer backup

-- Primeiro, adicione uma coluna temporária carroId
ALTER TABLE manutencoes ADD COLUMN carroId_temp INT;

-- Atualize carroId_temp baseado em modelo e placa
UPDATE manutencoes m
SET carroId_temp = (
  SELECT id FROM carros c 
  WHERE c.modelo = m.modelo AND c.placa = m.placa 
  LIMIT 1
);

-- Remova registros que não têm correspondência
DELETE FROM manutencoes WHERE carroId_temp IS NULL;

-- Execute a migration do Prisma
-- Depois, atualize carroId com os valores de carroId_temp
UPDATE manutencoes SET carroId = carroId_temp;

-- Remova a coluna temporária
ALTER TABLE manutencoes DROP COLUMN carroId_temp;
```

## Verificação Pós-Migration

Após executar a migration, verifique:

1. ✅ Tabela `gastos_combustivel` tem colunas `quilometragem` e `litros`
2. ✅ Tabela `manutencoes` tem coluna `carroId` e relacionamento com `carros`
3. ✅ Tabela `manutencoes` não tem mais colunas `modelo` e `placa`
4. ✅ Prisma Client foi regenerado

## Problemas Comuns

### Erro: "Foreign key constraint fails"
- **Causa**: Existem registros em `manutencoes` que não têm correspondência em `carros`
- **Solução**: Execute o script de migração de dados acima ou remova os registros órfãos

### Erro: "Column already exists"
- **Causa**: A migration já foi executada parcialmente
- **Solução**: Revise o estado do banco e ajuste a migration manualmente se necessário

### Erro: "Cannot drop column because it is referenced"
- **Causa**: Ainda há dependências nas colunas que serão removidas
- **Solução**: Remova as dependências primeiro ou ajuste a ordem da migration

## Suporte

Se encontrar problemas, verifique:
1. Logs do Prisma (`npx prisma migrate dev --create-only` para ver o SQL gerado)
2. Estado atual do banco (`npx prisma db pull` para ver o schema atual)
3. Documentação do Prisma: https://www.prisma.io/docs/concepts/components/prisma-migrate
