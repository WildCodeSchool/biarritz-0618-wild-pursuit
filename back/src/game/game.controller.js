const Game = require('./game.class.js');
const launchDice = require('../dice/dice.controller.js');

function pickAPlayer(players) {
  return players[Math.floor(Math.random() * players.length)];
}

function getNextPlayer(player, players) {
  const nextPlayerIndex = (players.indexOf(player) + 1) % players.length;
  return players[nextPlayerIndex];
}

function launchGame(nbCat, nbMaxPlayers) {
  let aGame = new Game(nbCat, nbMaxPlayers);
  aGame.init().then(() => {
    aGame.newPlayer();
    aGame.newPlayer();
    aGame.newPlayer();
    aGame.newPlayer();
    let player = pickAPlayer(aGame.players);
    console.log('Le joueur qui joue : ' + player.name);
    let result = launchDice();
    console.log('Le résultat du dé : ' + result);
    console.log(
      aGame.board.getNeighbors(aGame.board.boxes[player.position], result)
    );

    player.position = 5; //CHOIX UTILISATEUR
    console.log(player.name + ' se déplace sur la case n°' + player.position);

    console.log(aGame.board.boxes[player.position]);
  });
}

module.exports = { launchGame, pickAPlayer, getNextPlayer };
