class Player {
  constructor(settings) {
    this._name = settings.name;
    this._cheeses = [];
    this._color = settings.color;
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
  set position(pos) {
    return (this._position = pos);
  }
}

module.exports = Player;
