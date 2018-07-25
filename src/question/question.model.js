const Sequelize = require('Sequelize');
const sequelize = require('./../db.js');

const Question = sequelize.define('question', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
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
    type: Sequelize.STRING,
  },
});

module.exports = Question;
