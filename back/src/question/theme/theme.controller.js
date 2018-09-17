const Theme = require('./theme.model.js');

function getAllThemes() {
  return new Promise((resolve, reject) => {
    Theme.findAll({})
      .then((listThemes) => {
        let i = 0;
        let allThemes = [];
        listThemes.forEach((theme, i) => {
          allThemes[i] = {
            name: theme.name,
          };
        });
        resolve(allThemes);
      })
      .catch((error) => reject(error));
  });
}

module.exports = { getAllThemes };
