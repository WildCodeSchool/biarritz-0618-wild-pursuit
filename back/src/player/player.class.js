class Player {
  constructor(name, color) {
    this._name = name;
    this._cheeses = [];
    this._color = color;
    this._position = 0;
  }
  get name() {
    return this._name;
  }
  get cheeses() {
    return this._cheeses;
  }
  get nbCheeses() {
    return this._cheeses.length;
  }
  get color() {
    return this._color;
  }
  get position() {
    return this._position;
  }
}

module.exports = Player;
