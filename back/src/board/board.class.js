const boardHelpers = require('./board.helpers.js');

class Graph {
  constructor() {}
}

class IBoard extends Graph {
  constructor() {
    super();
  }

  getNeighbors(aCase, distance) {
    throw new Error(
      "IBoard:getNeighbors: not implemented, you're trying to use an Interface!!"
    );
  }
}

class NormalBoard extends IBoard {
  constructor(nbCat) {
    super();
    this._nbCat = nbCat;
    this._theBoxes = [];
    this._thePaths = [];
    this._ready = false;
  }

  init() {
    return new Promise((resolve) => {
      boardHelpers.pickThemes(this._nbCat).then((themes) => {
        this._themes = themes;
        this._theBoxes = boardHelpers.createBoxes(this._themes);
        console.log(this._theBoxes);
        this._thePaths = boardHelpers.createPaths(this._nbCat, this._theBoxes);
        this._ready = true;
        resolve();
      });
    });
  }

  get boxes() {
    if (this._ready) {
      return this._theBoxes;
    } else {
      throw 'init method was not called before this';
    }
  }

  get paths() {
    if (this._ready) {
      return this._thePaths;
    } else {
      throw 'init method was not called before this';
    }
  }

  getNeighbors(box, dist, supPath) {
    if (this._ready) {
      let neighbors = [];
      let paths = [];
      let indexes = [];
      this._thePaths.map((thePath) => {
        thePath.map((theBox, i) => {
          if (theBox === box) {
            paths.push(thePath); //on récupère les chemins où est présent la case
            indexes.push(i); //on récupère la position de la case dans ces chemins
          } //Pour améliorer : on doit pouvoir soit faire un helper, soit des méthodes getPaths(box) et getIndexes(Box)
        });
      });

      indexes.map((index, i) => {
        if (
          index !== paths[i].length - 1 && //Si on est pas au bout du chemin **ET**
          (!supPath || //Si supPath n'est pas défini **OU**
            !boardHelpers.areSameArrays(paths[i], [...supPath].reverse())) //si le chemin qu'on test n'est pas l'inverse du chemin qu'on testait au niveau supérieur de la fonction récursive (Pour éviter de revenir sur ses pas)
        ) {
          if (dist < paths[i].length - index) {
            //si la distance restant à parcourir ne dépasse pas le chemin
            neighbors.push(paths[i][index + dist]);
          } else {
            //sinon on modifie la distance, et on cherche les voisins à partir de la case qui est au bout du chemin
            let voisinParAlliance = this.getNeighbors(
              paths[i][paths[i].length - 1],
              dist - (paths[i].length - 1 - index),
              paths[i]
            );
            neighbors = neighbors.concat(voisinParAlliance);
          }
        }
      });
      return neighbors;
    } else {
      throw 'init method was not called before this';
    }
  }
}

module.exports = { NormalBoard };
