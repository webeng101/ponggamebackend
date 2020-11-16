const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        firstName: { type: DataTypes.STRING, allowNull: true },
        lastName: { type: DataTypes.STRING, allowNull: true },
        username: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        hash: { type: DataTypes.STRING, allowNull: false },
        score: { type: DataTypes.INTEGER, allowNull: false, default:0},
        highScore: { type: DataTypes.INTEGER, allowNull: false, default:0 },
        birthday: { type: DataTypes.DATE, allowNull: false, default: Date.now},
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}