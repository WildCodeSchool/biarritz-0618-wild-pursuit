joueurCourant = selectionnerJoueurRandom(tabJoueurs)
FinDePartie = False
Tant que (FinDePartie == False) {
    leResultatDuTour = tour(joueurCourant)
    Si (leResultatDuTour == true) {
        Si (joueurCourant.case == "camembert"){
            joueurCourant.nbCamemberts++
        } Sinon Si (joueurCourant.case == "centre" && joueurCourant.nbCamemberts == nbCatégories) {
            FinDePartie = True
        }
        joueurCourant = joueurCourant
    } Sinon {
        joueurCourant = tabJoueurs[joueurCourant.index + 1]
    }
}
