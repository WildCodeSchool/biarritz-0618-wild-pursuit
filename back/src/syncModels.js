const Question = require('./question/question.model.js');

// force: true will drop the table if it already exists
Question.sync({ force: false });
