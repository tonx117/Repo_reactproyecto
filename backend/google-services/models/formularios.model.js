import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";

// Modelo de Usuario
const Formulario = sequelize.define(
    "Formulario",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        PDFfile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },
    {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: "formularios",
    }
);
Formulario.sync({ force: true });

export default Formulario;