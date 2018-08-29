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
  {
    method: 'GET',
    path: '/questions',
    handler: questionsCtrl.readQuestions,
  },
  {
    method: 'PUT',
    path: '/questions/{questionId}',
    handler: questionsCtrl.updateQuestion,
  },
  {
    method: 'DELETE',
    path: '/questions/{questionId}',
    handler: questionsCtrl.deleteQuestion,
  },
];
