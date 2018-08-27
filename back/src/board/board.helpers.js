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

module.exports = { createBox };
