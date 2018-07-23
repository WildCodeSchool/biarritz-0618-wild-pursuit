const Question = require('./question.model');

module.exports = {
  createQuestion(request, h) {
    return new Promise((resolve, reject) => {
      Question.create(request.payload, (err, createdQuestion) => {
        if (err) {
          return reject(err);
        }
        return resolve(createdQuestion);
      });
    })
      .then((createdQuestion) => {
        return h
          .response({
            id: createdQuestion.id,
            theme: createdQuestion.theme,
            response: createdQuestion.response,
            responses: createdQuestion.responses,
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
