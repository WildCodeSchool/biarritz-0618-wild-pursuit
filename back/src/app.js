require('./db'); // init the db connection
const Hapi = require('hapi');
const server = Hapi.server({ port: 3000 });

const getQuestion = require('./tour/tour.controller.js').getQuestion;
const afficherQuestion = require('./tour/tour.controller.js').afficherQuestion;
const repondreQuestion = require('./tour/tour.controller.js').repondreQuestion;

let readline = require('readline-sync');

// -------------------------------
// Avoiding error when watch reload
if (!module.parent) {
  server.start((error) => {
    process.exit(1);
  });
}

require('./syncModels.js');

server.route(require('./question/question.routes'));

module.exports = server;
/* getQuestion().then((laQuestion) => {
  afficherQuestion(laQuestion.id).then(() => {
    /* const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    }); 
    let reponseUser = readline.question("Entre un chiffre : ");
    repondreQuestion(laQuestion.id, reponseUser);
  });
}); */