const questionsCtrl = require('./question.controller');

module.exports = [
  {
    method: 'POST',
    path: '/questions',
    handler: questionsCtrl.createQuestion,
  },
  {
    method: 'GET',
    path: '/questions/{questionId}',
    handler: questionsCtrl.readQuestion,
  },
];
