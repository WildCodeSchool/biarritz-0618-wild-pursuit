require('./db'); // init the db connection
const Hapi = require('hapi');
const server = Hapi.server({ port: 3000 });

// -------------------------------
// Avoiding error when watch reload
if (!module.parent) {
  server.start((error) => {
    process.exit(1);
  });
}

server.route(require('./question/question.routes'));

module.exports = server;
