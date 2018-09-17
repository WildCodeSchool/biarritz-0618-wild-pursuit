const Sequelize = require('sequelize');

const sequelize = new Sequelize('wildpursuit-test', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgresql',
  operatorsAliases: false,
  logging: false,
});

module.exports = sequelize;
