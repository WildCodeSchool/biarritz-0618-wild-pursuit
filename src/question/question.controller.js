const Question = require('./question.model');

module.exports = {
  createQuestion(request, h) {
    return new Promise((resolve, reject) => {
      const values = {
        id: null,
        theme: request.payload.theme,
        question: request.payload.question,
        response: request.payload.response,
        responses: request.payload.responses.join('_'),
      };
      Question.create(values)
        .then((createdQuestion) => {
          resolve(createdQuestion);
        })
        .catch((err) => {
          reject(err);
        });
    })
      .then((createdQuestion) => {
        console.log(createdQuestion);
        return h
          .response({
            id: createdQuestion.id,
            theme: createdQuestion.theme,
            response: createdQuestion.response,
            responses: createdQuestion.responses.split('_'),
            question: createdQuestion.question,
          })
          .code(201);
      })
      .catch((err) => {
        return h.response(err).code(400);
      });
  },
  readQuestion(request, h) {
    return h.response({}).code(178);
  },
};
