const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Ticket = sequelize.define('Ticket', {
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Ticket;