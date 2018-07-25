const Sequelize = require('sequelize');
const sequelize = require('./../db.js');
const Question = sequelize.define('question', {
  id: {
    // allowNull: false,
    primaryKey: true,
    // type: Sequelize.UUID,
    // defaultValue: Sequelize.UUIDV4,
    type: Sequelize.INTEGER,
  },
  theme: {
    type: Sequelize.STRING,
  },
  question: {
    type: Sequelize.STRING,
  },
  response: {
    type: Sequelize.STRING,
  },
  responses: {
    type: Sequelize.JSON,
  },
});

module.exports = Question;
