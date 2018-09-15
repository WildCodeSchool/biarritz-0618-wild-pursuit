<h1>La popup question</h1>

Affiche la question au joueur et lui permet d'y répondre.

<code>answerQuestion()</code> permet de vérifier l'exactitude de la réponse sélectionnée.

Fait appel à redux pour afficher, ou non, la popup <code>cheeseWin</code> si la réponse à la question est correcte et si cette même question offrait le gain d'une part de camembert. Sinon cet appel ferme la popup et renvoie le joueur sur le plateau.

La fonction <code>getColor()</code> permet la colorisation du button sur lequel clique le joueur en fonction de l'exactitude ou pas de la réponse choisie.

le <code>render()</code> affiche un compte à rebours grâce au composant <code>countDown</code> qui passe le nombre de secondes souhaité en paramètre et la liste des réponses possibles grâce au composant <code>List</code>.
