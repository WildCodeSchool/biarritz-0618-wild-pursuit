const Code = require('code');
const expect = Code.expect;
const server = require('../app.js');
const Question = require('./question.model');

beforeEach((done) => {
  console.info('deleting questions ...');
  Question.deleteMany()
    .then(() => {
      console.info('deleted questions');
      done();
    })
    .catch(done);
});

describe('CRUD /questions', () => {
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
          expect(response.result).to.include(expectedResponseBody);
          done();
        })
        .catch(done);
    });
  });

  describe('Read', () => {
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
      // done(new Error('Not Implmented'));
    });
  });

  describe.skip('Update', () => {
    it('Should update a question and respond 200', (done) => {
      // done(new Error('Not Implmented'));
    });
  });

  describe.skip('Destroy', () => {
    it('Should destroy a question and respond 200', (done) => {
      // done(new Error('Not Implmented'));
    });
  });
});
