protocolTour () {
    lancerTourTime(60 secondes, terminerTour())
    resultat = lancerDes(6)
    position = getPosition(joueur)
    afficherCasesPossible(position, resultat)
    position = deplacerJouer(choixUtilisateur())

    theme = getTheme(position)
    question = pickQuestion(theme)
    lancerQuestionTime(15 secondes, terminerTour())
    return resolveQuestion()
    
}
