import { DataTypes } from "sequelize"
import { sequelize } from "../../banco/db.js"

// Define o modelo de Manutenção
const Manutencao = sequelize.define("Manutencao", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  servico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  oficina: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hora: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  tableName: "manutencoes", // nome da tabela no banco
  timestamps: false, // não cria colunas createdAt/updatedAt
})

export default Manutencao