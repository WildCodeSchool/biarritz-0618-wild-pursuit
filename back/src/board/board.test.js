const Code = require('code');
const expect = Code.expect;

const {
  NormalBox,
  CheeseBox,
  ReplayBox,
  CenterBox,
} = require('./box.class.js');
const { createBoxes, createPaths } = require('./board.helpers.js');
const { NormalBoard } = require('./board.class.js');

describe('Generate a board', () => {
  it('should generate an array of boxes with a pattern', (done) => {
    const nbCat = 6;
    const boxes = createBoxes(nbCat);
    expect(boxes).to.be.an.array();
    expect(boxes).to.have.length(nbCat * nbCat * 2 + 1);
    expect(boxes[0], 'Objet').to.be.an.instanceOf(CenterBox);
    expect(boxes[nbCat], 'Objet').to.be.an.instanceOf(CheeseBox);
    expect(boxes[nbCat * nbCat + 2], 'Objet').to.be.an.instanceOf(ReplayBox);
    done();
  });
  it('should generate an array of paths (arrays) with a pattern', (done) => {
    const nbCat = 6;
    const boxes = createBoxes(nbCat);
    const paths = createPaths(nbCat, boxes);
    expect(paths, '#1').to.be.an.array();
    expect(paths, '#2').to.have.length(nbCat * 2 * 2);

    expect(paths[0], '#3').to.be.an.array();
    expect(paths[0], '#4').to.have.length(nbCat + 1);
    expect(paths[nbCat * 2], '#5').to.have.length(nbCat + 2);

    expect(paths[0][0], '#6').to.be.an.instanceOf(CenterBox);
    expect(paths[0][nbCat], '#7').to.be.an.instanceOf(CheeseBox);
    expect(paths[1][0], '#8').to.be.an.instanceOf(CheeseBox);
    expect(paths[1][nbCat], '#9').to.be.an.instanceOf(CenterBox);

    expect(paths[2][0], '#10').to.be.an.instanceOf(CenterBox);
    expect(paths[2][nbCat], '#11').to.be.an.instanceOf(CheeseBox);
    expect(paths[3][0], '#12').to.be.an.instanceOf(CheeseBox);
    expect(paths[3][nbCat], '#13').to.be.an.instanceOf(CenterBox);

    expect(paths[nbCat * 2][0], '#14').to.be.an.instanceOf(CheeseBox);
    expect(paths[nbCat * 2][2], '#15').to.be.an.instanceOf(ReplayBox);
    expect(paths[nbCat * 2 + 1][0], '#16').to.be.an.instanceOf(CheeseBox);
    expect(paths[nbCat * 2 + 1][2], '#17').to.be.an.instanceOf(ReplayBox);

    expect(paths[0][0], '#18').to.be.equal(paths[1][nbCat]);
    expect(paths[0][0], '#19').to.be.equal(paths[2][0]);

    expect(paths[0][nbCat], '#20').to.be.equal(paths[nbCat * 2][0]);
    expect(paths[0][nbCat], '#21').to.be.equal(paths[nbCat * 2 + 1][7]);
    expect(paths[0][nbCat], '#22').to.be.equal(paths[nbCat * 2 + 10][7]);
    expect(paths[0][nbCat], '#23').to.be.equal(paths[nbCat * 2 + 11][0]);

    done();
  });
  it('should create an instance of NormalBoard', (done) => {
    const nbCat = 6;
    const theBoard = new NormalBoard(nbCat);
    expect(theBoard).to.be.an.instanceOf(NormalBoard);
    expect(theBoard.getNeighbors(4, 6)).to.be.an.array();
    expect(theBoard.getNeighbors(4, 6)).to.be.equal([
      40,
      69,
      8,
      14,
      20,
      26,
      32,
    ]);
    expect(theBoard.getNeighbors(6, 3)).to.be.equal([3, 39, 70]);

    /*.to.be.an.array();
    expect(boxes).to.have.length(nbCat * nbCat * 2 + 1);
    expect(boxes[0], 'Objet')
    expect(boxes[nbCat], 'Objet').to.be.an.instanceOf(CheeseBox);
    expect(boxes[nbCat * nbCat + 2], 'Objet').to.be.an.instanceOf(ReplayBox);*/
    done();
  });
});
