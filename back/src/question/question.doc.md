# CRUD Questions

## Create a question

- POST /questions JSON ({ theme: String, question: String, responses: Array<String> }) -> **201** Carte { id: UUID, theme: String, question: String, reponse: String, responses: Array<String> }

- 400 : Si il manque un champ ou erreur de formulaire

## Read all questions

- GET /questions -> **200** read all the cartes {index: { theme: String, question: String, reponse: String, responses: Array<String> },index: {...}}

- 400 : Si il manque un champ ou erreur de formulaire

## Read one question
- GET /questions/{id} -> **200** Carte { theme: String, question: String, reponse: String, responses: Array<String> }

- 400 : Si il manque un champ ou erreur de formulaire

## Update a question

- PUT /questions/{id} -> **200**  Updated carte { theme: String, question: String, reponse: String, responses: Array<String> }

- 404 : Si il manque un champ ou erreur de formulaire

## Delete a question

- DELETE /questions/{id} -> **200** null
- 400 : Si il manque un champ ou erreur de formulaire

