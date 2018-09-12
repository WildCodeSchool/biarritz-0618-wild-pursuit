const { names, colors } = require('./player.data.js');

function getUniqueIndexes(nbIndex, indexMax) {
  let indexes = [];
  let i = 0;
  while (i < nbIndex) {
    let index = Math.floor(Math.random() * indexMax);
    if (!indexes.includes(index)) {
      indexes.push(index);
      i++;
    }
  }
  return indexes;
}

function getColors(nbPlayers) {
  let colorsPlayers = [];
  indexes = getUniqueIndexes(nbPlayers, colors.length);
  indexes.forEach((index) => {
    colorsPlayers.push(colors[index]);
  });
  return colorsPlayers;
}
function getNames(nbPlayers) {
  let namesPlayers = [];
  indexes = getUniqueIndexes(nbPlayers, names.length);
  indexes.forEach((index) => {
    namesPlayers.push(names[index]);
  });
  return namesPlayers;
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
