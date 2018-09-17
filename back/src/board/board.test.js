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
  it('Should generate an array of boxes with a pattern', (done) => {
    const themes = [
      { name: 'Histoire' },
      { name: 'Géographie' },
      { name: 'Science' },
      { name: 'Télévision' },
      { name: 'Théatre' },
      { name: 'Sport' },
    ];
    const boxes = createBoxes(themes);
    expect(boxes).to.be.an.array();
    expect(boxes).to.have.length(themes.length * themes.length * 2 + 1);
    expect(boxes[0], 'Objet').to.be.an.instanceOf(CenterBox);
    expect(boxes[themes.length], 'Objet').to.be.an.instanceOf(CheeseBox);
    expect(
      boxes[themes.length * themes.length + 2],
      'Objet'
    ).to.be.an.instanceOf(ReplayBox);
    done();
  });
  it('Should generate an array of paths (arrays) with a pattern', (done) => {
    const themes = [
      { name: 'Histoire' },
      { name: 'Géographie' },
      { name: 'Science' },
      { name: 'Télévision' },
      { name: 'Théatre' },
      { name: 'Sport' },
    ];
    let nbCat = themes.length;
    const boxes = createBoxes(themes);
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
  it('Should create an instance of NormalBoard', (done) => {
    let theBoard = new NormalBoard(6);
    theBoard
      .init()
      .then(() => {
        expect(theBoard).to.be.an.instanceOf(NormalBoard);
        expect(theBoard.getNeighbors(theBoard.boxes[4], 6)).to.be.an.array();

        let result = [
          theBoard.boxes[40],
          theBoard.boxes[69],
          theBoard.boxes[8],
          theBoard.boxes[14],
          theBoard.boxes[20],
          theBoard.boxes[26],
          theBoard.boxes[32],
        ];
        expect(
          theBoard.getNeighbors(theBoard.boxes[4], 6),
          'blop :'
        ).to.be.equal(result);

        result = [theBoard.boxes[3], theBoard.boxes[39], theBoard.boxes[70]];
        expect(
          theBoard.getNeighbors(theBoard.boxes[6], 3),
          'blop :'
        ).to.be.equal(result);

        result = [
          theBoard.boxes[38],
          theBoard.boxes[71],
          theBoard.boxes[47],
          theBoard.boxes[50],
          theBoard.boxes[53],
          theBoard.boxes[56],
          theBoard.boxes[59],
          theBoard.boxes[62],
          theBoard.boxes[65],
          theBoard.boxes[68],
          theBoard.boxes[1],
          theBoard.boxes[7],
          theBoard.boxes[19],
          theBoard.boxes[25],
          theBoard.boxes[31],
          theBoard.boxes[24],
          theBoard.boxes[9],
          theBoard.boxes[15],
          theBoard.boxes[21],
          theBoard.boxes[27],
          theBoard.boxes[33],
          theBoard.boxes[34],
          theBoard.boxes[65],
        ];
        expect(
          theBoard.getNeighbors(theBoard.boxes[42], 15),
          'blop :'
        ).to.be.equal(result);

        done();
      })
      .catch(done);
  });
});
