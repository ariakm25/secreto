const Sequelize = require('sequelize');
const sequelize = new Sequelize('latihan', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });

module.exports = sequelize;