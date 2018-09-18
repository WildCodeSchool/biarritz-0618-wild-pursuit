const Code = require('code');
const expect = Code.expect;
const sequelize = require('./../db.js');
const Question = require('./../question/question.model');
const { getNewQuestions } = require('./tour.helper.js');
const {
  getQuestions,
  pickAQuestion,
  displayQuestion,
  resolveQuestion,
} = require('./tour.controller.js');

let readline = require('readline');

describe('Round related Tests', () => {
  beforeEach((done) => {
    console.info('Deleting questions...');
    Question.destroy({
      where: {},
      truncate: true,
    })
      .then(() => {
        console.info('Questions deleted');
        getNewQuestions(5).then((questions) => {
          Promise.all(
            questions.map((question) => {
              const theQuestion = {
                themeName: 'Géographie',
                question: question.question,
                response: question.correct_answer,
                responses: question.incorrect_answers,
              };
              return Question.create(theQuestion);
            })
          ).then(() => {
            console.info('Database filled');
            done();
          });
        });
      })
      .catch(done);
  });

  it('Should get all the questions and set them to Unused', (done) => {
    getQuestions()
      .then((theQuestions) => {
        expect(theQuestions).to.be.an.array();
        theQuestions.map((question) => {
          expect(question.isAlreadyUsed).to.be.false();
          expect(question.content).to.include([
            'id',
            'themeName',
            'question',
            'correctAnswer',
            'answers',
          ]);
          expect(question.content.answers)
            .to.be.an.array()
            .and.to.include(question.content.correctAnswer);
          expect(question.content.answers.length).to.be.at.least(2);
          expect(question.content.id).to.be.not.null();
          expect(question.content.themeName).to.be.not.null();
          expect(question.content.correctAnswer).to.be.not.null();
        });

        done();
      })
      .catch(done);
  });

  it('Should pick One Question who was not already used and in the right theme and set it to used', (done) => {
    getQuestions()
      .then((questions) => {
        let question = pickAQuestion(questions, 'Géographie');
        expect(question).to.include([
          'id',
          'themeName',
          'question',
          'correctAnswer',
          'answers',
        ]);
        expect(question.content.answers)
          .to.be.an.array()
          .and.to.include(question.content.correctAnswer);
        expect(question.content.answers.length).to.be.at.least(2);
        questions.map((aQuestion) => {
          if (aQuestion.content.id === question.id) {
            expect(aQuestion.isAlreadyUsed).to.be.true();
          } else {
            expect(aQuestion.isAlreadyUsed).to.be.false();
          }
        });
        done();
      })
      .catch(done);
  });

  it.skip('Should say to us if the answer is correct or not ', (done) => {
    getQuestion()
      .then((theQuestion) => {
        const correctAnswer = theQuestion.correctAnswer;
        let indexBonneReponse = 0;
        let answersOfQuestion = theQuestion.answers;
        for (let i = 0; i < answersOfQuestion.length; i++) {
          if (correctAnswer === answersOfQuestion[i]) {
            indexBonneReponse = i;
          }
        }
        resolveQuestion(theQuestion.id, indexBonneReponse + 1)
          .then((isCorrect) => {
            expect(isCorrect).to.be.true();
            resolveQuestion(theQuestion.id, 7)
              .then(done)
              .catch((isCorrect) => {
                expect(isCorrect).to.be.false();
                done();
              });
          })
          .catch(done);
      })
      .catch(done);
  });
});
