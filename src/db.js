// const mysql = require('mysql');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('wildpursuit-test', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
});

module.exports = sequelize;
