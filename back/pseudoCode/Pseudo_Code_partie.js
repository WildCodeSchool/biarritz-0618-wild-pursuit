    serveur return listGames;
    serveur return "creer partie";

    if (client onClick listGames[i] && nbrClients = nbrClientsMax) {
        countDown(timeMax);
        serveur return plateau;
        serveur place pions sur caseMiddle;
        serveur chooseFirst();

        while (clientAdmin === connecté || finDuJeu === false) {
            serveur round();


            if (client resolvedQuestion(true)) {
                if (caseCamembert) {
                    client.camembert++;
                }
                else if (client.camembert === 6 && caseCenter) {
                    serveur endGame();
                }
            }else {
                serveur changeClient();
            }
        }
    }
    else if (client onClick "créer partie") {
    serveur return ecranChoix;
    client chooseNbrClientsMax();
    client chooseTimeMax();
    client createGame();

    if(nbrClients = nbrClientsMax || nbrClients >= 2){
        client can playGame();
    }

    countDown(timeMax);
    serveur return plateau;
    serveur place pions sur caseMiddle;
    serveur chooseFirst();

    while (clientAdmin === connecté || finDuJeu === false) {
        serveur round();


        if (client resolvedQuestion(true)) {
            if (caseCamembert) {
                client.camembert++;
            }
            else if (client.camembert === 6 && caseCenter) {
                serveur endGame();
            }
        }else {
            serveur changeClient();
        }
    }
}

