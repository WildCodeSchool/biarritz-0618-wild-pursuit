require('./db'); // init the db connection
const Hapi = require('hapi');
const server = Hapi.server({ port: 5000 });
const { launchGame } = require('./game/game.controller.js');
const io = require('socket.io')();

// -------------------------------
// Avoiding error when watch reload
if (!module.parent) {
  server.start((error) => {
    process.exit(1);
  });
}

// require('./syncModels.js'); //Pour synchroniser les models avec la BDD

io.on('createGame', (infos) => {
  launchGame(infos.nbPlayers, infos.countDown);
});

server.route(require('./question/question.routes'));

module.exports = server;
