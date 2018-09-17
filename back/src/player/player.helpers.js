const { names, colors } = require('./player.data.js');
const { pickANumberOfThings } = require('./../common/common.helpers.js');

function getColors(nbPlayers) {
  return pickANumberOfThings(colors, nbPlayers);
}

function getNames(nbPlayers) {
  return pickANumberOfThings(names, nbPlayers);
}

function getNamesAndColors(nbPlayers) {
  let players = [];
  let namesPlayers = getNames(nbPlayers);
  let colorsPlayers = getColors(nbPlayers);
  namesPlayers.forEach((name, i) => {
    players.push({ name: name, color: colorsPlayers[i] });
  });
  return players;
}

module.exports = getNamesAndColors;
