const Question = require('./question.model');

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
      Question.create(values)
        .then((createdQuestion) => {
          resolve(createdQuestion);
        })
        .catch((err) => {
          reject(err);
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

  //Lecture d'une seule question
  readQuestion(request, h) {
    return new Promise((resolve, reject) => {
      Question.findOne({
        where: {
          id: request.params.questionId,
        },
      })
        .then(resolve)
        .catch((err) => {
          reject(err);
        });
    })
      .then((question) => {
        let laQuestion = {
          id: question.dataValues.id,
          theme: question.dataValues.theme,
          question: question.dataValues.question,
          response: question.dataValues.response,
          responses: question.dataValues.responses,
        };
        console.log(laQuestion);
        return h.response(laQuestion).code(200);
      })
      .catch();
  },

  //Lecture de toutes les questions
  readQuestions(request, h) {
    return new Promise((resolve, reject) => {
      Question.findAll({})
        .then(resolve)
        .catch((err) => {
          reject(err);
        });
    })
      .then((questions) => {
        let lesQuestions = {};
        let i = 0;
        questions.forEach((question) => {
          lesQuestions[i] = {
            id: question.dataValues.id,
            theme: question.dataValues.theme,
            question: question.dataValues.question,
            response: question.dataValues.response,
            responses: question.dataValues.responses,
          };
          i++;
        });

        return h.response(lesQuestions).code(200);
      })
      .catch((err) => {
        return h.response(err).code(418);
      });
  },

  //Mis à jour d'une question
  updateQuestion(request, h) {
    return new Promise((resolve, reject) => {
      Question.update(
        (values = {
          id: request.payload.id,
          question: request.payload.question,
          response: request.payload.response,
          responses: request.payload.responses,
        }),
        {
          where: {
            id: request.params.questionId,
          },
          returning: true,
        }
      )

        .then((reponseSQL) => resolve(reponseSQL[1][0].dataValues))
        .catch((err) => {
          reject(err);
        });
    })
      .then((questionUpdated) => {
        return h.response(questionUpdated).code(200);
      })
      .catch((err) => {
        return h.response(err).code(404);
      });
  },

  deleteQuestion(request, h) {
    return new Promise((resolve, reject) => {
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
