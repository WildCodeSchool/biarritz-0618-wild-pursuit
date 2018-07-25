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
  keys.forEach(function(key) {
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
        id: null,
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
    return h.response({}).code(178);
  },
};
