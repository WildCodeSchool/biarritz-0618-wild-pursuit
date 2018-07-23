# CRUD Questions

## Create a question

- POST /questions JSON ({ theme: String, question: String, responses: Array<String> }) -> **201** Carte { id: UUID, theme: String, question: String, responses: Array<String> }

400 : Si il manque un champ ou erreur de formulaire

---

GET /questions -> liste des questions

GET / questions/{id} -> question/id

PUT /Q/{id} -> update question

DEL /Q/{id} -> supprime question. (avec return de validation)
