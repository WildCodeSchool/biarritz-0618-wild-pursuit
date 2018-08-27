const {
  centerBox,
  cheeseBox,
  replayBox,
  normalBox,
} = require('./box.class.js');

function createBox(id, posX, posY, type) {
  let aBox;
  switch (type) {
    case 'center':
      aBox = new centerBox(id, posX, posY);
      break;
    case 'cheese':
      aBox = new cheeseBox(id, posX, posY);
      break;
    case 'replay':
      aBox = new replayBox(id, posX, posY);
      break;
    default:
      aBox = new normalBox(id, posX, posY);
      break;
  }
  return aBox;
}

function createBoxes(nbCat) {
  let theBoxes = [];
  if (nbCat >= 4) {
    for (let i = 0; i <= 2 * nbCat * nbCat; i++) {
      let type = 'default';

      if (i === 0) {
        type = 'center';
      } else if (!(i % nbCat) && i <= nbCat * nbCat) {
        type = 'cheese';
      } else if (i > nbCat * nbCat && (i % nbCat === 2 || i % nbCat === 5)) {
        //ne marche que pour la génération à 6 catégories pour le moment
        //to fix : prévoir les scénarios de génération des cases replay pour nbCat [4,inf]
        type = 'replay';
      }

      theBoxes[i] = createBox(i, 0, 0, type);
    }
  } else {
    console.log('Le plateau ne peux pas avoir moins de 4 catégories');
  }
  return theBoxes;
}

module.exports = { createBox, createBoxes };
