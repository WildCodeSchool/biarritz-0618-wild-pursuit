const Code = require('code');
const expect = Code.expect;
const server = require('../app.js');
const Question = require('./question.model');
const sequelize = require('./../db.js');
const uuidv4 = require('uuid/v4');


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

// un test pour voir si lorsqu'on crée une question on a bien un uuid qui lui est affecté
// en verifiant directement dans la base sql

describe('CRUD /questions', () => {
  describe('Create', () => {
    it('Should create a question and respond 201', (done) => {
      const request = {
        method: 'POST',
        url: '/questions',
        payload: {
          id: uuidv4(),
          theme: 'geographie',
          question: 'Quelle est la capitale de la France',
          responses: ['Bayonne', 'Toulouse', 'Bordeaux', 'Londres'],
          response: 'Paris',
        },
      };

      const expectedResponseBody = {
        theme: 'geographie',
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
});

describe.skip('CRUD /questions', () => {
  describe('Create', () => {
    it('Should create a question and respond 201', (done) => {
      const request = {
        method: 'POST',
        url: '/questions',
        payload: {
          theme: 'geographie',
          question: 'Quelle est la capitale de la France',
          responses: ['Bayonne', 'Toulouse', 'Bordeaux', 'Londres'],
          response: 'Paris',
        },
      };

      const expectedResponseBody = {
        theme: 'geographie',
        question: 'Quelle est la capitale de la France',
        responses: ['Bayonne', 'Toulouse', 'Bordeaux', 'Londres'],
        response: 'Paris',
      };
      server
        .inject(request)
        .then((response) => {
          expect(response.statusCode).to.be.equal(201);
          expect(response.result).to.include('id');
          console.log(response.result);
          expect(response.result).to.include(expectedResponseBody);
          done();
        })
        .catch(done);
    });
  });

<<<<<<< HEAD
  describe.skip('Read', () => {
    // read one
=======
  describe.skip('Read', () => { // read one
>>>>>>> c38a38b2d63ef04aa4c8d099e4272f37450164bb
    it('Should get a question and respond 200', (done) => {
      const question = {
        theme: 'geographie',
        question: 'Quelle est la capitale de la France',
        responses: ['Bayonne', 'Toulouse', 'Bordeaux', 'Londres'],
        response: 'Paris',
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

    it.skip('Should get all questions and respond 200', (done) => {
      const questionA = {
        theme: 'maman',
        question: 'manger?',
        responses: ['riz', 'pates', 'pizza', 'patate'],
        response: 'sushi',
      };
      const questionB = {
        theme: 'blalbla',
        question: 'blobloblo ?',
        responses: ['aa', 'bb', 'jj', 'aaz'],
        response: 'oui',
      };

      Question.create(questionA, questionB) //creation de la question A et B
        .then((createdQuestion) => {
          const request = {
            method: 'GET',
            url: `/questions/${createdQuestion}`, // plus de id pour ne pas cibler une seule question
          };
          const expectedResponseBody = {
            id: createdQuestion,
            ...question,
          };
          return server.inject(request).then((response) => {
            expect(response.statusCode).to.be.equal(200); // quand l'on arrive à lire toutes les questions
            expect(response.result).to.include(expectedResponseBody); // les questions apparaissent
            done();
          });
        })
        .catch(done);
    });
  });

  describe.skip('Update', () => {
    it('Should update a question and respond 200', (done) => {
      const request = {
        // on post une question
        method: 'POST',
        url: '/questions',
        payload: {
          theme: 'geographie',
          question: 'Quelle est la capitale de la France',
          responses: ['Bayonne', 'Toulouse', 'Bordeaux', 'Londres'],
          response: 'Paris',
        },
      };
<<<<<<< HEAD
      // const request = {
      //   // on la modifie
      //   method: 'PUT',
      //   url: `/questions/${createdQuestion.id}`, // on sait pas trop quelle cela modifie
      //   payload: {
      //     theme: 'geographie',
      //     question: 'Quelle est la capitale de la France',
      //     responses: ['Tokyo', 'Toulouse', 'Bordeaux', 'Londres'],
      //     response: 'Paris',
      //   },
      // };
=======
        /*  const request = { // on la modifie
            method: 'PUT',
            url: `/questions/${createdQuestion.id}`, // on sait pas trop quelle cela modifie
            payload: {
              theme: 'geographie',
              question: 'Quelle est la capitale de la France',
              responses: ['Tokyo', 'Toulouse', 'Bordeaux', 'Londres'],
              response: 'Paris',
            },
          }; */
    
          const expectedResponseBody = { // on attend que la modif soie prise en compte
            theme: 'geographie',
            question: 'Quelle est la capitale de la France',
            responses: ['Tokyo', 'Toulouse', 'Bordeaux', 'Londres'],
            response: 'Paris',
          };
    
          server
            .inject(request)
            .then((response) => {
              expect(response.statusCode).to.be.equal(200);
              expect(response.result).to.include('id');
              expect(response.result).to.include(expectedResponseBody);
              done();
            })
            .catch(done);
        });
      });
    });
>>>>>>> c38a38b2d63ef04aa4c8d099e4272f37450164bb

      const expectedResponseBody = {
        // on attend que la modif soie prise en compte
        theme: 'geographie',
        question: 'Quelle est la capitale de la France',
        responses: ['Tokyo', 'Toulouse', 'Bordeaux', 'Londres'],
        response: 'Paris',
      };

      server
        .inject(request)
        .then((response) => {
          expect(response.statusCode).to.be.equal(200);
          expect(response.result).to.include('id');
          expect(response.result).to.include(expectedResponseBody);
          done();
        })
        .catch(done);
    });
  });
});

describe.skip('Destroy', () => {
  it('Should destroy a question and respond 200', (done) => {
    const question = {
      theme: 'geographie',
      question: 'Quelle est la capitale de la France',
      responses: ['Bayonne', 'Toulouse', 'Bordeaux', 'Londres'],
      response: 'Paris',
    };
    Question.destroy(question).then((destroyQuestion) => {
      const request = {
        method: 'DELETE',
        url: `/questions/${destroyQuestion.id}`,
      };

      return server.inject(request).then((response) => {
        expect(response.statusCode).to.be.equal(200); // on attend que la reponse et 200
        expect(response.result).to.be.equal(null || undefined); // on attend que l'objet que l'on a detruit soit null ou undefined
        done();
      });
    });
  });
});
