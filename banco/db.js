import { Sequelize } from "sequelize"

export const sequelize = new Sequelize("rotagestor", "postgres", "132331", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
})