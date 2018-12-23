const Sequelize = require('sequelize');
const conn = require('../config/db');
const Message = conn.define('messages', {
    id_message: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user: Sequelize.STRING,
    content_message: Sequelize.STRING 
});

module.exports = Message;