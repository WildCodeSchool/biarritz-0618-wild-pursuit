require('./db'); // init the db connection
const Hapi = require('hapi');
const server = Hapi.server({ port: 3000 });
const { launchGame } = require('./game/game.controller.js');

// -------------------------------
// Avoiding error when watch reload
if (!module.parent) {
  server.start((error) => {
    process.exit(1);
  });
}

// require('./syncModels.js'); //Pour synchroniser les models avec la BDD

launchGame(6, 4);
server.route(require('./question/question.routes'));

module.exports = server;
