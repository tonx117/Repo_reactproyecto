import { Sequelize, Model, DataTypes } from "sequelize";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  }
);

export { sequelize, Model, DataTypes };
