const Sequelize = require('sequelize');
const sequelize = require('./../../db.js');

const Theme = sequelize.define('theme', {
  name: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
});

module.exports = Theme;
