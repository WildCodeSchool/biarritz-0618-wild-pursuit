const Theme = require('./theme.model.js');
const themes = [
  { name: 'Culture Générale' },
  { name: 'Littérature' },
  { name: 'Cinéma' },
  { name: 'Musique' },
  { name: 'Théatre' },
  { name: 'Télévision' },
  { name: 'Jeux Vidéos' },
  { name: 'Jeux de Société' },
  { name: 'Science & Nature' },
  { name: 'Informatique' },
  { name: 'Nouvelle Technologies' },
  { name: 'Mathématiques' },
  { name: 'Mythologie' },
  { name: 'Sport' },
  { name: 'Géographie' },
  { name: 'Histoire' },
  { name: 'Politique' },
  { name: 'Art' },
  { name: 'People' },
  { name: 'Animaux' },
];
function fillDBThemes() {
  themes.forEach((theme) => {
    Theme.create(theme);
  });
}
module.exports = fillDBThemes;
