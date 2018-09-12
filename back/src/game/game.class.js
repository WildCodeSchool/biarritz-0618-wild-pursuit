class Game {
  constructor() {
    this._id = Math.ceil(Math.random() * 10000);
    console.log('La Partie #' + this._id + ' a bien été crée !');
  }
}

module.exports = Game;
