const Question = require('./question.model');
const helper = require('./question.helper');

module.exports = {
  createQuestion(request, h) {
    return new Promise((resolve, reject) => {
      const values = {
        id: request.payload.id,
        theme: request.payload.theme,
        question: request.payload.question,
        response: request.payload.response,
        responses: request.payload.responses,
      };
      Question.create(helper.questionToSql(values))
        .then((createdQuestion) => {
          resolve(createdQuestion);
        })
        .catch((err) => {
          reject(err);
        });
    })
      .then((createdQuestion) => {
        return h
          .response(
            helper.sqlToQuestion({
              id: createdQuestion.id,
              theme: createdQuestion.theme,
              response: createdQuestion.response,
              responses: createdQuestion.responses,
              question: createdQuestion.question,
            })
          )
          .code(201);
      })
      .catch((err) => {
        return h.response(err).code(400);
      });
  },
  readQuestion(request, h) {
    //A FAIRE
    return h.response({}).code(178);
  },
  readQuestions(request, h) {
    //A FAIRE
    return h.response({}).code(243);
  },
  updateQuestion(request, h) {
    //A FAIRE
    return h.response({}).code(458);
  },
  deleteQuestion(request, h) {
    return new Promise((resolve, reject) => {
      // const id = request.payload.id;
      // console.log(id);
      Question.destroy({
        where: { id: request.params.questionId },
      })
        .then(() => resolve())
        .catch((err) => {
          reject(err);
        });
    })
      .then(() => h.response(null).code(200))
      .catch((err) => {
        return h.response(err).code(400);
      });
  },
};
