// models/Seat.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const Theater = require('./Theater');

const Seat = sequelize.define('Seat', {
  seatNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  theaterId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Theaters',
      key: 'id'
    }
  }
});

module.exports = Seat;