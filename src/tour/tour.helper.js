const fetch = require('node-fetch');

module.exports = {
  getNewQuestions(number) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://opentdb.com/api.php?amount=${number}&difficulty=easy&type=multiple`
      )
        .then((res) => res.json())
        .then((json) => resolve(json.results));
    });
  },
};
