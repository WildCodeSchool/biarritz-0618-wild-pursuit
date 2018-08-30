Décompte = 60
Décompte = lancerDecompte(Décompte)
resultat = lancerDes(6)
position = recupérerIdCase(joueur)
plateau.afficherCasesPossible(position, resultat)
position = deplacerJoueur(choixUtilisateur())
theme = récupérerTheme(position)
question = choisirQuestion(theme)
afficherQuestion(question)
Si (Décompte > 15)
{
    Décompte = 15
}

Réponse = ReponseUtilisateur(ReponseUtilisateur)

Si (Décompte == 0) {
    Réponse = False
}
Retourner Réponse

####

//Fonction lancerDecompte(nbrSecondes) // Tous les 1 secondes, on décrémente nbrSecondes
//Fonction lancerDes(nbFace) // Retourne un entier aléatoire entre 1 et nbFaces
//Méthode joueur.recupérerIdCase() // Retourne l'id de la case sur lequel se trouve le joueur
//Méthode plateau.afficherCasesPossible(position, resultat) // Retourne un tableau de case possibles à distance de la position actuelle
//Méthode joueur.deplacerJoueur(position) // déplacer le joueur a une position donnée, renvoie la nouvelle position
//Méthode case.recupérerThème() // rénvoie le thème de case passé en paramètre
//Fonction choisirQuestion(theme) // choisi un question dans le thème et la passe a "utilisé"
//Fonction afficherQuestion(question) // renvoie la question formatée
//Fonction ReponseUtilisateur(réponse) // test si la réponse est bonne (renvoie tru si c'est le cas, false sinon)
// LES METHODES SONT A TESTER AVEC LA CLASSE A LAQUELLE ELLES APPARTIENNENT
