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

class normalBox extends IBox {
  constructor(id, x, y) {
    super(id, x, y);
  }
  play() {
    return true;
  }
}

class cheeseBox extends IBox {
  constructor(id, x, y) {
    super(id, x, y);
  }
  play() {}
}

class centerBox extends IBox {
  constructor(id, x, y) {
    super(id, x, y);
  }
  play() {}
}

class replayBox extends IBox {
  constructor(id, x, y) {
    super(id, x, y);
  }
  play() {}
}
module.exports = { normalBox, cheeseBox, centerBox, replayBox };
