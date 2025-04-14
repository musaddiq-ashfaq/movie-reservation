const { DataTypes } = require('sequelize');
const sequelize = require('../db/db.js');

const Movie = sequelize.define('Movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    duration: {
        type: DataTypes.INTEGER, // in minutes
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATEONLY
    }
});

module.exports = Movie;