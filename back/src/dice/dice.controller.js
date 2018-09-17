function launchDice(max = 6) {
  return Math.floor(Math.random() * max + 1);
}
module.exports = launchDice;
