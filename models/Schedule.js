const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Schedule = sequelize.define('Schedule', {
  startTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  // price: {
  //   type: DataTypes.FLOAT,
  //   allowNull: false
  // },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Movies',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  theaterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Theaters',
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
});

module.exports = Schedule;
