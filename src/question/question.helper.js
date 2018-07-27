// Fonction qui formatte les données pour povoir les rentrer dans la BDD (Converti le tableau de réponses fausses, en objet JSON)
module.exports = {
  questionToSql({ id, theme, question, response, responses }) {
    return {
      id,
      theme,
      question,
      response,
      responses: { ...responses },
    };
  },
  // Fonction qui formatte les données récupérés dans la BBS pour utilisation dans l'App (Converti le JSON de mauvaises réponses en tableau)
  sqlToQuestion({ id, theme, question, response, responses }) {
    let result = [];
    var keys = Object.keys(responses);
    keys.forEach(function(key) {
      result.push(responses[key]);
    });
    return {
      id,
      theme,
      question,
      response,
      responses: result,
    };
  },
};
