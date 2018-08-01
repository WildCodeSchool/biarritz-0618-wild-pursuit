const Code = require('code');
const expect = Code.expect;
const sequelize = require('./../db.js');
const Question = require('./../question/question.model');
const getNewQuestions = require('./tour.helper.js').getNewQuestions;

beforeEach((done) => {
  console.info('Deleting questions...');
  Question.destroy({
    where: {},
    truncate: true,
  })
    .then(() => {
      console.info('Questions deleted');
      getNewQuestions(5).then((questions) => {
        questions.forEach((question) => {
          const laQuestion = {
            theme: question.category,
            question: question.question,
            response: question.correct_answer,
            responses: question.incorrect_answers,
          };
          Question.create(laQuestion);
        });
        done();
      });
    })
    .catch(done);
});

describe('Afficher et répondre à une question', () => {
  it('Should disaply a question', (done) => done());
});
