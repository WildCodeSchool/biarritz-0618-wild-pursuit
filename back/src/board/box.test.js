const Code = require('code');
const expect = Code.expect;
const {
  NormalBox,
  CheeseBox,
  ReplayBox,
  CenterBox,
} = require('./box.class.js');
const { createBox } = require('./board.helpers.js');

describe('Generate Boxes', () => {
  it("Should generate a object 'NormalBox'", (done) => {
    const aBox = createBox(1, 3, 5);
    expect(aBox, 'Objet').to.be.an.instanceOf(NormalBox);
    expect(aBox.id, 'id').to.be.equal(1);
    expect(aBox.coord, 'Coordonnées').to.be.equal([3, 5]);
    done();
  });
  it("Should generate a object 'CheeseBox'", (done) => {
    const aBox = createBox(2, 5, 6, 'cheese');
    expect(aBox, 'Objet').to.be.an.instanceOf(CheeseBox);
    expect(aBox.id, 'id').to.be.equal(2);
    expect(aBox.coord, 'Coordonnées').to.be.equal([5, 6]);
    done();
  });
  it("Should generate a object 'ReplayBox'", (done) => {
    const aBox = createBox(3, 4, 2, 'replay');
    expect(aBox, 'Objet').to.be.an.instanceOf(ReplayBox);
    expect(aBox.id, 'id').to.be.equal(3);
    expect(aBox.coord, 'Coordonnées').to.be.equal([4, 2]);
    done();
  });
  it("Should generate a object 'CenterBox'", (done) => {
    const aBox = createBox(4, 9, 45, 'center');
    expect(aBox, 'Objet').to.be.an.instanceOf(CenterBox);
    expect(aBox.id, 'id').to.be.equal(4);
    expect(aBox.coord, 'Coordonnées').to.be.equal([9, 45]);
    done();
  });
});
