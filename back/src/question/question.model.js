const Sequelize = require('sequelize');
const sequelize = require('./../db.js');
const Theme = require('./theme/theme.model.js');

const Question = sequelize.define('question', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
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
Question.belongsTo(Theme);
module.exports = Question;
