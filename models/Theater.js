const DataTypes = require('sequelize');
const sequelize = require('../db/db');

const Theater = sequelize.define('Theater',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalSeats: {
        type: DataTypes.INTEGER,
    }
});

module.exports = Theater;