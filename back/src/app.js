require('./db'); // init the db connection
const Hapi = require('hapi');
const server = Hapi.server({ port: 5000 });
const io = require('socket.io')(server.listener);
const { launchGame } = require('./game/game.controller.js');

// require('./syncModels.js'); //Pour synchroniser les models avec la BDD

// -------------------------------
// Avoiding error when watch reload
// if (!module.parent) {
//   server.start((error) => {
//     process.exit(1);
//   });
// }

async function start() {
  await server.register(require('inert'));
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at : ', server.info.uri);
}
start();

io.on('createGame', function(infos) {
  console.log('TCHOIN');
  console.log(infos);
  //launchGame(infos.nbPlayers, infos.countDown);
});

//server.route(require('./question/question.routes'));

//module.exports = server;
