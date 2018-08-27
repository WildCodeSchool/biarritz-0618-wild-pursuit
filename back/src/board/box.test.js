const Code = require('code');
const expect = Code.expect;
const {
  normalBox,
  cheeseBox,
  replayBox,
  centerBox,
} = require('./box.class.js');
const { createBox } = require('./board.helpers.js');

describe('Generate Boxes', () => {
  it("should generate a object 'normalBox'", (done) => {
    const aBox = createBox(1, 3, 5);
    expect(aBox, 'Objet').to.be.an.instanceOf(normalBox);
    expect(aBox.id, 'id').to.be.equal(1);
    expect(aBox.coord, 'Coordonnées').to.be.equal([3, 5]);
    done();
  });
  it("should generate a object 'cheeseBox'", (done) => {
    const aBox = createBox(2, 5, 6, 'cheese');
    expect(aBox, 'Objet').to.be.an.instanceOf(cheeseBox);
    expect(aBox.id, 'id').to.be.equal(2);
    expect(aBox.coord, 'Coordonnées').to.be.equal([5, 6]);
    done();
  });
  it("should generate a object 'replayBox'", (done) => {
    const aBox = createBox(3, 4, 2, 'replay');
    expect(aBox, 'Objet').to.be.an.instanceOf(replayBox);
    expect(aBox.id, 'id').to.be.equal(3);
    expect(aBox.coord, 'Coordonnées').to.be.equal([4, 2]);
    done();
  });
  it("should generate a object 'centerBox'", (done) => {
    const aBox = createBox(4, 9, 45, 'center');
    expect(aBox, 'Objet').to.be.an.instanceOf(centerBox);
    expect(aBox.id, 'id').to.be.equal(4);
    expect(aBox.coord, 'Coordonnées').to.be.equal([9, 45]);
    done();
  });
});
