const Code = require('code');
const expect = Code.expect;
const sequelize = require('./../db.js');
const Question = require('./../question/question.model');
const getNewQuestions = require('./tour.helper.js').getNewQuestions;
const getQuestion = require('./tour.controller.js').getQuestion;
const displayQuestion = require('./tour.controller.js').displayQuestion;
const resolveQuestion = require('./tour.controller.js').resolveQuestion;
const getQuestions = require('./tour.controller.js').getQuestions;
const pickQuestion = require('./tour.controller.js').pickQuestion;

let readline = require('readline');

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
          Promise.all(
            questions.map((question) => {
              const theQuestion = {
                theme: 'MON THEME', //question.category,
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

  it('Should display a question', (done) => {
    getQuestion()
      .then((theQuestion) => {
        expect(theQuestion).to.only.include([
          'id',
          'theme',
          'question',
          'correctAnswer',
          'answers',
        ]);
        expect(theQuestion.answers)
          .to.be.an.array()
          .and.to.include(theQuestion.correctAnswer);
        expect(theQuestion.answers.length).to.be.at.least(2);
        done();
      })
      .catch(done);
  });

  it('Should say to us if the answer is correct or not ', (done) => {
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
it('Should get all the questions of the database and put it on an array', (done) => {
  getQuestions()
    .then((listQuestions) => {
      expect(listQuestions).to.be.an.array();
      expect(listQuestions.length).to.be.at.least(2);

      expect(listQuestions[0].id).to.exist();
      expect(listQuestions[0].id).to.be.a.string();

      expect(listQuestions[0].theme).to.exist();
      expect(listQuestions[0].theme).to.be.a.string();

      expect(listQuestions[0].isAlreadyUsed).to.exist();
      expect(listQuestions[0].isAlreadyUsed).to.be.a.boolean();

      done();
    })
    .catch(done);
});

it('Sould pick one question', (done) => {
  getQuestions()
    .then((listQuestions) => {
      pickQuestion(listQuestions, 'MON THEME') // MON THEME sera modifié ulterieurement en fonction du tour
        .then((chosenQuestion) => {
          expect(chosenQuestion).to.be.a.string();
          let i = 0;
          while ( i < listQuestions.length && listQuestions[i].id != chosenQuestion) {
            i++;
          }
          if(i != listQuestions.length -1)
          {
            expect(listQuestions[i].isAlreadyUsed).to.be.false();
            expect(listQuestions[i].theme).to.be.equal('MON THEME');
            done();
          }
            
          
        })
        .catch(done);
    })
    .catch(done);
});
