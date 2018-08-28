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
        joueurCourant = selectionnerNouveauJoueur(joueurCourant, tabJoueur)
    }
}

####

fonction selectionnerJoueurRandom(tabJoueur)
fonction selectionnerNouveauJoueur(joueurCourant, tabJoueur)
Fonction tour(joueurCourant) => voir ./Tours.js
