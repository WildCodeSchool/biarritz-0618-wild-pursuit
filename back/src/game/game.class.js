const { NormalBoard } = require('./../board/board.class.js');
const Player = require('./../player/player.class.js');
const getNamesAndColors = require('./../player/player.helpers.js');

class Game {
  constructor(nbCat, nbPlayers) {
    this._id = Math.ceil(Math.random() * 10000);
    this._nbCat = nbCat;
    this._players = [];
    this._playersNamesAndColor = getNamesAndColors(nbPlayers);
    this._board = new NormalBoard(this._nbCat);
    this._ready = false;
  }

  init() {
    return new Promise((resolve) => {
      this._board.init().then(() => {
        console.log('La Partie #' + this._id + ' a bien été crée !');
        console.log('Le Plateau comporte ' + this._nbCat + ' catégories');
        this._ready = true;
        resolve();
      });
    });
  }

  get board() {
    if (this._ready) {
      return this._board;
    } else {
      throw 'init method was not called before this';
    }
  }

  get players() {
    return this._players;
  }

  get playersConnected() {
    console.log(value);
    return this._players.length;
  }

  newPlayer() {
    let player = new Player(this._playersNamesAndColor[this.playersConnected]);
    this._players.push(player);
    console.log(
      'Le joueur ' +
        player.name +
        ' vient de se connecter et a la couleur ' +
        player.color.name
    );
  }
}

module.exports = Game;
