const Code = require('code');
const expect = Code.expect;
const {
  normalBox,
  cheeseBox,
  replayBox,
  centerBox,
} = require('./box.class.js');

describe('Generate Boxes', () => {
  it("should generate a object 'normalBox'", (done) => {
    const aBox = new normalBox(1);
    expect(aBox, 'Objet').to.be.an.instanceOf(normalBox);
    expect(aBox.id, 'id').to.be.equal(1);
    expect(aBox.coord, 'Coordonnées').to.be.equal([undefined, undefined]);
    done();
  });
  it("should generate a object 'cheeseBox'", (done) => {
    const aBox = new cheeseBox(1);
    expect(aBox, 'Objet').to.be.an.instanceOf(cheeseBox);
    expect(aBox.id, 'id').to.be.equal(1);
    expect(aBox.coord, 'Coordonnées').to.be.equal([undefined, undefined]);
    done();
  });
  it("should generate a object 'replayBox'", (done) => {
    const aBox = new replayBox(1);
    expect(aBox, 'Objet').to.be.an.instanceOf(replayBox);
    expect(aBox.id, 'id').to.be.equal(1);
    expect(aBox.coord, 'Coordonnées').to.be.equal([undefined, undefined]);
    done();
  });
  it("should generate a object 'centerBox'", (done) => {
    const aBox = new centerBox(1);
    expect(aBox, 'Objet').to.be.an.instanceOf(centerBox);
    expect(aBox.id, 'id').to.be.equal(1);
    expect(aBox.coord, 'Coordonnées').to.be.equal([undefined, undefined]);
    done();
  });
});
