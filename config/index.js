const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'postgres', '1406', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432'
});

module.exports = sequelize