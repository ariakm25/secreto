const Sequelize = require('sequelize');
const conn = require('../config/db');
const User = conn.define('users', {
    id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_user: Sequelize.STRING,
    username: Sequelize.STRING 
});

module.exports = User;