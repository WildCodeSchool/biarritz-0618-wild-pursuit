const Question = require('./question/question.model.js');
const Theme = require('./question/theme/theme.model.js');

// force: true will drop the table if it already exists
Question.sync({ force: false });
Theme.sync({ force: false });
