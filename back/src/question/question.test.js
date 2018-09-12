const Code = require('code');
const expect = Code.expect;
const server = require('../app.js');
const Question = require('./question.model');
const Theme = require('./theme/theme.model');
const sequelize = require('./../db.js');
const uuidv4 = require('uuid/v4');
const questionsCtrl = require('./question.controller');

describe('CRUD /questions', () => {
  beforeEach((done) => {
    console.info('deleting questions ...');
    Question.destroy({
      where: {},
      truncate: true,
    })
      .then(() => {
        console.info('questions deleted');
        done();
      })
      .catch(done);
  });
  describe('Create', () => {
    it('Should create a question and respond 201', (done) => {
      const request = {
        method: 'POST',
        url: '/questions',
        payload: {
          id: uuidv4(),
          themeName: 'Géographie',
          question: 'Quelle est la capitale de la France',
          responses: ['Bayonne', 'Toulouse', 'Bordeaux', 'Londres'],
          response: 'Paris',
        },
      };

      const expectedResponseBody = {
        themeName: 'Géographie',
        question: 'Quelle est la capitale de la France',
        responses: ['Bayonne', 'Toulouse', 'Bordeaux', 'Londres'],
        response: 'Paris',
      };

      server
        .inject(request)
        .then((response) => {
          expect(response.statusCode).to.be.equal(201);
          expect(response.result).to.include('id');
          expect(response.result).to.include(expectedResponseBody);
          done();
        })
        .catch(done);
    });
  });

  //Test la lecture des questions
  describe('Read', () => {
    // read one
    it('Should get a question and respond 200', (done) => {
      const question = {
        themeName: 'Géographie',
        question: 'Quelle est la capitale de la France',
        response: 'Paris',
        responses: ['Bayonne', 'Toulouse', 'Bordeaux', 'Londres'],
      };
      Question.create(question)
        .then((createdQuestion) => {
          const request = {
            method: 'GET',
            url: `/questions/${createdQuestion.id}`,
          };
          const expectedResponseBody = {
            id: createdQuestion.id,
            ...question,
          };
          return server.inject(request).then((response) => {
            expect(response.statusCode).to.be.equal(200);
            expect(response.result).to.include(expectedResponseBody);
            done();
          });
        })
        .catch(done);
    });

    //Read all
    it('Should get all questions and respond 200', (done) => {
      const questionA = {
        id: uuidv4(),
        themeName: 'Géographie',
        question: 'manger?',
        response: 'sushi',
        responses: ['riz', 'pates', 'pizza', 'patate'],
      };
      const questionB = {
        id: uuidv4(),
        themeName: 'Littérature',
        question: 'blobloblo ?',
        response: 'oui',
        responses: ['aa', 'bb', 'jj', 'aaz'],
      };

      Question.create(questionA)
        .then(() => {
          Question.create(questionB) //creation de la question A et B
            .then(() => {
              const request = {
                method: 'GET',
                url: `/questions`, // plus de id pour ne pas cibler une seule question
              };
              const expectedResponseBody = {
                0: { ...questionA },
                1: { ...questionB },
              };
              return server
                .inject(request)
                .then((response) => {
                  expect(response.statusCode).to.be.equal(200); // quand l'on arrive à lire toutes les questions
                  expect(response.result).to.include(expectedResponseBody); // les questions apparaissent
                  done();
                })
                .catch(done);
            })
            .catch(done);
        })
        .catch(done);
    });
  });

  //Test de la mise à jour d'une question
  describe('Update', () => {
    it('Should update a question and respond 200', (done) => {
      const requestCreate = {
        // on post une question
        method: 'POST',
        url: '/questions',
        payload: {
          themeName: 'Géographie',
          question: 'Quelle est la capitale de la France',
          responses: ['Bayonne', 'Toulouse', 'Bordeaux', 'Londres'],
          response: 'Paris',
        },
      };

      const expectedResponseBody = {
        // on attend que la modif soie prise en compte
        themeName: 'Géographie',
        question: 'Quelle est la capitale de la France ?',
        responses: ['Tokyo', 'Toulouse', 'Bordeaux', 'Londres'],
        response: 'Pau',
      };

      server
        .inject(requestCreate)
        .then((res) => {
          const requestUpdate = {
            // on la modifie
            method: 'PUT',
            url: `/questions/${res.result.id}`, // on sait pas trop quelle cela modifie
            payload: {
              themeName: 'Géographie',
              question: 'Quelle est la capitale de la France ?',
              responses: ['Tokyo', 'Toulouse', 'Bordeaux', 'Londres'],
              response: 'Pau',
            },
          };
          server
            .inject(requestUpdate)
            .then((response) => {
              expect(response.statusCode).to.be.equal(200);
              expect(response.result).to.include('id');
              expect(response.result).to.include(expectedResponseBody);
              done();
            })
            .catch(done);
        })
        .catch(done);
    });
  });

  describe('Destroy', () => {
    it('Should destroy a question and respond 200', (done) => {
      const question = {
        themeName: 'Géographie',
        question: 'Quelle est la capitale de la France',
        responses: ['Bayonne', 'Toulouse', 'Bordeaux', 'Londres'],
        response: 'Paris',
      };
      Question.create(question)
        .then((createdQuestion) => {
          const request = {
            method: 'DELETE',
            url: `/questions/${createdQuestion.id}`,
          };
          return server
            .inject(request)
            .then((response) => {
              expect(response.statusCode).to.be.equal(200); // on attend que la reponse et 200
              expect(response.result).to.be.equal(null); // on attend que l'objet que l'on a detruit soit null ou undefined
              done();
            })
            .catch(done);
        })
        .catch(done);
    });
  });
});
