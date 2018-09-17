<h1>Les comptes à rebours</h1>

<h2>Sommaire :</h2>

<ol>
<li>countDown.actions</li>
<li>countDown.helpers</li>
<li>countDown</li>
<li>countDown.reducer</li>
<li>displayTime</li>
</ol>

<h2>1 - countDown.actions :</h2>

Fonction qui permet la fermeture de la popup à la fin du compte à rebours et le réinitialise en cas de réouverture de la popup.

<h2>2 - countDown.helpers</h2>

Fonction qui permet le calcul du compte à rebours en minute et secondes.

exemple :

<pre>
<code>
countDown(15)
//Sera un décompte de 15 secondes

countDown(90)
//Sera un décompte de 1 minute et 30 secondes
</code>
</pre>

<h2>3 - countDown</h2>

Composant contenant <code>DisplayTime</code> ainsi que la fonction <code>decomposeToMinutesAndSecs</code> de countDown.helper.
Ce composant fait appel à Redux de Réact.

L'initialisation du compe a rebours s'effectue grâce à la fonction <code>startTimer()</code>, puis les secondes sont décomposées et enfin, lorsque le compte à rebours arrive à 0, redux est utilisé afin de lui indiqué l'action à effectuer.

Le render permettant au coposant d'afficher le compte à rebours avec le paramètre de temps personnalisable.

<h2>4 - countDown.reducer</h2>

Détermine l'état du composant lors de l'appel à l'action redux.

<h2>5 - displayTime</h2>

Permet l'affichage compréhensible du compte à rebours en minutes et secondes
