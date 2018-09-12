class Noeud {
  constructor(id) {
    this._id = id;
  }
  get id() {
    return this._id;
  }
}

class IBox extends Noeud {
  constructor(id, x, y) {
    super(id);

    this._x = x;
    this._y = y;
  }

  get coord() {
    return [this._x, this._y];
  }

  play() {}
}

class NormalBox extends IBox {
  constructor(id, x, y) {
    super(id, x, y);
  }
  play() {
    return true;
  }
}

class CheeseBox extends IBox {
  constructor(id, x, y) {
    super(id, x, y);
  }
  play() {}
}

class CenterBox extends IBox {
  constructor(id, x, y) {
    super(id, x, y);
  }
  play() {}
}

class ReplayBox extends IBox {
  constructor(id, x, y) {
    super(id, x, y);
  }
  play() {}
}
module.exports = { NormalBox, CheeseBox, CenterBox, ReplayBox };
