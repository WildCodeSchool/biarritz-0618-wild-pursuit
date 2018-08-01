const Question = require('./../question/question.model.js');

module.exports = {
  getQuestion() {
    return new Promise((resolve, reject) => {
      Question.findAll({}).then((questions) => {
        const question = questions[0].dataValues;
        //console.log('TA MERE', question);
        const answers = question.responses;
        //console.log(answersFalse);
        const answerTrue = question.response;
        //console.log(answerTrue);
        answers.push(answerTrue);
        //console.log('PREMIER TABLEAU',answersFalse);
        answers.sort(function() {
          return 0.5 - Math.random();
        });
        //console.log('SECOND TABLEAU',answersFalse);
        const laQuestion = {
          id: question.id,
          theme : question.theme,
          question : question.question,
          correctAnswer : question.response,
          answers : answers,
        };
        console.log(laQuestion);
        resolve(laQuestion);
      });
    });
  },
};
