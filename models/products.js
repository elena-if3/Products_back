const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "products",
        {
            id: {
                autoIncrement: true,
                autoIncrementIdentity: true,
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
            },
            code: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            nom: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            keywords: {
                type: DataTypes.STRING(250),
                allowNull: true,
            },
            kcal: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "products",
            schema: "public",
            timestamps: false,
            indexes: [
                {
                    name: "products_pkey",
                    unique: true,
                    fields: [{ name: "id" }],
                },
            ],
        }
    );
};
