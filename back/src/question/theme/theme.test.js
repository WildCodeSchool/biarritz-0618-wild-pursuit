const Code = require('code');
const expect = Code.expect;

const Theme = require('./theme.model.js');
const { getAllThemes } = require('./theme.controller.js');

describe('Theme related tests', () => {
  it('Should get all themes', (done) => {
    getAllThemes()
      .then((themes) => {
        expect(themes).to.be.an.array();
        done();
      })
      .catch(done);
  });
});
