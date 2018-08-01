const Code = require('code');
const expect = Code.expect;
const sequelize = require('./../db.js');
const Question = require('./../question/question.model');
const getNewQuestions = require('./tour.helper.js').getNewQuestions;
const getQuestion = require('./tour.controller.js').getQuestion;
//const tourCtrl = require('./tour.controller');

describe('Afficher et répondre à une question', () => {
  beforeEach((done) => {
    console.info('Deleting questions...');
    Question.destroy({
      where: {},
      truncate: true,
    })
      .then(() => {
        console.info('Questions deleted');
        getNewQuestions(5).then((questions) => {
          Promise.all(questions.map((question) => {
            const laQuestion = {
              theme: question.category,
              question: question.question,
              response: question.correct_answer,
              responses: question.incorrect_answers,
            };
            return Question.create(laQuestion);
          }))
          .then(() => {
            console.info("Database filled")
            done();
          })
        });
      })
      .catch(done);
  });

  it('Should display a question', (done) => {
    getQuestion().then((laQuestion) => {
      console.log(laQuestion);
    
      expect(laQuestion).to.only.include([
        'id',
        'theme',
        'question',
        'correctAnswer',
        'answers',
      ]);
      expect(laQuestion.answers)
        .to.be.an.array()
        .and.to.include(laQuestion.correctAnswer);
      expect(laQuestion.answers.length).to.be.at.least(2);
      done();
    }).catch(done);
    
  });
});
