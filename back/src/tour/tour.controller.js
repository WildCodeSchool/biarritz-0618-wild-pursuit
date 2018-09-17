const Question = require('./../question/question.model.js');


module.exports = { getQuestion, displayQuestion, resolveQuestion };
function getQuestion() {
  return new Promise((resolve, reject) => {
    Question.findOne({}).then((question) => {
      const answers = question.responses;
      const answerTrue = question.response;
      answers.push(answerTrue);
      answers.sort(function () {
        return 0.5 - Math.random(); //un sort qui prend en paramètre entre -0.5 et 0.5
      });                           //donc random à chaque élèment
      const theQuestion = {
        id: question.id,
        theme: question.theme,
        question: question.question,
        correctAnswer: question.response,
        answers: answers,
      };
      resolve(theQuestion);
    });
  });
}

function displayQuestion(id) {
  return new Promise((resolve, reject) => {
    getQuestion().then((theQuestion) => {
      //id a ajouter en parametre de la fonction des la modif de getQuestion()
      console.log('[' + theQuestion.theme + '] ' +
        theQuestion.question);
      const answers = theQuestion.answers;
      let i = 1;
      answers.forEach((answer) => {
        console.log('\t' + i + '. ' + answer);
        i++;
      });
      resolve();
    })
  })
}

function resolveQuestion(id, reponseUser) {
  return new Promise((resolve, reject) => {
    getQuestion().then((theQuestion) => {
      //id a ajouter en parametre de la fonction des la modif de getQuestion()
      if (theQuestion.correctAnswer === theQuestion.answers[reponseUser - 1]) {
        resolve(true);
      }
      else {
        reject(false);
      }
    })
  })
}


//Getquestions(theme)
//pickQuestion(questions)
//GetQuestion(id)
//afficherQuestion(id)
//attendre la réponse utilisateur
//repondreQuestion(reponseUser)