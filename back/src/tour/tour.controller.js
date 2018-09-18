const Question = require('./../question/question.model.js');

function getQuestions() {
  return new Promise((resolve, reject) => {
    Question.findAll({}).then((questions) => {
      let theQuestions = [];
      questions.map((question) => {
        const answers = question.responses;
        const answerTrue = question.response;
        answers.push(answerTrue);
        answers.sort(function() {
          return 0.5 - Math.random(); //un sort qui prend en paramètre entre -0.5 et 0.5
        }); //donc random à chaque élèment
        const theQuestion = {
          id: question.id,
          themeName: question.theme,
          question: question.question,
          correctAnswer: question.response,
          answers: answers,
        };
        theQuestions.push({ content: theQuestion, isAlreadyUsed: false });
      });

      resolve(theQuestions);
    });
  });
}

function pickAQuestion(questions, theme) {
  let themedQuestions = [];
  questions.map((question) => {
    if (question.themeName === theme) {
      themedQuestions.push(question);
    }
    let pickedIndex = Math.floor(Math.random() * themedQuestions.length);
  });
  return true;
}

function displayQuestion(id) {
  return new Promise((resolve, reject) => {
    getQuestion().then((theQuestion) => {
      //id a ajouter en parametre de la fonction des la modif de getQuestion()
      console.log('[' + theQuestion.theme + '] ' + theQuestion.question);
      const answers = theQuestion.answers;
      let i = 1;
      answers.forEach((answer) => {
        console.log('\t' + i + '. ' + answer);
        i++;
      });
      resolve();
    });
  });
}

function resolveQuestion(id, reponseUser) {
  return new Promise((resolve, reject) => {
    getQuestion().then((theQuestion) => {
      //id a ajouter en parametre de la fonction des la modif de getQuestion()
      if (theQuestion.correctAnswer === theQuestion.answers[reponseUser - 1]) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  });
}

module.exports = {
  getQuestions,
  pickAQuestion,
  displayQuestion,
  resolveQuestion,
};

//Getquestions(theme)
//pickQuestion(questions)
//GetQuestion(id)
//afficherQuestion(id)
//attendre la réponse utilisateur
//repondreQuestion(reponseUser)
