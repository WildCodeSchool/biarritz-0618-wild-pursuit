const {
  CenterBox,
  CheeseBox,
  ReplayBox,
  NormalBox,
} = require('./box.class.js');
const { getAllThemes } = require('./../question/theme/theme.controller.js');
const { pickANumberOfThings } = require('./../common/common.helpers.js');

function createBox(id, posX, posY, type, theme) {
  let aBox;
  switch (type) {
    case 'center':
      aBox = new CenterBox(id, posX, posY);
      break;
    case 'cheese':
      aBox = new CheeseBox(id, posX, posY, theme);
      break;
    case 'replay':
      aBox = new ReplayBox(id, posX, posY);
      break;
    default:
      aBox = new NormalBox(id, posX, posY, theme);
      break;
  }
  return aBox;
}

function createBoxes(themes) {
  let theBoxes = [];
  if (themes.length >= 4) {
    for (let i = 0; i <= 2 * themes.length * themes.length; i++) {
      let type = 'default';
      //choisir la catégorie
      //si on est dans les chemins intérieurs
      //si on est dans les chemins extérieurs
      // CAT1: 1 = 36 = 17 // = 48 = 49 = 40 = 57 //
      // CAT2: 13 = 12 = 29 // = 60 = 61 = 52 = 69 //
      // CAT3: 19 = 18 = 35 // = 66 = 67 = 58 = 39 //
      // CAT4: 31 = 30 = 11 // = 42 = 43 = 51 = 70 //
      // CAT5: 25 = 24 = 5 // = 37 = 72 = 45 = 64 //
      // CAT6: 7 = 6 = 23 // = 54 = 55 = 46 = 63 //
      let theme = {
        name: 'Géographie',
        color: { name: 'Rouge', code: '#FF0000' },
      };
      if (i === 0) {
        type = 'center';
      } else if (!(i % themes.length) && i <= themes.length * themes.length) {
        type = 'cheese';
        //choisir la catégorie
      } else if (
        i > themes.length * themes.length &&
        (i % themes.length === 2 || i % themes.length === 5)
      ) {
        //ne marche que pour la génération à 6 catégories pour le moment
        //to fix : prévoir les scénarios de génération des cases replay pour nbCat [4,inf]
        type = 'replay';
      }

      theBoxes[i] = createBox(i, 0, 0, type, theme);
    }
  } else {
    console.log('Le plateau ne peux pas avoir moins de 4 catégories');
  }
  return theBoxes;
}

function createPaths(nbCat, theBoxes) {
  let _theExtPaths = [];
  let _theIntPaths = [];

  let k = nbCat * nbCat + 1;
  for (let i = 0; i < nbCat * nbCat; i = i + nbCat) {
    let _anIntPath = [];
    _anIntPath.push(theBoxes[0]);

    let _anExtPath = [];
    _anExtPath.push(theBoxes[i + nbCat]);

    for (let j = 0; j < nbCat; j++) {
      _anIntPath.push(theBoxes[i + j + 1]);
      _anExtPath.push(theBoxes[j + k]);
    }

    if (i === nbCat * nbCat - nbCat) {
      _anExtPath.push(theBoxes[nbCat]);
    } else {
      _anExtPath.push(theBoxes[i + nbCat * 2]);
    }

    _theIntPaths.push([..._anIntPath], [..._anIntPath].reverse());

    _theExtPaths.push([..._anExtPath], [..._anExtPath].reverse());

    k = k + nbCat;
  }
  return _theIntPaths.concat(_theExtPaths);
}

function areSameArrays(tab1, tab2) {
  if (tab1.length === tab2.length) {
    let i = 0;
    while (i < tab1.length && tab1[i] === tab2[i]) {
      i++;
    }
    if (i === tab1.length) {
      return true;
    }
  }
  return false;
}
function pickThemes(nbThemes) {
  return getAllThemes()
    .then((allThemes) => {
      return pickANumberOfThings(allThemes, nbThemes);
    })
    .catch((error) => {
      console.log(error);
      return 'blop';
    });
}
module.exports = {
  createBox,
  createBoxes,
  createPaths,
  areSameArrays,
  pickThemes,
};
