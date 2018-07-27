const Question = require('./question.model');

// Fonction qui formatte les données pour povoir les rentrer dans la BDD (Converti le tableau de réponses fausses, en objet JSON)
function questionToSql({ id, theme, question, response, responses }) {
  return {
    id,
    theme,
    question,
    response,
    responses: { ...responses },
  };
}

// Fonction qui formatte les données récupérés dans la BBS pour utilisation dans l'App (Converti le JSON de mauvaises réponses en tableau)
function sqlToQuestion({ id, theme, question, response, responses }) {
  let result = [];
  var keys = Object.keys(responses);
  keys.forEach(function (key) {
    result.push(responses[key]);
  });
  return {
    id,
    theme,
    question,
    response,
    responses: result,
  };
}
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

      Question.create(questionToSql(values))
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
            sqlToQuestion({
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
    //let maQuest = sequelize.query("SELECT * FROM `questions` WHERE id=req.params.id");
    Question
      .findOne({
        where: {
          id: request.params.questionId
        }
      })
      .then((question) => {
        return h.response({}).code(200);

      })
      .catch();
  },
  readQuestions(request, h) {
    return new Promise((resolve, reject) => {
      Question
        .findAll({})
        .then(resolve)
        .catch((err) => {
          reject(err);
        });
    }).then((questions) => {
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
      })

      return h.response(lesQuestions).code(200)
    })
      .catch((err) => {
        return h.response(err).code(418)
      });
  },


  updateQuestion(request, h) {
    //A FAIRE
    return h.response({}).code(458);
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