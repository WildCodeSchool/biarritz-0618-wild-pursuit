const Code = require('code');
const expect = Code.expect;

const {
  normalBox,
  cheeseBox,
  replayBox,
  centerBox,
} = require('./box.class.js');
const { createBoxes } = require('./board.helpers.js');

describe('Generate a board', () => {
  it('should generate an array of boxes with a pattern', (done) => {
    const nbCat = 6;
    const boxes = createBoxes(nbCat);
    expect(boxes).to.be.an.array();
    expect(boxes).to.have.length(nbCat * nbCat * 2 + 1);
    expect(boxes[0], 'Objet').to.be.an.instanceOf(centerBox);
    expect(boxes[nbCat], 'Objet').to.be.an.instanceOf(cheeseBox);
    expect(boxes[nbCat * nbCat + 2], 'Objet').to.be.an.instanceOf(replayBox);
    done();
  });
});
