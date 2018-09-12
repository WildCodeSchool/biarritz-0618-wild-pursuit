const Code = require('code');
const expect = Code.expect;
const lancerDe = require('./dice.controller.js');
//const server = require('../app.js');
//const expect = require('expect.js');

describe('lancé de dé', () => {
  it('should generate a integer', (done) => {
    const nbr = 28;
    for (let i = 0; i < 1000; i++) {
      const rpse = launchDice(nbr);
      expect(rpse).to.be.a.number();
      expect(rpse).to.be.equal(Math.floor(rpse));
      expect(rpse).to.be.within(1, nbr);
    }

    done();
  });
});
