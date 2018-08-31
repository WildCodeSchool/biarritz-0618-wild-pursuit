function pickAPlayer(players) {
  return players[Math.floor(Math.random() * players.length)];
}

function getNextPlayer(player, players) {
  const nextPlayerIndex = (players.indexOf(player) + 1) % players.length;
  return players[nextPlayerIndex];
}

module.exports = { pickAPlayer, getNextPlayer };
