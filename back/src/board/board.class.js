const boardHelpers = require('./board.helpers.js');

class Graph {
  constructor() {}
}

class IBoard extends Graph {
  constructor() {
    super();
  }

  getNeighbors(aCase, distance) {}
}

class NormalBoard extends IBoard {
  constructor(nbCat) {
    super();
    this._nbCat = nbCat;
    this._theBoxes = boardHelpers.createBoxes(nbCat);
    this._thePaths = boardHelpers.createPaths(nbCat, this._theBoxes);
  }

  get theBoxes() {
    return this._theBoxes;
  }
  get thePaths() {
    return this._thePaths;
  }

  getNeighbors(box, dist, supPath) {
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
  }
}

module.exports = { NormalBoard };
