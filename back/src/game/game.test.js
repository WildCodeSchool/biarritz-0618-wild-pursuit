const Code = require('code');
const expect = Code.expect;
const { pickAPlayer, getNextPlayer } = require('./game.controller.js');
describe('Choisir les joueurs', () => {
  it('Should Randomly pick a player in an Array', (done) => {
    const players = ['Sandra', 'Karo', 'Yann', 'Maxime', 'Sami', "Anne-So'"];
    let pickedPlayers = [];
    for (let i = 0; i < 50; i++) {
      //pickedPlayers.push(pickAPlayer(players));
    }
    let sandra = (karo = yann = maxime = sami = anneSo = error = 0);
    pickedPlayers.map((player) => {
      switch (player) {
        case 'Sandra':
          sandra++;
          break;
        case 'Karo':
          karo++;
          break;
        case 'Yann':
          yann++;
          break;
        case 'Maxime':
          maxime++;
          break;
        case 'Sami':
          sami++;
          break;
        case "Anne-So'":
          anneSo++;
          break;
        default:
          error++;
          break;
      }
    });
    expect(sandra).to.be.above(0);
    expect(sandra).to.be.below(50);
    expect(karo).to.be.above(0);
    expect(karo).to.be.below(50);
    expect(yann).to.be.above(0);
    expect(yann).to.be.below(50);
    expect(maxime).to.be.above(0);
    expect(maxime).to.be.below(50);
    expect(sami).to.be.above(0);
    expect(sami).to.be.below(50);
    expect(anneSo).to.be.above(0);
    expect(anneSo).to.be.below(50);
    expect(error).to.be.equal(0);
    done();
  });

  it('Should get the next player in an Array', (done) => {
    const players = ['Sandra', 'Karo', 'Yann', 'Maxime', 'Sami', "Anne-So'"];
    let player = getNextPlayer('Sandra', players);
    expect(player).to.be.equal('Karo');
    player = getNetPlayer('Karo', players);
    expect(player).to.be.equal('Yann');
    player = getNetPlayer('Yann', players);
    expect(player).to.be.equal('Maxime');
    player = getNetPlayer('Maxime', players);
    expect(player).to.be.equal('Sami');
    player = getNetPlayer('Sami', players);
    expect(player).to.be.equal("Anne-So'");
    player = getNetPlayer("Anne-So'", players);
    expect(player).to.be.equal('Sandra');
    done();
  });
});
