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
          //theme : 'geographie',
        }
      })
      .then((question) => {
        //console.log('yolo', question);
        return h.response({}).code(200);
        
      })
      .catch();
    //A FAIRE
    //sequelize.query("SELECT * FROM 'questions' WHERE id=??")

    //db.questions.find({
    //  where : {
    //    id : req.params.id
    //  }
    //}).then((questions) => questions ? res.json(questions) : res.status(404).json({error : "Loose"}))

    //db.questions.findAll({}).then((questions) => res.json(questions))
    
  },
  readQuestions(request, h) {
    Question
      .findAll({})
      .then((question) => {
        console.log('LOL', question);
        return h.response(question).code(200);
      })
      .catch();
    
  },
  updateQuestion(request, h) {
    //A FAIRE
    return h.response({}).code(458);
  },
  deleteQuestion(request, h) {
    //A FAIRE
    return h.response({}).code(418);
  },
};
