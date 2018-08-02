const Question = require('./../question/question.model.js');

module.exports = {
  getQuestion() {
    return new Promise((resolve, reject) => {
      Question.findOne({}).then((question) => {
        const answers = question.responses;
        const answerTrue = question.response;
        answers.push(answerTrue);
        answers.sort(function() {
          return 0.5 - Math.random();  
        });
        const laQuestion = {
          id: question.id,
          theme : question.theme,
          question : question.question,
          correctAnswer : question.response,
          answers : answers,
        };
        resolve(laQuestion);
      });
    });
  },
};
